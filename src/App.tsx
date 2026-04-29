import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import WhatsAppButton from "./components/WhatsAppButton";

import PagePreloader from "./components/PagePreloader";
import RouteTransition from "./components/RouteTransition";

const Index = lazy(() => import("./pages/Index"));
const Suites = lazy(() => import("./pages/Suites"));
const Dining = lazy(() => import("./pages/Dining"));
const Experiences = lazy(() => import("./pages/Experiences"));
const ExperienceDetail = lazy(() => import("./pages/ExperienceDetail"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

const queryClient = new QueryClient();

import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PagePreloader />}>
            <RouteTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/suites" element={<Suites />} />
                <Route path="/dining" element={<Dining />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experiences/:type" element={<ExperienceDetail />} />
                <Route path="/events/:type" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RouteTransition>
          </Suspense>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
