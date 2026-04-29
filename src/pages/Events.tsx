import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import { Heart, PartyPopper, GlassWater, Briefcase, CalendarHeart, ArrowRight, CheckCircle2, Star } from "lucide-react";
import SEO from "@/components/SEO";

const eventDetails: Record<string, any> = {
  "wedding": {
    title: "Wedding Venues",
    subtitle: "Your Forever Begins Here",
    description: "Exchange vows in our breathtaking venues. From the grand lawn to elegant banquet halls, we craft the perfect backdrop for your most magical day. Our expert team ensures every detail reflects your unique love story.",
    icon: <Heart className="w-12 h-12 text-accent" />,
    image: "/Resortphoto/suite_diamond.webp",
    features: ["Dedicated Wedding Planner", "Customized Menu Tasting", "Bridal Suite Access", "Advanced AV Setup", "Floral & Decor Consultation", "Photography Locations"],
    gallery: ["/Resortphoto/gallery_1.webp", "/Resortphoto/gallery_5.webp", "/Resortphoto/garden_view.webp"]
  },
  "birthday": {
    title: "Birthday Celebrations",
    subtitle: "Milestones Worth Celebrating",
    description: "Whether it's an intimate gathering or a grand party, our bespoke birthday packages ensure unforgettable moments with exquisite catering and decor tailored to your theme.",
    icon: <PartyPopper className="w-12 h-12 text-accent" />,
    image: "/Resortphoto/gallery_5.webp",
    features: ["Custom Themed Decor", "Signature Birthday Cake", "Dedicated Party Host", "Interactive Food Stations", "Entertainment Arrangements", "Private Dining Options"],
    gallery: ["/Resortphoto/gallery_2.webp", "/Resortphoto/dining_main.webp", "/Resortphoto/gallery_4.webp"]
  },
  "ring-ceremony": {
    title: "Ring Ceremony",
    subtitle: "The First Promise",
    description: "Celebrate your engagement in an atmosphere of pure romance. Our luxurious spaces and dedicated event planners make your ring ceremony truly special and intimate.",
    icon: <CalendarHeart className="w-12 h-12 text-accent" />,
    image: "/Resortphoto/garden_view.webp",
    features: ["Romantic Stage Setup", "Gourmet High Tea or Dinner", "Ambient Lighting", "Live Music Options", "Personalized E-Invites", "Valet Parking"],
    gallery: ["/Resortphoto/gallery_3.webp", "/Resortphoto/suite_diamond.webp", "/Resortphoto/gallery_5.webp"]
  },
  "reception": {
    title: "Reception Party",
    subtitle: "A Night of Grandeur",
    description: "Host a spectacular reception with world-class gastronomy and impeccable service. We ensure your celebration is an elegant, joyous, and seamless affair from start to finish.",
    icon: <GlassWater className="w-12 h-12 text-accent" />,
    image: "/Resortphoto/heritage_arch.webp",
    features: ["Grand Banquet Access", "Multi-Cuisine Buffet", "VIP Seating Area", "Dance Floor Setup", "Premium Bar Services", "Red Carpet Welcome"],
    gallery: ["/Resortphoto/gallery_6.webp", "/Resortphoto/dining_main.webp", "/Resortphoto/hero_suites.webp"]
  },
  "corporate": {
    title: "Corporate Events",
    subtitle: "Business Meets Luxury",
    description: "Elevate your corporate gatherings. Our state-of-the-art facilities and professional service team provide the perfect environment for conferences, seminars, and gala dinners.",
    icon: <Briefcase className="w-12 h-12 text-accent" />,
    image: "/Resortphoto/arch_signature.webp",
    features: ["High-Speed Wi-Fi", "Projector & Screens", "Executive Catering", "Breakout Rooms", "Dedicated Event Manager", "Corporate Branding Options"],
    gallery: ["/Resortphoto/exp_cultural.webp", "/Resortphoto/gallery_2.webp", "/Resortphoto/garden_view.webp"]
  }
};

const Events = () => {
  const { type } = useParams<{ type: string }>();
  const data = type && eventDetails[type] ? eventDetails[type] : eventDetails["wedding"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SEO 
        title={`${data.title} | Diamond Resort & Spa`}
        description={data.description}
        keywords={`Diamond Resort ${type}, luxury events, Bihar resorts`}
      />
      <Navbar />
      
      <header className="relative w-full h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center pt-24">
        <div className="absolute inset-0 z-0 bg-primary/20">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover animate-slow-zoom opacity-90 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80" />
        </div>

        <ScrollReveal className="relative z-10 w-full px-6 flex flex-col items-center text-center">
          <div className="mb-6 animate-float-premium bg-white/10 backdrop-blur-md p-6 rounded-full border border-primary/20 shadow-lg">
            {data.icon}
          </div>
          <span className="font-label font-semibold text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            {data.subtitle}
          </span>
          <h1 className="font-display font-medium text-4xl lg:text-7xl text-white tracking-tight mb-8 drop-shadow-lg">
            {data.title}
          </h1>
        </ScrollReveal>
      </header>

      <main className="flex-grow pb-24">
        {/* Introduction Section */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <Star className="w-8 h-8 text-accent mx-auto mb-6" />
            <p className="font-body text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-12">
              {data.description}
            </p>
          </ScrollReveal>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 lg:px-12 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">Signature Offerings</span>
              <h2 className="font-display font-medium text-4xl lg:text-5xl text-foreground tracking-tight">What's Included</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature: string, idx: number) => (
                <ScrollReveal key={idx} delay={idx * 100} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-1 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-body text-lg text-foreground/80">{feature}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mini Gallery */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <span className="font-label font-semibold text-xs text-accent tracking-[0.25em] mb-4 block uppercase">Visual Inspiration</span>
              <h2 className="font-display font-medium text-4xl lg:text-5xl text-foreground tracking-tight">Gallery</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.gallery.map((img: string, idx: number) => (
                <ScrollReveal key={idx} type="scale" delay={idx * 150} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img src={img} alt={`${data.title} view ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-luxury" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
                </ScrollReveal>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/gallery" className="inline-flex items-center gap-4 font-label font-bold text-[10px] tracking-[0.3em] uppercase text-accent hover:text-foreground transition-colors border-b border-accent/50 pb-2 w-max">
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="pt-12 px-6 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display font-medium text-3xl lg:text-4xl text-foreground tracking-tight mb-8">Ready to create unforgettable memories?</h2>
            <a
              href="tel:+918092719700"
              className="btn-shimmer hover-lift inline-flex items-center gap-3 bg-primary text-white font-label font-semibold text-xs tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-500 ease-luxury"
            >
              <span className="relative z-10">PLAN YOUR EVENT</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </a>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
