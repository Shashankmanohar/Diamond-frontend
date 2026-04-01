import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Diamond } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <SEO
        title="404 - Sanctuary Not Found | Diamond Resort & Spa"
        description="The page you are looking for has vanished into the mist. Return to the main sanctuary."
      />
      <div className="text-center max-w-lg">
        <Diamond className="w-16 h-16 text-gold mb-8 mx-auto animate-float-premium" />
        <h1 className="font-display text-6xl md:text-8xl text-burgundy mb-6 tracking-tight">404</h1>
        <h2 className="font-display italic text-2xl md:text-3xl text-burgundy mb-8">Sanctuary Not Found</h2>
        <p className="font-body text-burgundy/70 text-lg mb-12 leading-relaxed">
          The path you seek has vanished into the morning mist. Let us guide you back to the main sanctuary.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-burgundy text-cream font-label font-bold text-[10px] tracking-widest uppercase px-10 py-5 rounded-full hover:bg-gold hover:text-burgundy transition-all duration-500 shadow-xl shadow-burgundy/10"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
