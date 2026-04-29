import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import { Sparkles, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const galleryImages = [
  "/Resortphoto/hero_suites.webp",
  "/Resortphoto/garden_view.webp",
  "/Resortphoto/suite_diamond.webp",
  "/Resortphoto/dining_main.webp",
  "/Resortphoto/hero_home.webp",
  "/Resortphoto/exp_cultural.webp",
  "/Resortphoto/heritage_arch.webp",
  "/Resortphoto/gallery_1.webp",
  "/Resortphoto/gallery_2.webp",
  "/Resortphoto/gallery_3.webp",
  "/Resortphoto/gallery_4.webp",
  "/Resortphoto/gallery_5.webp",
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SEO 
        title="Gallery | Diamond Resort & Spa"
        description="Explore the breathtaking beauty of Diamond Resort & Spa through our visual gallery."
        keywords="resort gallery, luxury resort photos, Diamond Resort images"
      />
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <ScrollReveal className="text-center mb-16">
          <Sparkles className="w-10 h-10 text-accent mb-6 mx-auto" />
          <h1 className="font-display font-medium text-4xl lg:text-6xl text-foreground tracking-tight mb-6">Visual Journey</h1>
          <p className="font-body text-lg text-foreground/80 max-w-2xl mx-auto">
            A glimpse into the extraordinary moments and serene spaces that await you.
          </p>
        </ScrollReveal>

        {/* Infinite Scrolling Marquees */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 py-12 flex flex-col gap-8 lg:gap-12">
          {/* Row 1: Left Scroll */}
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused] gap-4 lg:gap-8 px-4 lg:px-8">
              {[...galleryImages, ...galleryImages].map((src, index) => (
                <div key={`row1-${index}`} className="relative flex-none w-[280px] md:w-[350px] lg:w-[450px] aspect-[3/2] overflow-hidden rounded-[2rem] shadow-xl border border-primary/10">
                  <img 
                    src={src} 
                    alt={`Resort view ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s] ease-luxury opacity-95 hover:opacity-100" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-accent/0 hover:bg-accent/10 transition-colors duration-700 ease-luxury mix-blend-overlay pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Scroll */}
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-scroll-right group-hover:[animation-play-state:paused] gap-4 lg:gap-8 px-4 lg:px-8">
              {[...galleryImages].reverse().concat([...galleryImages].reverse()).map((src, index) => (
                <div key={`row2-${index}`} className="relative flex-none w-[280px] md:w-[350px] lg:w-[450px] aspect-[3/2] overflow-hidden rounded-[2rem] shadow-xl border border-primary/10">
                  <img 
                    src={src} 
                    alt={`Resort view ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s] ease-luxury opacity-95 hover:opacity-100" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-accent/0 hover:bg-accent/10 transition-colors duration-700 ease-luxury mix-blend-overlay pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Testimonials />
        </div>

        {/* CTA Section */}
        <section className="pt-24 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-foreground tracking-tight mb-8">See it for yourself.</h2>
            <a
              href="tel:+918092719700"
              className="btn-shimmer inline-flex items-center gap-3 bg-primary text-primary-foreground font-label font-semibold text-xs tracking-[0.2em] px-10 py-5 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(10,59,44,0.2)] active:scale-95 transition-all duration-500 ease-luxury"
            >
              <span className="relative z-10">CALL TO BOOK YOUR STAY</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </a>
            <div className="mt-8">
              <Link to="/suites" className="inline-flex items-center gap-4 font-label font-bold text-[10px] tracking-[0.3em] uppercase text-accent hover:text-foreground transition-colors border-b border-accent/50 pb-2 w-max mx-auto">
                Explore Our Suites
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
