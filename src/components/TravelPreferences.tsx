import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Calendar, MapPin, Trash2, Plus } from "lucide-react";

interface BucketListItem {
  destination: string;
  priority: string;
  targetYear: string;
}

const bucketList: BucketListItem[] = [
  { destination: "Bora Bora", priority: "High", targetYear: "2025" },
  { destination: "Safari in Tanzania", priority: "Medium", targetYear: "2026" },
  { destination: "Northern Lights - Iceland", priority: "High", targetYear: "2025" },
];

export const TravelPreferences = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Travel Preferences</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="season">Preferred Travel Season</Label>
            <Select defaultValue="summer">
              <SelectTrigger id="season">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spring">Spring (Mar-May)</SelectItem>
                <SelectItem value="summer">Summer (Jun-Aug)</SelectItem>
                <SelectItem value="fall">Fall (Sep-Nov)</SelectItem>
                <SelectItem value="winter">Winter (Dec-Feb)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="advance">Booking Lead Time</Label>
            <Select defaultValue="3-6">
              <SelectTrigger id="advance">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 months</SelectItem>
                <SelectItem value="3-6">3-6 months</SelectItem>
                <SelectItem value="6-12">6-12 months</SelectItem>
                <SelectItem value="12+">12+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="comments">Additional Preferences</Label>
            <Textarea 
              id="comments" 
              placeholder="E.g., Early check-in preferred, allergy to down bedding, prefer ocean views..."
              className="h-24"
              defaultValue="Early booking preferred. Prefer ocean views when available."
            />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Special Dates</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Date
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium text-foreground">Wedding Anniversary</p>
              <p className="text-sm text-muted-foreground">June 15</p>
            </div>
            <Heart className="w-5 h-5 text-accent" />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-medium text-foreground">Birthday</p>
              <p className="text-sm text-muted-foreground">March 15</p>
            </div>
            <Heart className="w-5 h-5 text-accent" />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Bucket List Destinations</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Destination
          </Button>
        </div>

        <div className="space-y-3">
          {bucketList.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{item.destination}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.priority === 'High' 
                      ? 'bg-accent/20 text-accent-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {item.priority} Priority
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Target: {item.targetYear}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
