import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Diamond, ArrowRight, ArrowLeft, Check, Calendar, Users, MapPin, User,
  Heart, PartyPopper, Briefcase, Cake, Plane, Sparkles, Star, Crown,
  Music, Camera, UtensilsCrossed, Car, Flower2, Gem, Mail, Phone,
} from "lucide-react";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import { format } from "date-fns";

/* ─── Event Types ─── */
const EVENT_TYPES = [
  { id: "wedding", label: "Wedding", icon: Heart, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { id: "engagement", label: "Engagement", icon: Gem, img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80" },
  { id: "reception", label: "Reception", icon: PartyPopper, img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
  { id: "birthday", label: "Birthday", icon: Cake, img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80" },
  { id: "vacation", label: "Vacation", icon: Plane, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
  { id: "corporate", label: "Corporate", icon: Briefcase, img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" },
  { id: "anniversary", label: "Anniversary", icon: Star, img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80" },
  { id: "private", label: "Private", icon: Crown, img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80" },
  { id: "custom", label: "Custom", icon: Sparkles, img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
];

const OPTIONAL_SERVICES = [
  { id: "catering", label: "Catering", icon: UtensilsCrossed, img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80" },
  { id: "photography", label: "Photography", icon: Camera, img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&q=80" },
  { id: "decor", label: "Luxury Decor", icon: Flower2, img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80" },
  { id: "music", label: "Live Music", icon: Music, img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80" },
  { id: "pickup", label: "Airport Pickup", icon: Car, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0637?w=400&q=80" },
  { id: "spa", label: "Spa Package", icon: Sparkles, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" },
];

const VENUES = [
  { id: "grand-ballroom", name: "Grand Ballroom", capacity: "Up to 500 guests", price: "From ₹8,00,000", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=85" },
  { id: "garden-pavilion", name: "Garden Pavilion", capacity: "Up to 200 guests", price: "From ₹4,50,000", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85" },
  { id: "rooftop-terrace", name: "Rooftop Terrace", capacity: "Up to 120 guests", price: "From ₹3,00,000", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=85" },
  { id: "private-suite", name: "Private Suite", capacity: "Up to 30 guests", price: "From ₹1,50,000", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85" },
];

const STEPS = ["Event", "Schedule", "Venue", "Details", "Review"];

/* ─── Animations ─── */
const pageVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98, filter: "blur(4px)" }),
  center: { x: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0, scale: 0.98, filter: "blur(4px)" }),
};

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };
const stagger = { staggerChildren: 0.05, delayChildren: 0.08 };
const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 320, damping: 26 } } };

/* ─── Section Header ─── */
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
    className="text-center mb-6 sm:mb-10 lg:mb-12">
    <h2 className="font-display font-medium text-foreground mb-2 tracking-tight"
      style={{ fontSize: "clamp(22px, 4.5vw, 36px)", lineHeight: 1.2 }}>
      {title}
    </h2>
    <p className="font-body text-foreground/60 leading-relaxed"
      style={{ fontSize: "clamp(14px, 3.5vw, 18px)" }}>
      {subtitle}
    </p>
  </motion.div>
);

/* ─── Component ─── */
const Reserve = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [guests, setGuests] = useState(50);
  const [rooms, setRooms] = useState(1);
  const [venue, setVenue] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialReq, setSpecialReq] = useState("");

  const canNext = useCallback(() => {
    if (step === 0) return !!eventType;
    if (step === 1) return !!date && guests > 0;
    if (step === 2) return !!venue;
    if (step === 3) return name.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && phone.trim().length >= 7;
    return true;
  }, [step, eventType, date, guests, venue, name, email, phone]);

  const goNext = async () => {
    if (!canNext()) return;
    if (step === 4) {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "event",
            name,
            email,
            phone,
            event_type: eventType,
            guest_count: guests,
            event_date: date ? date.toISOString() : null,
            venue,
            rooms,
            services,
            special_requests: specialReq || null,
          }),
        });

        if (!response.ok) throw new Error("Failed to submit reservation");
        
        setSubmitted(true);
      } catch (err) {
        console.error("Reservation Error:", err);
        alert("Something went wrong. Please try again later.");
      }
      return;
    }
    setDirection(1);
    setStep((s) => s + 1);
  };
  const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

  const toggleService = (id: string) =>
    setServices((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);

  /* ─── Floating Input ─── */
  const FloatingInput = ({ label, value, onChange, type = "text", icon }: { label: string; value: string; onChange: (v: string) => void; type?: string; icon: React.ReactNode }) => (
    <motion.div variants={fadeUp} className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ring/60 group-focus-within:text-ring transition-colors duration-300 z-10">
        {icon}
      </div>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="w-full bg-card/70 backdrop-blur-xl border border-border/20 rounded-2xl pl-12 pr-5 py-4 font-body text-foreground text-base placeholder:text-foreground/30 focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 focus:bg-card/90 transition-all duration-300 ease-luxury"
        style={{ minHeight: "48px" }}
      />
    </motion.div>
  );

  /* ─── Step Content ─── */
  const renderStep = () => {
    switch (step) {
      /* Step 0 – Event Type */
      case 0:
        return (
          <div className="w-full max-w-5xl mx-auto">
            <SectionHeader title="Select Your Occasion" subtitle="Choose the type of event you wish to celebrate." />
            <motion.div variants={{ visible: stagger }} initial="hidden" animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
              {EVENT_TYPES.map((e) => {
                const Icon = e.icon;
                const selected = eventType === e.id;
                return (
                  <motion.button
                    key={e.id} variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setEventType(e.id)}
                    className={`relative overflow-hidden rounded-[18px] sm:rounded-3xl flex flex-col items-center justify-end group transition-all duration-300 ease-luxury border-2 ${
                      selected ? "border-ring shadow-[0_12px_32px_rgba(201,168,76,0.3)]" : "border-transparent hover:border-ring/30"
                    }`}
                    style={{ height: "clamp(140px, 22vw, 200px)" }}
                  >
                    <img src={e.img} alt={e.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-luxury group-hover:scale-110" />
                    <div className={`absolute inset-0 transition-all duration-300 ${selected ? "bg-primary/75" : "bg-primary/45 group-hover:bg-primary/55"}`} />
                    {selected && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="absolute top-2.5 right-2.5 w-7 h-7 bg-ring rounded-full flex items-center justify-center z-10">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </motion.div>
                    )}
                    <div className="relative z-10 p-3 sm:p-4 text-center">
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1.5 sm:mb-2 transition-colors duration-300 ${selected ? "text-ring" : "text-primary-foreground/80"}`} />
                      <span className="font-label font-semibold text-[13px] sm:text-xs tracking-[0.08em] sm:tracking-[0.15em] uppercase text-primary-foreground">{e.label}</span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        );

      /* Step 1 – Date & Guests */
      case 1:
        return (
          <div className="w-full max-w-4xl mx-auto">
            <SectionHeader title="Choose Your Date" subtitle="Pick a date, number of guests, and rooms." />
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-stretch">
              {/* Calendar */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={spring}
                className="bg-card/70 backdrop-blur-xl rounded-3xl p-3 sm:p-5 border border-border/10 shadow-xl flex-shrink-0 mx-auto lg:mx-0 self-start w-full max-w-[340px] lg:w-auto">
                <CalendarPicker
                  mode="single" selected={date} onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  className="pointer-events-auto"
                  classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary focus:bg-primary",
                    day_today: "bg-accent/20 text-foreground font-bold",
                  }}
                />
              </motion.div>

              {/* Sliders & info */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ ...spring, delay: 0.08 }}
                className="flex-1 space-y-4 sm:space-y-5 w-full">
                {date && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-card/60 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 border border-ring/20">
                    <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-ring" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-label text-[11px] text-foreground/50 tracking-wider uppercase block">Selected Date</span>
                      <span className="font-display text-sm sm:text-base text-foreground truncate block">{format(date, "EEEE, MMMM d, yyyy")}</span>
                    </div>
                  </motion.div>
                )}

                {/* Guest slider */}
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-5 border border-border/10">
                  <label className="font-label font-semibold text-[11px] text-foreground/70 tracking-[0.15em] uppercase mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-ring" /> Guests</span>
                    <span className="text-lg font-display text-foreground">{guests}</span>
                  </label>
                  <input type="range" min={1} max={500} value={guests} onChange={(e) => setGuests(+e.target.value)}
                    className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ring" />
                  <div className="flex justify-between font-body text-[11px] text-foreground/30 mt-2"><span>1</span><span>250</span><span>500</span></div>
                </div>

                {/* Room slider */}
                <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-5 border border-border/10">
                  <label className="font-label font-semibold text-[11px] text-foreground/70 tracking-[0.15em] uppercase mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ring" /> Rooms</span>
                    <span className="text-lg font-display text-foreground">{rooms}</span>
                  </label>
                  <input type="range" min={0} max={48} value={rooms} onChange={(e) => setRooms(+e.target.value)}
                    className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ring" />
                  <div className="flex justify-between font-body text-[11px] text-foreground/30 mt-2"><span>0</span><span>24</span><span>48</span></div>
                </div>
              </motion.div>
            </div>
          </div>
        );

      /* Step 2 – Venue & Services */
      case 2:
        return (
          <div className="w-full max-w-5xl mx-auto">
            <SectionHeader title="Select Venue & Services" subtitle="Choose your preferred venue and enhancements." />

            {/* Venue cards */}
            <motion.div variants={{ visible: stagger }} initial="hidden" animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-8 sm:mb-12">
              {VENUES.map((v) => (
                <motion.button
                  key={v.id} variants={fadeUp}
                  whileHover={{ y: -4 }} whileTap={{ scale: 0.96 }}
                  onClick={() => setVenue(v.id)}
                  className={`rounded-[18px] sm:rounded-3xl overflow-hidden relative group text-left transition-all duration-300 border-2 ${
                    venue === v.id ? "border-ring shadow-[0_12px_32px_rgba(201,168,76,0.3)]" : "border-transparent hover:border-ring/20"
                  }`}
                  style={{ height: "clamp(160px, 28vw, 260px)" }}
                >
                  <img src={v.img} alt={v.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-luxury" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-display font-medium text-[14px] sm:text-lg text-primary-foreground tracking-tight leading-tight">{v.name}</h3>
                    <p className="font-body text-primary-foreground/60 text-[12px] sm:text-sm mt-0.5">{v.capacity}</p>
                    <p className="font-label text-ring text-[11px] sm:text-xs mt-1 tracking-wider">{v.price}</p>
                  </div>
                  {venue === v.id && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="absolute top-2.5 right-2.5 w-7 h-7 bg-ring rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Optional Services */}
            <h3 className="font-label font-semibold text-[11px] sm:text-xs text-foreground/60 tracking-[0.2em] uppercase mb-4 text-center">Optional Add-ons</h3>
            <motion.div variants={{ visible: stagger }} initial="hidden" animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {OPTIONAL_SERVICES.map((s) => {
                const Icon = s.icon;
                const selected = services.includes(s.id);
                return (
                  <motion.button
                    key={s.id} variants={fadeUp}
                    whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}
                    onClick={() => toggleService(s.id)}
                    className={`relative overflow-hidden rounded-[16px] flex items-end group transition-all duration-300 border-2 ${
                      selected ? "border-ring shadow-lg" : "border-transparent hover:border-ring/20"
                    }`}
                    style={{ height: "clamp(100px, 16vw, 130px)", minHeight: "44px" }}
                  >
                    <img src={s.img} alt={s.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className={`absolute inset-0 transition-colors duration-300 ${selected ? "bg-primary/75" : "bg-primary/45 group-hover:bg-primary/55"}`} />
                    {selected && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="absolute top-2 right-2 w-6 h-6 bg-ring rounded-full flex items-center justify-center z-10">
                        <Check className="w-3 h-3 text-primary" />
                      </motion.div>
                    )}
                    <div className="relative z-10 p-3 flex items-center gap-2">
                      <Icon className={`w-4 h-4 flex-shrink-0 ${selected ? "text-ring" : "text-primary-foreground/70"}`} />
                      <span className="font-label text-[12px] sm:text-xs tracking-wider uppercase text-primary-foreground">{s.label}</span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        );

      /* Step 3 – Personal Details */
      case 3:
        return (
          <div className="w-full max-w-xl mx-auto">
            <SectionHeader title="Your Details" subtitle="Let us know how to reach you." />
            <motion.div variants={{ visible: stagger }} initial="hidden" animate="visible" className="space-y-4">
              <FloatingInput label="Full Name" value={name} onChange={setName} icon={<User className="w-4 h-4" />} />
              <FloatingInput label="Email Address" value={email} onChange={setEmail} type="email" icon={<Mail className="w-4 h-4" />} />
              <FloatingInput label="Phone Number" value={phone} onChange={setPhone} type="tel" icon={<Phone className="w-4 h-4" />} />
              <motion.div variants={fadeUp}>
                <div className="relative group">
                  <div className="absolute left-4 top-4 text-ring/60 group-focus-within:text-ring transition-colors duration-300 z-10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <textarea
                    value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} rows={4}
                    className="w-full bg-card/70 backdrop-blur-xl border border-border/20 rounded-2xl pl-12 pr-5 py-4 font-body text-foreground text-base placeholder:text-foreground/30 focus:outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 focus:bg-card/90 transition-all duration-300 ease-luxury resize-none"
                    placeholder="Special requirements, decoration preferences..."
                    style={{ minHeight: "120px" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        );

      /* Step 4 – Review */
      case 4:
        return (
          <div className="w-full max-w-2xl mx-auto">
            <SectionHeader title="Review Reservation" subtitle="Confirm before submitting." />
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={spring}
              className="bg-card/70 backdrop-blur-xl rounded-3xl border border-border/10 shadow-2xl overflow-hidden">
              
              {/* Venue header image */}
              {venue && (
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img src={VENUES.find((v) => v.id === venue)?.img} alt="Selected venue" loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="font-label text-[10px] text-ring tracking-[0.2em] uppercase">Your Venue</span>
                      <h3 className="font-display text-lg sm:text-2xl text-primary-foreground">{VENUES.find((v) => v.id === venue)?.name}</h3>
                    </div>
                    <Diamond className="w-5 h-5 text-ring" />
                  </div>
                </div>
              )}

              {[
                { label: "Event Type", value: EVENT_TYPES.find((e) => e.id === eventType)?.label },
                { label: "Date", value: date ? format(date, "MMMM d, yyyy") : "—" },
                { label: "Guests", value: guests },
                { label: "Rooms", value: rooms },
                { label: "Services", value: services.length ? services.map((s) => OPTIONAL_SERVICES.find((o) => o.id === s)?.label).join(", ") : "None" },
                { label: "Name", value: name },
                { label: "Email", value: email },
                { label: "Phone", value: phone },
                ...(specialReq ? [{ label: "Special Requests", value: specialReq }] : []),
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                  className="flex justify-between items-start px-4 sm:px-6 py-3.5 border-b border-border/5 last:border-0"
                >
                  <span className="font-label font-semibold text-[11px] text-foreground/40 tracking-[0.12em] uppercase flex-shrink-0">{item.label}</span>
                  <span className="font-body text-[14px] sm:text-base text-foreground text-right max-w-[58%] break-words">{String(item.value)}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  /* ─── Confirmation ─── */
  if (submitted) {
    return (
      <div className="bg-background text-foreground min-h-screen pb-28 lg:pb-0">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="text-center max-w-lg w-full"
          >
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 15 }}
              className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <Check className="w-10 h-10 text-ring" />
            </motion.div>
            <h1 className="font-display font-medium text-foreground mb-3 tracking-tight" style={{ fontSize: "clamp(26px, 5vw, 44px)" }}>Reservation Received</h1>
            <p className="font-body text-foreground/70 mb-8 leading-relaxed" style={{ fontSize: "clamp(14px, 3.5vw, 18px)" }}>
              Thank you, {name}. Your {EVENT_TYPES.find((e) => e.id === eventType)?.label?.toLowerCase()} reservation has been received. Our concierge team will contact you within 24 hours.
            </p>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="bg-primary/5 rounded-2xl p-5 text-left space-y-3 font-body text-foreground/80 border border-border/10"
            >
              <p><strong className="text-foreground">Date:</strong> {date ? format(date, "MMMM d, yyyy") : ""}</p>
              <p><strong className="text-foreground">Venue:</strong> {VENUES.find((v) => v.id === venue)?.name}</p>
              <p><strong className="text-foreground">Guests:</strong> {guests}</p>
            </motion.div>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => { setSubmitted(false); setStep(0); setEventType(""); setDate(undefined); setGuests(50); setRooms(1); setVenue(""); setServices([]); setName(""); setEmail(""); setPhone(""); setSpecialReq(""); }}
              className="mt-8 btn-shimmer bg-primary text-primary-foreground font-label font-semibold text-xs tracking-[0.2em] px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-xl transition-all duration-300 ease-luxury"
              style={{ minHeight: "48px" }}
            >
              <span className="relative z-10">NEW RESERVATION</span>
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ─── Main Layout ─── */
  return (
    <div className="bg-background text-foreground min-h-screen pb-32 lg:pb-0">
      <Navbar />

      {/* Hero – 45-55vh, improved overlay */}
      <header className="relative w-full overflow-hidden flex items-center justify-center" style={{ height: "clamp(300px, 50vh, 480px)" }}>
        <div className="absolute inset-0 bg-primary">
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=85" alt="Reserve at The Diamond Resort" loading="eager"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/90" style={{ opacity: 0.72 }} />
        </div>
        <ScrollReveal className="relative z-10 text-center px-5 w-[92%] max-w-2xl mx-auto">
          <Diamond className="w-8 h-8 text-ring mb-3 mx-auto animate-float-premium" />
          <h1 className="font-display font-medium text-primary-foreground tracking-tight mb-2.5"
            style={{ fontSize: "clamp(26px, 5vw, 52px)", lineHeight: 1.2, letterSpacing: "0.5px" }}>
            Reserve Your Experience
          </h1>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(14px, 3.5vw, 18px)" }}>
            Crafting bespoke celebrations at Bihar's most exclusive luxury resort.
          </p>
        </ScrollReveal>
      </header>

      {/* Progress – iOS pill indicator */}
      <div className="sticky top-0 lg:top-20 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/5 py-3 px-4 sm:px-6 lg:px-12" style={{ marginTop: "0" }}>
        <div className="max-w-3xl mx-auto">
          {/* Mobile: dot indicator with labels */}
          <div className="flex sm:hidden items-center justify-center gap-4">
            {STEPS.map((s, i) => (
              <button key={s} onClick={() => i < step && (setDirection(i < step ? -1 : 1), setStep(i))} disabled={i > step}
                className="flex flex-col items-center gap-1.5" style={{ minWidth: "44px", minHeight: "44px", paddingTop: "6px" }}>
                <motion.div
                  animate={{
                    width: i === step ? 12 : 8,
                    height: i === step ? 12 : 8,
                    backgroundColor: i <= step ? "hsl(var(--primary))" : "hsl(var(--muted))",
                  }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-full ${i === step ? "ring-[3px] ring-ring/20" : ""}`}
                />
                <span className={`text-[11px] font-label tracking-wider uppercase leading-none ${i === step ? "text-foreground font-semibold" : "text-foreground/30"}`}>{s}</span>
              </button>
            ))}
          </div>

          {/* Desktop: full pill steps */}
          <div className="hidden sm:flex items-center justify-center gap-1.5 lg:gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <motion.div
                  animate={{ scale: i === step ? 1.05 : 1 }}
                  className={`flex items-center gap-2 px-3 lg:px-4 py-2 rounded-full transition-all duration-300 cursor-default ${
                    i === step ? "bg-primary text-primary-foreground shadow-lg" :
                    i < step ? "bg-accent/20 text-foreground" : "text-foreground/25"
                  }`}
                >
                  <span className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-label font-semibold ${
                    i < step ? "bg-ring text-primary" : i === step ? "bg-primary-foreground text-primary" : "bg-muted text-foreground/30"
                  }`}>
                    {i < step ? <Check className="w-3 h-3" /> : i + 1}
                  </span>
                  <span className="font-label text-[10px] lg:text-xs tracking-wider uppercase">{s}</span>
                </motion.div>
                {i < STEPS.length - 1 && <div className={`w-4 lg:w-8 h-[1px] mx-0.5 transition-colors duration-300 ${i < step ? "bg-ring" : "bg-border/20"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content – consistent padding */}
      <section className="py-6 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-12 min-h-[50vh]">
        <div className="w-[92%] sm:w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step} custom={direction}
              variants={pageVariants} initial="enter" animate="center" exit="exit"
              transition={{ ...spring, duration: 0.25 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Navigation Buttons – iOS safe area */}
      <div className="fixed bottom-[76px] sm:bottom-0 lg:sticky lg:bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-2xl border-t border-border/5"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-3">
          <motion.button
            whileHover={{ x: -2 }} whileTap={{ scale: 0.95 }}
            onClick={goBack} disabled={step === 0}
            className="font-label font-semibold text-[13px] sm:text-xs text-foreground tracking-[0.12em] uppercase flex items-center gap-2 disabled:opacity-15 disabled:cursor-not-allowed transition-opacity duration-300"
            style={{ minHeight: "48px", minWidth: "44px", padding: "0 16px" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>

          <motion.button
            whileHover={canNext() ? { y: -2, scale: 1.02 } : {}}
            whileTap={canNext() ? { scale: 0.97 } : {}}
            onClick={goNext} disabled={!canNext()}
            className={`btn-shimmer font-label font-semibold text-[13px] sm:text-xs tracking-[0.15em] uppercase rounded-full flex items-center gap-2 transition-all duration-300 ease-luxury shadow-lg ${
              canNext()
                ? "bg-primary text-primary-foreground shadow-[0_6px_20px_rgba(61,12,30,0.2)]"
                : "bg-muted text-foreground/30 cursor-not-allowed shadow-none"
            }`}
            style={{ minHeight: "48px", padding: "0 24px" }}
          >
            <span className="relative z-10">{step === 4 ? "CONFIRM" : "CONTINUE"}</span>
            <ArrowRight className="relative z-10 w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reserve;
