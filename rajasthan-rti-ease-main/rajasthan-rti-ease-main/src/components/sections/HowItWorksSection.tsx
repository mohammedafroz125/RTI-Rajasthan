import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Application",
    description: "Fill out the RTI application form with your question and select the relevant department."
  },
  {
    icon: Send,
    step: "02",
    title: "We Process",
    description: "Our experts review and file your application with the appropriate Public Information Officer."
  },
  {
    icon: Clock,
    step: "03",
    title: "Track Progress",
    description: "Monitor your application status and receive updates on the progress of your RTI request."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Receive Response",
    description: "Get the official response from the government department directly delivered to you."
  }
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            How RTI Filing Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Filing an RTI application is simple. Follow these four easy steps to get 
            the information you need from Rajasthan Government departments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-accent mb-2">STEP {step.step}</span>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
