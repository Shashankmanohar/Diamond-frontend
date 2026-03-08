import { useEffect } from "react";
import { API_ENDPOINTS } from "@/config";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Utensils, Star, ArrowRight, Users, Clock, Sparkles, ChefHat, CalendarPlus, PartyPopper, Briefcase, Heart, Gift, GlassWater, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const cateringImages = {
  hero: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1280&q=55&fm=webp",
  intro: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=640&q=55&fm=webp",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=480&q=50&fm=webp",
  engagement: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=480&q=50&fm=webp",
  reception: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=480&q=50&fm=webp",
  birthday: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=480&q=50&fm=webp",
  corporate: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=480&q=50&fm=webp",
  private: "https://images.unsplash.com/photo-1529543544282-ea702407d1df?w=480&q=50&fm=webp",
  buffet1: "https://images.unsplash.com/photo-1555244162-803834f70033?w=480&q=50&fm=webp",
  buffet2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=480&q=50&fm=webp",
  livecounter: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=480&q=50&fm=webp",
  dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=480&q=50&fm=webp",
  plated: "https://images.unsplash.com/photo-1546039907-7e6588fddae0?w=480&q=50&fm=webp",
  gallery1: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=320&q=50&fm=webp",
  gallery2: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=320&q=50&fm=webp",
  gallery3: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=320&q=50&fm=webp",
  gallery4: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=320&q=50&fm=webp",
  gallery5: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=320&q=50&fm=webp",
  gallery6: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=320&q=50&fm=webp",
  reservation: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=960&q=50&fm=webp",
  closing: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=960&q=50&fm=webp",
};

const cateringServices = [
  { name: "Wedding Catering", desc: "Grand buffets and plated dinners crafted for your most magical day.", icon: <Heart className="w-6 h-6" />, img: cateringImages.wedding },
  { name: "Engagement Catering", desc: "Intimate menus celebrating the start of your beautiful journey together.", icon: <Sparkles className="w-6 h-6" />, img: cateringImages.engagement },
  { name: "Reception Catering", desc: "Elegant multi-cuisine spreads for grand receptions and post-ceremony celebrations.", icon: <GlassWater className="w-6 h-6" />, img: cateringImages.reception },
  { name: "Birthday Catering", desc: "Vibrant menus with themed dessert stations for milestone birthday celebrations.", icon: <Gift className="w-6 h-6" />, img: cateringImages.birthday },
  { name: "Corporate Event Catering", desc: "Professional catering solutions for conferences, galas, and business gatherings.", icon: <Briefcase className="w-6 h-6" />, img: cateringImages.corporate },
  { name: "Private Celebration", desc: "Bespoke culinary experiences for intimate gatherings and exclusive occasions.", icon: <PartyPopper className="w-6 h-6" />, img: cateringImages.private },
];

const signatureMenus = [
  { name: "Traditional Indian Wedding Buffet", desc: "A lavish spread of regional delicacies, live tandoor, and royal Mughlai specialties.", img: cateringImages.buffet1 },
  { name: "Luxury Multi-Cuisine Buffet", desc: "International cuisine featuring Continental, Asian, and Indian gourmet selections.", img: cateringImages.buffet2 },
  { name: "Live Food Counters", desc: "Interactive stations with live pasta, sushi, chaat, and grill counters.", img: cateringImages.livecounter },
  { name: "Dessert & Sweet Stations", desc: "Artisanal desserts, chocolate fountains, and traditional Indian mithai.", img: cateringImages.dessert },
  { name: "Custom Premium Menus", desc: "Fully bespoke menus designed in consultation with our executive chef.", img: cateringImages.plated },
];

const processSteps = [
  { step: "01", title: "Choose Event Type", desc: "Select from wedding, engagement, reception, birthday, corporate, or private celebration." },
  { step: "02", title: "Select Guest Count", desc: "Tell us your expected number of guests for precise planning and portioning." },
  { step: "03", title: "Customize Menu", desc: "Work with our chef to curate a bespoke menu tailored to your preferences." },
  { step: "04", title: "Finalize Package", desc: "Review pricing, service style, and logistics. We handle every detail." },
  { step: "05", title: "Enjoy the Experience", desc: "Sit back and let your guests savour a world-class dining experience." },
];

const Dining = () => {
  useEffect(() => {
    document.title = "Luxury Event Catering | Diamond Resort Patna";
  }, []);
  const [guestCount, setGuestCount] = useState(100);
  const [formData, setFormData] = useState({ name: "", phone: "", eventDate: "", eventType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleCateringSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(API_ENDPOINTS.BOOKINGS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "event",
          name: formData.name,
          email: formData.name + "@enquiry.local",
          phone: formData.phone,
          event_type: formData.eventType || null,
          guest_count: guestCount,
          special_requests: formData.message || null,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit enquiry");

      toast.success("Enquiry submitted! Our team will contact you shortly.");
      setFormData({ name: "", phone: "", eventDate: "", eventType: "", message: "" });
      setGuestCount(100);
    } catch (err) {
      console.error("Enquiry Error:", err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground pb-24 lg:pb-0">
      <Navbar />

      {/* ───── Hero ───── */}
      <header className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-primary overflow-hidden">
          <img
            src={cateringImages.hero}
            alt="Luxury catering setup at The Diamond Resort"
            className="w-full h-full object-cover animate-slow-zoom scale-110 origin-center opacity-80"
            fetchPriority="high" decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/90" />
        </div>

        <div className="relative z-20 w-full px-5 lg:px-12 flex flex-col items-center text-center mt-12 lg:mt-0">
          <div className="overflow-hidden mb-6">
            <div className="flex items-center gap-4 text-accent" style={{ animation: "heavyRevealUp 1.2s var(--ease-luxury) 0.8s both" }}>
              <Utensils className="w-5 h-5" />
              <span className="font-label font-medium text-xs tracking-[0.3em] uppercase">Premium Catering</span>
              <Utensils className="w-5 h-5" />
            </div>
          </div>

          <h1 className="font-display font-normal leading-[1.1] text-primary-foreground tracking-tight mb-8" style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}>
            <div className="overflow-hidden pb-2">
              <span className="block" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1s both" }}>Luxury Catering for</span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block italic shimmer-text" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.2s both" }}>Your Special Events.</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12 max-w-2xl">
            <p className="font-body text-primary-foreground/90 leading-relaxed" style={{ fontSize: "clamp(1rem, 3.5vw, 1.25rem)", animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.4s both" }}>
              Exquisite catering services crafted for unforgettable celebrations at Bihar's most exclusive resort. We do not operate a public restaurant — instead, every culinary experience is designed exclusively for events hosted at our venue.
            </p>
          </div>

          <div className="overflow-hidden" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.6s both" }}>
            <a href="#enquiry" className="btn-shimmer inline-flex items-center gap-3 bg-accent text-accent-foreground font-label font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-500 ease-luxury">
              <span className="relative z-10">PLAN YOUR EVENT CATERING</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* ───── Introduction ───── */}
      <section className="bg-background py-24 md:py-32 px-5 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 blur-3xl z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-r from-accent to-primary/20 rounded-full animate-float-premium" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Our Philosophy</span>
            <h2 className="font-display font-light italic text-foreground tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}>
              "We believe every celebration deserves a culinary experience as extraordinary as the occasion itself."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-foreground/30" />
              <p className="font-label font-semibold text-xs text-foreground tracking-[0.25em] uppercase">The Diamond Resort</p>
              <div className="w-12 h-[1px] bg-foreground/30" />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <ScrollReveal type="mask" className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] relative overflow-hidden rounded-[2rem] group">
              <img src={cateringImages.intro} alt="Luxury event catering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-luxury" loading="lazy" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
            </ScrollReveal>

            <ScrollReveal className="w-full lg:w-1/2">
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                The Diamond Resort provides premium catering services designed exclusively for events hosted at our venue. From grand wedding feasts to intimate celebrations, our culinary team creates bespoke dining experiences that elevate every occasion.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                Each catering experience is fully customized based on guest count, cuisine preferences, and event type. Our executive chef personally oversees every menu, ensuring impeccable quality, exquisite presentation, and flavours that linger in memory.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: <ChefHat className="w-5 h-5" />, label: "Executive Chef Led" },
                  { icon: <Star className="w-5 h-5" />, label: "Fully Customizable" },
                  { icon: <Users className="w-5 h-5" />, label: "50–2000 Guests" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 group">
                    <span className="text-accent group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 ease-luxury">{item.icon}</span>
                    <span className="font-label font-semibold text-xs text-foreground tracking-widest uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───── Catering Services ───── */}
      <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">What We Offer</span>
            <h2 className="font-display font-medium text-primary-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Our Catering Services
            </h2>
            <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-4 leading-relaxed">
              Each catering experience is customized based on guest count, cuisine preferences, and event type.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cateringServices.map((svc, i) => (
              <ScrollReveal key={svc.name} type="scale" delay={i * 100}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-[1.5rem] overflow-hidden group hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(61,12,30,0.25)] transition-all duration-[600ms] ease-luxury border border-primary-foreground/10 hover:border-accent/30">
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img src={svc.img} alt={svc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-luxury opacity-90 group-hover:opacity-100" loading="lazy" />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-primary-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-foreground/20">
                      <span className="text-accent">{svc.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-medium text-xl text-primary-foreground mb-2 group-hover:text-accent transition-colors duration-500 ease-luxury">{svc.name}</h3>
                    <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Signature Menus ───── */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Culinary Showcase</span>
            <h2 className="font-display font-medium text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Signature Catering Menus
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto mt-4 leading-relaxed">
              From lavish Indian buffets to interactive live counters — every menu is a curated masterpiece.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {signatureMenus.map((menu, i) => (
              <ScrollReveal key={menu.name} type="scale" delay={i * 100}>
                <div className="group rounded-[1.5rem] overflow-hidden bg-muted border border-border/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(61,12,30,0.12)] transition-all duration-[600ms] ease-luxury">
                  <div className="relative h-52 overflow-hidden">
                    <img src={menu.img} alt={menu.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-luxury" loading="lazy" />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-medium text-lg text-foreground mb-1 group-hover:text-accent transition-colors duration-500">{menu.name}</h3>
                    <p className="font-body text-sm text-foreground/60 leading-relaxed">{menu.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">Simple Process</span>
            <h2 className="font-display font-medium text-primary-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              How Our Catering Works
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {processSteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 100}>
                <div className="flex gap-6 lg:gap-10 items-start group py-8 border-b border-primary-foreground/10 last:border-b-0 hover:bg-primary-foreground/5 px-4 rounded-2xl transition-colors duration-500 ease-luxury">
                  <span className="font-display text-4xl lg:text-5xl font-light text-accent/30 group-hover:text-accent transition-colors duration-500 flex-shrink-0 leading-none pt-1">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display font-medium text-xl text-primary-foreground mb-2 group-hover:text-accent transition-colors duration-500">{s.title}</h3>
                    <p className="font-body text-primary-foreground/60 leading-relaxed">{s.desc}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-accent/20 group-hover:text-accent flex-shrink-0 mt-1 transition-colors duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Catering Packages ───── */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/5">
        <div className="max-w-4xl mx-auto px-5 lg:px-12 text-center">
          <ScrollReveal>
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Tailored Pricing</span>
            <h2 className="font-display font-medium text-foreground tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Catering Packages
            </h2>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              Catering charges depend on guest count, cuisine selection, and service style. Our team will design a custom catering package that fits your event requirements perfectly.
            </p>
            <div className="bg-muted rounded-[2rem] p-8 lg:p-12 border border-border/10 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { label: "Silver Package", desc: "From ₹1,500 per plate", detail: "Standard buffet with 12+ dishes" },
                  { label: "Gold Package", desc: "From ₹2,500 per plate", detail: "Premium buffet with live counters" },
                  { label: "Diamond Package", desc: "Custom Pricing", detail: "Fully bespoke luxury catering" },
                ].map((pkg) => (
                  <div key={pkg.label} className="group">
                    <h3 className="font-display text-lg text-foreground mb-2">{pkg.label}</h3>
                    <p className="font-label font-semibold text-accent text-sm tracking-wider mb-1">{pkg.desc}</p>
                    <p className="font-body text-sm text-foreground/50">{pkg.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-label text-xs text-foreground/50 tracking-widest uppercase">
              All catering services are available exclusively for events hosted at the resort venue.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── Gallery ───── */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Visual Journey</span>
            <h2 className="font-display font-medium text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Catering Gallery
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
            {[
              { img: cateringImages.gallery1, span: "col-span-2 md:col-span-1 row-span-2", h: "h-[30vh] md:h-full" },
              { img: cateringImages.gallery2, span: "", h: "h-[25vh] md:h-[30vh]" },
              { img: cateringImages.gallery3, span: "", h: "h-[25vh] md:h-[30vh]" },
              { img: cateringImages.gallery4, span: "", h: "h-[25vh] md:h-[30vh]" },
              { img: cateringImages.gallery5, span: "col-span-2 md:col-span-1", h: "h-[25vh] md:h-[30vh]" },
              { img: cateringImages.gallery6, span: "col-span-2 md:col-span-1", h: "h-[25vh] md:h-[30vh]" },
            ].map((item, i) => (
              <ScrollReveal key={i} type="mask" delay={i * 80} className={item.span}>
                <div className={`${item.h} rounded-2xl overflow-hidden group relative`}>
                  <img src={item.img} alt={`Catering gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-luxury" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Enquiry / Reservation ───── */}
      <section id="enquiry" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary">
          <img src={cateringImages.reservation} alt="Catering enquiry" className="w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-12">
            <CalendarPlus className="w-10 h-10 text-accent mx-auto mb-6 animate-float-premium" />
            <h2 className="font-display font-medium text-primary-foreground tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Plan Your Event Catering
            </h2>
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
              Share your event details and our team will craft a bespoke catering proposal for you.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleCateringSubmit} className="bg-primary-foreground/5 backdrop-blur-xl rounded-[2rem] p-6 lg:p-10 border border-primary-foreground/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-2 block">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} placeholder="Your Name" required className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground font-body text-base px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 placeholder:text-primary-foreground/30 transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-2 block">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 98765 43210" required className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground font-body text-base px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 placeholder:text-primary-foreground/30 transition-colors duration-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-2 block">Event Date</label>
                  <input type="date" value={formData.eventDate} onChange={(e) => setFormData((f) => ({ ...f, eventDate: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground font-body text-base px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors duration-300" />
                </div>
                <div>
                  <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-2 block">Event Type</label>
                  <select value={formData.eventType} onChange={(e) => setFormData((f) => ({ ...f, eventType: e.target.value }))} className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground font-body text-base px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors duration-300 appearance-none">
                    <option value="">Select Event</option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Private Celebration</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-3 block">
                  Expected Guests: <span className="text-accent font-semibold">{guestCount}</span>
                </label>
                <input
                  type="range" min={50} max={2000} step={50} value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-1 bg-primary-foreground/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(201,168,76,0.4)]"
                />
                <div className="flex justify-between mt-2">
                  <span className="font-label text-[10px] text-primary-foreground/40 tracking-wider">50</span>
                  <span className="font-label text-[10px] text-primary-foreground/40 tracking-wider">2000</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="font-label text-xs text-primary-foreground/60 tracking-widest uppercase mb-2 block">Special Requirements</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))} placeholder="Cuisine preferences, dietary needs, service style..." className="w-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground font-body text-base px-4 py-3.5 rounded-xl focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 placeholder:text-primary-foreground/30 transition-colors duration-300 resize-none" />
              </div>

              <button type="submit" disabled={submitting} className="w-full btn-shimmer bg-accent text-accent-foreground font-label font-semibold text-sm tracking-[0.2em] py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] active:scale-[0.98] transition-all duration-500 ease-luxury flex items-center justify-center gap-3 disabled:opacity-50">
                <span className="relative z-10">{submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}</span>
                <ArrowRight className="relative z-10 w-4 h-4" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── Call to Experience ───── */}
      <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-primary">
          <img src={cateringImages.closing} alt="Grand celebration" className="w-full h-full object-cover animate-slow-zoom opacity-50 mix-blend-overlay" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/80" />
        </div>
        <ScrollReveal className="relative z-10 text-center px-5 max-w-3xl mx-auto">
          <Sparkles className="w-12 h-12 text-accent mb-6 mx-auto animate-float-premium" />
          <h2 className="font-display font-light italic text-primary-foreground mb-6 tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
            Every Event, a Culinary Masterpiece
          </h2>
          <p className="font-body text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-10">
            From intimate celebrations to grand weddings, our catering transforms every event into an extraordinary culinary journey. Let us create an unforgettable experience for your guests.
          </p>
          <Link
            to="/reserve"
            className="btn-shimmer inline-flex items-center gap-3 bg-primary-foreground text-primary font-label font-semibold text-xs tracking-[0.2em] px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(245,236,215,0.2)] active:scale-95 transition-all duration-500 ease-luxury"
          >
            <span className="relative z-10">BOOK YOUR EVENT</span>
            <ArrowRight className="relative z-10 w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Dining;
