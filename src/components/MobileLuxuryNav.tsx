import { useEffect, useState } from "react";
import {
  Home,
  Bed,
  Martini,
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


      {/* Bottom Floating Navbar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-[64px] bg-[rgba(0,0,0,0.9)] backdrop-blur-md border border-[rgba(201,168,76,0.2)] shadow-[0_20px_40px_rgba(0,0,0,0.45)] rounded-full flex items-center justify-around px-4 md:hidden">
        
        <Home size={22} color="#C9A84C" />

        <Bed size={22} color="#ffffff" />

        <Martini size={22} color="#ffffff" />


      </div>
    </>
  );
}
