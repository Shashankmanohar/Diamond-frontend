import { useEffect, useState, useCallback, useRef, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import PagePreloader from "./PagePreloader";

interface RouteTransitionProps {
  children: ReactNode;
}

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(false);
  const [ready, setReady] = useState(true);
  const isFirstRender = useRef(true);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    // Skip preloader on first render (Suspense fallback handles it)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPath.current = location.pathname;
      return;
    }

    // Only show preloader on actual route changes
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setShowPreloader(true);
      setReady(false);

      // Give the page a moment to mount, then signal ready
      const t = setTimeout(() => setReady(true), 300);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  const handleDone = useCallback(() => {
    setShowPreloader(false);
  }, []);

  // When preloader phase reaches "done", it unmounts itself
  // We detect that by checking ready + showPreloader
  useEffect(() => {
    if (ready && !showPreloader) return;
  }, [ready, showPreloader]);

  return (
    <>
      {showPreloader && <PagePreloader onReady={ready} />}
      {children}
    </>
  );
};

export default RouteTransition;
