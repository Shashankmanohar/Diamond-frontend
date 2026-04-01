import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, ArrowRight, Star, Mountain, TreePine, Heart, Briefcase, Flame, Music, Sunset, Waves, Quote } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const experienceImages = {
  hero: "/Resortphoto/hero_home.webp",
  adventure: "/Resortphoto/gallery_3.webp",
  nature: "/Resortphoto/garden_view.webp",
  spa: "/Resortphoto/exp_spa.webp",
  cultural: "/Resortphoto/exp_cultural.webp",
  dining: "/Resortphoto/dining_main.webp",
  celebration: "/Resortphoto/suite_diamond.webp",
  candlelight: "/Resortphoto/exp_sunset.webp",
  sunrise: "/Resortphoto/hero_suites.webp",
  poolside: "/Resortphoto/gallery_1.webp",
  bonfire: "/Resortphoto/gallery_2.webp",
  gallery1: "/Resortphoto/gallery_1.webp",
  gallery2: "/Resortphoto/gallery_2.webp",
  gallery3: "/Resortphoto/gallery_3.webp",
  gallery4: "/Resortphoto/gallery_4.webp",
  gallery5: "/Resortphoto/gallery_5.webp",
  gallery6: "/Resortphoto/gallery_6.webp",
  gallery7: "/Resortphoto/gallery_7.webp",
  gallery8: "/Resortphoto/hero_home.webp",
  cta: "/Resortphoto/arch_signature.webp",
};

const categories = [
  { name: "Adventure Activities", desc: "Thrilling experiences from guided treks to exclusive water sports.", icon: <Mountain className="w-7 h-7" />, img: experienceImages.adventure },
  { name: "Nature Exploration", desc: "Discover pristine landscapes, botanical gardens, and wildlife sanctuaries.", icon: <TreePine className="w-7 h-7" />, img: experienceImages.nature },
  { name: "Luxury Spa & Wellness", desc: "Ancient healing traditions with modern therapeutic excellence.", icon: <Waves className="w-7 h-7" />, img: experienceImages.spa },
  { name: "Cultural Experiences", desc: "Immerse in local arts, heritage walks, and artisan workshops.", icon: <Sparkles className="w-7 h-7" />, img: experienceImages.cultural },
  { name: "Fine Dining Experiences", desc: "Private chef's tables, wine pairings, and culinary masterclasses.", icon: <Flame className="w-7 h-7" />, img: experienceImages.dining },
  { name: "Private Celebrations", desc: "Bespoke events crafted for life's most extraordinary moments.", icon: <Heart className="w-7 h-7" />, img: experienceImages.celebration },
];

const signatureExperiences = [
  {
    name: "Ganga Sunset Ritual",
    desc: "Experience the profound silence of the sacred river as the sky transforms into a canvas of gold and violet. A private boat journey followed by a candlelit dinner on the banks.",
    img: experienceImages.candlelight,
  },
  {
    name: "Ancient Heritage Odyssey",
    desc: "Walk through the echoes of time with our resident historian. Explore the nearby spiritual centers and architectural marvels that define Bihar’s 2500-year-old legacy.",
    img: experienceImages.sunrise,
  },
  {
    name: "Vedic Wellness Retreat",
    desc: "A personalized session of sound healing and Ayurvedic therapeutic mastery, followed by a guided meditation in our secret garden pavilion.",
    img: experienceImages.poolside,
  },
  {
    name: "Artisanal Bonfire Gala",
    desc: "Gather around a crackling bonfire under an endless star-filled sky. Local musicians perform soulful melodies while our chefs prepare artisan delicacies.",
    img: experienceImages.bonfire,
  },
];

const testimonials = [
  { name: "Priya & Arjun Mehta", text: "The private candlelight dinner was the most romantic experience of our lives. Every detail was flawless — from the menu to the setting under the stars.", rating: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Rajesh Khanna", text: "The sunrise trek was absolutely magical. Waking up at dawn felt worth it the moment we saw that view. The breakfast in the wilderness was an incredible bonus.", rating: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Ananya Sharma", text: "We celebrated our anniversary with a poolside evening — it exceeded every expectation. The resort's attention to detail is simply unmatched in Bihar.", rating: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
];

const galleryImages = [
  { src: experienceImages.gallery1, alt: "Resort exterior at sunset", span: "col-span-2 row-span-2" },
  { src: experienceImages.gallery2, alt: "Luxury pool area", span: "col-span-1 row-span-1" },
  { src: experienceImages.gallery3, alt: "Premium suite terrace", span: "col-span-1 row-span-1" },
  { src: experienceImages.gallery4, alt: "Spa relaxation room", span: "col-span-1 row-span-2" },
  { src: experienceImages.gallery5, alt: "Resort architecture", span: "col-span-1 row-span-1" },
  { src: experienceImages.gallery6, alt: "Fine dining setup", span: "col-span-1 row-span-1" },
  { src: experienceImages.gallery7, alt: "Garden courtyard", span: "col-span-2 row-span-1" },
];

import SEO from "@/components/SEO";

const Experiences = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground pb-24 lg:pb-0">
      <SEO
        title="Curated Experiences & Activities | Diamond Resort & Spa"
        description="Immerse yourself in local culture with our curated experiences. From Ganga sunset rituals to Vedic wellness retreats, your adventure awaits."
        keywords="luxury experiences Bihar, Ganga sunset dining, cultural tours Bihar, wellness retreat Patna, Diamond Resort activities"
      />
      <Navbar />

      {/* ───── Hero ───── */}
      <header className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-primary overflow-hidden">
          <img
            src={experienceImages.hero}
            alt="Unforgettable experiences at The Diamond Resort"
            className="w-full h-full object-cover animate-slow-zoom scale-110 origin-center opacity-80"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/90" />
        </div>

        <div className="relative z-20 w-full px-5 lg:px-12 flex flex-col items-center text-center mt-12 lg:mt-0">
          <div className="overflow-hidden mb-6">
            <div className="flex items-center gap-4 text-accent" style={{ animation: "heavyRevealUp 1.2s var(--ease-luxury) 0.8s both" }}>
              <Sparkles className="w-5 h-5" />
              <span className="font-label font-medium text-xs tracking-[0.3em] uppercase">Curated Moments</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          <h1 className="font-display font-normal leading-[1.1] text-primary-foreground tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
            <div className="overflow-hidden pb-2">
              <span className="block" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1s both" }}>Curated</span>
            </div>
            <div className="overflow-hidden pb-2">
              <span className="block italic shimmer-text" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.2s both" }}>Experiences.</span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12 max-w-2xl">
            <p className="font-body text-primary-foreground/90 leading-relaxed" style={{ fontSize: "clamp(1rem, 3.5vw, 1.25rem)", animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.4s both" }}>
              Experience a collection of bespoke journeys designed to awaken your senses and immerse you in the profound spiritual and cultural heritage of Bihar.
            </p>
          </div>

          <div className="overflow-hidden" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.6s both" }}>
            <a href="#categories" className="btn-shimmer inline-flex items-center gap-3 bg-accent text-accent-foreground font-label font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-500 ease-luxury">
              <span className="relative z-10">EXPLORE EXPERIENCES</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-12 w-full justify-center z-20" style={{ animation: "heavyRevealUp 1.4s var(--ease-luxury) 1.8s both" }}>
          <div className="flex flex-col items-center gap-4">
            <span className="font-label text-xs text-primary-foreground/60 tracking-[0.3em]">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent animate-float-premium" />
          </div>
        </div>
      </header>

      {/* ───── Introduction ───── */}
      <section className="bg-background py-24 md:py-32 px-5 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 blur-3xl z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-r from-accent to-primary/20 rounded-full animate-float-premium" />
        </div>
        <ScrollReveal className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Our Philosophy</span>
          <h2 className="font-display font-light italic text-foreground tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}>
            "We don't just provide activities; we craft portals to a more profound state of being."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-foreground/30" />
            <p className="font-label font-semibold text-xs text-foreground tracking-[0.25em] uppercase">The Diamond Resort</p>
            <div className="w-12 h-[1px] bg-foreground/30" />
          </div>
        </ScrollReveal>
      </section>

      {/* ───── Experience Categories ───── */}
      <section id="categories" className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">What Awaits You</span>
            <h2 className="font-display font-medium text-primary-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Experience Categories
            </h2>
            <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto mt-4 leading-relaxed">
              Six curated pillars of indulgence, each designed to deliver moments of wonder.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.name} type="scale" delay={i * 100}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-[1.5rem] overflow-hidden group hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(61,12,30,0.25)] transition-all duration-[600ms] ease-luxury border border-primary-foreground/10 hover:border-accent/30">
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-luxury opacity-90 group-hover:opacity-100" loading="lazy" />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-foreground/20">
                      <span className="text-accent">{cat.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-medium text-xl text-primary-foreground mb-2 group-hover:text-accent transition-colors duration-500 ease-luxury">{cat.name}</h3>
                    <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Signature Experiences ───── */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Handcrafted Moments</span>
            <h2 className="font-display font-medium text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Signature Experiences
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto mt-4 leading-relaxed">
              Our most beloved experiences — each one a masterpiece of hospitality and artistry.
            </p>
          </ScrollReveal>

          <div className="space-y-20 lg:space-y-32">
            {signatureExperiences.map((exp, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <ScrollReveal key={exp.name}>
                  <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-[60vh] relative overflow-hidden rounded-[2rem] group">
                      <img src={exp.img} alt={exp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-luxury" loading="lazy" />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-[1s] ease-luxury" />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">Experience {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display font-medium tracking-tight text-foreground mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                        {exp.name}
                      </h3>
                      <p className="font-body text-lg text-foreground/70 leading-relaxed mb-8">{exp.desc}</p>
                      <Link
                        to="/reserve"
                        className="btn-shimmer inline-flex items-center gap-3 bg-primary text-primary-foreground font-label font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(61,12,30,0.2)] active:scale-95 transition-all duration-500 ease-luxury"
                      >
                        <span className="relative z-10">LEARN MORE</span>
                        <ArrowRight className="relative z-10 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Immersive Gallery ───── */}
      <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">Visual Journey</span>
            <h2 className="font-display font-medium text-primary-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              Immersive Gallery
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} type="scale" delay={i * 80} className={img.span}>
                <div
                  className="w-full h-full rounded-2xl overflow-hidden group cursor-pointer relative"
                  onClick={() => setLightboxImage(img.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxImage(img.src)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-luxury" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={lightboxImage.replace("w=600", "w=1600")}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </section>

      {/* ───── Guest Testimonials ───── */}
      <section className="bg-background py-24 lg:py-32 border-t border-border/5">
        <div className="max-w-4xl mx-auto px-5 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <span className="font-label font-semibold text-xs text-foreground tracking-[0.25em] mb-4 block uppercase">Guest Voices</span>
            <h2 className="font-display font-medium text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
              What Our Guests Say
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative bg-muted rounded-[2rem] p-8 lg:p-12 border border-border/10">
              <Quote className="w-10 h-10 text-accent/30 mb-6" />
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-body text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeTestimonial].img}
                    alt={testimonials[activeTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display font-medium text-foreground text-sm">{testimonials[activeTestimonial].name}</p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ease-luxury ${i === activeTestimonial ? "bg-accent w-8" : "bg-foreground/20 hover:bg-foreground/40"}`}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── Booking CTA ───── */}
      <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-primary">
          <img src={experienceImages.cta} alt="Craft your perfect experience" className="w-full h-full object-cover opacity-50 mix-blend-overlay" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>

        <ScrollReveal className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24">
          <Sparkles className="w-12 h-12 text-accent mb-6 mx-auto animate-float-premium" />
          <h2 className="font-display font-medium text-primary-foreground tracking-tight leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Craft Your Perfect<br /><em className="font-light italic shimmer-text">Experience</em>
          </h2>
          <p className="font-body text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether it's a sunrise trek or a private celebration, our concierge team will design every detail to surpass your imagination.
          </p>
          <Link
            to="/reserve"
            className="btn-shimmer inline-flex items-center gap-3 bg-accent text-accent-foreground font-label font-semibold text-xs tracking-[0.2em] px-10 py-5 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(201,168,76,0.3)] active:scale-95 transition-all duration-500 ease-luxury"
          >
            <span className="relative z-10">PLAN YOUR EXPERIENCE</span>
            <ArrowRight className="relative z-10 w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
