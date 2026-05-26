import { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_ENDPOINTS } from "@/config";
import SEO from "@/components/SEO";
import {
  Diamond, LogOut, Search, Plus, Trash2, Edit,
  ArrowLeft, Save, Globe, Image as ImageIcon,
  Layout, Tag, User, Calendar as CalendarIcon,
  ChevronDown, XCircle, FileText, Settings
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  featuredImage: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    extraHead: string;
  };
  status: 'draft' | 'published';
  createdAt: string;
}

const AdminBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editorMode, setEditorMode] = useState<'visual' | 'source'>('source');
  const [searchTerm, setSearchTerm] = useState("");
  const [currentBlog, setCurrentBlog] = useState<Partial<Blog>>({
    title: "",
    slug: "",
    category: "General",
    author: "",
    tags: [],
    content: "",
    featuredImage: "",
    seo: {
      title: "",
      description: "",
      keywords: "",
      extraHead: ""
    },
    status: 'draft'
  });

  useEffect(() => {
    checkAuth();
    fetchBlogs();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin");
      return;
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.BLOGS);
      const data = await response.json();
      if (response.ok) setBlogs(data);
    } catch (err) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const compressImage = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          // Max dimension 2560px for ultra high-res (2K)
          const MAX_WIDTH = 2560;
          const MAX_HEIGHT = 1440;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
              else reject(new Error("Compression failed"));
            },
            "image/jpeg",
            0.92 // 92% quality for ultra-sharp luxury feel
          );
        };
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = async (file: File) => {
    const loadingToast = toast.loading("Optimizing and uploading image...");
    
    try {
      // Step 1: Compress on client side
      const compressedBlob = await compressImage(file);
      
      const formData = new FormData();
      formData.append("image", compressedBlob, "optimized-blog-image.jpg");

      const response = await fetch(`${API_ENDPOINTS.UPLOAD}/image`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: formData,
        method: "POST"
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON Response:", text);
        throw new Error("Server returned a non-JSON response. The image might be too large or the server might have crashed.");
      }

      if (response.ok) {
        setCurrentBlog({ ...currentBlog, featuredImage: data.url });
        toast.success("Image uploaded successfully", { id: loadingToast });
      } else {
        toast.error(data.message || "Upload failed", { id: loadingToast });
      }
    } catch (err: any) {
      console.error("Upload error details:", err);
      toast.error(`Upload failed: ${err.message || "Check your network connection"}`, { id: loadingToast });
    }
  };

  const handleSave = async (statusOverride?: 'draft' | 'published') => {
    const finalStatus = statusOverride || currentBlog.status;
    
    if (!currentBlog.title || !currentBlog.slug || !currentBlog.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const token = localStorage.getItem("admin_token");
      const url = currentBlog._id
        ? `${API_ENDPOINTS.BLOGS}/${currentBlog._id}`
        : API_ENDPOINTS.BLOGS;
      const method = currentBlog._id ? "PUT" : "POST";

      const blogData = { ...currentBlog, status: finalStatus };
      if (method === "POST") delete blogData._id;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        toast.success(finalStatus === 'published' ? "Blog published successfully" : "Blog saved as draft");
        setIsEditing(false);
        fetchBlogs();
      } else {
        const error = await response.json();
        toast.error(error.message || "Save failed");
      }
    } catch (err) {
      toast.error("An error occurred");
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch(`${API_ENDPOINTS.BLOGS}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        toast.success("Blog deleted");
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      }
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  const startNewBlog = () => {
    setCurrentBlog({
      title: "",
      slug: "",
      category: "General",
      author: "",
      tags: [],
      content: "",
      featuredImage: "",
      seo: {
        title: "",
        description: "",
        keywords: "",
        extraHead: ""
      },
      status: 'draft'
    });
    setIsEditing(true);
  };

  const editBlog = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-primary text-primary-foreground font-body">
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-primary-foreground/10 px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors text-ring"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-display font-medium text-primary-foreground">
                {currentBlog._id ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
              <p className="text-[10px] text-primary-foreground/50 font-label tracking-wider uppercase">
                Design and publish your latest thoughts.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-primary-foreground/10 hover:bg-primary-foreground/5 text-xs font-label uppercase tracking-widest px-6 text-primary-foreground"
              onClick={() => handleSave('draft')}
            >
              Save to Draft
            </Button>
            <Button
              className="bg-ring text-primary hover:bg-ring/90 text-xs font-label uppercase tracking-widest px-6"
              onClick={() => handleSave('published')}
            >
              Publish Now
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30 font-bold uppercase">Post Title</label>
                <Input
                  value={currentBlog.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    const newSlug = newTitle.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                    setCurrentBlog({ ...currentBlog, title: newTitle, slug: newSlug });
                  }}
                  placeholder="Enter title here..."
                  className="bg-primary/40 border-primary-foreground/5 text-primary-foreground text-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30 font-bold uppercase">Permalink</label>
                <div className="flex items-center gap-3 bg-primary/20 border border-primary-foreground/5 rounded-xl px-4 py-3 group focus-within:border-gold transition-all">
                  <Globe className="w-4 h-4 text-primary-foreground/20" />
                  <span className="text-[10px] font-label text-primary-foreground/30 select-none">diamondresort.in/blogs/</span>
                  <input
                    value={currentBlog.slug}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, slug: e.target.value })}
                    className="flex-1 bg-transparent border-none text-primary-foreground font-body text-sm focus:outline-none placeholder:text-primary-foreground/10"
                    placeholder="post-slug"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-primary-foreground/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layout className="w-4 h-4 text-primary-foreground/40" />
                  <span className="text-[10px] font-label uppercase tracking-[0.2em] text-primary-foreground/40 font-bold">Description</span>
                </div>
                <div className="flex items-center bg-primary rounded-lg p-1">
                  <button
                    onClick={() => setEditorMode('visual')}
                    className={`px-4 py-1 text-[10px] font-label uppercase rounded-md transition-all ${editorMode === 'visual' ? 'bg-primary-foreground text-primary' : 'text-primary-foreground/50'}`}
                  >
                    Visual Editor
                  </button>
                  <button
                    onClick={() => setEditorMode('source')}
                    className={`px-4 py-1 text-[10px] font-label uppercase rounded-md transition-all ${editorMode === 'source' ? 'bg-primary-foreground text-primary' : 'text-primary-foreground/50'}`}
                  >
                    Source Code
                  </button>
                </div>
              </div>
              <div className="p-0">
                {editorMode === 'visual' ? (
                  <div className="p-6 min-h-[400px] text-primary-foreground/40 font-body text-sm bg-primary-foreground/5 italic">
                    Visual editor is coming soon. Please use Source Code mode to paste your HTML content.
                  </div>
                ) : (
                  <Textarea
                    value={currentBlog.content}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, content: e.target.value })}
                    placeholder="Write your blog content here or paste HTML..."
                    className="min-h-[400px] bg-transparent border-none focus-visible:ring-0 text-primary-foreground/80 p-6 font-mono text-sm resize-none"
                  />
                )}
              </div>
            </div>

            {/* SEO Section */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="w-4 h-4 text-primary-foreground/40" />
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-primary-foreground/40 font-bold">SEO Meta Details</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">SEO Title</label>
                  <Input
                    value={currentBlog.seo?.title}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, seo: { ...currentBlog.seo!, title: e.target.value } })}
                    className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">SEO Description</label>
                  <Textarea
                    value={currentBlog.seo?.description}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, seo: { ...currentBlog.seo!, description: e.target.value } })}
                    className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">SEO Keywords</label>
                    <Input
                      value={currentBlog.seo?.keywords}
                      onChange={(e) => setCurrentBlog({ ...currentBlog, seo: { ...currentBlog.seo!, keywords: e.target.value } })}
                      className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">Meta Extra Head</label>
                    <Input
                      value={currentBlog.seo?.extraHead}
                      onChange={(e) => setCurrentBlog({ ...currentBlog, seo: { ...currentBlog.seo!, extraHead: e.target.value } })}
                      className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Layout className="w-3 h-3 text-primary-foreground/40" />
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">Category</label>
                  </div>
                  <select
                    value={currentBlog.category}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, category: e.target.value })}
                    className="w-full bg-primary/40 border border-primary-foreground/5 rounded-md py-2 px-3 text-primary-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-gold appearance-none cursor-pointer"
                  >
                    <option value="General" className="bg-[#1a0b0b]">General</option>
                    <option value="Wedding" className="bg-[#1a0b0b]">Wedding</option>
                    <option value="Birthday" className="bg-[#1a0b0b]">Birthday</option>
                    <option value="Engagement" className="bg-[#1a0b0b]">Engagement</option>
                    <option value="Corporate" className="bg-[#1a0b0b]">Corporate</option>
                    <option value="Party" className="bg-[#1a0b0b]">Private Party</option>
                    <option value="Lifestyle" className="bg-[#1a0b0b]">Lifestyle</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-primary-foreground/40" />
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">Author Name</label>
                  </div>
                  <Input
                    value={currentBlog.author}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, author: e.target.value })}
                    placeholder="e.g., John Doe"
                    className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3 h-3 text-primary-foreground/40" />
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">Tags (comma separated)</label>
                  </div>
                  <Input
                    value={currentBlog.tags?.join(", ")}
                    onChange={(e) => setCurrentBlog({ ...currentBlog, tags: e.target.value.split(",").map(t => t.trim()) })}
                    placeholder="e.g., Resort, Travel"
                    className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-3 h-3 text-primary-foreground/40" />
                    <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30">Date Posted</label>
                  </div>
                  <Input
                    type="date"
                    value={new Date().toISOString().split('T')[0]}
                    className="bg-primary/40 border-primary-foreground/5 text-primary-foreground"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-3 h-3 text-primary-foreground/40" />
                <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30 font-bold uppercase">Featured Image</label>
              </div>

              <div
                className="aspect-video bg-primary/40 border border-dashed border-primary-foreground/10 rounded-xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-primary/60 transition-colors overflow-hidden relative"
                onClick={() => document.getElementById('featured-image-upload')?.click()}
              >
                {currentBlog.featuredImage ? (
                  <img src={currentBlog.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="p-3 bg-primary-foreground/5 rounded-full group-hover:scale-110 transition-transform">
                      <Plus className="w-5 h-5 text-primary-foreground/40" />
                    </div>
                    <span className="text-[10px] font-label text-primary-foreground/30">Upload high-res image</span>
                  </>
                )}
                <input
                  id="featured-image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                />
              </div>

              <div className="relative flex items-center gap-2">
                <div className="h-[1px] flex-1 bg-primary-foreground/10"></div>
                <span className="text-[10px] font-label text-primary-foreground/20 uppercase">OR</span>
                <div className="h-[1px] flex-1 bg-primary-foreground/10"></div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-label uppercase tracking-widest text-primary-foreground/30 flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Image URL
                </label>
                <Input
                  value={currentBlog.featuredImage}
                  onChange={(e) => setCurrentBlog({ ...currentBlog, featuredImage: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="bg-primary/40 border-primary-foreground/5 text-xs text-primary-foreground"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <SEO
        title="Manage Blogs | Diamond Resort & Spa"
        description="Admin panel for managing resort blogs."
        noindex={true}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-primary-foreground/10 px-4 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Diamond className="w-6 h-6 text-ring" />
          <span className="font-label font-medium text-xs tracking-[0.2em] text-ring uppercase">Blog Management</span>
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/admin/dashboard")} className="text-primary-foreground/60 hover:text-ring transition-colors duration-300 font-label text-xs tracking-wider uppercase">
            Dashboard
          </button>
          <button onClick={() => {
            localStorage.removeItem("admin_token");
            navigate("/admin");
          }} className="flex items-center gap-2 text-primary-foreground/60 hover:text-ring transition-colors duration-300 font-label text-xs tracking-wider uppercase">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display text-primary-foreground mb-1">Blogs</h1>
            <p className="text-primary-foreground/50 text-sm font-body">Manage your website's articles and news.</p>
          </div>
          <Button
            onClick={startNewBlog}
            className="bg-ring text-primary hover:bg-ring/90 font-label text-xs tracking-widest px-6 h-12"
          >
            <Plus className="w-4 h-4 mr-2" /> CREATE NEW POST
          </Button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blogs by title or category..."
              className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl pl-11 pr-4 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-ring transition-colors"
            />
          </div>
        </div>

        {/* List View */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-ring border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-primary-foreground/40 font-body border border-dashed border-primary-foreground/10 rounded-3xl">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No blog posts found.</p>
            <Button variant="link" onClick={startNewBlog} className="text-ring mt-2">Create your first post</Button>
          </div>
        ) : (
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl overflow-x-auto">
            <Table>
              <TableHeader className="bg-primary-foreground/5">
                <TableRow className="border-primary-foreground/10 hover:bg-transparent">
                  <TableHead className="font-label text-[10px] uppercase tracking-widest text-primary-foreground/40 px-6 py-4">Article</TableHead>
                  <TableHead className="font-label text-[10px] uppercase tracking-widest text-primary-foreground/40">Category</TableHead>
                  <TableHead className="font-label text-[10px] uppercase tracking-widest text-primary-foreground/40">Status</TableHead>
                  <TableHead className="font-label text-[10px] uppercase tracking-widest text-primary-foreground/40">Date</TableHead>
                  <TableHead className="text-right px-6 font-label text-[10px] uppercase tracking-widest text-primary-foreground/40">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBlogs.map((blog) => (
                  <TableRow key={blog._id} className="border-primary-foreground/5 hover:bg-primary-foreground/5 transition-colors">
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/40 overflow-hidden border border-primary-foreground/10 flex-shrink-0">
                          {blog.featuredImage && <img src={blog.featuredImage} alt="" className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <div className="font-body text-sm font-medium text-primary-foreground">{blog.title}</div>
                          <div className="text-[10px] text-primary-foreground/40 font-mono mt-0.5">/{blog.slug}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[10px] font-label uppercase tracking-wider border-ring/30 text-ring px-2.5 py-0.5">
                        {blog.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`text-[10px] font-label uppercase tracking-widest ${blog.status === 'published' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {blog.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-primary-foreground/40 font-body text-xs">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right px-6">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-primary-foreground/40 hover:text-primary-foreground"
                          onClick={() => editBlog(blog)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-primary-foreground/20 hover:text-destructive"
                          onClick={() => deleteBlog(blog._id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogs;
