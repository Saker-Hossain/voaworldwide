import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, Clock, Send } from "lucide-react";

interface ConciergeHistory {
  date: string;
  subject: string;
  status: string;
  advisor: string;
}

const history: ConciergeHistory[] = [
  { date: "Apr 1, 2025", subject: "Honolulu trip booking", status: "Completed", advisor: "Sarah Johnson" },
  { date: "Mar 15, 2025", subject: "Points redemption inquiry", status: "Completed", advisor: "Michael Chen" },
  { date: "Feb 20, 2025", subject: "Flight change request", status: "Completed", advisor: "Sarah Johnson" },
];

export const ConciergeSupport = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md border-l-4 border-l-primary">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Live Chat</h3>
              <p className="text-xs text-muted-foreground">Instant response</p>
            </div>
          </div>
          <Button className="w-full">Start Chat</Button>
        </Card>

        <Card className="p-6 shadow-md border-l-4 border-l-secondary">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-8 h-8 text-secondary" />
            <div>
              <h3 className="font-semibold text-foreground">Call Us</h3>
              <p className="text-xs text-muted-foreground">Available 24/7</p>
            </div>
          </div>
          <Button variant="secondary" className="w-full">1-800-VOA-TRIP</Button>
        </Card>

        <Card className="p-6 shadow-md border-l-4 border-l-accent">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-accent-foreground" />
            <div>
              <h3 className="font-semibold text-foreground">Email Support</h3>
              <p className="text-xs text-muted-foreground">Response in 2-4 hours</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">Send Email</Button>
        </Card>
      </div>

      <Card className="p-6 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Request New Trip Quote</h2>
        </div>

        <div className="space-y-4">
          <Textarea 
            placeholder="Tell us about your dream trip... Where would you like to go? When? Who's traveling with you?"
            className="min-h-[120px]"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">A VOA advisor will respond within 2 hours</p>
            <Button className="gap-2">
              <Send className="w-4 h-4" />
              Submit Request
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Concierge History</h2>
          </div>
        </div>

        <div className="space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg shadow-sm">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-foreground">{item.subject}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
                    {item.status}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>Advisor: {item.advisor}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-muted/30">
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">24/7 Emergency Assistance</h3>
            <p className="text-sm text-muted-foreground">
              Traveling and need urgent help? Our emergency line is available around the clock for flight changes, cancellations, medical emergencies, or any urgent travel needs.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
