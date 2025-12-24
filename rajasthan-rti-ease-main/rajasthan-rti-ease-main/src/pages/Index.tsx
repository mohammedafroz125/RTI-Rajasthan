import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ApplicationFormSection from "@/components/sections/ApplicationFormSection";
import WhyRTISection from "@/components/sections/WhyRTISection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import WhatsAppHelpSection from "@/components/sections/WhatsAppHelpSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <DepartmentsSection />
        <ApplicationFormSection />
        <WhyRTISection />
        <TestimonialsSection />
        <ResourcesSection />
        <WhatsAppHelpSection />
        <FAQSection />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
