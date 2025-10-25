import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Phone, Mail, CreditCard, Utensils, Accessibility } from "lucide-react";

export const ProfileDetails = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue="Jonathan Smith" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" defaultValue="1985-03-15" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" className="pl-10" defaultValue="jonathan@email.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="phone" type="tel" className="pl-10" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="address" className="pl-10" defaultValue="123 Main St, San Francisco, CA 94102" />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Travel Documentation</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="passport">Passport Number</Label>
            <Input id="passport" defaultValue="AB1234567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="passportExpiry">Passport Expiration</Label>
            <Input id="passportExpiry" type="date" defaultValue="2030-12-31" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issuingCountry">Issuing Country</Label>
            <Select defaultValue="usa">
              <SelectTrigger id="issuingCountry">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tsa">TSA PreCheck / Global Entry</Label>
            <Input id="tsa" defaultValue="KTN123456789" />
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <Utensils className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Preferences & Requirements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="seatPref">Seat Preference</Label>
            <Select defaultValue="window">
              <SelectTrigger id="seatPref">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="window">Window</SelectItem>
                <SelectItem value="aisle">Aisle</SelectItem>
                <SelectItem value="middle">Middle (No Preference)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cabinPref">Cabin Preference</Label>
            <Select defaultValue="economy">
              <SelectTrigger id="cabinPref">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premium">Premium Economy</SelectItem>
                <SelectItem value="business">Business Class</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary">Dietary Preferences</Label>
            <Select defaultValue="vegetarian">
              <SelectTrigger id="dietary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Restrictions</SelectItem>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="kosher">Kosher</SelectItem>
                <SelectItem value="halal">Halal</SelectItem>
                <SelectItem value="gluten-free">Gluten-Free</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="accessibility">Accessibility Requirements</Label>
            <div className="relative">
              <Accessibility className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input id="accessibility" className="pl-10" placeholder="Enter any special requirements" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </Card>
    </div>
  );
};
