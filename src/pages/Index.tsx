import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { ProfileDetails } from "@/components/ProfileDetails";
import { PortfolioManagement } from "@/components/PortfolioManagement";
import { TravelPreferences } from "@/components/TravelPreferences";
import { TravelCompanions } from "@/components/TravelCompanions";
import { DocumentsStorage } from "@/components/DocumentsStorage";
import { SavingsTracking } from "@/components/SavingsTracking";
import { ConciergeSupport } from "@/components/ConciergeSupport";
import { Routes, Route, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const PageLayout = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  return (
    <div className="p-8">
      {title && <h1 className="text-2xl font-bold mb-6 text-foreground">{title}</h1>}
      {children}
    </div>
  );
};

const Index = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/": return "";
      case "/profile": return "Profile & Personal Details";
      case "/portfolio": return "Travel Portfolio";
      case "/preferences": return "Travel Preferences";
      case "/companions": return "Travel Companions";
      case "/documents": return "Documents & Identification";
      case "/savings": return "Savings & Value Tracking";
      case "/concierge": return "Concierge Support";
      default: return "";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header with Sidebar Toggle */}
          <header className="h-14 border-b border-border bg-card flex items-center px-6 sticky top-0 z-10">
            <SidebarTrigger className="mr-4">
              <Menu className="w-5 h-5" />
            </SidebarTrigger>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-medium text-foreground">
                VOA Member Portal
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<PageLayout><Dashboard /></PageLayout>} />
              <Route path="/profile" element={<PageLayout title={getPageTitle()}><ProfileDetails /></PageLayout>} />
              <Route path="/portfolio" element={<PageLayout title={getPageTitle()}><PortfolioManagement /></PageLayout>} />
              <Route path="/preferences" element={<PageLayout title={getPageTitle()}><TravelPreferences /></PageLayout>} />
              <Route path="/companions" element={<PageLayout title={getPageTitle()}><TravelCompanions /></PageLayout>} />
              <Route path="/documents" element={<PageLayout title={getPageTitle()}><DocumentsStorage /></PageLayout>} />
              <Route path="/savings" element={<PageLayout title={getPageTitle()}><SavingsTracking /></PageLayout>} />
              <Route path="/concierge" element={<PageLayout title={getPageTitle()}><ConciergeSupport /></PageLayout>} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
