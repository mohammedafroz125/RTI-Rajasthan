import { useState, useEffect } from "react";
import { Users, FileCheck, Star, Award } from "lucide-react";

const TrustMetrics = () => {
  const [metrics, setMetrics] = useState({
    applications: 0,
    users: 0,
    rating: 0,
    success: 0
  });

  // Animate numbers on component mount
  useEffect(() => {
    const targets = {
      applications: 1000,
      users: 865,
      rating: 4.8,
      success: 96
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setMetrics({
        applications: Math.floor(targets.applications * progress),
        users: Math.floor(targets.users * progress),
        rating: Math.floor(targets.rating * progress * 10) / 10,
        success: Math.floor(targets.success * progress)
      });

      if (currentStep >= steps) {
        setMetrics(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const trustItems = [
    {
      icon: FileCheck,
      number: metrics.applications + "+",
      label: "RTIs Filed",
      description: "Successfully submitted"
    },
    {
      icon: Users,
      number: metrics.users + "+",
      label: "Happy Users",
      description: "Across all states"
    },
    {
      icon: Star,
      number: metrics.rating,
      label: "Rating",
      description: "Customer satisfaction"
    },
    {
      icon: Award,
      number: metrics.success + "%",
      label: "Success Rate",
      description: "Information delivered"
    }
  ];

  return (
    <section className="py-16 bg-gradient-trust">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of satisfied users who have successfully obtained information through RTI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="trust-metric animate-fade-up group hover:shadow-trust transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-gradient-primary rounded-full text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <div className="trust-number mb-2">{item.number}</div>
                  <h3 className="font-semibold text-lg mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;