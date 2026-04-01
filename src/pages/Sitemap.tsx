import { Link } from "react-router-dom";
import { Diamond } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const pages = [
  { path: "/", label: "Home", description: "Welcome to Bihar's finest ultra-luxury sanctuary" },
  { path: "/suites", label: "Suites", description: "48 bespoke suites crafted for uncompromising elegance" },
  { path: "/dining", label: "Catering", description: "Award-winning culinary experiences and event catering" },
  { path: "/experiences", label: "Experiences", description: "Curated wellness, spa, and cultural journeys" },
  { path: "/reserve", label: "Reserve", description: "Book your stay or plan your event" },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Sitemap | Diamond Resort & Spa"
        description="Navigate through Diamond Resort & Spa's luxury offerings. Find links to our suites, dining, experiences, and reservation pages."
        keywords="Diamond Resort sitemap, luxury hotel pages, Patna resort navigation"
      />
      <Navbar />
      <main className="pt-32 pb-20 px-6 lg:px-12 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Diamond className="w-8 h-8 text-accent mx-auto mb-4" />
            <span className="font-label text-xs tracking-[0.3em] text-accent uppercase block mb-3">Navigation</span>
            <h1 className="font-display text-4xl lg:text-5xl text-foreground">Sitemap</h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group block border border-border/20 rounded-2xl p-6 hover:bg-accent/5 transition-all duration-500 ease-luxury hover:-translate-y-1"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                      {page.label}
                    </h2>
                    <p className="font-body text-sm text-foreground/60 mt-1">{page.description}</p>
                  </div>
                  <span className="font-label text-xs text-foreground/30 shrink-0">{page.path}</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
