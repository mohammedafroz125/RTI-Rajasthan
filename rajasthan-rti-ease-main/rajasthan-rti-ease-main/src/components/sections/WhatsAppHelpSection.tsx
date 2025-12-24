import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Clock, text: "Available 24/7" },
  { icon: CheckCircle, text: "Instant Response" },
  { icon: Phone, text: "Free Consultation" },
];

const WhatsAppHelpSection = () => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi, I need help with RTI filing in Rajasthan.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 bg-gradient-to-r from-whatsapp to-trust relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Need Help? Chat with Us!
              </h2>
            </div>
            <p className="text-white/90 text-lg max-w-xl mb-6">
              Get instant assistance for your RTI queries. Our experts are ready to help you file your application successfully.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 text-white/90">
                  <feature.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-white text-whatsapp hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-elevated group"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Start WhatsApp Chat
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppHelpSection;
