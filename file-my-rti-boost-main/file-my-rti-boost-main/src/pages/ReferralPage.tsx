import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Share2, IndianRupee, Gift, Users, Copy, Check, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReferralPage = () => {
  const [referralCode, setReferralCode] = useState("RTI2024FRIEND");
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://filemyrti.com?ref=${referralCode}`);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const sendReferralEmail = () => {
    if (!email) return;
    
    const subject = "Check out FileMyRTI - Get ₹100 Free Credits!";
    const body = `Hi!

I've been using FileMyRTI for my RTI applications and thought you might find it useful too. They make RTI filing really simple and professional.

Here's a special link that gives you ₹100 free credits to get started:
https://filemyrti.com?ref=${referralCode}

Plus, I get ₹100 when you file your first RTI too - it's a win-win!

FileMyRTI handles everything from drafting to follow-ups, and they have a 96% success rate. Really recommend giving it a try.

Best regards!`;

    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setEmail("");
    
    toast({
      title: "Email opened!",
      description: "Your email client should open with the referral message",
    });
  };

  const howItWorks = [
    {
      step: "1",
      title: "Share Your Link", 
      description: "Send your unique referral link to friends and family"
    },
    {
      step: "2",
      title: "Friend Signs Up",
      description: "They get ₹100 free credits when they register"
    },
    {
      step: "3",
      title: "You Both Win",
      description: "You get ₹100 when they file their first RTI application"
    }
  ];

  const referralStats = [
    { number: "₹100", label: "You Earn", description: "Per successful referral" },
    { number: "₹100", label: "Friend Gets", description: "Free credits to start" },
    { number: "25+", label: "People Referred", description: "Your current referrals" },
    { number: "₹2,500", label: "Total Earned", description: "Your referral earnings" }
  ];

  const sharingOptions = [
    {
      platform: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-500",
      url: `https://wa.me/?text=Check%20out%20FileMyRTI%20for%20easy%20RTI%20filing!%20Get%20%E2%82%B9100%20free%20credits:%20https://filemyrti.com?ref=${referralCode}`
    },
    {
      platform: "Email",
      icon: Mail, 
      color: "bg-blue-500",
      action: "email"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground text-primary">
              <Gift className="h-4 w-4 mr-1" />
              Give ₹100, Get ₹100
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Refer Friends, Earn Credits
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Help your friends discover easy RTI filing while earning ₹100 for each successful referral. 
              Everyone wins with FileMyRTI!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Unlimited Referrals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Instant Credits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>No Expiry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Stats */}
      <section className="py-16 bg-gradient-trust">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {referralStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="trust-number mb-2">{stat.number}</div>
                <h3 className="font-semibold text-lg mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Referrals Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to start earning with our referral program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <Card key={index} className="relative text-center hover:shadow-trust transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Link */}
      <section className="py-20 bg-gradient-trust">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Your Referral Link</CardTitle>
                <p className="text-muted-foreground">
                  Share this link with friends to start earning together
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="referral-link">Referral Link</Label>
                  <div className="flex gap-2">
                    <Input
                      id="referral-link"
                      value={`https://filemyrti.com?ref=${referralCode}`}
                      readOnly
                      className="bg-muted"
                    />
                    <Button variant="outline" onClick={copyReferralCode}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Quick Share</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="justify-start"
                      onClick={() => window.open(sharingOptions[0].url)}
                    >
                      <div className={`w-4 h-4 rounded mr-2 ${sharingOptions[0].color}`}></div>
                      WhatsApp
                    </Button>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={sendReferralEmail} disabled={!email}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Refer FileMyRTI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You're helping friends discover India's most trusted RTI filing service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-3 bg-gradient-primary rounded-full text-primary-foreground mx-auto w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Trusted Service</h3>
                <p className="text-sm text-muted-foreground">
                  96% success rate with 1000+ RTIs filed successfully
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-3 bg-gradient-primary rounded-full text-primary-foreground mx-auto w-fit">
                  <Share2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Easy Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Simple referral process with instant tracking
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-3 bg-gradient-primary rounded-full text-primary-foreground mx-auto w-fit">
                  <IndianRupee className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Real Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Earn actual credits you can use for future RTI filings
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Referral Program Terms</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• Both referrer and referee get ₹100 credits when the referred user files their first RTI</p>
              <p>• Credits are valid for 12 months from the date of earning</p>
              <p>• Referrals must be genuine new users who haven't used FileMyRTI before</p>
              <p>• Credits will be added within 24 hours of successful RTI filing</p>
              <p>• FileMyRTI reserves the right to modify or terminate this program with notice</p>
              <p>• Maximum of ₹5,000 referral credits per user per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Earning Today!
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Share FileMyRTI with your network and start earning ₹100 for every successful referral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={copyReferralCode}>
              <Copy className="h-5 w-5 mr-2" />
              Copy Referral Link
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;