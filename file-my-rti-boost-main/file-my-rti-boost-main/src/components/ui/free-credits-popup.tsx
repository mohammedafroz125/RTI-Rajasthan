import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gift, Mail, FileText, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FreeCreditsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen this popup
    const hasSeenPopup = localStorage.getItem("filemrti_credits_popup_seen");
    
    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mark popup as seen
    localStorage.setItem("filemrti_credits_popup_seen", "true");
    localStorage.setItem("filemrti_user_credits", "100");
    
    toast({
      title: "Welcome Bonus Activated!",
      description: "₹100 credits added to your account. Check your email for the RTI checklist.",
    });

    setIsOpen(false);
    setIsLoading(false);
  };

  const handleClose = () => {
    localStorage.setItem("filemrti_credits_popup_seen", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
            <Gift className="h-8 w-8" />
          </div>
          <DialogTitle className="text-2xl">Welcome to FileMyRTI!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Get started with <span className="font-semibold text-primary">₹100 free credits</span> and a comprehensive RTI filing checklist
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="bg-accent/50 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-sm">You'll receive:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-primary" />
                <span>₹100 filing credits (valid for 6 months)</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span>Complete RTI filing checklist PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>Weekly RTI tips and updates</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={handleClose}
            >
              Maybe Later
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isLoading || !email || !name}
            >
              {isLoading ? "Processing..." : "Claim Free Credits"}
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam, unsubscribe anytime. Credits expire in 6 months.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default FreeCreditsPopup;