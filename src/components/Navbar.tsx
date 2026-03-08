import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Diamond, ArrowRight, Home, BedDouble, Wine, Sparkles, CalendarPlus } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const path = location.pathname;
  const isHome = path === "/";
  const isSuites = path === "/suites";
  const isDining = path === "/dining";
  const isReserve = path === "/reserve";

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-4 right-4 bg-primary/90 backdrop-blur-2xl border border-ring/20 rounded-[2rem] z-[5000] flex justify-between items-center px-6 py-3 shadow-[0_20px_40px_rgba(61,12,30,0.3)]">
        <Link to="/" className={`flex flex-col items-center gap-1 group ${isHome ? "text-ring" : "text-primary-foreground/60"}`}>
          <Home className="w-6 h-6 group-hover:-translate-y-[2px] group-hover:scale-110 group-active:scale-95 transition-all duration-400 ease-luxury" strokeWidth={1.5} />
        </Link>
        <Link to="/suites" className={`flex flex-col items-center gap-1 group ${isSuites ? "text-ring" : "text-primary-foreground/60"}`}>
          <BedDouble className="w-6 h-6 group-hover:-translate-y-[2px] group-hover:scale-110 group-hover:text-ring group-active:scale-95 transition-all duration-400 ease-luxury" strokeWidth={1.5} />
        </Link>
        <Link to="/dining" className={`flex flex-col items-center gap-1 group ${isDining ? "text-ring" : "text-primary-foreground/60"}`}>
          <Wine className="w-6 h-6 group-hover:-translate-y-[2px] group-hover:scale-110 group-hover:text-ring group-active:scale-95 transition-all duration-400 ease-luxury" strokeWidth={1.5} />
        </Link>
        <Link to="/experiences" className={`flex flex-col items-center gap-1 group ${path === "/experiences" ? "text-ring" : "text-primary-foreground/60"}`}>
          <Sparkles className="w-6 h-6 group-hover:-translate-y-[2px] group-hover:scale-110 group-hover:text-ring group-active:scale-95 transition-all duration-400 ease-luxury" strokeWidth={1.5} />
        </Link>
        <Link to="/reserve" className={`h-10 w-10 flex items-center justify-center rounded-full group transition-colors duration-400 shadow-lg ease-luxury hover:-translate-y-1 ${isReserve ? "bg-ring text-primary" : "bg-primary-foreground text-primary hover:bg-ring"}`}>
          <CalendarPlus className="w-5 h-5 group-hover:scale-110 group-active:scale-95 transition-transform duration-400 ease-luxury" strokeWidth={1.5} />
        </Link>
      </nav>

      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-luxury items-center px-12 ${
          scrolled ? "bg-primary/95 backdrop-blur-xl border-b border-ring/20 h-20 shadow-lg" : "h-24"
        }`}
      >
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <Diamond className="w-7 h-7 text-ring group-hover:rotate-180 group-hover:scale-110 transition-transform duration-700 ease-luxury" />
            <span className="font-label font-medium text-ring text-xs tracking-[0.25em] group-hover:tracking-[0.3em] transition-all duration-500 ease-luxury">
              THE DIAMOND RESORT
            </span>
          </Link>
        </div>

        <div className="flex-1 justify-center gap-10 flex text-primary-foreground">
          <Link to="/" className={`nav-link font-label font-medium text-xs tracking-[0.2em] ${isHome ? "active" : "opacity-80"}`}>
            HOME
          </Link>
          <Link to="/suites" className={`nav-link font-label font-medium text-xs tracking-[0.2em] ${isSuites ? "active" : "opacity-80"}`}>
            SUITES
          </Link>
          <Link to="/dining" className={`nav-link font-label font-medium text-xs tracking-[0.2em] ${isDining ? "active" : "opacity-80"}`}>
            CATERING
          </Link>
          <Link to="/experiences" className={`nav-link font-label font-medium text-xs tracking-[0.2em] ${path === "/experiences" ? "active" : "opacity-80"}`}>
            EXPERIENCES
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <Link
            to="/reserve"
            className={`btn-shimmer relative group font-label font-medium text-xs tracking-[0.2em] px-8 py-4 rounded-sm flex items-center gap-2 hover:-translate-y-[2px] hover:scale-[1.02] active:scale-95 transition-all duration-500 ease-luxury ${
              isReserve ? "bg-ring text-primary shadow-[0_8px_20px_rgba(201,168,76,0.3)]" : "bg-primary-foreground text-primary hover:shadow-[0_8px_20px_rgba(201,168,76,0.25)]"
            }`}
          >
            <span className="relative z-10 transition-colors duration-400">RESERVE</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-400 ease-luxury" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
