import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, ArrowRight, Crown, Wine, Clock, ShieldCheck, Sparkles, Utensils, Zap, MapPin, Users } from "lucide-react";
import SEO from "@/components/SEO";

const Suites = () => {
  return (
    <div className="bg-cream text-burgundy">
      <SEO
        title="Luxury Suites & Villas | Diamond Resort Bihar"
        description="Experience unparalleled luxury in our handcrafted suites and private villas. Each residence at Diamond Resort & Spa is a masterpiece of design and comfort."
        keywords="luxury suites, private villas, Bihar luxury accommodation, Diamond Resort suites, honeymoon suites Bihar"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/Resortphoto/hero_suites.webp"
            alt="Luxury Suite Interior"
            className="w-full h-full object-cover scale-110 opacity-0"
            style={{ animation: "imageZoom 15s 1s var(--ease-luxury) infinite alternate, contentReveal 2s 1s forwards" }}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/70 via-burgundy/30 to-burgundy" />
        </div>

        <div className="relative z-10 text-center px-6 mt-12">
          <div className="overflow-hidden mb-4">
            <span
              className="block font-medium text-xs tracking-[0.5em] text-gold-light uppercase opacity-0"
              style={{ animation: "contentReveal 1.8s 1.5s forwards" }}
            >
              Private Sanctuaries
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-cream tracking-tight leading-[1.1] mb-8">
            <span className="block overflow-hidden">
              <span className="block opacity-0" style={{ animation: "contentReveal 1.8s 1.8s forwards" }}>Bespoke Living</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block italic shimmer-gold opacity-0" style={{ animation: "contentReveal 1.8s 2s forwards" }}>Redefined</span>
            </span>
          </h1>
        </div>
      </header>

      {/* Philosophy */}
      <section className="py-32 lg:py-48 px-6 flex flex-col items-center text-center bg-cream">
        <div className="max-w-4xl">
          <ScrollReveal>
            <Star className="w-10 h-10 text-gold mb-12 mx-auto" strokeWidth={1.5} />
            <h2 className="font-display italic text-3xl lg:text-5xl text-burgundy leading-tight mb-12 tracking-tight">
              "We do not offer rooms; we offer portals to a world where time breathes at your rhythm."
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-[1px] w-24 bg-gold mx-auto mb-12" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-xl text-burgundy/70 leading-relaxed max-w-2xl mx-auto">
              Hand-curated textures, ambient acoustic engineering, and views that mirror the soul of the Gangetic horizon. Every residence is an ode to silent luxury.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Diamond Suite Feature */}
      <section id="rooms" className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal type="mask" className="lg:col-span-7 relative group">
            <div className="aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src="/Resortphoto/suite_diamond.webp"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                alt="Diamond Suite" loading="lazy" decoding="async"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5">
            <div className="space-y-8">
              <span className="text-gold font-medium text-xs tracking-[0.4em] uppercase block">The Crown Jewel</span>
              <h3 className="font-display text-4xl lg:text-6xl text-burgundy tracking-tight">Diamond Grand Suite</h3>
              <p className="text-burgundy/70 text-lg leading-relaxed">
                A masterwork of interior architecture, featuring a private saltwater infinity pool, a curated collection of local Bihar heritage artifacts, and a sprawling terrace that offers an unobstructed view of the mystic Gangetic sunrise.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-10 border-y border-burgundy/10">
                <div>
                  <span className="block text-xs tracking-[0.3em] uppercase text-gold mb-2">Living Space</span>
                  <span className="text-lg">3,200 SQ FT</span>
                </div>
                <div>
                  <span className="block text-xs tracking-[0.3em] uppercase text-gold mb-2">Bespoke Service</span>
                  <span className="text-lg">24h Butler</span>
                </div>
                <div>
                  <span className="block text-xs tracking-[0.3em] uppercase text-gold mb-2">Capacity</span>
                  <span className="text-lg">4 Guests</span>
                </div>
                <div>
                  <span className="block text-xs tracking-[0.3em] uppercase text-gold mb-2">Primary View</span>
                  <span className="text-lg">River Ganges</span>
                </div>
              </div>

              <Link to="/reserve" className="inline-flex items-center gap-6 group/link">
                <span className="font-medium text-xs tracking-[0.3em] uppercase text-burgundy">Explore The Suite</span>
                <div className="w-12 h-12 rounded-full border border-burgundy/20 flex items-center justify-center group-hover/link:bg-burgundy group-hover/link:text-cream transition-all duration-500">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <ScrollReveal className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl lg:text-7xl text-burgundy tracking-tight mb-6">The Residences</h2>
              <p className="text-burgundy/60 text-lg italic">A taxonomy of comfort, from sun-drenched studios to multi-level private villas.</p>
            </div>
            <div className="h-[1px] flex-grow bg-burgundy/10 mx-12 hidden lg:block mb-6" />
            <button className="border border-burgundy/20 px-10 py-4 font-medium text-xs tracking-[0.3em] uppercase hover:bg-burgundy hover:text-cream transition-all duration-500">View Catalog</button>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Heritage Loft", tags: "Garden Haven • Artisanal Furnishings", img: "/Resortphoto/suite_deluxe.webp" },
              { name: "Royal Sanctuary", tags: "River Vista • Vedic Spa Ensuite", img: "/Resortphoto/suite_maharaja.webp" },
              { name: "The Villa Residence", tags: "Private Courtyard • Chef's Kitchen", img: "/Resortphoto/suite_executive.webp" },
            ].map((suite, i) => (
              <ScrollReveal type="scale" delay={i * 200} key={suite.name} className="group">
                <div className="relative overflow-hidden mb-8 aspect-[4/5] rounded-[1.5rem] shadow-xl shadow-burgundy/5">
                  <img src={suite.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt={suite.name} loading="lazy" decoding="async" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display text-3xl text-burgundy tracking-tight mb-2">{suite.name}</h4>
                    <p className="text-xs text-burgundy/50 tracking-widest uppercase">{suite.tags}</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gold group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Storytelling */}
      <section className="bg-burgundy text-cream py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal type="mask">
              <img src="/Resortphoto/dining_main.webp" className="rounded-sm w-full h-[600px] object-cover shadow-2xl" alt="Immaculate Service" loading="lazy" decoding="async" />
            </ScrollReveal>
            <div className="space-y-12">
              <ScrollReveal>
                <span className="text-gold text-xs tracking-[0.5em] uppercase font-medium">Immaculate Service</span>
                <h3 className="font-display text-4xl lg:text-6xl tracking-tight mt-4">Invisible Hands,<br /><span className="italic">Visible Luxury</span></h3>
                <p className="text-cream/60 text-lg leading-relaxed mt-8 max-w-lg">
                  Experience hospitality that anticipates your desires before they are spoken.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 border border-cream/10 hover:bg-cream/5 transition-all duration-500 hover:-translate-y-1 cursor-default group">
                    <Wine className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h5 className="text-xs tracking-[0.2em] uppercase font-medium">Sommelier Service</h5>
                  </div>
                  <div className="p-8 border border-cream/10 hover:bg-cream/5 transition-all duration-500 hover:-translate-y-1 cursor-default group">
                    <Clock className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h5 className="text-xs tracking-[0.2em] uppercase font-medium">Unrestricted Dining</h5>
                  </div>
                  <div className="p-8 border border-cream/10 hover:bg-cream/5 transition-all duration-500 hover:-translate-y-1 cursor-default group">
                    <Sparkles className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h5 className="text-xs tracking-[0.2em] uppercase font-medium">Valet & Car Care</h5>
                  </div>
                  <div className="p-8 border border-cream/10 hover:bg-cream/5 transition-all duration-500 hover:-translate-y-1 cursor-default group">
                    <ShieldCheck className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <h5 className="text-xs tracking-[0.2em] uppercase font-medium">VIP Concierge</h5>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="reserve" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-burgundy">
          <img src="/Resortphoto/garden_view.webp" className="w-full h-full object-cover opacity-40 animate-slow-zoom" alt="Resort Aerial" loading="lazy" decoding="async" />
        </div>

        <ScrollReveal className="relative z-10 px-6 max-w-4xl">
          <span className="text-gold text-xs tracking-[0.6em] uppercase font-medium block mb-6">Your Sanctuary Awaits</span>
          <h2 className="font-display text-5xl lg:text-8xl text-cream tracking-tight mb-12">Return to yourself.</h2>
          <Link to="/reserve" className="bg-cream text-burgundy px-12 py-5 font-medium text-xs tracking-[0.4em] uppercase hover:bg-gold transition-all duration-700 hover:scale-105">
            Check Availability
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Suites;
