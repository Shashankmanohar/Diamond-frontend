import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Diamond, ArrowRight, ArrowUpRight, Star, ShieldCheck, Trophy, Sparkles, MapPin, Sunset, Flower2, Dumbbell, BookOpen, Clapperboard, ChefHat, Key, Crown, Building2, Leaf, Palette, Wine, Award, Medal, ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import SEO from "@/components/SEO";

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 1024px)": { active: false }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Stop autoplay on desktop
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        autoplay.stop();
      } else {
        autoplay.play();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="bg-cream text-burgundy pb-24 lg:pb-0">
      <SEO
        title="Diamond Resort | Bihar's Finest Ultra-Luxury Sanctuary"
        description="Experience unparalleled luxury at Diamond Resort & Spa. Bihar's premier five-star sanctuary featuring handcrafted suites, artisan dining, and holistic wellness."
        keywords="luxury resort Bihar, five star hotel Bihar, Diamond Resort, ultra luxury stay, Bihar heritage resort, Bihar wellness spa"
      />
      <Navbar />

      {/* Hero */}
      <header className="relative w-full h-[90svh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden bg-burgundy">
          <img
            src="/Resortphoto/hero_home.webp"
            alt="The Diamond Resort - Bihar's Finest Luxury Resort"
            className="w-full h-full object-cover object-[center_40%] animate-slow-zoom scale-110 origin-center opacity-80"
            decoding="async"
          />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-burgundy/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-burgundy/40 to-burgundy/95" />
        </div>

        <div className="relative z-20 w-full px-6 lg:px-12 flex flex-col items-center text-center mt-12 lg:mt-0">
          <div className="overflow-hidden mb-6">
            <div className="flex items-center gap-4 text-gold" style={{ animation: "heavyRevealUp 1.2s var(--ease-luxury) 0.8s both" }}>
              <Star className="w-8 h-8" />
              <span className="font-label font-medium text-base tracking-[0.3em] uppercase">The Diamond Resort</span>
              <Star className="w-8 h-8" />
            </div>
          </div>

          <h1 className="font-display font-normal text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-cream tracking-tight mb-8">
            <div className="overflow-hidden pb-2">
              <span className="block" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1s both" }}>A Sanctuary Where</span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block italic shimmer-text" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.2s both" }}>Luxury Resides.</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12 max-w-xl">
            <p className="font-body text-lg md:text-xl text-cream/90 leading-relaxed" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.4s both" }}>
              Crafted for the discerning few. Experience uncompromising elegance and unparalleled service in the heart of India.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-12 w-full px-12 justify-between items-end z-20">
          <div className="flex gap-16" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.6s both" }}>
            <div className="flex flex-col gap-2 group">
              <Key className="w-8 h-8 text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
              <span className="font-label text-xs tracking-[0.2em] text-cream/80 group-hover:text-cream transition-colors duration-500">48 SUITES</span>
            </div>
            <div className="flex flex-col gap-2 group">
              <ChefHat className="w-8 h-8 text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
              <span className="font-label text-xs tracking-[0.2em] text-cream/80 group-hover:text-cream transition-colors duration-500">3 VENUES</span>
            </div>
            <div className="flex flex-col gap-2 group">
              <Crown className="w-8 h-8 text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
              <span className="font-label text-xs tracking-[0.2em] text-cream/80 group-hover:text-cream transition-colors duration-500">NO. 1 RATED</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.8s both" }}>
            <span className="font-label text-xs text-cream/60 tracking-[0.3em] rotate-90 origin-right translate-x-[-100%]">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent animate-float-premium" />
          </div>
        </div>
      </header>

      <section id="philosophy" className="bg-cream border-b border-burgundy/5 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[60vh] items-stretch">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative z-10">
            <div className="absolute inset-0 opacity-10 blur-3xl z-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gold rounded-full" />
            </div>
            <ScrollReveal className="relative z-10">
              <span className="font-label font-bold text-[10px] tracking-[0.4em] text-gold uppercase mb-6 block">The Philosophy</span>
              <h2 className="font-display font-medium text-4xl lg:text-7xl text-burgundy leading-[1.05] mb-10 tracking-tighter">
                A Sanctuary for the <br />
                <em className="font-light italic text-gold shimmer-text">Discerning Soul.</em>
              </h2>
              <p className="font-body text-xl lg:text-2xl text-burgundy/90 leading-relaxed font-light mb-12">
                At The Diamond Resort, we believe luxury isn't just about opulence; it's about the profound sense of peace found in a perfectly curated sanctuary.
              </p>
              <div className="flex flex-wrap gap-12 py-8 border-y border-gold/20 mb-8">
                <div className="flex flex-col">
                  <span className="font-display text-4xl text-burgundy">48</span>
                  <span className="font-label text-[10px] tracking-[0.2em] text-gold uppercase mt-2">Suites</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-4xl text-burgundy">03</span>
                  <span className="font-label text-[10px] tracking-[0.2em] text-gold uppercase mt-2">Venues</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-4xl text-burgundy">5.0</span>
                  <span className="font-label text-[10px] tracking-[0.2em] text-gold uppercase mt-2">Rating</span>
                </div>
              </div>
              <Link to="/reserve" className="font-label font-bold text-[10px] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors inline-block pt-4 border-b border-gold/50">Experience it</Link>
            </ScrollReveal>
          </div>
          <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
            <img src="/Resortphoto/garden_view.webp" alt="Sanctuary Philosophy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          </ScrollReveal>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-cream py-8 lg:py-12 overflow-hidden relative">
        <div className="px-6 lg:px-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 max-w-[100rem] mx-auto">
          <ScrollReveal>
            <span className="font-label font-medium text-xs text-burgundy tracking-[0.25em] mb-4 block uppercase">Accommodations</span>
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight">Your Private Domain</h2>
          </ScrollReveal>
        </div>

        <div className="relative max-w-[100rem] mx-auto group">
          <div className="overflow-hidden px-6 lg:px-12" ref={emblaRef}>
            <div className="flex lg:grid lg:grid-cols-2 gap-8 lg:gap-12 pb-12 pt-4">
              {[
                { name: "The Diamond Suite", desc: "The absolute pinnacle of luxury living with 3,200 sq. ft. of privacy, a saltwater infinity pool, and 24h butler service.", img: "/Resortphoto/suite_diamond.webp", size: "3,200 sq.ft", guests: "Up to 4", feature: "Infinity Pool", badge: "SIGNATURE" },
                { name: "The Maharaja Chamber", desc: "A tribute to regal heritage, adorned with antique furnishings and silk tapestries, offering a glimpse into royal past.", img: "/Resortphoto/suite_maharaja.webp", size: "1,200 sq.ft", guests: "Up to 3", feature: "Regal Decor" },
                { name: "Grand Deluxe Room", desc: "Refined elegance overlooking the serene courtyard, featuring hand-woven linens and artisanal touches.", img: "/Resortphoto/suite_deluxe.webp", size: "650 sq.ft", guests: "Up to 2", feature: "Courtyard View" },
                { name: "Executive Oasis Suite", desc: "The perfect blend of productivity and relaxation, featuring a private study and a spa-inspired marble bathroom.", img: "/Resortphoto/suite_executive.webp", size: "850 sq.ft", guests: "Up to 2", feature: "Private Study" },
              ].map((room, i) => (
                <div key={room.name} className="flex-[0_0_100%] md:flex-[0_0_100%] lg:flex-[0_0_31%] min-w-0">
                  <ScrollReveal type="scale" delay={i * 100}>
                    <div className="bg-burgundy rounded-[2rem] overflow-hidden group/card relative hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(61,12,30,0.3)] transition-all duration-[600ms] ease-luxury flex flex-col h-full border border-transparent hover:border-gold/30">
                      <div className="relative h-72 lg:h-[26rem] overflow-hidden">
                        <img src={room.img} alt={room.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover/card:scale-[1.05] transition-transform duration-[1.2s] ease-luxury opacity-90 group-hover/card:opacity-100" />
                        <div className="absolute inset-0 bg-burgundy/30 group-hover/card:bg-transparent transition-colors duration-[1s] ease-luxury" />
                        {room.badge && (
                          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-cream font-label font-semibold text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-sm">
                            <Crown className="w-3 h-3 text-gold" /> {room.badge}
                          </div>
                        )}
                      </div>
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="font-display font-medium italic text-3xl text-cream mb-2 tracking-tight group-hover/card:text-gold transition-colors duration-500 ease-luxury">{room.name}</h3>
                        <p className="font-body text-base text-cream/70 mb-6 line-clamp-2">{room.desc}</p>
                        <div className="flex gap-6 mb-8 border-t border-cream/10 pt-6 mt-auto">
                          <div className="flex flex-col items-center gap-1 text-cream text-[10px] uppercase tracking-widest opacity-60">
                            <span>{room.size}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-cream text-[10px] uppercase tracking-widest opacity-60">
                            <span>{room.guests}</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-cream text-[10px] uppercase tracking-widest opacity-60">
                            <span>{room.feature}</span>
                          </div>
                        </div>
                        <Link to="/reserve" className="w-full bg-transparent border border-cream/30 text-cream font-label font-semibold text-xs tracking-[0.2em] py-4 rounded-xl hover:bg-cream hover:border-cream hover:text-burgundy transition-all duration-500 ease-luxury flex items-center justify-center gap-2 btn-shimmer hover:-translate-y-[2px] hover:scale-[1.02] active:scale-[0.98]">
                          <span className="relative z-10 flex items-center gap-2">RESERVE <ArrowRight className="w-4 h-4" /></span>
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-burgundy transition-all duration-500 z-10 opacity-0 group-hover:opacity-100 lg:hidden"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-burgundy transition-all duration-500 z-10 opacity-0 group-hover:opacity-100 lg:hidden"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8 lg:hidden">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${selectedIndex === index ? "bg-gold w-8" : "bg-burgundy/20"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-cream border-t border-burgundy/5 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[70vh]">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <ScrollReveal className="mb-16">
              <span className="font-label font-semibold text-xs text-burgundy tracking-[0.25em] mb-4 block uppercase">The Facilities</span>
              <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight mb-8">An Oasis of Indulgence</h2>
              <p className="font-body text-lg text-burgundy/70 leading-relaxed mb-12">
                Every corner of Diamond Resort is designed to nourish the body and soul. From our signature spa to the serene library.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-8 lg:gap-y-12">
              {[
                { icon: <Sparkles className="w-6 h-6" />, title: "Royal Spa", desc: "Ancient wellness." },
                { icon: <Flower2 className="w-6 h-6" />, title: "Infinity Pool", desc: "Heated sanctuary." },
                { icon: <Leaf className="w-6 h-6" />, title: "Gardens", desc: "Private reflection." },
                { icon: <Dumbbell className="w-6 h-6" />, title: "Fitness", desc: "Expert guidance." },
              ].map((a, i) => (
                <ScrollReveal key={a.title} delay={i * 100} className="group flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full border border-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy transition-all duration-500">
                    <span className="text-burgundy group-hover:text-gold transition-all duration-500">{a.icon}</span>
                  </div>
                  <h3 className="font-display font-medium text-lg text-burgundy mb-1">{a.title}</h3>
                  <p className="font-body text-burgundy/60 text-[10px] uppercase tracking-widest">{a.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
            <img src="/Resortphoto/hero_suites.webp" alt="Resort Amenities" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          </ScrollReveal>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="bg-burgundy py-8 lg:py-12 relative text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <Wine className="w-10 h-10 text-gold mb-6 mx-auto animate-float-premium" />
            <h2 className="font-display font-medium text-4xl lg:text-7xl text-cream tracking-tight mb-6">Mastery of Flavour</h2>
            <p className="font-body text-lg text-cream/70 max-w-2xl mx-auto mb-12">Three distinct venues, each offering an unforgettable gastronomic journey guided by world-class chefs.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20 border-t border-white/10 pt-12">
              <div className="flex flex-col items-center gap-3 group">
                <ChefHat className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                <span className="font-label text-[10px] tracking-widest text-cream/60 uppercase">Master Chefs</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <Utensils className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                <span className="font-label text-[10px] tracking-widest text-cream/60 uppercase">Organic Sourcing</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <Wine className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                <span className="font-label text-[10px] tracking-widest text-cream/60 uppercase">Rare Vintages</span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <Sparkles className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                <span className="font-label text-[10px] tracking-widest text-cream/60 uppercase">Private Tables</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="scale" className="w-full h-[30vh] min-h-[300px] lg:h-[60vh] rounded-[2rem] overflow-hidden mb-12 lg:mb-16 relative group shadow-2xl">
            <img src="/Resortphoto/dining_main.webp" alt="Culinary Excellence" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-[1.03] opacity-90" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent pointer-events-none" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal type="scale" className="rounded-3xl overflow-hidden relative group h-[400px] lg:h-[600px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-700 ease-luxury">
              <img src="/Resortphoto/dining_aurum.webp" className="w-full h-full object-cover transition-all duration-[1.5s] ease-luxury group-hover:scale-[1.03]" alt="Aurum Fine Dining" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
                <span className="bg-gold text-burgundy w-max font-label font-semibold text-xs px-3 py-1 rounded-full mb-4 shadow-sm">SIGNATURE</span>
                <h3 className="font-display font-medium italic text-4xl text-cream mb-2 tracking-tight group-hover:text-gold transition-colors duration-500 ease-luxury">Aurum</h3>
                <p className="font-body text-cream/90 mb-6 max-w-sm">Award-winning pan-Asian fusion served beneath gold-leafed ceilings with panoramic Ganga views.</p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {[
                { name: "The Cellar", desc: "An intimate, subterranean sanctuary featuring rare vintages and private sommelier services.", img: "/Resortphoto/dining_cellar.webp" },
                { name: "Veranda", desc: "Open-air botanical dining offering farm-to-table delicacies beneath the starlit sky.", img: "/Resortphoto/dining_veranda.webp" },
              ].map((d, i) => (
                <ScrollReveal type="scale" key={d.name} delay={i * 150} className="rounded-3xl overflow-hidden relative group h-[300px] lg:h-[calc(300px-0.75rem)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-700 ease-luxury">
                  <img src={d.img} className="w-full h-full object-cover transition-all duration-[1.5s] ease-luxury group-hover:scale-[1.04] opacity-90" alt={d.name} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="font-display font-medium italic text-3xl text-cream mb-2 tracking-tight group-hover:text-gold transition-colors duration-500 ease-luxury">{d.name}</h3>
                    <p className="font-body text-cream/90">{d.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-cream overflow-hidden border-t border-burgundy/5">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 text-center">
          <ScrollReveal>
            <Sparkles className="w-10 h-10 text-gold mb-4 mx-auto" />
            <h2 className="font-display font-medium text-4xl lg:text-7xl text-burgundy tracking-tight">Curated Experiences</h2>
            <p className="font-body text-lg text-burgundy/70 max-w-2xl mx-auto mt-4 uppercase tracking-widest text-[10px]">A journey of discovery</p>
          </ScrollReveal>
        </div>

        <div className="space-y-0">
          {[
            { title: "Ganga Sunset Dining", desc: "An intimate evening set on the banks of the sacred river. A private table, a personal chef, and the gentle glow of traditional diyas.", img: "/Resortphoto/exp_sunset.webp", icon: <Sunset className="w-8 h-8" />, reverse: false },
            { title: "Cultural Odysseys", desc: "Journey through time with our resident historians. Discover hidden temples and artisanal villages in absolute luxury.", img: "/Resortphoto/exp_cultural.webp", icon: <MapPin className="w-8 h-8" />, reverse: true },
            { title: "Vedic Spa Rituals", desc: "Ancient healing traditions reimagined. Experience gold-infused oil massages and sound therapy in our serene sanctuary.", img: "/Resortphoto/exp_spa.webp", icon: <Flower2 className="w-8 h-8" />, reverse: false },
          ].map((exp, i) => (
            <div key={exp.title} className={`flex flex-col ${exp.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch min-h-[70vh]`}>
              <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
                <ScrollReveal>
                  <span className="text-gold mb-6 block">{exp.icon}</span>
                  <h3 className="font-display font-medium italic text-4xl lg:text-5xl text-burgundy mb-6 tracking-tight">{exp.title}</h3>
                  <p className="font-body text-lg text-burgundy/70 mb-8 leading-relaxed max-w-md">{exp.desc}</p>
                  <Link to="/reserve" className="font-label font-bold text-[10px] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors inline-block pt-4 border-b border-gold/50">
                    Discover More
                  </Link>
                </ScrollReveal>
              </div>
              <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
                <img src={exp.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" alt={exp.title} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section id="heritage-legacy" className="bg-void relative overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[60vh]">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative z-10">
            <ScrollReveal>
              <span className="font-label font-bold text-[10px] tracking-[0.4em] text-gold uppercase mb-6 block">Our Roots</span>
              <h2 className="font-display text-4xl lg:text-6xl text-cream mb-8 tracking-tight">The Cradle of <br /><em className="italic text-gold font-light">Ancient Wisdom.</em></h2>
              <div className="space-y-6 text-cream/70 font-body text-lg leading-relaxed mb-10">
                <p>
                  The Diamond Resort stands on land that has witnessed the rise of empires. From the scholarly halls of Nalanda to the spiritual awakening at Bodh Gaya.
                </p>
                <p>
                  We've curated an experience that honors this legacy. Our library houses rare texts on Mauryan history, and our architecture incorporates motifs from the Great Stupa.
                </p>
              </div>
              <div className="flex gap-12">
                <div className="flex flex-col">
                  <span className="text-gold font-display text-3xl">Pataliputra</span>
                  <span className="text-[10px] font-label text-cream/40 uppercase tracking-widest">Influence</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gold font-display text-3xl">Ganga</span>
                  <span className="text-[10px] font-label text-cream/40 uppercase tracking-widest">Sacred</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
            <img src="/Resortphoto/exp_cultural.webp" alt="Ancient Heritage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          </ScrollReveal>
        </div>
      </section>

      <section id="heritage" className="bg-cream border-y border-burgundy/5">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[60vh]">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <ScrollReveal>
              <Building2 className="w-10 h-10 text-gold mb-6" />
              <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight leading-[1.05] mb-8">
                Heritage Meets<br /><em className="font-light italic text-burgundy/70">Modern Grandeur</em>
              </h2>
              <p className="font-body text-lg text-burgundy/80 leading-relaxed mb-10">
                Designed to honour ancient traditions while delivering uncompromising five-star luxury. Every archway, corridor, and suite tells a story of elegance tailored for the modern elite.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase">Ultimate Privacy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-gold" />
                  <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase">Bespoke Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase">Historic Heart</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold" />
                  <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase">Vedic Wellness</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
            <img src="/Resortphoto/heritage_arch.webp" alt="Resort Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          </ScrollReveal>
        </div>
      </section>

      {/* Arrival Experience */}
      <section id="arrival" className="relative w-full py-10 lg:py-12 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-burgundy">
          <img src="/Resortphoto/hero_suites.webp" alt="Arrival Experience" loading="lazy" decoding="async" className="w-full h-full object-cover animate-slow-zoom opacity-70 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/40 via-burgundy/20 to-burgundy/80" />
        </div>
        <ScrollReveal className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <MapPin className="w-12 h-12 text-gold mb-6 mx-auto animate-float-premium" />
          <h2 className="font-display font-light italic text-4xl lg:text-7xl text-cream mb-8 tracking-tight">Your Journey Begins</h2>
          <p className="font-body text-lg lg:text-xl text-cream/90 leading-relaxed mb-12">
            From the moment the grand gates open, step into a realm where time slows down. Every detail, from the sweeping driveway to the personal concierge awaiting your arrival, is orchestrated for your absolute comfort.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-cream/20">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                <Sparkles className="w-5 h-5 text-gold group-hover:text-burgundy" />
              </div>
              <span className="font-label text-xs text-cream/80 tracking-widest uppercase">Personal Greeting</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                <ChefHat className="w-5 h-5 text-gold group-hover:text-burgundy" />
              </div>
              <span className="font-label text-xs text-cream/80 tracking-widest uppercase">Welcome Drinks</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                <Key className="w-5 h-5 text-gold group-hover:text-burgundy" />
              </div>
              <span className="font-label text-xs text-cream/80 tracking-widest uppercase">Express Check-in</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                <Diamond className="w-5 h-5 text-gold group-hover:text-burgundy" />
              </div>
              <span className="font-label text-xs text-cream/80 tracking-widest uppercase">Limo Transfer</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-burgundy border-y border-white/5">
        <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[60vh]">
          <div className="w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <ScrollReveal>
              <span className="font-label font-medium text-xs text-gold tracking-[0.25em] mb-4 block uppercase">The Design Philosophy</span>
              <h2 className="font-display font-medium text-4xl lg:text-6xl text-cream tracking-tight leading-[1.1] mb-8">Symphony of<br />Stone & Light</h2>
              <p className="font-body text-lg text-cream/70 leading-relaxed mb-10">
                Our architecture draws inspiration from the regal palaces of ancient India, reinterpreted through a contemporary lens. High vaulted ceilings, intricately carved stone screens.
              </p>
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-gold/20 pt-10">
                <div className="flex items-center gap-4">
                  <Palette className="w-5 h-5 text-gold" />
                  <span className="font-label text-xs sm:text-sm text-cream tracking-widest uppercase">Artisanal Craft</span>
                </div>
                <div className="flex items-center gap-4">
                  <Leaf className="w-5 h-5 text-gold" />
                  <span className="font-label text-xs sm:text-sm text-cream tracking-widest uppercase">Lush Courtyards</span>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="font-label text-xs sm:text-sm text-cream tracking-widest uppercase">Timeless Elegance</span>
                </div>
                <div className="flex items-center gap-4">
                  <Crown className="w-5 h-5 text-gold" />
                  <span className="font-label text-xs sm:text-sm text-cream tracking-widest uppercase">Regal Heritage</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal type="scale" className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
            <img src="/Resortphoto/arch_signature.webp" alt="Signature Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-burgundy py-8 lg:py-12 overflow-hidden border-t border-cream/5">
        <ScrollReveal className="px-6 lg:px-8 mb-16 text-center max-w-4xl mx-auto">
          <span className="font-label font-medium text-xs text-gold tracking-[0.25em] mb-4 block uppercase">The Visual Narrative</span>
          <h2 className="font-display font-medium text-4xl lg:text-5xl text-cream tracking-tight mb-4">A Glimpse of Perfection</h2>
          <p className="font-body text-lg text-cream/70">Explore the elegant contours, ambient lighting, and lush surroundings that make up the tapestry of our resort.</p>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 lg:px-12 space-y-6 max-w-[100rem] mx-auto">
          {[
            "/Resortphoto/gallery_1.webp",
            "/Resortphoto/gallery_2.webp",
            "/Resortphoto/gallery_3.webp",
            "/Resortphoto/gallery_4.webp",
            "/Resortphoto/gallery_5.webp",
            "/Resortphoto/gallery_6.webp",
            "/Resortphoto/gallery_7.webp",
          ].map((src, i) => (
            <ScrollReveal type="scale" delay={i * 100} key={src} className="relative group overflow-hidden rounded-2xl break-inside-avoid">
              <img src={src} alt={`Resort Gallery ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-luxury opacity-90 group-hover:opacity-100" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-700 ease-luxury mix-blend-overlay" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-cream py-8 lg:py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-burgundy tracking-tight mb-4">Voices of Excellence</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "An absolute triumph of hospitality. The attention to detail is unlike anywhere else in the world. Truly a sanctuary for the soul.", author: "Sir Arthur Pendelton" },
              { quote: "The culinary experience at Aurum left us speechless. We came for the tranquility, but the entire stay was an orchestration of perfection.", author: "Eleanor Vane" },
              { quote: "Our private tour guides were incredibly knowledgeable. The suite was magnificent. We have found our permanent escape.", author: "The Sterling Family" },
            ].map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 150} className="bg-white/40 backdrop-blur-sm p-8 lg:p-12 rounded-[2rem] border border-burgundy/5 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(61,12,30,0.1)] transition-all duration-500 ease-luxury">
                <div className="flex gap-1 text-gold mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-gold" />)}
                </div>
                <p className="font-display font-medium italic text-xl lg:text-2xl text-burgundy mb-8 line-clamp-4 leading-relaxed">"{t.quote}"</p>
                <span className="font-label font-semibold text-xs text-burgundy/70 tracking-[0.2em] uppercase">{t.author}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="bg-cream py-8 lg:py-10 border-t border-burgundy/5 flex flex-col items-center overflow-hidden relative">
        <ScrollReveal className="text-center mb-16">
          <span className="font-label font-medium text-xs text-gold tracking-[0.25em] mb-4 block uppercase">Recognition</span>
          <h2 className="font-display text-3xl lg:text-5xl text-burgundy tracking-tight">Standard of Excellence</h2>
        </ScrollReveal>
        <ScrollReveal className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 w-full px-6">
          {[
            { icon: <Trophy className="w-10 h-10" />, label: "World Luxury Hotel Awards 2023", desc: "Best Cultural Resort" },
            { icon: <Star className="w-10 h-10" />, label: "Condé Nast Gold List", desc: "Top 10 India" },
            { icon: <Medal className="w-10 h-10" />, label: "Michelin Star (Aurum)", desc: "Excellence in Fusion" },
            { icon: <Crown className="w-10 h-10" />, label: "Asia's Best Design 2022", desc: "Heritage Preservation" },
          ].map((a) => (
            <div key={a.label} className="flex flex-col items-center group">
              <span className="text-burgundy/40 mb-3 group-hover:text-gold group-hover:-translate-y-1 transition-all duration-500 ease-luxury">{a.icon}</span>
              <span className="font-label font-semibold text-[10px] text-burgundy/60 tracking-[0.2em] uppercase text-center max-w-[140px] group-hover:text-burgundy transition-colors duration-500">{a.label}</span>
              <span className="font-body text-[10px] text-gold/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{a.desc}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Stay in Touch - Newsletter */}
      <section id="newsletter" className="bg-void py-8 lg:py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-6xl text-cream mb-6 tracking-tight">Stay in the <em className="italic text-gold font-light">Loop.</em></h2>
            <p className="font-body text-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Join our inner circle for exclusive updates, heritage stories, and priority access to seasonal retreats.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-mail Address"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 text-cream font-body focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="bg-gold text-void font-label font-bold text-[10px] tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white transition-all duration-500 whitespace-nowrap">
                Join Us
              </button>
            </form>
            <p className="mt-6 font-label text-[9px] text-cream/20 tracking-widest uppercase">Unsubscribe at any time. Your privacy is our priority.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section id="reserve" className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center overflow-hidden rounded-t-[3rem] mt-12 bg-burgundy">
        <div className="absolute inset-0 z-0">
          <img src="/Resortphoto/garden_view.webp" alt="Aerial Resort View" className="w-full h-full object-cover animate-slow-zoom mix-blend-overlay opacity-50" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-burgundy/60 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent" />
        </div>

        <ScrollReveal className="relative z-10 px-6 flex flex-col items-center">
          <img src="/DiamondResort.webp" alt="Diamond Resort" className="w-80 h-80 object-contain mb-6 animate-float-premium" />
          <h2 className="font-display font-light text-5xl lg:text-7xl text-cream leading-tight mb-8 tracking-tight">Secure Your Place<br />Among the Stars</h2>
          <Link to="/reserve" className="bg-cream text-burgundy font-label font-semibold text-sm tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-500 ease-luxury shadow-[0_0_30px_rgba(201,168,76,0.1)] hover:shadow-[0_10px_40px_rgba(201,168,76,0.35)] flex items-center gap-3 btn-shimmer hover:-translate-y-[4px] hover:scale-[1.02] active:scale-95 group border border-transparent hover:border-gold/50">
            <span className="relative z-10">BEGIN RESERVATION</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-400 ease-luxury" />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
