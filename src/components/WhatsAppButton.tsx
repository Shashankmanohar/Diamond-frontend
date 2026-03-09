import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918092719700"; // Replace with actual number
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hello! I'd like to enquire about The Diamond Resort."
);

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 lg:bottom-8 right-4 lg:right-6 z-[4999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-luxury group"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppButton;
