import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Percent, Award } from "lucide-react";

export const SavingsTracking = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lifetime Savings</p>
              <p className="text-2xl font-bold text-foreground">$5,250</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-success">
            <TrendingUp className="w-4 h-4" />
            <span>Since joining VOA</span>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Year-to-Date</p>
              <p className="text-2xl font-bold text-foreground">$880</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-secondary">
            <TrendingUp className="w-4 h-4" />
            <span>2025 savings</span>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <Percent className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Savings/Trip</p>
              <p className="text-2xl font-bold text-foreground">$656</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Across 8 bookings</span>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
              <Award className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Bookings</p>
              <p className="text-2xl font-bold text-foreground">8</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-success">
            <span>+1 upcoming</span>
          </div>
        </Card>
      </div>

      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Savings by Category</h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Hotels</span>
              <span className="text-sm font-bold text-foreground">$1,480</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-ocean rounded-full" style={{ width: '28%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Airlines</span>
              <span className="text-sm font-bold text-foreground">$2,650</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Cruises</span>
              <span className="text-sm font-bold text-foreground">$900</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: '17%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Car Rentals</span>
              <span className="text-sm font-bold text-foreground">$220</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-success rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card border border-border shadow-md">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">How We Calculate Savings</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every savings figure is backed by real data, comparing your VOA member net rate to public retail rates on platforms like Expedia, Booking.com, and official airline websites. Your actual value may be even higher when factoring in exclusive perks and upgrades.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
