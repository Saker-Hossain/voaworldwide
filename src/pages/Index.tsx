import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Heart, 
  Users, 
  FileText, 
  TrendingUp, 
  MessageSquare 
} from "lucide-react";
import { Dashboard } from "@/components/Dashboard";
import { ProfileDetails } from "@/components/ProfileDetails";
import { PortfolioManagement } from "@/components/PortfolioManagement";
import { TravelPreferences } from "@/components/TravelPreferences";
import { TravelCompanions } from "@/components/TravelCompanions";
import { DocumentsStorage } from "@/components/DocumentsStorage";
import { SavingsTracking } from "@/components/SavingsTracking";
import { ConciergeSupport } from "@/components/ConciergeSupport";
import heroImage from "@/assets/hero-bg.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-ocean/80"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
              <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-bold">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="text-primary-foreground">
              <h1 className="text-3xl font-bold mb-1">Jonathan Smith</h1>
              <p className="text-primary-foreground/90">jonathan@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <img src={logoIcon} alt="VOA" className="w-12 h-12" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Your Travel Portfolio, Perfected</h2>
            <p className="text-sm text-muted-foreground">Vacation Ownership Advisor Member Portal</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-2 h-auto p-2 bg-card shadow-md">
            <TabsTrigger value="dashboard" className="flex flex-col items-center gap-2 py-3">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-xs">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex flex-col items-center gap-2 py-3">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex flex-col items-center gap-2 py-3">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs">Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex flex-col items-center gap-2 py-3">
              <Heart className="w-5 h-5" />
              <span className="text-xs">Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="companions" className="flex flex-col items-center gap-2 py-3">
              <Users className="w-5 h-5" />
              <span className="text-xs">Companions</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex flex-col items-center gap-2 py-3">
              <FileText className="w-5 h-5" />
              <span className="text-xs">Documents</span>
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex flex-col items-center gap-2 py-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs">Savings</span>
            </TabsTrigger>
            <TabsTrigger value="concierge" className="flex flex-col items-center gap-2 py-3">
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs">Concierge</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-8">
            <Dashboard />
          </TabsContent>

          <TabsContent value="profile" className="mt-8">
            <ProfileDetails />
          </TabsContent>

          <TabsContent value="portfolio" className="mt-8">
            <PortfolioManagement />
          </TabsContent>

          <TabsContent value="preferences" className="mt-8">
            <TravelPreferences />
          </TabsContent>

          <TabsContent value="companions" className="mt-8">
            <TravelCompanions />
          </TabsContent>

          <TabsContent value="documents" className="mt-8">
            <DocumentsStorage />
          </TabsContent>

          <TabsContent value="savings" className="mt-8">
            <SavingsTracking />
          </TabsContent>

          <TabsContent value="concierge" className="mt-8">
            <ConciergeSupport />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
