import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Disclaimer", href: "#" },
  ];

  const quickLinks = [
    { name: "File RTI", href: "#" },
    { name: "Track Application", href: "#" },
    { name: "RTI Act 2005", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-serif font-bold text-xl">RTI Rajasthan</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Rajasthan's trusted online RTI filing service. We help citizens exercise 
              their Right to Information with professional and legal assistance.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@rtirajasthan.com" className="hover:text-primary-foreground transition-colors duration-200">
                  support@rtirajasthan.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+911234567890" className="hover:text-primary-foreground transition-colors duration-200">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70">
                <strong className="text-primary-foreground">Office Hours:</strong><br />
                Monday - Saturday<br />
                10:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 RTI Rajasthan. All rights reserved.</p>
            <p>
              This is a private service. Not affiliated with the Government of India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
