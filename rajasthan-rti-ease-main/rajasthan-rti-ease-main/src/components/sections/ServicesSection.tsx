import { motion } from "framer-motion";
import { 
  Zap, 
  UserX, 
  Scale, 
  Users, 
  Settings, 
  Clock 
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Seamless Online Filing",
    description: "File your RTI application from anywhere with our easy-to-use digital platform.",
    highlight: "Quick & Easy",
    price: "₹699",
  },
  {
    icon: UserX,
    title: "Anonymous RTI Filing",
    description: "Protect your identity while exercising your right to information.",
    highlight: "100% Private",
    price: "₹699",
  },
  {
    icon: Scale,
    title: "Online First Appeal Filing",
    description: "File appeals against unsatisfactory responses with expert guidance.",
    highlight: "Legal Support",
    price: "₹699",
  },
  {
    icon: Users,
    title: "Efficient Bulk RTI Filing",
    description: "Submit multiple RTI applications efficiently for organizations and activists.",
    highlight: "Volume Discount",
    price: "Request Quote",
    isQuote: true,
  },
  {
    icon: Settings,
    title: "Custom RTI Drafting",
    description: "Get professionally drafted RTI applications tailored to your specific needs.",
    highlight: "Expert Drafted",
    price: "₹699",
  },
  {
    icon: Clock,
    title: "15 Minute RTI",
    description: "Express RTI filing service for urgent information requirements.",
    highlight: "Ultra Fast",
    price: "₹199",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Comprehensive RTI Filing Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional RTI services designed to meet every citizen's needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              {/* Highlight badge */}
              <div className="absolute -top-3 right-4">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-md">
                  {service.highlight}
                </span>
              </div>

              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${(service as any).isQuote ? 'text-accent text-lg' : 'text-primary'}`}>
                      {service.price}
                    </span>
                    {!(service as any).isQuote && <span className="text-xs text-muted-foreground">All inclusive</span>}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="w-full h-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
