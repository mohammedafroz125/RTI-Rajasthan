import React from 'react';
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
    highlight: "Quick & Easy",
    price: "₹699",
    route: "/services/seamless-online-filing"
  },
  {
    icon: AnonyIcon,
    title: "Anonymous RTI Filing",
    description: "Protect your identity while exercising your right to information.",
    highlight: "100% Private",
    price: "₹699",
    route: "/services/anonymous"
  },
  {
    icon: FirstIcon,
    title: "Online First Appeal Filing",
    description: "File appeals against unsatisfactory responses with expert guidance.",
    highlight: "Legal Support",
    price: "₹699",
    route: "/services/1st-appeal"
  },
  {
    icon: BulkIcon,
    title: "Efficient Bulk RTI Filing",
    description: "Submit multiple RTI applications efficiently for organizations and activists.",
    highlight: "Volume Discount",
    price: "Request Quote",
    isQuote: true,
    route: "/services/bulk"
  },
  {
    icon: CustomIcon,
    title: "Custom RTI Drafting",
    description: "Get professionally drafted RTI applications tailored to your specific needs.",
    highlight: "Expert Drafted",
    price: "₹699",
    route: "/services/custom-rti"
  },
  {
    icon: Icon15min,
    title: "15 Minute RTI",
    description: "Express RTI filing service for urgent information requirements.",
    highlight: "Ultra Fast",
    price: "₹199",
    route: "/services/15-minute-consultation"
  },
];

export const RajasthanEnhancedServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive RTI Filing Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional RTI services designed to meet every citizen's needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="fadeInScale" delay={300 + index * 100}>
              <div
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer hover:-translate-y-2 flex flex-col h-full"
                onClick={() => navigate(service.route)}
              >
              {/* Highlight badge */}
              <div className="absolute -top-3 right-4">
                <span className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full shadow-md" style={{ backgroundColor: '#0267AD' }}>
                  {service.highlight}
                </span>
              </div>

              <div className="flex items-start gap-4 mt-2 flex-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300" style={{ backgroundColor: '#E6F2FA' }}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors group-hover:text-[#1E88E5]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-2xl font-bold ${service.isQuote ? 'text-lg' : ''}`} style={{ color: service.isQuote ? '#0267AD' : '#0267AD' }}>
                      {service.price}
                    </span>
                    {!service.isQuote && <span className="text-xs text-gray-500">All inclusive</span>}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <img
                  src={service.icon}
                  alt=""
                  className="w-full h-full object-contain opacity-20"
                  aria-hidden="true"
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
        </div>
      </div>
    </section>
  );
};

