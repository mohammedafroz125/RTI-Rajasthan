import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The RTI service helped me get my land records within 30 days. The process was simple and the team guided me throughout. Highly recommended.",
    name: "Ramesh Kumar",
    location: "Jaipur, Rajasthan",
    role: "Farmer"
  },
  {
    quote: "I was struggling to get information about government schemes. With this RTI service, I received all details about subsidy programs in my district.",
    name: "Sunita Devi",
    location: "Jodhpur, Rajasthan",
    role: "Social Worker"
  },
  {
    quote: "Professional and reliable service. They helped me file an RTI about road construction funds in my village. The response came within the stipulated time.",
    name: "Mahendra Singh",
    location: "Udaipur, Rajasthan",
    role: "Retired Teacher"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            What Citizens Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thousands of Rajasthan citizens have successfully obtained government 
            information through our RTI filing service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent/40" />
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
