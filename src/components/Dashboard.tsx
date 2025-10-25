import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plane, Hotel, Ship, Car, MessageSquare, FileText, RefreshCw } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Trip Countdown */}
      <Card className="p-6 bg-gradient-ocean text-primary-foreground shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Next Trip: Honolulu, HI</h2>
            <p className="text-primary-foreground/90">May 7 - May 12, 2025</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-1">12</div>
            <div className="text-sm text-primary-foreground/90">days until departure</div>
          </div>
        </div>
      </Card>

      {/* Savings Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Lifetime Savings</h3>
          <div className="text-4xl font-bold text-primary mb-4">$5,250</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Year-to-Date</span>
              <span className="font-semibold text-foreground">$880</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Savings Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Hotel className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Hotels</span>
              </div>
              <span className="font-semibold text-foreground">$1,480</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Airlines</span>
              </div>
              <span className="font-semibold text-foreground">$2,650</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Cruises</span>
              </div>
              <span className="font-semibold text-foreground">$900</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Car Rentals</span>
              </div>
              <span className="font-semibold text-foreground">$220</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Trip Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md border-l-4 border-l-secondary">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Current Trip</h3>
            <CalendarDays className="w-5 h-5 text-secondary" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">Honolulu, HI</p>
          <p className="text-sm text-muted-foreground mb-3">May 7 - 12, 2025</p>
          <div className="text-sm">
            <span className="text-muted-foreground">Savings: </span>
            <span className="font-semibold text-success">$880</span>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Past Trips</h3>
            <Plane className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">8 Trips</p>
          <p className="text-sm text-muted-foreground mb-3">Since joining VOA</p>
          <div className="text-sm">
            <span className="text-muted-foreground">Total saved: </span>
            <span className="font-semibold text-success">$4,370</span>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Wish List</h3>
            <Ship className="w-5 h-5 text-accent" />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">3 Dreams</p>
          <p className="text-sm text-muted-foreground mb-3">Destinations to explore</p>
          <Button variant="outline" size="sm" className="w-full">
            View Bucket List
          </Button>
        </Card>
      </div>

      {/* Quick Access */}
      <Card className="p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Access</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start gap-2 h-auto py-3">
            <MessageSquare className="w-5 h-5" />
            <span>Contact Concierge</span>
          </Button>
          <Button variant="outline" className="justify-start gap-2 h-auto py-3">
            <FileText className="w-5 h-5" />
            <span>View Receipts</span>
          </Button>
          <Button variant="outline" className="justify-start gap-2 h-auto py-3">
            <RefreshCw className="w-5 h-5" />
            <span>Request Changes</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};
