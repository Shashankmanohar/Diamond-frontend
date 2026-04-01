import { useEffect, useState } from "react";

const Preloader = () => {
  const [phase, setPhase] = useState<"draw" | "wordmark" | "exit" | "done">("draw");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("wordmark"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => setPhase("done"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-burgundy transition-all duration-1000 ${
        phase === "exit" ? "preloader-exit" : ""
      }`}
    >
      <div className="relative w-24 h-24 mb-8 animate-float-premium">
        <svg viewBox="0 0 100 100" className={`w-full h-full ${phase !== "draw" ? "start-draw" : "start-draw"}`}>
          <path className="preloader-path" d="M50 5 L95 50 L50 95 L5 50 Z" />
          <path className="preloader-path" style={{ animationDelay: "200ms" }} d="M50 5 L50 95" />
          <path className="preloader-path" style={{ animationDelay: "400ms" }} d="M5 50 L95 50" />
        </svg>
      </div>
      <div className="overflow-hidden">
        <h1
          className={`font-label font-bold text-gold text-[10px] md:text-sm tracking-[0.5em] transition-all duration-1000 ease-luxury uppercase ${
            phase === "draw" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          The Diamond Resort
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
