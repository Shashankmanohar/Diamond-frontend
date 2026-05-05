// The Diamond Journal - Modern Dark Luxury Redesign (Burgundy & Gold)
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { API_ENDPOINTS } from "@/config";
import {
  ArrowRight, Search,
  ChevronRight,
  Share2, BookOpen,
  Diamond
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.BLOGS);
      const data = await response.json();
      if (response.ok) {
        setBlogs(data); 
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => {
    const cats = new Set(blogs.map(b => b.category));
    return ["All", ...Array.from(cats)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(b => {
      const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || b.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, activeCategory]);

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  return (
    <div className="bg-burgundy min-h-screen text-cream font-body selection:bg-gold selection:text-burgundy">
      <SEO
        title="The Diamond Journal | Luxury Redefined"
        description="Exclusive stories from the heart of Diamond Resort."
      />
      <Navbar />

      {/* Cinematic Cover Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden pt-20 bg-burgundy">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.15)_0%,transparent_70%)]" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <ScrollReveal type="mask">
              <div className="flex items-center gap-4 mb-8">
                <Diamond className="w-5 h-5 text-gold animate-spin-slow" />
                <span className="font-label text-[10px] tracking-[0.8em] uppercase text-gold">Est. 2026</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] tracking-tighter leading-[0.8] mb-12">
                The <br />
                <span className="italic font-light text-gold">Journal.</span>
              </h1>
            </ScrollReveal>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center pt-12 border-t border-gold/20">
              <ScrollReveal delay={400}>
                <p className="font-body text-cream/60 max-w-sm text-lg italic">
                  Curated narratives of heritage, taste, and the sublime.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={600}>
                <div className="relative w-full md:w-80 group">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Archive..."
                    className="w-full bg-transparent border-b border-gold/30 py-4 px-2 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold transition-all duration-1000"
                  />
                  <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Category Navigation */}
      <nav className="bg-black/20 backdrop-blur-3xl sticky top-20 z-40 border-y border-gold/10">
        <div className="container mx-auto px-6 py-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center gap-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-[10px] tracking-[0.4em] uppercase transition-all duration-700 relative group py-2 ${
                  activeCategory === cat ? "text-gold" : "text-cream/30 hover:text-cream"
                }`}
              >
                {cat}
                <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-700 origin-right ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:origin-left'}`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-32">
        {loading ? (
          <div className="py-40 flex justify-center">
            <div className="w-12 h-12 border-t-2 border-gold rounded-full animate-spin" />
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-40 bg-black/10 rounded-[4rem]">
            <h2 className="font-display text-4xl mb-6">No stories found.</h2>
            <button onClick={() => {setSearchTerm(""); setActiveCategory("All")}} className="text-gold border-b border-gold/40 pb-1">Reset Archive</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
            {filteredBlogs.map((post, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={post._id} delay={index * 150} type={isEven ? "up" : "scale"}>
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <div className="relative mb-10 overflow-hidden rounded-[2rem] bg-black/20 aspect-[4/5] shadow-2xl">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors duration-1000" />
                      <div className="absolute bottom-8 left-8">
                        <Badge className="bg-gold text-burgundy font-label text-[8px] tracking-widest uppercase px-4 py-1.5 border-none shadow-lg">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-[9px] font-label tracking-[0.4em] text-gold/40 uppercase">
                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <div className="h-[1px] w-8 bg-gold/10" />
                        <span className="text-cream/40">Read story</span>
                      </div>
                      
                      <h3 className="font-display text-4xl text-cream leading-tight group-hover:text-gold transition-colors duration-500">
                        {post.title}
                      </h3>
                      
                      <p className="font-body text-cream/70 text-sm leading-relaxed line-clamp-2 italic font-light">
                        {stripHtml(post.content).substring(0, 120)}...
                      </p>
                      
                      <div className="pt-2 flex items-center gap-3 text-gold font-label text-[9px] tracking-[0.4em] uppercase font-bold group-hover:gap-6 transition-all duration-500">
                        Explore <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </main>

      {/* Gold & Burgundy Newsletter */}
      <section className="bg-black/20 border-t border-gold/10 py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-16">
            <ScrollReveal type="mask">
              <h2 className="font-display text-6xl md:text-8xl leading-none">
                Subscribe to <br />
                <em className="text-gold font-light italic">The Inner Circle.</em>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="font-body text-cream/60 text-xl max-w-2xl mx-auto italic font-light">
                Receive curated updates, seasonal secrets, and exclusive invitations directly to your inbox.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <form className="max-w-lg mx-auto flex flex-col items-center gap-12" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Exquisite Email Address"
                  className="w-full bg-transparent border-b border-gold/20 py-6 text-center text-xl text-cream placeholder:text-cream/10 focus:outline-none focus:border-gold transition-all duration-1000"
                />
                <button className="bg-gold text-burgundy font-label text-[10px] tracking-[0.5em] uppercase px-16 py-6 hover:bg-cream transition-all duration-700 font-bold btn-shimmer">
                  JOIN THE LEGACY
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
