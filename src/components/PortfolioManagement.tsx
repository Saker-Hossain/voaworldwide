import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Hotel, Ship, Car, CreditCard, Plus, ExternalLink } from "lucide-react";

interface LoyaltyProgram {
  name: string;
  balance: string;
  status: string;
  statusColor: string;
  expiry?: string;
}

const airlinePrograms: LoyaltyProgram[] = [
  { name: "Aeroplan", balance: "75,450 pts", status: "Gold", statusColor: "bg-accent" },
  { name: "Delta SkyMiles", balance: "125,000 miles", status: "Platinum", statusColor: "bg-primary" },
  { name: "American AAdvantage", balance: "45,200 miles", status: "Silver", statusColor: "bg-muted-foreground" },
];

const hotelPrograms: LoyaltyProgram[] = [
  { name: "Marriott Bonvoy", balance: "180,000 pts", status: "Platinum Elite", statusColor: "bg-primary" },
  { name: "Hilton Honors", balance: "95,500 pts", status: "Gold", statusColor: "bg-accent" },
  { name: "World of Hyatt", balance: "65,000 pts", status: "Explorist", statusColor: "bg-secondary" },
];

const cruisePrograms: LoyaltyProgram[] = [
  { name: "Royal Caribbean", balance: "500 pts", status: "Gold", statusColor: "bg-accent" },
  { name: "Norwegian", balance: "300 pts", status: "Silver", statusColor: "bg-muted-foreground" },
];

const carRentals: LoyaltyProgram[] = [
  { name: "Hertz Gold+", balance: "2,500 pts", status: "Gold", statusColor: "bg-accent" },
  { name: "Enterprise Plus", balance: "1,800 pts", status: "Member", statusColor: "bg-muted" },
];

const creditCards: LoyaltyProgram[] = [
  { name: "Amex Membership Rewards", balance: "125,000 pts", status: "Active", statusColor: "bg-success", expiry: "No expiry" },
  { name: "Chase Ultimate Rewards", balance: "85,000 pts", status: "Active", statusColor: "bg-success", expiry: "No expiry" },
];

const ProgramCard = ({ icon: Icon, title, programs }: { icon: any; title: string; programs: LoyaltyProgram[] }) => (
  <Card className="p-6 shadow-md">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <Button variant="outline" size="sm" className="gap-2">
        <Plus className="w-4 h-4" />
        Add
      </Button>
    </div>

    <div className="space-y-4">
      {programs.map((program, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-foreground">{program.name}</span>
              <Badge className={`${program.statusColor} text-xs`}>{program.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{program.balance}</p>
            {program.expiry && (
              <p className="text-xs text-muted-foreground mt-1">{program.expiry}</p>
            )}
          </div>
          <Button variant="ghost" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  </Card>
);

export const PortfolioManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Travel Portfolio</h2>
        <p className="text-sm text-muted-foreground">Manage all your loyalty programs in one place</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ProgramCard icon={Plane} title="Airline Programs" programs={airlinePrograms} />
        <ProgramCard icon={Hotel} title="Hotel Programs" programs={hotelPrograms} />
        <ProgramCard icon={Ship} title="Cruise Lines" programs={cruisePrograms} />
        <ProgramCard icon={Car} title="Car Rentals" programs={carRentals} />
      </div>

      <ProgramCard icon={CreditCard} title="Credit Card Rewards" programs={creditCards} />
    </div>
  );
};
