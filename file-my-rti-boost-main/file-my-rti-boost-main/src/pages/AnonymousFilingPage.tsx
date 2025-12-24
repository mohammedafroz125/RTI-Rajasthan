import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, CheckCircle, AlertTriangle, FileText, Clock, IndianRupee } from "lucide-react";

const AnonymousFilingPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your identity remains protected throughout the RTI process"
    },
    {
      icon: Eye,
      title: "Confidential Filing",
      description: "We file on your behalf while maintaining anonymity"
    },
    {
      icon: Lock,
      title: "Secure Process",
      description: "All communications are encrypted and confidential"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Submit Your Request",
      description: "Provide us with the information you need and why you want it"
    },
    {
      step: "2", 
      title: "We File Anonymously",
      description: "Our legal experts file the RTI using proper channels while protecting your identity"
    },
    {
      step: "3",
      title: "Get Your Information",
      description: "Receive the information through secure channels without revealing your identity"
    }
  ];

  const faqs = [
    {
      question: "Is anonymous RTI filing legal in India?",
      answer: "Yes, while the RTI Act requires applicant details, you can file through authorized representatives or use legal proxy services like ours to maintain privacy while staying compliant."
    },
    {
      question: "What information do I need to provide?",
      answer: "You need to provide the specific information you're seeking, the department/office to approach, and the reason for the request. We handle the rest anonymously."
    },
    {
      question: "How do you ensure my privacy?",
      answer: "We use encrypted communications, secure data handling, and file RTIs through our legal framework that maintains compliance while protecting your identity."
    },
    {
      question: "What if the RTI gets rejected?",
      answer: "We provide legal support for appeals and follow-ups. Our experts know how to handle rejections while maintaining your anonymity throughout the process."
    },
    {
      question: "How much does anonymous filing cost?",
      answer: "Anonymous filing costs ₹500 plus government fees. This includes privacy protection, legal expertise, and secure communication channels."
    },
    {
      question: "Can I track my anonymous RTI application?",
      answer: "Yes, we provide a secure tracking system with unique reference numbers that allow you to monitor progress without revealing your identity."
    }
  ];

  const useCases = [
    "Investigating corruption or misconduct",
    "Checking government contract details", 
    "Verifying public spending information",
    "Researching sensitive policy matters",
    "Protecting whistleblower identity",
    "Investigating workplace issues in government"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground text-primary">
              <Shield className="h-4 w-4 mr-1" />
              100% Confidential
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Anonymous RTI Filing
            </h1>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Need information but want privacy? File your RTI anonymously with us. 
              We handle everything while protecting your identity completely.
            </p>
            
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-hero" asChild>
              <Link to="/apply?type=anonymous">
                Start Anonymous Filing
                <Shield className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Legal & Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Complete Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Expert Legal Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Anonymous RTI */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Anonymous RTI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sometimes you need information but can't reveal your identity. Our anonymous RTI service provides complete privacy protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-trust transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-gradient-primary rounded-full text-primary-foreground mx-auto w-fit">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Common Use Cases */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Common Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-accent/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-trust">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Anonymous Filing Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 3-step process ensures your privacy while getting you the information you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <CardHeader>
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

      {/* Legal Compliance */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-warning bg-warning/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertTriangle className="h-6 w-6" />
                  Legal Compliance & Transparency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The RTI Act requires applicant details for legal compliance. Our anonymous filing service works within legal frameworks by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Filing through authorized legal representatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Maintaining legal compliance while protecting your identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Using secure channels for information delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Providing legal support throughout the process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-trust">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Anonymous Filing Pricing</h2>
            <p className="text-lg text-muted-foreground">Transparent pricing with complete privacy protection</p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Anonymous RTI Filing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">₹500</div>
                <div className="text-sm text-muted-foreground">+ Government fees</div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Complete anonymity protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Legal expert filing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Secure communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Appeal support included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Tracking & updates</span>
                </li>
              </ul>

              <Button className="w-full" size="lg" asChild>
                <Link to="/apply?type=anonymous">Start Anonymous Filing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about anonymous RTI filing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Information but Want Privacy?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you get the information you need while keeping your identity completely protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/apply?type=anonymous">Start Anonymous Filing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Speak to Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnonymousFilingPage;