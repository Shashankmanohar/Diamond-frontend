import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Diamond, ArrowRight, Home, BedDouble, Wine, Sparkles, PhoneCall, ChevronDown, PartyPopper, Camera, Menu, X, Info, BookOpen } from "lucide-react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false);
  const [mobileExperiencesOpen, setMobileExperiencesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);
  const path = location.pathname;
  const isHome = path === "/";
  const isSuites = path === "/suites";
  const isDining = path === "/dining";

  return (
    <>
      {/* Mobile Logo Bar (Top) */}
      <div className={`lg:hidden fixed top-0 left-0 w-full z-[4000] transition-all duration-500 flex justify-between items-center h-20 px-4 ${scrolled ? "bg-primary/90 backdrop-blur-3xl border-b border-white/5" : "bg-transparent"}`}>
        <Link to="/" className="flex items-center gap-3">
          <img src="/DiamondResort.webp" alt="Diamond Resort" className="w-12 h-12 object-contain" />
          <span className={`font-label font-medium text-[10px] tracking-[0.2em] transition-colors ${!scrolled && path === '/gallery' ? 'text-primary' : 'text-ring'}`}>
            DIAMOND RESORT
          </span>
        </Link>
        <a href="tel:+918092719700" className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full transition-colors shadow-lg active:scale-95 bg-ring text-primary">
          <PhoneCall className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="lg:hidden fixed bottom-6 left-4 right-4 bg-primary/90 backdrop-blur-2xl border border-ring/20 rounded-[2rem] z-[5000] shadow-[0_20px_40px_rgba(61,12,30,0.3)] overflow-hidden">
        <div className="flex items-center gap-6 px-6 py-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <Link to="/" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${isHome ? "text-ring" : "text-primary-foreground/60"}`}>
            <Home className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">Home</span>
          </Link>
          <Link to="/about" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${path === '/about' ? "text-ring" : "text-primary-foreground/60"}`}>
            <Info className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">About</span>
          </Link>
          <Link to="/suites" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${isSuites ? "text-ring" : "text-primary-foreground/60"}`}>
            <BedDouble className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">Suites</span>
          </Link>
          <Link to="/dining" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${isDining ? "text-ring" : "text-primary-foreground/60"}`}>
            <Wine className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">Dining</span>
          </Link>
          <Link to="/experiences" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${path.startsWith('/experiences') ? "text-ring" : "text-primary-foreground/60"}`}>
            <Sparkles className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">Exper..</span>
          </Link>
          <Link to="/blog" className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ${path.startsWith('/blog') ? "text-ring" : "text-primary-foreground/60"}`}>
            <BookOpen className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />
            <span className="text-[9px] tracking-wider uppercase">Blog</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`snap-center flex-shrink-0 flex flex-col items-center gap-1 group ml-auto ${mobileMenuOpen ? "text-ring" : "text-primary-foreground/60"}`}>
            {mobileMenuOpen ? <X className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} /> : <Menu className="w-5 h-5 group-hover:-translate-y-[2px] transition-all duration-400" strokeWidth={1.5} />}
            <span className="text-[9px] tracking-wider uppercase">Menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[4000] bg-primary/95 backdrop-blur-3xl pt-28 pb-32 px-6 overflow-y-auto transition-all duration-500 ease-luxury ${mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8"}`}>
        <div className="flex flex-col gap-6">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">Home</Link>
          <div className="h-[1px] w-full bg-white/10" />

          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">About</Link>
          <div className="h-[1px] w-full bg-white/10" />
          
          {/* Rooms Dropdown Mobile */}
          <div>
            <button onClick={() => setMobileRoomsOpen(!mobileRoomsOpen)} className="w-full flex justify-between items-center text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">
              Rooms & Suites
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileRoomsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileRoomsOpen ? "max-h-64 mt-6 opacity-100 gap-4" : "max-h-0 opacity-0 gap-0"}`}>
              <Link to="/suites?type=deluxe" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Deluxe Rooms</Link>
              <Link to="/suites?type=premium" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Premium Suites</Link>
              <Link to="/suites?type=luxury" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Luxury Villas</Link>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/10" />

          <Link to="/dining" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">Dining & Catering</Link>
          <div className="h-[1px] w-full bg-white/10" />

          {/* Experiences Dropdown Mobile */}
          <div>
            <button onClick={() => setMobileExperiencesOpen(!mobileExperiencesOpen)} className="w-full flex justify-between items-center text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">
              Experiences
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExperiencesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileExperiencesOpen ? "max-h-64 mt-6 opacity-100 gap-4" : "max-h-0 opacity-0 gap-0"}`}>
              <Link to="/experiences/pool" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Swimming Pool</Link>
              <Link to="/experiences/activities" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Activities (Indoor/Outdoor)</Link>
              <Link to="/experiences/dj-night" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Dj Night</Link>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/10" />

          {/* Events Dropdown Mobile */}
          <div>
            <button onClick={() => setMobileEventsOpen(!mobileEventsOpen)} className="w-full flex justify-between items-center text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">
              Events
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileEventsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${mobileEventsOpen ? "max-h-[500px] mt-6 opacity-100 gap-4" : "max-h-0 opacity-0 gap-0"}`}>
              <Link to="/events/wedding" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Wedding Venues</Link>
              <Link to="/events/birthday" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Birthday</Link>
              <Link to="/events/ring-ceremony" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Ring Ceremony</Link>
              <Link to="/events/reception" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Reception Party</Link>
              <Link to="/events/corporate" onClick={() => setMobileMenuOpen(false)} className="text-lg font-body text-primary-foreground/80 pl-4 border-l border-white/20">Corporate Events</Link>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/10" />

          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">Gallery</Link>
          <div className="h-[1px] w-full bg-white/10" />

          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display text-primary-foreground tracking-tight hover:text-ring transition-colors">Blog</Link>
        </div>
        
        <div className="mt-12 flex flex-col gap-4">
          <a href="tel:+918092719700" className="btn-shimmer flex justify-center items-center gap-3 bg-ring text-primary font-label font-bold text-xs tracking-[0.2em] px-8 py-4 rounded-full">
            <span>CALL RESERVATIONS</span>
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-luxury items-center px-12 ${scrolled ? "bg-primary/90 backdrop-blur-3xl border-b border-white/5 h-24 shadow-[0_20px_40px_rgba(0,0,0,0.1)]" : "h-32"
          }`}
      >
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/DiamondResort.webp" alt="Diamond Resort" className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-700 ease-luxury" />
            <span className="font-label font-medium text-ring text-base tracking-[0.35em] group-hover:tracking-[0.4em] transition-all duration-500 ease-luxury">
              DIAMOND RESORT
            </span>
          </Link>
        </div>

        <div className={`flex-[2.5] justify-center gap-3 lg:gap-6 flex items-center transition-colors duration-500 ${!scrolled && path === '/gallery' ? 'text-primary' : 'text-primary-foreground'}`}>
          <Link to="/" className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase ${isHome ? "active" : "opacity-80"}`}>
            Home
          </Link>
          
          <Link to="/about" className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase ${path === "/about" ? "active" : "opacity-80"}`}>
            About
          </Link>

          {/* Events Dropdown */}
          <div className="relative group py-6">
            <button className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase opacity-80 hover:opacity-100 flex items-center gap-1 ${path.startsWith("/events") ? "active" : ""}`}>
              Events
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-primary/95 backdrop-blur-xl border border-ring/20 shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-luxury flex flex-col py-2">
              <Link to="/events/wedding" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Wedding Venues</Link>
              <Link to="/events/birthday" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Birthday</Link>
              <Link to="/events/ring-ceremony" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Ring Ceremony</Link>
              <Link to="/events/reception" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Reception Party</Link>
              <Link to="/events/corporate" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Corporate Events</Link>
            </div>
          </div>

          {/* Rooms Dropdown */}
          <div className="relative group py-6">
            <button className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase opacity-80 hover:opacity-100 flex items-center gap-1 ${isSuites ? "active" : ""}`}>
              Rooms
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-primary/95 backdrop-blur-xl border border-ring/20 shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-luxury flex flex-col py-2">
              <Link to="/suites?type=deluxe" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Deluxe Rooms</Link>
              <Link to="/suites?type=premium" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Premium Suites</Link>
              <Link to="/suites?type=luxury" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Luxury Villas</Link>
            </div>
          </div>

          {/* Experiences Dropdown */}
          <div className="relative group py-6">
            <button className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase opacity-80 hover:opacity-100 flex items-center gap-1 ${path.startsWith("/experiences") ? "active" : ""}`}>
              Experiences
              <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 bg-primary/95 backdrop-blur-xl border border-ring/20 shadow-xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-luxury flex flex-col py-2">
              <Link to="/experiences/pool" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Swimming Pool</Link>
              <Link to="/experiences/activities" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Activities (Indoor/Outdoor)</Link>
              <Link to="/experiences/dj-night" className="px-4 py-3 text-[10px] lg:text-xs tracking-[0.1em] text-primary-foreground/80 hover:text-ring hover:bg-white/5 transition-colors uppercase text-center block">Dj Night</Link>
            </div>
          </div>

          <Link to="/gallery" className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase ${path === "/gallery" ? "active" : "opacity-80"}`}>
            Gallery
          </Link>
          
          <Link to="/blog" className={`nav-link whitespace-nowrap font-label font-medium text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase ${path.startsWith("/blog") ? "active" : "opacity-80"}`}>
            Blog
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <a
            href="tel:+918092719700"
            className={`btn-shimmer hover-lift whitespace-nowrap relative font-label font-medium text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center gap-2 bg-ring text-primary`}
          >
            <span className="relative z-10 transition-colors duration-400">CALL NOW</span>
            <PhoneCall className="relative z-10 w-4 h-4 transition-transform duration-400 ease-luxury" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
