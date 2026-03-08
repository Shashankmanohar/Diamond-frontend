import { Link } from "react-router-dom";
import { Diamond, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Dimond+resort/@25.2998504,85.4778411,18.57z/data=!4m6!3m5!1s0x39f28d000d6c984b:0xbf54633c3d738d22!8m2!3d25.3006807!4d85.4769175!16s%2Fg%2F11yq30jjxt";

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900!2d85.4769175!3d25.3006807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f28d000d6c984b%3A0xbf54633c3d738d22!2sDimond%20resort!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 px-6 lg:px-12 pb-12 text-center lg:text-left">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-1">
            <img src="/logo.png" alt="Diamond Resort" className="w-24 h-24 object-contain mb-4 hover:scale-110 transition-transform duration-700 ease-luxury" />
            <span className="font-label font-medium text-accent text-xs tracking-[0.25em] mb-4 block uppercase">
              DIAMOND RESORT
            </span>
            <p className="font-body text-primary-foreground/60 text-sm max-w-[200px]">
              Bihar's finest ultra-luxury sanctuary.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h5 className="font-label font-semibold text-xs text-primary-foreground tracking-[0.2em] mb-6 uppercase">
                Explore
              </h5>
              <ul className="flex flex-col items-center lg:items-start gap-4 text-sm font-body text-primary-foreground/60">
                <li><Link to="/suites" className="footer-link">Suites</Link></li>
                <li><Link to="/dining" className="footer-link">Catering</Link></li>
                <li><Link to="/experiences" className="footer-link">Experiences</Link></li>
                <li><Link to="/reserve" className="footer-link">Reserve</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-label font-semibold text-xs text-primary-foreground tracking-[0.2em] mb-6 uppercase">
                Connect
              </h5>
              <ul className="flex flex-col items-center lg:items-start gap-4 text-sm font-body text-primary-foreground/60">
                <li><a href="#" className="footer-link">Instagram</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
              </ul>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col items-center lg:items-start text-center lg:text-left hover:bg-white/10 hover:-translate-y-1 transition-all duration-500 ease-luxury group">
            <MapPin className="w-6 h-6 text-accent mb-4 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-luxury" />
            <p className="font-body text-sm text-primary-foreground/80 mb-2">
              Diamond Resort<br />
              Patna–Bakhtiyarpur Road,<br />
              Bihar 800001, India
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label font-semibold text-xs text-primary-foreground tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-accent hover:border-accent hover:text-primary transition-all duration-500 ease-luxury hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(201,168,76,0.2)] mt-3"
            >
              View on Maps →
            </a>
          </div>

          {/* Embedded Map */}
          <div className="rounded-3xl overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-full min-h-[200px]">
            <iframe
              src={MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 200 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diamond Resort Location"
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs font-label tracking-[0.15em] text-primary-foreground/40">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span>© 2024 TDR. All Rights Reserved.</span>
          <span className="text-[10px] opacity-70">
            Made by <a href="https://webfloratechnologies.com" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent transition-colors">Webflora Technologies</a>
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <Link to="/sitemap" className="footer-link">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
