import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../src/pages/index";
import Contact from "./pages/Contact";
import ProductJourney from "./pages/ProductJourney";
import ProductCXO from "./pages/ProductCXO";
import ProductManagementApp from "./pages/ProductManagementApp";
import NotFound from "./pages/NotFound";
import ScrollAnimationDemo from "./components/ScrollAnimationDemo";
import { ScrollProgressBar, ScrollAnimationStyles } from "@/components/ScrollAnimations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollAnimationStyles />
      <ScrollProgressBar />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductJourney />} />
          <Route path="/product-cxo" element={<ProductCXO />} />
          <Route path="/product-management-app" element={<ProductManagementApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scroll-demo" element={<ScrollAnimationDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
