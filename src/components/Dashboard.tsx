import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Next Trip */}
      <Card className="p-6 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground">Next Trip</h3>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>
        
        <h2 className="text-3xl font-bold mb-2 text-foreground">Honolulu, HI</h2>
        <p className="text-sm text-muted-foreground mb-4">12 Days • May 7 ~ Mar 4</p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Lifetime Savings</p>
            <p className="text-2xl font-bold text-foreground">$5,250</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Year-Date Entire Savings</p>
            <p className="text-2xl font-bold text-foreground">$880</p>
          </div>
        </div>
      </Card>

      {/* Savings Summary */}
      <Card className="p-6 shadow-sm border border-border">
        <h3 className="text-sm font-medium text-foreground mb-4">Savings Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Hotel</span>
            <span className="text-sm font-medium text-foreground">Harlot</span>
            <span className="text-sm font-semibold text-foreground">$1480</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Al line</span>
            <span className="text-sm font-medium text-foreground">76560</span>
            <span className="text-sm font-semibold text-foreground">$200</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Cruise</span>
            <span className="text-sm font-medium text-foreground">500</span>
            <span className="text-sm font-semibold text-foreground">$400</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-border pt-3">
            <span className="text-sm text-foreground">Car Rental</span>
            <span className="text-sm font-medium text-foreground">Total</span>
            <span className="text-sm font-semibold text-foreground">10</span>
          </div>
        </div>
      </Card>

      {/* Travel Preferences */}
      <Card className="p-6 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground">Travel Preferences</h3>
        </div>
        
        <div className="space-y-2">
          {[
            { label: "Gifts", value: "Prestigous", hasArrow: true },
            { label: "Market Survey", value: "Vegetinar", hasArrow: false },
            { label: "Royal Canibians", value: "Diversal", hasArrow: false },
            { label: "Hilarie Colors Plus", value: "Free Gay", hasArrow: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{item.value}</span>
                {item.hasArrow && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Travel Companions */}
      <Card className="p-6 shadow-sm border border-border">
        <h3 className="text-sm font-medium text-foreground mb-4">Travel Comparns</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-foreground">Sutam (Spouse)</span>
            <span className="text-sm font-medium text-foreground">Swartz 10</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-foreground">Dalix</span>
            <span className="text-sm font-medium text-foreground">JOHN Pg</span>
          </div>
        </div>
      </Card>

      {/* Travel Companions & Pets */}
      <Card className="p-6 shadow-sm border border-border">
        <h3 className="text-sm font-medium text-foreground mb-4">Travel Compatations & Pets</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Emini</span>
            <span className="text-sm font-medium text-foreground">5,5000</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Pedephics</span>
            <span className="text-sm font-medium text-foreground">5,000</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-foreground">Cartca</span>
            <span className="text-sm font-medium text-foreground">000</span>
          </div>
          <div className="flex justify-between items-center py-2 border-t border-border pt-2">
            <span className="text-sm text-foreground">Car Ferrsl</span>
            <span className="text-sm font-medium text-foreground">200</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-foreground">Total</span>
            <span className="text-sm font-semibold text-foreground">10</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
