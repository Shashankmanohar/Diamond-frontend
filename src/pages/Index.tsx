import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Diamond, ArrowRight, ArrowUpRight, Star, ShieldCheck, Trophy, Sparkles, MapPin, Sunset, Flower2, Dumbbell, BookOpen, Clapperboard, ChefHat, Key, Crown, Building2, Leaf, Palette, Wine, Award, Medal } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "Diamond Resort | Bihar's Finest Ultra-Luxury Sanctuary";
  }, []);

  return (
    <div className="bg-cream text-burgundy pb-24 lg:pb-0">
      <Navbar />

      {/* Hero */}
      <header className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden bg-burgundy">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1280&q=60&fm=webp"
            alt="The Diamond Resort - Bihar's Finest Luxury Resort"
            className="w-full h-full object-cover object-[center_40%] animate-slow-zoom scale-110 origin-center opacity-80"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-burgundy/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-burgundy/40 to-burgundy/95" />
        </div>

        <div className="relative z-20 w-full px-6 lg:px-12 flex flex-col items-center text-center mt-12 lg:mt-0">
          <div className="overflow-hidden mb-6">
            <div className="flex items-center gap-4 text-gold" style={{ animation: "heavyRevealUp 1.2s var(--ease-luxury) 0.8s both" }}>
              <Star className="w-5 h-5" />
              <span className="font-label font-medium text-xs tracking-[0.3em] uppercase">The Pinnacle of Bihar</span>
              <Star className="w-5 h-5" />
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

      {/* Quote Section */}
      <section className="bg-cream py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-20 blur-3xl z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-gold to-burgundy/30 rounded-full animate-float-premium" />
        </div>
        <ScrollReveal className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display font-light italic text-3xl md:text-5xl lg:text-6xl text-burgundy leading-tight mb-8 tracking-tight">
            "A diamond does not announce itself. Its brilliance speaks without words. This is our philosophy of luxury."
          </h2>
          <div className="flex items-center justify-center gap-4 mt-12 group">
            <div className="w-12 h-[1px] bg-burgundy/30 group-hover:bg-gold group-hover:w-16 transition-all duration-500 ease-luxury" />
            <p className="font-label font-semibold text-xs text-burgundy tracking-[0.25em] uppercase group-hover:text-gold transition-colors duration-500 ease-luxury">The Vision</p>
            <div className="w-12 h-[1px] bg-burgundy/30 group-hover:bg-gold group-hover:w-16 transition-all duration-500 ease-luxury" />
          </div>
        </ScrollReveal>
      </section>

      {/* Heritage Section */}
      <section className="bg-cream py-24 lg:py-0 border-t border-burgundy/5">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <ScrollReveal className="w-full lg:w-1/2 p-6 lg:p-24 flex flex-col justify-center">
            <Building2 className="w-10 h-10 text-gold mb-6 hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-luxury" />
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight leading-[1.05] mb-8">
              Heritage Meets<br /><em className="font-light italic text-burgundy/70">Modern Grandeur</em>
            </h2>
            <p className="font-body text-lg text-burgundy/80 leading-relaxed mb-6">
              Designed to honour ancient traditions while delivering uncompromising five-star luxury. Every archway, corridor, and suite tells a story of elegance tailored for the modern elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="flex items-center gap-3 group">
                <ShieldCheck className="w-6 h-6 text-burgundy group-hover:text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 ease-luxury" />
                <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase transition-colors duration-500 group-hover:text-gold">Ultimate Privacy</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Trophy className="w-6 h-6 text-burgundy group-hover:text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 ease-luxury" />
                <span className="font-label font-semibold text-xs text-burgundy tracking-widest uppercase transition-colors duration-500 group-hover:text-gold">Bespoke Service</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="mask" className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative p-6 lg:p-0 overflow-hidden group">
            <div className="w-full h-full rounded-3xl lg:rounded-none overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=640&q=60&fm=webp" alt="Resort Architecture" loading="lazy" decoding="async" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-luxury" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-[1.5s] ease-luxury" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Arrival Experience */}
      <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-burgundy">
          <img src="https://images.unsplash.com/photo-1542314831-c6a4d14d23e5?w=960&q=55&fm=webp" alt="Arrival Experience" loading="lazy" decoding="async" className="w-full h-full object-cover animate-slow-zoom opacity-70 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy/40 via-burgundy/20 to-burgundy/80" />
        </div>
        <ScrollReveal className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <MapPin className="w-12 h-12 text-gold mb-6 mx-auto animate-float-premium" />
          <h2 className="font-display font-light italic text-4xl lg:text-6xl text-cream mb-6 tracking-tight">Your Journey Begins</h2>
          <p className="font-body text-lg lg:text-xl text-cream/80 leading-relaxed">
            From the moment the grand gates open, step into a realm where time slows down. Every detail, from the sweeping driveway to the personal concierge awaiting your arrival, is orchestrated for your absolute comfort.
          </p>
        </ScrollReveal>
      </section>

      {/* Architecture */}
      <section className="bg-burgundy py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <ScrollReveal className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="font-label font-medium text-xs text-gold tracking-[0.25em] mb-4 block uppercase">The Design Philosophy</span>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-cream tracking-tight leading-[1.1] mb-8">Symphony of<br />Stone & Light</h2>
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-8">
              Our architecture draws inspiration from the regal palaces of ancient India, reinterpreted through a contemporary lens. High vaulted ceilings, intricately carved stone screens, and tranquil courtyards work in harmony.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-gold/20 pt-8">
              <div className="flex items-center gap-3 group">
                <Palette className="w-6 h-6 text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
                <span className="font-label text-xs text-cream tracking-widest uppercase">Artisanal Craft</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Leaf className="w-6 h-6 text-gold group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
                <span className="font-label text-xs text-cream tracking-widest uppercase">Lush Courtyards</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal type="mask" className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative overflow-hidden rounded-[2rem] group">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=640&q=60&fm=webp" alt="Signature Architecture" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-luxury" />
            <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
          </ScrollReveal>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-cream py-24 lg:py-32 overflow-hidden relative">
        <div className="px-6 lg:px-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6 max-w-[100rem] mx-auto">
          <ScrollReveal>
            <span className="font-label font-medium text-xs text-burgundy tracking-[0.25em] mb-4 block uppercase">Accommodations</span>
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight">Your Private Domain</h2>
          </ScrollReveal>
        </div>

        <div className="ios-snap-scroll no-scrollbar flex lg:grid lg:grid-cols-3 gap-8 lg:gap-6 px-6 lg:px-12 pb-12 pt-4 max-w-[100rem] mx-auto">
          {[
            { name: "The Diamond Suite", desc: "The absolute pinnacle of luxury living with panoramic views.", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=480&q=55&fm=webp", size: "1,200 sq.ft", guests: "Up to 4", feature: "Jacuzzi", badge: "SIGNATURE" },
            { name: "The Maharaja Chamber", desc: "A tribute to royal heritage, adorned with silk and fine art.", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=480&q=55&fm=webp", size: "850 sq.ft", guests: "Up to 3", feature: "Lounge" },
            { name: "Grand Deluxe Room", desc: "Understated elegance overlooking the serene courtyard.", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=480&q=55&fm=webp", size: "550 sq.ft", guests: "Up to 2", feature: "Balcony" },
          ].map((room, i) => (
            <ScrollReveal type="scale" delay={i * 100} key={room.name} className="ios-snap-item min-w-[85vw] lg:min-w-0">
              <div className="bg-burgundy rounded-[2rem] overflow-hidden group relative hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(61,12,30,0.3)] transition-all duration-[600ms] ease-luxury flex flex-col h-full border border-transparent hover:border-gold/30">
                <div className="relative h-72 lg:h-[26rem] overflow-hidden">
                  <img src={room.img} alt={room.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.2s] ease-luxury opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-burgundy/30 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
                  {room.badge && (
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-cream font-label font-semibold text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-sm">
                      <Crown className="w-3 h-3 text-gold" /> {room.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display font-medium italic text-3xl text-cream mb-2 tracking-tight group-hover:text-gold transition-colors duration-500 ease-luxury">{room.name}</h3>
                  <p className="font-body text-base text-cream/70 mb-6 line-clamp-2">{room.desc}</p>
                  <div className="flex gap-6 mb-8 border-t border-cream/10 pt-6 mt-auto">
                    <div className="flex flex-col items-center gap-1 text-cream">
                      <span className="text-xs font-body font-medium">{room.size}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-cream">
                      <span className="text-xs font-body font-medium">{room.guests}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-cream">
                      <span className="text-xs font-body font-medium">{room.feature}</span>
                    </div>
                  </div>
                  <button className="w-full bg-transparent border border-cream/30 text-cream font-label font-semibold text-xs tracking-[0.2em] py-4 rounded-xl hover:bg-cream hover:border-cream hover:text-burgundy transition-all duration-500 ease-luxury flex items-center justify-center gap-2 btn-shimmer hover:-translate-y-[2px] hover:scale-[1.02] active:scale-[0.98]">
                    <span className="relative z-10 flex items-center gap-2">RESERVE <ArrowRight className="w-4 h-4" /></span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-cream py-24 lg:py-32 border-t border-burgundy/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16 relative z-10">
            <span className="font-label font-semibold text-xs text-burgundy tracking-[0.25em] mb-4 block uppercase">The Facilities</span>
            <h2 className="font-display font-medium text-4xl lg:text-5xl text-burgundy tracking-tight">An Oasis of Indulgence</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: "Royal Spa", desc: "Ancient wellness traditions blended with modern therapeutic mastery." },
              { icon: <Flower2 className="w-8 h-8" />, title: "Infinity Pool", desc: "A temperature-controlled sanctuary overlooking the valley." },
              { icon: <Leaf className="w-8 h-8" />, title: "Private Gardens", desc: "Immaculately manicured landscapes for solitary reflection." },
              { icon: <Dumbbell className="w-8 h-8" />, title: "Fitness Studio", desc: "State-of-the-art equipment with personal trainers on demand." },
              { icon: <BookOpen className="w-8 h-8" />, title: "Library Lounge", desc: "Rare editions and quiet corners paired with fine cognac." },
              { icon: <Clapperboard className="w-8 h-8" />, title: "Private Cinema", desc: "Exclusive screenings in a plush, sound-engineered theatre." },
            ].map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 100} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-burgundy/10 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-burgundy group-hover:shadow-[0_10px_30px_rgba(61,12,30,0.15)] transition-all duration-500 ease-luxury group-hover:-translate-y-2">
                  <span className="text-burgundy group-hover:text-gold group-hover:scale-110 transition-all duration-500">{a.icon}</span>
                </div>
                <h3 className="font-display font-medium text-2xl text-burgundy mb-2">{a.title}</h3>
                <p className="font-body text-burgundy/70 text-sm lg:text-base max-w-[250px]">{a.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="bg-burgundy py-24 lg:py-32 relative text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <Wine className="w-10 h-10 text-gold mb-4 mx-auto animate-float-premium" />
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-cream tracking-tight mb-4">Mastery of Flavour</h2>
            <p className="font-body text-lg text-cream/70 max-w-2xl mx-auto">Three distinct venues, each offering an unforgettable gastronomic journey guided by world-class chefs.</p>
          </ScrollReveal>

          <ScrollReveal type="mask" className="w-full h-[30vh] min-h-[300px] lg:h-[60vh] rounded-[2rem] overflow-hidden mb-12 lg:mb-16 relative group shadow-2xl">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=960&q=55&fm=webp" alt="Culinary Excellence" className="w-full h-full object-cover transition-transform duration-[2s] ease-luxury group-hover:scale-[1.03] opacity-90" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent pointer-events-none" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal type="mask" className="rounded-3xl overflow-hidden relative group h-[400px] lg:h-[600px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-700 ease-luxury">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=55&fm=webp" className="w-full h-full object-cover transition-all duration-[1.5s] ease-luxury group-hover:scale-[1.03]" alt="Aurum Fine Dining" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
                <span className="bg-gold text-burgundy w-max font-label font-semibold text-xs px-3 py-1 rounded-full mb-4 shadow-sm">SIGNATURE</span>
                <h3 className="font-display font-medium italic text-4xl text-cream mb-2 tracking-tight group-hover:text-gold transition-colors duration-500 ease-luxury">Aurum</h3>
                <p className="font-body text-cream/90 mb-6 max-w-sm">Award-winning fine dining fusing global techniques with rare Indian ingredients.</p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {[
                { name: "The Cellar", desc: "Speakeasy-style lounge with vintage spirits and live jazz.", img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=640&q=55&fm=webp" },
                { name: "Veranda", desc: "Open-air botanical dining beneath the stars.", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=640&q=55&fm=webp" },
              ].map((d, i) => (
                <ScrollReveal type="mask" key={d.name} delay={i * 150} className="rounded-3xl overflow-hidden relative group h-[300px] lg:h-[calc(300px-0.75rem)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-700 ease-luxury">
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

      {/* Experiences */}
      <section id="experiences" className="bg-cream py-24 lg:py-32 overflow-hidden border-t border-burgundy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-16 lg:mb-24">
            <Sparkles className="w-10 h-10 text-gold mb-4 mx-auto" />
            <h2 className="font-display font-medium text-4xl lg:text-6xl text-burgundy tracking-tight">Curated Experiences</h2>
            <p className="font-body text-lg text-burgundy/70 max-w-2xl mx-auto mt-4">Discover moments crafted exclusively for you, elevating your stay into a timeless memory.</p>
          </ScrollReveal>

          <div className="space-y-16 lg:space-y-32">
            {[
              { title: "Sunset Dining", desc: "Dine under the vibrant hues of the Indian sky. A private table set on the dunes, a bespoke menu crafted by our Executive Chef.", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=640&q=55&fm=webp", icon: <Sunset className="w-8 h-8" />, reverse: false },
              { title: "Private Cultural Tours", desc: "Immerse yourself in the profound heritage of Bihar. Our expert historians will guide you through ancient ruins and spiritual epicentres.", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=640&q=55&fm=webp", icon: <MapPin className="w-8 h-8" />, reverse: true },
              { title: "Royal Spa Rituals", desc: "Reawaken your senses with treatments once reserved for royalty. Utilising rare herbs, gold-infused oils, and ancient techniques.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=640&q=55&fm=webp", icon: <Flower2 className="w-8 h-8" />, reverse: false },
            ].map((exp) => (
              <div key={exp.title} className={`flex flex-col ${exp.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20 group`}>
                <ScrollReveal type="mask" className="w-full lg:w-1/2 h-[40vh] lg:h-[60vh] overflow-hidden rounded-[2rem] relative shadow-xl shadow-burgundy/10">
                  <img src={exp.img} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-luxury" alt={exp.title} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
                </ScrollReveal>
                <ScrollReveal className="w-full lg:w-1/2">
                  <span className="text-gold mb-6 block group-hover:-translate-y-1 transition-transform duration-500 ease-luxury">{exp.icon}</span>
                  <h3 className="font-display font-medium italic text-3xl lg:text-5xl text-burgundy mb-6 tracking-tight">{exp.title}</h3>
                  <p className="font-body text-lg text-burgundy/70 mb-8 leading-relaxed">{exp.desc}</p>
                  <a href="#" className="font-label font-semibold text-xs text-burgundy tracking-[0.2em] uppercase nav-link inline-flex items-center gap-2 group-hover:text-gold">
                    Discover More <ArrowRight className="w-4 h-4" />
                  </a>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-burgundy py-24 lg:py-32 overflow-hidden border-t border-cream/5">
        <ScrollReveal className="px-6 lg:px-12 mb-16 text-center max-w-4xl mx-auto">
          <span className="font-label font-medium text-xs text-gold tracking-[0.25em] mb-4 block uppercase">The Visual Narrative</span>
          <h2 className="font-display font-medium text-4xl lg:text-5xl text-cream tracking-tight mb-4">A Glimpse of Perfection</h2>
          <p className="font-body text-lg text-cream/70">Explore the elegant contours, ambient lighting, and lush surroundings that make up the tapestry of our resort.</p>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 lg:px-12 space-y-6 max-w-[100rem] mx-auto">
          {[
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=50&fm=webp",
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&q=50&fm=webp",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=50&fm=webp",
            "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=600&q=50&fm=webp",
            "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=600&q=50&fm=webp",
          ].map((src, i) => (
            <ScrollReveal type="scale" delay={i * 100} key={src} className="relative group overflow-hidden rounded-2xl break-inside-avoid">
              <img src={src} alt={`Resort Gallery ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-luxury opacity-90 group-hover:opacity-100" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-700 ease-luxury mix-blend-overlay" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-24 lg:py-32 relative overflow-hidden">
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
      <section className="bg-cream py-16 border-t border-burgundy/5 flex overflow-hidden relative">
        <ScrollReveal className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 w-full px-6">
          {[
            { icon: <Trophy className="w-10 h-10" />, label: "World Luxury Hotel Awards 2023" },
            { icon: <Star className="w-10 h-10" />, label: "Condé Nast Gold List" },
            { icon: <Medal className="w-10 h-10" />, label: "Michelin Star (Aurum)" },
            { icon: <Crown className="w-10 h-10" />, label: "Asia's Best Design 2022" },
          ].map((a) => (
            <div key={a.label} className="flex flex-col items-center group">
              <span className="text-burgundy/40 mb-3 group-hover:text-gold group-hover:-translate-y-1 transition-all duration-500 ease-luxury">{a.icon}</span>
              <span className="font-label font-semibold text-[10px] text-burgundy/60 tracking-[0.2em] uppercase text-center max-w-[140px] group-hover:text-burgundy transition-colors duration-500">{a.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section id="reserve" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden rounded-t-[3rem] mt-12 bg-burgundy">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=960&q=50&fm=webp" alt="Aerial Resort View" className="w-full h-full object-cover animate-slow-zoom mix-blend-overlay opacity-50" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-burgundy/60 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent" />
        </div>

        <ScrollReveal className="relative z-10 px-6 flex flex-col items-center">
          <img src="/logo.png" alt="Diamond Resort" className="w-48 h-48 object-contain mb-6 animate-float-premium" />
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
