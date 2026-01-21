import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Expertise from "./pages/services/Expertise";
import Solutions from "./pages/services/Solutions";
import QuantitativeSolutions from "./pages/services/QuantitativeSolutions";
import QualitativeSolutions from "./pages/services/QualitativeSolutions";
import ProjectManagement from "./pages/services/ProjectManagement";
import Recruitment from "./pages/services/Recruitment";
import DiscussionGuide from "./pages/services/DiscussionGuide";
import Moderation from "./pages/services/Moderation";
import Transcription from "./pages/services/Transcription";
import Analysis from "./pages/services/Analysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/expertise" element={<Expertise />} />
          <Route path="/services/solutions" element={<Solutions />} />
          <Route path="/services/quantitative" element={<QuantitativeSolutions />} />
          <Route path="/services/qualitative" element={<QualitativeSolutions />} />
          <Route path="/services/project-management" element={<ProjectManagement />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/services/discussion-guide" element={<DiscussionGuide />} />
          <Route path="/services/moderation" element={<Moderation />} />
          <Route path="/services/transcription" element={<Transcription />} />
          <Route path="/services/analysis" element={<Analysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
