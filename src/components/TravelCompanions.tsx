import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, PawPrint, Plus, Edit } from "lucide-react";

interface Companion {
  name: string;
  relationship: string;
  initials: string;
  seatPref: string;
  tsa: string;
}

const companions: Companion[] = [
  { name: "Sarah Smith", relationship: "Spouse", initials: "SS", seatPref: "Window", tsa: "KTN987654321" },
  { name: "Emma Smith", relationship: "Daughter", initials: "ES", seatPref: "Window", tsa: "N/A" },
  { name: "Oliver Smith", relationship: "Son", initials: "OS", seatPref: "Aisle", tsa: "N/A" },
];

const pets = [
  { name: "Buddy", type: "Dog", documentation: "ESA Certificate on file" },
  { name: "Whiskers", type: "Cat", documentation: "Health certificate expires 2025" },
];

export const TravelCompanions = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Travel Companions</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Companion
          </Button>
        </div>

        <div className="space-y-4">
          {companions.map((companion, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">
                    {companion.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{companion.name}</h3>
                    <Badge variant="secondary" className="text-xs">{companion.relationship}</Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Seat: {companion.seatPref}</span>
                    <span>TSA: {companion.tsa}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <PawPrint className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Pets & ESA</h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Pet
          </Button>
        </div>

        <div className="space-y-4">
          {pets.map((pet, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{pet.name}</h3>
                    <Badge variant="outline" className="text-xs">{pet.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{pet.documentation}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
