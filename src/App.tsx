
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";
import HomePage from "@/pages/HomePage";
import MapPage from "@/pages/MapPage";
import RitualsPage from "@/pages/RitualsPage";
import ScrollsPage from "@/pages/ScrollsPage";
import CirclePage from "@/pages/CirclePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/rituals" element={<RitualsPage />} />
            <Route path="/scrolls" element={<ScrollsPage />} />
            <Route path="/circle" element={<CirclePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

