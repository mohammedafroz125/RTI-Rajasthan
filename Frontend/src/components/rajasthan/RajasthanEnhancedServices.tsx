/**
 * ============================================================================
 * RAJASTHAN ENHANCED SERVICES SECTION
 * ============================================================================
 * 
 * Purpose: Interactive two-column service selector for Rajasthan homepage.
 *          Displays RTI services with detailed information cards.
 * 
 * State Usage: Rajasthan (active) - Used only on homepage
 * 
 * Features:
 * - Left column: Service selector buttons (tab-style)
 * - Right column: Large service detail card
 * - Smooth transitions between services
 * - Responsive design (stacks on mobile)
 * 
 * Services Displayed:
 * 1. Seamless Online Filing
 * 2. Anonymous RTI Filing
 * 3. Online First Appeal Filing
 * 4. Efficient Bulk RTI Filing
 * 5. Custom RTI
 * 6. 15 Minute RTI Consultation
 * 
 * Used by: Home.tsx (Rajasthan homepage)
 * ============================================================================
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection';
import SOFIcon from '../../assets/images/SOFIcon.webp';
import AnonyIcon from '../../assets/images/AnonyIcon.webp';
import FirstIcon from '../../assets/images/FirstIcon.webp';
import BulkIcon from '../../assets/images/BulkIcon.webp';
import CustomIcon from '../../assets/images/CustomIcon.webp';
import Icon15min from '../../assets/images/15minIcon.webp';

const services = [
  {
    icon: SOFIcon,
    title: "Seamless Online Filing",
    description: "File your RTI application from anywhere with our easy-to-use digital platform.",
    fullDescription: "Experience hassle-free RTI filing with our comprehensive digital platform. Our expert team handles everything from drafting to submission, ensuring your application is properly formatted and submitted to the correct authority.",
    highlight: "Quick & Easy",
    price: "₹699",
    isQuote: false,
    route: "/services/seamless-online-filing",
    buttonText: "File Now",
    features: ["Expert drafting", "Online submission", "Timely dispatch", "Application tracking"]
  },
  {
    icon: AnonyIcon,
    title: "Anonymous RTI Filing",
    description: "Protect your identity while exercising your right to information.",
    fullDescription: "Privacy matters when filing RTI applications. Our anonymous service protects your identity while ensuring your application is filed correctly. Complete confidentiality guaranteed throughout the process.",
    highlight: "100% Private",
    price: "₹699",
    isQuote: false,
    route: "/services/anonymous",
    buttonText: "Start Anonymously",
    features: ["Complete anonymity", "Identity protection", "Discreet filing", "Privacy guaranteed"]
  },
  {
    icon: FirstIcon,
    title: "Online First Appeal Filing",
    description: "File appeals against unsatisfactory responses with expert guidance.",
    fullDescription: "If your RTI application was rejected or you didn't receive a satisfactory response, filing a First Appeal is your next step. Our expert team will help you draft a compelling appeal and submit it quickly.",
    highlight: "Legal Support",
    price: "₹699",
    isQuote: false,
    route: "/services/1st-appeal",
    buttonText: "Appeal Now",
    features: ["Expert appeal drafting", "Legal guidance", "Quick submission", "Appeal tracking"]
  },
  {
    icon: BulkIcon,
    title: "Efficient Bulk RTI Filing",
    description: "Submit multiple RTI applications efficiently for organizations and activists.",
    fullDescription: "Manage and submit multiple RTI applications efficiently with our professional bulk service. Perfect for organizations, activists, and researchers who need to file multiple RTIs simultaneously.",
    highlight: "Volume Discount",
    price: "Request Quote",
    isQuote: true,
    route: "/services/bulk",
    buttonText: "Request Quote",
    features: ["Volume discounts", "Bulk processing", "Organized tracking", "Dedicated support"]
  },
  {
    icon: CustomIcon,
    title: "Custom RTI Drafting",
    description: "Get professionally drafted RTI applications tailored to your specific needs.",
    fullDescription: "Can't find the right RTI template? Get a personalized application designed for your exact information need. Our expert team will craft a custom RTI application tailored to your specific requirements.",
    highlight: "Expert Drafted",
    price: "₹699",
    isQuote: false,
    route: "/services/custom-rti",
    buttonText: "Get Custom RTI",
    features: ["Personalized drafting", "Expert consultation", "Tailored solutions", "Professional quality"]
  },
  {
    icon: Icon15min,
    title: "15 Minute RTI",
    description: "Express RTI filing service for urgent information requirements.",
    fullDescription: "Need urgent RTI filing? Our express service gets your application filed within 15 minutes. Perfect for time-sensitive information requests that require immediate attention.",
    highlight: "Ultra Fast",
    price: "₹199",
    isQuote: false,
    route: "/services/15-minute-consultation",
    buttonText: "Pay Now",
    features: ["15-minute filing", "Express service", "Urgent support", "Quick turnaround"]
  },
];

export const RajasthanEnhancedServices: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleServiceSelect = (index: number) => {
    if (index === selectedService) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedService(index);
      setIsTransitioning(false);
    }, 150);
  };

  const handleActionClick = () => {
    navigate(services[selectedService].route);
  };

  const currentService = services[selectedService];

  return (
    <section className="py-8 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Comprehensive RTI Filing Solutions
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional RTI services designed to meet every citizen's needs
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column - Service Selector */}
          <AnimatedSection animation="slideRight" delay={400} className="w-full lg:w-1/3">
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceSelect(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                    selectedService === index
                      ? 'border-[#0267AD] bg-[#E6F2FA] shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <h3 className={`font-semibold text-xs md:text-sm transition-colors uppercase ${
                    selectedService === index ? 'text-[#0267AD]' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  {selectedService === index && (
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#0267AD]"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column - Service Display Card */}
          <AnimatedSection animation="slideLeft" delay={500} className="w-full lg:w-2/3">
            <div className="flex items-center">
              <div 
                key={selectedService}
                className={`w-full bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ borderColor: '#E5E7EB' }}
              >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-6 mb-4">
                  <div 
                    className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2"
                    style={{ 
                      backgroundColor: '#E6F2FA',
                      borderColor: '#D1D5DB'
                    }}
                  >
                    <img
                      src={currentService.icon}
                      alt={currentService.title}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: (selectedService === 2 || selectedService === 5) ? 'left center' : 'center center'
                      }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span 
                        className="inline-block px-2 py-0.5 text-white text-xs font-semibold rounded-full"
                        style={{ backgroundColor: '#0267AD' }}
                      >
                        {currentService.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {currentService.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {currentService.fullDescription}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {currentService.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1.5 p-1.5 rounded-lg"
                        style={{ backgroundColor: '#F0F7FA' }}
                      >
                        <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#0267AD' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-200">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span 
                        className={`text-2xl md:text-3xl font-bold ${
                          currentService.isQuote ? 'text-base md:text-lg' : ''
                        }`}
                        style={{ color: '#0267AD' }}
                      >
                        {currentService.price}
                      </span>
                      {!currentService.isQuote && (
                        <span className="text-xs text-gray-500">All inclusive</span>
                      )}
                    </div>
                    {currentService.isQuote && (
                      <p className="text-xs text-gray-600 mt-1">Contact us for volume pricing</p>
                    )}
                  </div>
                  <button
                    onClick={handleActionClick}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#0267AD' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#015a94';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0267AD';
                    }}
                  >
                    {currentService.buttonText}
                  </button>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

