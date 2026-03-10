import { useEffect, useState } from "react";
import {
  Home,
  Bed,
  Martini,
  Calendar,
  PartyPopper,
  Phone,
} from "lucide-react";

export default function MobileLuxuryNav() {
  const [visible, setVisible] = useState(true);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Dynamic Island Call Button */}
      <a
        href="tel:+918092719700"
        className={`fixed left-1/2 -translate-x-1/2 bottom-[100px] z-[9999] transition-all duration-200 lg:hidden ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center gap-2 w-[100px] h-10 rounded-full bg-black border border-[rgba(201,168,76,0.35)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <Phone size={16} color="#C9A84C" />
          <span className="text-white">
            Call
          </span>
        </div>
      </a>

      {/* Bottom Floating Navbar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-[64px] bg-[rgba(0,0,0,0.9)] backdrop-blur-md border border-[rgba(201,168,76,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.45)] rounded-full flex items-center justify-around px-4 md:hidden">
        
        <Home size={22} color="#C9A84C" />

        <Bed size={22} color="#ffffff" />

        <Martini size={22} color="#ffffff" />

        <PartyPopper size={22} color="#ffffff" />

        {/* Highlight Booking Button */}
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#F5EFE4]">
          <Calendar size={20} color="#000000" />
        </div>
      </div>
    </>
  );
}
