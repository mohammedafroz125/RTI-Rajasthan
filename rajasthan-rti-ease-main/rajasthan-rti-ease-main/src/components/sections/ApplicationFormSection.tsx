import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, Phone, MapPin, Hash, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApplicationFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to proceed with your RTI filing.",
    });
    
    setIsSubmitting(false);
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      pincode: "",
    });
  };

  const formFields = [
    { name: "fullName", label: "Full Name", type: "text", icon: User, placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "your.email@example.com" },
    { name: "mobile", label: "Mobile Number", type: "tel", icon: Phone, placeholder: "+91 98765 43210" },
    { name: "pincode", label: "Pincode", type: "text", icon: Hash, placeholder: "302001" },
  ];

  return (
    <section id="application-form" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Start Your Application
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              File Your RTI Application Today
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill in your details and our expert team will help you draft and file your RTI application 
              with the appropriate Rajasthan Government department.
            </p>

            <div className="space-y-4">
              {[
                "Free consultation on RTI eligibility",
                "Expert-drafted application",
                "Status tracking & updates",
                "Appeal assistance if needed",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-[var(--shadow-elevated)] h-full flex flex-col"
            >
              <div className="space-y-5 flex-grow">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Label htmlFor={field.name} className="text-foreground font-medium mb-2 block">
                      {field.label}
                    </Label>
                    <div className="relative">
                      <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="pl-10 h-12 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Label htmlFor="address" className="text-foreground font-medium mb-2 block">
                    Full Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      className="pl-10 min-h-[100px] border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-6"
              >
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
