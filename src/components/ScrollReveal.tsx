import { useEffect, useRef, ReactNode, useCallback } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  type?: "up" | "mask" | "scale";
  delay?: number;
}

const ScrollReveal = ({ children, className = "", type = "up", delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => entry.target.classList.add("revealed"), delay);
          } else {
            entry.target.classList.add("revealed");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    [delay]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  const typeClass = type === "up" ? "reveal-up" : type === "mask" ? "reveal-mask" : "reveal-scale";

  return (
    <div ref={ref} className={`${typeClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
