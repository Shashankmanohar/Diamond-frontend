import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Star, ArrowRight, Sparkles, Wine, Compass, Crown, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="bg-cream text-burgundy">
      <SEO
        title="Our Story & Heritage | Diamond Resort Bihar"
        description="Discover the heritage, philosophy, and architectural craftsmanship behind Diamond Resort. A handcrafted sanctuary of silent luxury inspired by ancient Nalanda."
        keywords="About Diamond Resort, Nalanda history, Bihar luxury resort, resort heritage, eco-luxury Bihar"
      />
      <Navbar />

      {/* Hero Header */}
      <header className="relative h-[85dvh] min-h-[85dvh] w-full overflow-hidden flex flex-col justify-between pt-24 lg:pt-32 pb-20 bg-burgundy">
        <div className="absolute inset-0 z-0">
          <img
            src="/Resortphoto/arch_signature.webp"
            alt="The Diamond Resort Heritage Architecture"
            className="w-full h-full object-cover scale-110 opacity-0"
            style={{ animation: "imageZoom 15s 1s var(--ease-luxury) infinite alternate, contentReveal 2s 1s forwards" }}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-burgundy/40 to-burgundy" />
        </div>

        <div className="relative z-10 text-center px-6 flex-grow flex flex-col justify-center items-center">
          <div className="overflow-hidden mb-4">
            <span
              className="block font-semibold text-sm sm:text-base tracking-[0.5em] text-gold-light uppercase opacity-0"
              style={{ animation: "contentReveal 1.8s 1.5s forwards" }}
            >
              The Sanctuary Story
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-cream tracking-tight leading-[1.1] mb-8">
            <span className="block overflow-hidden">
              <span className="block opacity-0" style={{ animation: "contentReveal 1.8s 1.8s forwards" }}>Born of Heritage,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block italic shimmer-gold opacity-0" style={{ animation: "contentReveal 1.8s 2s forwards" }}>Crafted for Peace</span>
            </span>
          </h1>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-36 px-6 flex flex-col items-center text-center bg-cream">
        <div className="max-w-4xl">
          <ScrollReveal>
            <Star className="w-10 h-10 text-gold mb-10 mx-auto" strokeWidth={1.2} />
            <h2 className="font-display italic text-3xl lg:text-5xl text-burgundy leading-tight mb-10 tracking-tight max-w-3xl mx-auto">
              "True luxury does not clamor for attention. It is the silence of time, the warmth of handmade bricks, and the whisper of legacy."
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="h-[1px] w-24 bg-gold mx-auto mb-10" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-lg lg:text-xl text-burgundy/70 leading-relaxed max-w-2xl mx-auto">
              At The Diamond Resort, we believe luxury isn't just about opulence; it is the profound sense of peace found in a perfectly curated sanctuary. Nestled in Nalanda, Bihar—a cradle of ancient learning and tranquility—our resort bridges the timelessness of heritage with bespoke modern comfort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & About Resort Section */}
      <section className="py-20 lg:py-32 bg-cream-dark border-t border-b border-burgundy/5 relative overflow-hidden">
        {/* Subtle decorative gold-ring in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          {/* Column 1: About the Resort */}
          <ScrollReveal className="lg:col-span-7 space-y-8">
            <span className="text-gold font-semibold text-sm sm:text-base tracking-[0.4em] uppercase block">The Sanctuary</span>
            <h3 className="font-display text-4xl lg:text-6xl text-burgundy tracking-tight">
              A Haven of <br /><span className="italic">Quiet Grandeur</span>
            </h3>
            <p className="text-burgundy/80 text-lg leading-relaxed font-body">
              Spanning 24 pristine acres in the historic heart of Nalanda, The Diamond Resort is designed to coexist with nature, history, and spiritual peace. The resort acts as a luxurious bridge between the wisdom of our ancestors and the comforts of the modern traveler, offering 48 exclusive, handcrafted suites and villas that draw in the cooling breezes of Lotus ponds.
            </p>
            <p className="text-burgundy/80 text-lg leading-relaxed font-body">
              Here, the ticking of the clock yields to the movement of the sun. The soundscapes are dominated by the rustle of leaves, the splash of salt-water fountains, and classical raagas played softly in open verandas at dusk.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-burgundy/10 max-w-xl">
              <div>
                <span className="block font-display text-3xl lg:text-4xl text-gold">48</span>
                <span className="block text-xs sm:text-sm tracking-wider uppercase text-burgundy/60 mt-1 font-semibold">Handcrafted Villas</span>
              </div>
              <div>
                <span className="block font-display text-3xl lg:text-4xl text-gold">24</span>
                <span className="block text-xs sm:text-sm tracking-wider uppercase text-burgundy/60 mt-1 font-semibold">Acres of Gardens</span>
              </div>
              <div>
                <span className="block font-display text-3xl lg:text-4xl text-gold">1</span>
                <span className="block text-xs sm:text-sm tracking-wider uppercase text-burgundy/60 mt-1 font-semibold">Vedic Healing Temple</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Our Vision (Luxury Callout Box) */}
          <ScrollReveal type="scale" className="lg:col-span-5">
            <div className="bg-burgundy text-cream p-10 lg:p-12 border border-gold/30 shadow-2xl shadow-burgundy/20 rounded-sm relative overflow-hidden group">
              {/* Inner frame */}
              <div className="absolute inset-4 border border-gold/10 pointer-events-none group-hover:border-gold/30 transition-colors duration-700" />
              
              <div className="relative z-10 space-y-6">
                <span className="text-gold font-medium text-xs tracking-[0.5em] uppercase block">Our Vision</span>
                <h4 className="font-display text-2xl lg:text-3xl text-cream tracking-tight leading-snug">
                  To revive ancient <br />
                  <span className="italic shimmer-gold">stillness</span> in a frantic world.
                </h4>
                <div className="h-[1px] w-12 bg-gold/50 my-6" />
                <p className="text-cream/70 text-base leading-relaxed font-body">
                  Our vision is to build a timeless sanctuary where history is not merely observed, but lived. We strive to introduce Nalanda and Bihar to the global traveler as the ultimate destination for slow living, quiet reflection, and profound spiritual renewal—where luxury is defined entirely by the depth of your peace.
                </p>
                <div className="pt-6 flex justify-between items-center">
                  <span className="font-script text-3xl text-gold-light opacity-80">The Diamond Resort</span>
                  <Star className="w-5 h-5 text-gold animate-pulse" strokeWidth={1} />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Heritage & History Section */}
      <section className="py-20 lg:py-32 overflow-hidden border-t border-burgundy/5">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="space-y-8">
            <span className="text-gold font-medium text-xs tracking-[0.4em] uppercase block">Spirit of Nalanda</span>
            <h3 className="font-display text-4xl lg:text-6xl text-burgundy tracking-tight">
              A Legacy of <br /><span className="italic">Reflection & Wisdom</span>
            </h3>
            <p className="text-burgundy/70 text-lg leading-relaxed">
              Nalanda has stood for over a millennium as the world's ancient beacon of wisdom and self-discovery. Drawing inspiration from the quiet, structured, and spiritual roots of Bihar's rich heritage, The Diamond Resort is built as a contemporary haven for seekers of stillness and beauty.
            </p>
            <p className="text-burgundy/70 text-lg leading-relaxed">
              Whether you are walking along our architectural arches, listening to the gentle breeze across our lotus gardens, or observing the sunrise over the Gangetic horizon, you are stepping into a flow of time that has nurtured sages, scholars, and royalty.
            </p>
            <div className="pt-6">
              <Link to="/gallery" className="inline-flex items-center gap-6 group/link">
                <span className="font-medium text-xs tracking-[0.3em] uppercase text-burgundy">Explore The Grounds</span>
                <div className="w-12 h-12 rounded-full border border-burgundy/20 flex items-center justify-center group-hover/link:bg-burgundy group-hover/link:text-cream transition-all duration-500">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal type="mask" className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl shadow-burgundy/5">
              <img
                src="/Resortphoto/heritage_arch.webp"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                alt="Ancient Arches of the Resort"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Four Pillars Section */}
      <section className="bg-burgundy text-cream py-24 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold text-xs tracking-[0.5em] uppercase font-medium">Our Foundations</span>
            <h3 className="font-display text-4xl lg:text-6xl tracking-tight mt-4">The Pillars of <br /><span className="italic">Diamond Luxury</span></h3>
            <div className="h-[1px] w-20 bg-gold/50 mx-auto mt-8" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Vedic Spa Sanctuary",
                desc: "Realign body and soul with restorative treatments, private meditation arbors, and therapies inspired by ancient Indian wellness traditions."
              },
              {
                icon: Wine,
                title: "Culinary Alchemy",
                desc: "An epicurean odyssey combining heritage ingredients of Bihar with global gastronomic craftsmanship, serving sensory art on every plate."
              },
              {
                icon: Compass,
                title: "Curated Heritage",
                desc: "Exclusive, thoughtfully designed journeys to the ancient Nalanda University ruins, Rajgir, and historic Gangetic spiritual trails."
              },
              {
                icon: Crown,
                title: "Unseen Devotion",
                desc: "Hospitality delivered like an invisible breeze—always present, anticipating your desires before they are spoken, yet completely unobtrusive."
              }
            ].map((pillar, i) => (
              <ScrollReveal
                type="scale"
                delay={i * 150}
                key={pillar.title}
                className="p-8 border border-cream/10 bg-burgundy-light hover:bg-cream/5 hover:border-gold/30 transition-all duration-500 rounded-sm hover:-translate-y-1 group"
              >
                <pillar.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                <h4 className="font-display text-xl tracking-wide mb-4 text-cream">{pillar.title}</h4>
                <p className="text-cream/60 text-sm leading-relaxed">{pillar.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Architecture */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal type="mask" className="lg:col-span-6 relative group order-last lg:order-first">
            <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-xl shadow-burgundy/5">
              <img
                src="/Resortphoto/garden_view.webp"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                alt="Lush Gardens and Arches"
                loading="lazy"
                decoding="async"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-6 space-y-8">
            <span className="text-gold font-medium text-xs tracking-[0.4em] uppercase block">Material Harmony</span>
            <h3 className="font-display text-4xl lg:text-6xl text-burgundy tracking-tight">
              An Architecture of <br /><span className="italic">Earth & Spirit</span>
            </h3>
            <p className="text-burgundy/70 text-lg leading-relaxed">
              Every arch, column, and brick at The Diamond Resort tells a story of local craftsmanship. Utilizing local stone, sustainable timber, and hand-woven linens, our spaces are designed to feel grounded and breathing.
            </p>
            <p className="text-burgundy/70 text-lg leading-relaxed">
              Rather than imposing on the landscape, our low-lying residences and structures are built in dialogue with the nature of Bihar. Shaded courtyards, natural cooling ponds, and deep verandas mirror historical architectural secrets that keep the spaces cool and serene throughout the seasons.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-burgundy/10">
              <div>
                <span className="block font-display text-2xl lg:text-3xl text-gold">100%</span>
                <span className="block text-[10px] tracking-wider uppercase text-burgundy/50 mt-1">Local Artisanal Sourcing</span>
              </div>
              <div>
                <span className="block font-display text-2xl lg:text-3xl text-gold">24 Acres</span>
                <span className="block text-[10px] tracking-wider uppercase text-burgundy/50 mt-1">Lush Lotus & Zen Gardens</span>
              </div>
              <div>
                <span className="block font-display text-2xl lg:text-3xl text-gold">Vedic</span>
                <span className="block text-[10px] tracking-wider uppercase text-burgundy/50 mt-1">Acoustic Engineering</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-burgundy">
          <img
            src="/Resortphoto/hero_home.webp"
            className="w-full h-full object-cover opacity-35 scale-105"
            alt="The Resort at Sunset"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent" />
        </div>

        <ScrollReveal className="relative z-10 px-6 max-w-4xl">
          <span className="text-gold text-xs tracking-[0.6em] uppercase font-medium block mb-6">Begin Your Journey</span>
          <h2 className="font-display text-5xl lg:text-8xl text-cream tracking-tight mb-12">Step into our fold.</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:+918092719700" className="bg-cream text-burgundy px-12 py-5 font-medium text-xs tracking-[0.4em] uppercase hover:bg-gold hover:text-burgundy transition-all duration-700 hover:scale-105 inline-block w-full sm:w-auto">
              Call To Book
            </a>
            <Link to="/suites" className="border border-cream text-cream px-12 py-5 font-medium text-xs tracking-[0.4em] uppercase hover:bg-cream hover:text-burgundy transition-all duration-700 hover:scale-105 inline-block w-full sm:w-auto">
              Our Suites
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default About;
