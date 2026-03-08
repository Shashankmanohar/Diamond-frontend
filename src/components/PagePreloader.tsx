import { useEffect, useState } from "react";

interface PagePreloaderProps {
  /** If true, starts the exit animation immediately (for route transitions) */
  onReady?: boolean;
}

const PagePreloader = ({ onReady = false }: PagePreloaderProps) => {
  const [phase, setPhase] = useState<"draw" | "wordmark" | "exit" | "done">("draw");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("wordmark"), 400);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (onReady && phase === "wordmark") {
      const t = setTimeout(() => setPhase("exit"), 200);
      return () => clearTimeout(t);
    }
  }, [onReady, phase]);

  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => setPhase("done"), 800);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-primary transition-all duration-700 ease-luxury ${
        phase === "exit" ? "opacity-0 scale-105 blur-sm pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-20 h-20 mb-6">
        <svg viewBox="0 0 100 100" className="w-full h-full start-draw">
          <path className="preloader-path" d="M50 5 L95 50 L50 95 L5 50 Z" />
          <path className="preloader-path" style={{ animationDelay: "150ms" }} d="M50 5 L50 95" />
          <path className="preloader-path" style={{ animationDelay: "300ms" }} d="M5 50 L95 50" />
        </svg>
      </div>
      <div className="overflow-hidden">
        <span
          className={`block font-label font-medium text-ring text-xs tracking-[0.25em] transition-transform duration-500 ease-luxury ${
            phase === "draw" ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          T D R
        </span>
      </div>
    </div>
  );
};

export default PagePreloader;
