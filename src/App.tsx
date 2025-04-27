
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Upload from "./pages/Upload";
import Manage from "./pages/Manage";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Faq from "./pages/Faq";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
