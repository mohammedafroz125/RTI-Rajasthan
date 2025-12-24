import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link, useParams } from "react-router-dom";
import { MapPin, Clock, IndianRupee, FileText, CheckCircle, Phone, Mail } from "lucide-react";

const StatesPage = () => {
  const { state } = useParams();
  
  const stateData = {
    "maharashtra": {
      name: "Maharashtra",
      capital: "Mumbai",
      fee: "10",
      timeline: "15-30 days",
      language: "Marathi",
      departments: [
        "Revenue Department",
        "Urban Development",
        "Education Department", 
        "Health Department",
        "Police Department",
        "Transport Department"
      ],
      commonRTIs: [
        "Property Records (7/12 Extract)",
        "Income Certificate", 
        "Domicile Certificate",
        "Caste Certificate",
        "Police Verification",
        "Birth/Death Certificate"
      ],
      faqs: [
        {
          question: "What is the RTI fee in Maharashtra?",
          answer: "The application fee is ₹10 for general information. Additional charges may apply for photocopies (₹2 per page) and larger documents."
        },
        {
          question: "How long does RTI take in Maharashtra?",
          answer: "Standard RTI applications are processed within 15-30 days. Life and liberty matters are processed within 48 hours."
        },
        {
          question: "Can I file RTI in Marathi?",
          answer: "Yes, RTI applications can be filed in Marathi, English, or Hindi in Maharashtra."
        },
        {
          question: "What documents do I need for property RTI?",
          answer: "Survey number, village name, and applicant details are required for property-related RTI applications."
        }
      ]
    }
  };

  // Default to Maharashtra if no state specified or state not found
  const currentState = stateData[state as keyof typeof stateData] || stateData.maharashtra;

  const allStates = [
    { name: "Maharashtra", slug: "maharashtra", popular: true },
    { name: "Delhi", slug: "delhi", popular: true },
    { name: "Karnataka", slug: "karnataka", popular: true },
    { name: "Tamil Nadu", slug: "tamil-nadu", popular: true },
    { name: "Uttar Pradesh", slug: "uttar-pradesh", popular: false },
    { name: "Gujarat", slug: "gujarat", popular: false },
    { name: "West Bengal", slug: "west-bengal", popular: false },
    { name: "Rajasthan", slug: "rajasthan", popular: false },
    { name: "Madhya Pradesh", slug: "madhya-pradesh", popular: false },
    { name: "Telangana", slug: "telangana", popular: false },
    { name: "Andhra Pradesh", slug: "andhra-pradesh", popular: false },
    { name: "Kerala", slug: "kerala", popular: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container px-4 py-6">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/states" className="hover:text-primary">States</Link>
          {state && (
            <>
              <span className="mx-2">/</span>
              <span className="text-foreground">{currentState.name}</span>
            </>
          )}
        </nav>
      </div>

      {state ? (
        // Individual State Page
        <>
          {/* Hero Section */}
          <section className="py-16 bg-gradient-trust">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {currentState.capital}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  RTI Filing in {currentState.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional RTI services for {currentState.name} with expert knowledge of state-specific processes and requirements.
                </p>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/apply">File RTI for {currentState.name}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Quick Info */}
          <section className="py-12">
            <div className="container px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6 text-center">
                    <IndianRupee className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Application Fee</div>
                    <div className="text-2xl font-bold text-primary">₹{currentState.fee}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Response Time</div>
                    <div className="text-sm font-medium">{currentState.timeline}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Language</div>
                    <div className="text-sm font-medium">{currentState.language}/English</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                    <div className="font-semibold">Success Rate</div>
                    <div className="text-2xl font-bold text-success">96%</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Popular RTI Services */}
          <section className="py-16">
            <div className="container px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Popular RTI Services in {currentState.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {currentState.commonRTIs.map((service, index) => (
                  <Card key={index} className="hover:shadow-trust transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{service}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Get official information and documents from {currentState.name} government.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link to="/apply">Apply Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Government Departments */}
          <section className="py-16 bg-gradient-trust">
            <div className="container px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Covered Government Departments
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {currentState.departments.map((dept, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-lg shadow-card">
                    <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">{dept}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16">
            <div className="container px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions - {currentState.name} RTI
              </h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                  {currentState.faqs.map((faq, index) => (
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
        </>
      ) : (
        // All States Listing Page
        <>
          <section className="py-16">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  RTI Services by State
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose your state to access specific RTI filing information, fee structures, and state-specific guidance.
                </p>
              </div>

              {/* Popular States */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Popular States</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {allStates.filter(s => s.popular).map((state, index) => (
                    <Card key={index} className="hover:shadow-trust transition-all duration-300 cursor-pointer group">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{state.name}</span>
                          <Badge variant="secondary">Popular</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Specialized RTI services for {state.name} with expert knowledge of local procedures.
                        </p>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                          <Link to={`/states/${state.slug}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All States */}
              <div>
                <h2 className="text-2xl font-bold mb-8">All States & Union Territories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {allStates.map((state, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-left p-4 h-auto hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/states/${state.slug}`}>
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{state.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Contact Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your RTI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our RTI experts are here to help you file your application correctly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Call Expert
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="mailto:help@filemyrti.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatesPage;