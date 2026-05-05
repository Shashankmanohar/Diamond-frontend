// Blog Detail Page - Modern Tech-Luxury Redesign (Webflora Inspired)
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { API_ENDPOINTS } from "@/config";
import { 
  Diamond, ArrowLeft, Calendar as CalendarIcon, 
  User, Tag, Share2, Clock, 
  ChevronLeft, ChevronRight, MessageSquare,
  Bookmark, ArrowRight, BookmarkCheck,
  Send, Bell
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  featuredImage: string;
  createdAt: string;
  status: 'draft' | 'published';
  seo?: {
    title: string;
    description: string;
    keywords: string;
  };
}

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINTS.BLOGS}/slug/${slug}`);
      const data = await response.json();
      if (response.ok) {
        setBlog(data);
        fetchRelated(data.category, data._id);
      } else {
        toast.error("Article not found");
        navigate("/blog");
      }
    } catch (err) {
      console.error("Failed to fetch blog:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelated = async (category: string, currentId: string) => {
    try {
      const response = await fetch(API_ENDPOINTS.BLOGS);
      const data = await response.json();
      if (response.ok) {
        const filtered = data
          .filter((b: Blog) => b.category === category && b._id !== currentId)
          .slice(0, 3);
        setRelatedBlogs(filtered);
      }
    } catch (err) {
      console.error("Failed to fetch related blogs:", err);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  if (loading) {
    return (
      <div className="bg-burgundy min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="w-16 h-16 border border-gold/20 border-t-gold rounded-full animate-spin" />
        <span className="font-label text-[10px] tracking-[0.6em] uppercase text-gold animate-pulse">Consulting the Archives...</span>
      </div>
    );
  }

  if (!blog) return null;

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

  return (
    <div className="bg-burgundy min-h-screen text-cream font-body selection:bg-gold selection:text-burgundy">
      <SEO 
        title={blog.seo?.title || blog.title}
        description={blog.seo?.description || stripHtml(blog.content).substring(0, 160)}
        keywords={blog.seo?.keywords}
        image={blog.featuredImage}
      />
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-32 pb-12 overflow-hidden border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-3 text-gold/60 font-label text-[10px] tracking-[0.3em] uppercase mb-8 hover:text-gold transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Journal
            </Link>
            
            <div className="max-w-5xl mx-auto w-full rounded-[2.5rem] overflow-hidden shadow-4xl mb-12 border border-gold/10">
              <img 
                src={blog.featuredImage} 
                alt={blog.title} 
                className="w-full h-auto max-h-[80vh] object-cover block" 
              />
            </div>

            <div className="max-w-4xl">
               <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-gold text-burgundy font-label text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full border-none">
                  {blog.category}
                </Badge>
                <span className="font-label text-[10px] tracking-[0.2em] text-gold/40 uppercase">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-8">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="container mx-auto px-6 py-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Article Section */}
          <div className="lg:w-[65%]">
            <ScrollReveal>
              <article 
                className="prose prose-invert prose-2xl max-w-none font-body text-white/90 leading-[1.8] tracking-wide
                first-letter:text-8xl first-letter:font-display first-letter:float-left first-letter:mr-6 first-letter:mt-2 first-letter:text-gold
                prose-headings:font-display prose-headings:text-cream prose-headings:tracking-tighter prose-headings:uppercase prose-headings:mb-12
                prose-p:mb-10 prose-strong:text-gold prose-strong:font-bold prose-em:text-gold/80 prose-li:mb-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {/* Tags */}
              <div className="mt-24 pt-12 border-t border-gold/10">
                <div className="flex items-center gap-6 flex-wrap">
                  <Tag className="w-4 h-4 text-gold/40" />
                  {blog.tags.map(tag => (
                    <Badge key={tag} className="bg-transparent border border-gold/10 text-gold/60 font-label text-[9px] tracking-[0.2em] uppercase px-4 py-1.5 hover:bg-gold hover:text-burgundy transition-all duration-700 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Section (Webflora Inspired) */}
          <aside className="lg:w-[35%] space-y-12">
            <div className="sticky top-32 space-y-8">
              
              {/* Save for Later Button */}
              <button className="w-full bg-white text-burgundy flex items-center justify-center gap-4 py-6 rounded-full font-label text-xs tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500 shadow-xl group">
                <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Save for later
              </button>

              {/* Discussion Button */}
              <div className="flex gap-4">
                <button className="flex-1 bg-white/5 border border-white/10 text-white flex items-center justify-center gap-4 py-6 rounded-full font-label text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all duration-500">
                  <MessageSquare className="w-5 h-5" />
                  Discussion
                </button>
                <button 
                  onClick={handleShare}
                  className="w-20 bg-white/5 border border-white/10 text-white flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-500"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Elevate Your Knowledge Card */}
              <div className="bg-[#0D0707] rounded-[3rem] p-10 border border-gold/5 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-[60px]" />
                
                <h3 className="font-display text-4xl text-cream mb-4 tracking-tighter uppercase leading-none">
                  Elevate your <br /> <span className="text-gold">Experience.</span>
                </h3>
                <p className="text-cream/40 text-sm font-body leading-relaxed mb-10">
                  Join the weekly briefing for heritage seekers and luxury travelers.
                </p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 px-6 text-cream placeholder:text-cream/10 focus:outline-none focus:border-gold transition-colors font-body text-sm"
                    />
                  </div>
                  <button className="w-full bg-gold text-burgundy py-5 rounded-2xl font-label text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-cream transition-all duration-700 shadow-lg btn-shimmer">
                    Subscribe
                  </button>
                </form>

                <div className="mt-8 flex items-center gap-4 text-[9px] font-label tracking-widest text-gold/30 uppercase">
                  <Bell className="w-4 h-4" />
                  <span>Exclusive heritage updates</span>
                </div>
              </div>

              {/* Author Widget */}
              <div className="bg-gold/5 rounded-[3rem] p-10 border border-gold/10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center overflow-hidden">
                    <User className="w-8 h-8 text-gold/40" />
                  </div>
                  <div>
                    <span className="font-label text-[9px] tracking-widest text-gold/40 uppercase block mb-1">Author</span>
                    <h4 className="font-display text-2xl text-cream">{blog.author}</h4>
                  </div>
                </div>
                <p className="text-cream/50 text-sm font-body leading-relaxed">
                  Dedicated to documenting the intersection of modern indulgence and timeless heritage at Diamond Resort.
                </p>
              </div>

            </div>
          </aside>
        </div>
      </main>

      {/* Recommended Reading */}
      {relatedBlogs.length > 0 && (
        <section className="py-40 bg-black/10 border-t border-gold/5">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <div className="space-y-4">
                  <span className="font-label text-[10px] tracking-[0.5em] uppercase text-gold/40">Keep Reading</span>
                  <h2 className="font-display text-5xl lg:text-7xl tracking-tighter uppercase">More <em className="text-gold font-light italic">Narratives.</em></h2>
                </div>
                <Link to="/blog" className="font-label text-[10px] tracking-widest uppercase text-gold border-b border-gold/30 pb-1 hover:text-cream hover:border-cream transition-all duration-500">
                  View All Journal Posts
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {relatedBlogs.map((rPost, idx) => (
                  <ScrollReveal key={rPost._id} delay={idx * 150}>
                    <Link to={`/blog/${rPost.slug}`} className="group block space-y-8">
                      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-gold/5">
                        <img src={rPost.featuredImage} alt={rPost.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-all duration-1000" />
                      </div>
                      <div className="space-y-4">
                        <span className="font-label text-[9px] tracking-[0.4em] uppercase text-gold/40">{rPost.category}</span>
                        <h4 className="font-display text-3xl leading-tight group-hover:text-gold transition-all duration-500 uppercase tracking-tighter">{rPost.title}</h4>
                        <div className="flex items-center gap-3 text-gold font-label text-[9px] tracking-widest uppercase group-hover:gap-5 transition-all duration-500">
                          Enter Story <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;
