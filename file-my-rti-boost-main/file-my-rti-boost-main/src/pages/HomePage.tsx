import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import TrustMetrics from "@/components/ui/trust-metrics";
import LanguageSwitcher from "@/components/ui/language-switcher";
import FreeCreditsPopup from "@/components/ui/free-credits-popup";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote
} from "lucide-react";

const HomePage = () => {
  const services = [
    {
      title: "Personal RTI",
      description: "Property records, educational certificates, employment details",
      icon: FileText,
      items: ["Property Records", "Educational Certificates", "Employment Details", "Pension Information"]
    },
    {
      title: "Government Services",
      description: "Passport delays, license verification, permit status",
      icon: Shield,
      items: ["Passport Delays", "License Verification", "Permit Status", "Service Complaints"]
    },
    {
      title: "Legal & Compliance",
      description: "Court records, legal documents, compliance certificates",
      icon: CheckCircle,
      items: ["Court Records", "Legal Documents", "Compliance Certificates", "Case Status"]
    }
  ];

  const states = [
    "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Gujarat",
    "West Bengal", "Rajasthan", "Madhya Pradesh", "Telangana", "Andhra Pradesh", "Kerala"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Mumbai, Maharashtra", 
      content: "FileMyRTI helped me get my property documents in just 15 days. The process was transparent and professional.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Priya Sharma",
      role: "Teacher",
      location: "Delhi",
      content: "I was struggling with my passport delay for months. FileMyRTI resolved it quickly with proper RTI filing.",
      rating: 5,
      image: "/api/placeholder/64/64"
    },
    {
      name: "Arun Patel",
      role: "Business Owner", 
      location: "Ahmedabad, Gujarat",
      content: "Excellent service! Got my business license verification done without any hassle. Highly recommended.",
      rating: 5,
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FreeCreditsPopup />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              🏆 India's Most Trusted RTI Filing Service
            </Badge>
            
            <h1 className="mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-up">
              File Your RTI Applications <br />
              <span className="text-foreground">Hassle-Free & Fast</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Get information from government offices across India. Professional RTI filing service with 96% success rate and guaranteed response tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="text-lg px-8 py-6 shadow-hero" asChild>
                <Link to="/apply">
                  Start RTI Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/anonymous">Anonymous Filing</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>15-30 Day Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>All 28 States Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Expert Legal Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustMetrics />

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our RTI Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional RTI filing services for all your information needs across different government departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-trust transition-all duration-300 border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-gradient-primary rounded-full text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 text-sm">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State Coverage Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">All States Covered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle RTI applications across all Indian states and union territories with state-specific expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {states.map((state, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left p-4 h-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link to={`/states/${state.toLowerCase().replace(/\s+/g, '-')}`}>
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{state}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/states">View All State Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from thousands of satisfied users who got their information through RTI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-trust transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to File Your RTI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of Indians who have successfully obtained information through RTI. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/apply">Start Application</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-bold">
                  RTI
                </div>
                <span className="font-bold text-xl">FileMyRTI</span>
              </div>
              <p className="text-muted-foreground mb-4">
                India's most trusted RTI filing service. Making information access simple and transparent.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary">Personal RTI</Link></li>
                <li><Link to="/services" className="hover:text-primary">Property RTI</Link></li>
                <li><Link to="/anonymous" className="hover:text-primary">Anonymous Filing</Link></li>
                <li><Link to="/states" className="hover:text-primary">State Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/referral" className="hover:text-primary">Referral Program</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>help@filemyrti.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FileMyRTI. All rights reserved. | Empowering transparency through RTI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;