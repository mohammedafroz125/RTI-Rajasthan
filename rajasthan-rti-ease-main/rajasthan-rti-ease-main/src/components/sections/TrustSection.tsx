import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Scale, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "RTI Applications Filed",
    description: "Across Rajasthan districts"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Secure Processing",
    description: "Your data is protected"
  },
  {
    icon: Scale,
    value: "Legal",
    label: "Expert Assistance",
    description: "Professional guidance"
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    description: "Serving Rajasthan citizens"
  }
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Rajasthan's Trusted RTI Filing Service
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            We help citizens exercise their Right to Information with professional, 
            legal, and transparent RTI filing services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-primary-foreground/15 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
