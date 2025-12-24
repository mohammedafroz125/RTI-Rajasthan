import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is RTI and who can file it?",
    answer: "RTI (Right to Information) is a fundamental right under the RTI Act 2005 that allows any Indian citizen to request information from public authorities. Any person can file an RTI application to seek information about government activities, decisions, and public expenditure.",
  },
  {
    question: "What is the fee for filing an RTI application in Rajasthan?",
    answer: "The RTI application fee in Rajasthan is ₹10 for state departments. BPL (Below Poverty Line) cardholders are exempted from paying fees. Additional charges may apply for photocopies and other information formats.",
  },
  {
    question: "How long does it take to receive a response?",
    answer: "As per the RTI Act, the concerned Public Information Officer (PIO) must provide information within 30 days from the date of receipt. For matters concerning life and liberty, the response must be given within 48 hours.",
  },
  {
    question: "Can I file RTI anonymously?",
    answer: "Yes, we offer anonymous RTI filing services where your identity is protected throughout the process. Our team files the application on behalf of our organization, ensuring your privacy while exercising your right to information.",
  },
  {
    question: "What if my RTI application is rejected or I receive incomplete information?",
    answer: "If your RTI is rejected or you receive incomplete information, you can file a First Appeal within 30 days to the First Appellate Authority. We provide complete assistance for filing appeals and can guide you through the entire process.",
  },
  {
    question: "Which departments can I file RTI applications for?",
    answer: "You can file RTI applications for all Rajasthan Government departments including Revenue, Police, Education, Health, PWD, Panchayati Raj, Urban Development, and many more. We cover all state and central government departments operating in Rajasthan.",
  },
  {
    question: "How do I track my RTI application status?",
    answer: "Once we file your RTI, you receive a unique tracking number. You can use this to track your application status through our portal, and we also send regular updates via SMS and email about the progress of your application.",
  },
  {
    question: "What documents do I need to file an RTI?",
    answer: "For filing an RTI, you primarily need to clearly describe the information you're seeking. No identity proof is mandatory for filing, but having Aadhaar or voter ID helps for communication purposes. For BPL fee exemption, you'll need your BPL card.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about RTI filing in Rajasthan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-[var(--shadow-soft)] data-[state=open]:shadow-[var(--shadow-card)]"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
