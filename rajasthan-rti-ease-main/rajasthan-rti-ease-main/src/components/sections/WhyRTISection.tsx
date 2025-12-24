import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Scale, FileCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Promote Transparency",
    description: "RTI empowers citizens to access government information, ensuring transparency in public administration and decision-making processes."
  },
  {
    icon: Scale,
    title: "Ensure Accountability",
    description: "Hold government officials accountable for their actions. RTI helps expose corruption, delays, and malpractices in public offices."
  },
  {
    icon: FileCheck,
    title: "Constitutional Right",
    description: "The Right to Information Act, 2005 is your legal right. Every citizen has the power to seek information from public authorities."
  },
  {
    icon: Users,
    title: "Citizen Empowerment",
    description: "RTI strengthens democracy by enabling citizens to participate in governance and make informed decisions about public matters."
  }
];

const WhyRTISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Your Right</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Why File RTI?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Right to Information Act empowers every citizen of India to question, 
              examine, and audit the government's decisions and actions. It is a powerful 
              tool for ensuring good governance and fighting corruption.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-accent">
              <p className="text-foreground italic font-serif">
                "Information is the currency of democracy."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Thomas Jefferson
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRTISection;
