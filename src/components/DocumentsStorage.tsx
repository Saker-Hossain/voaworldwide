import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Download, Eye, Shield, Lock } from "lucide-react";

interface Document {
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}

const documents: Document[] = [
  { name: "Passport Scan - Jonathan Smith", type: "PDF", uploadDate: "Jan 15, 2024", size: "2.3 MB" },
  { name: "TSA PreCheck Certificate", type: "PDF", uploadDate: "Feb 3, 2024", size: "1.1 MB" },
  { name: "Travel Insurance Policy", type: "PDF", uploadDate: "Mar 10, 2024", size: "0.8 MB" },
  { name: "Honolulu Resort Confirmation", type: "PDF", uploadDate: "Apr 1, 2025", size: "0.5 MB" },
  { name: "Flight Itinerary - May 2025", type: "PDF", uploadDate: "Apr 1, 2025", size: "0.4 MB" },
];

export const DocumentsStorage = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-ocean text-primary-foreground shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-bold">Bank-Grade Security</h2>
            <p className="text-sm text-primary-foreground/90">All documents are encrypted and protected with 2FA</p>
          </div>
        </div>
        <div className="flex gap-2 text-sm">
          <Lock className="w-4 h-4 mt-0.5" />
          <span className="text-primary-foreground/90">256-bit encryption • Auto-logoff protection • Access logs maintained</span>
        </div>
      </Card>

      <Card className="p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Travel Documents</h2>
          </div>
          <Button className="gap-2">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>

        <div className="space-y-3">
          {documents.map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{doc.name}</h3>
                  <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>Uploaded {doc.uploadDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-foreground mb-1">Data Control Options</p>
              <p className="text-muted-foreground">You can export or delete your personal information at any time from your account settings.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
