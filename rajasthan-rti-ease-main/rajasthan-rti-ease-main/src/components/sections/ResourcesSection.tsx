import { motion } from "framer-motion";
import { BookOpen, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "RTI Act 2005 Guide",
    description: "Complete guide to understanding the Right to Information Act and how to use it effectively.",
    category: "Legal Guide",
  },
  {
    icon: Lightbulb,
    title: "Success Stories",
    description: "Inspiring stories of citizens who used RTI to bring transparency and accountability.",
    category: "Inspiration",
  },
  {
    icon: FileText,
    title: "RTI Templates",
    description: "Ready-to-use RTI application templates for various government departments in Rajasthan.",
    category: "Templates",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get Inspired, Enlightened & Empowered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn everything you need to know about RTI and how to exercise your right to information
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <resource.icon className="w-8 h-8 text-primary" />
              </div>
              
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4">
                {resource.category}
              </span>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {resource.description}
              </p>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                Read More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
