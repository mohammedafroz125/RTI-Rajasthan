import React from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// FUTURE-USE: ClockIcon component (currently unused)
// const ClockIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const features = [
  { icon: CheckCircleIcon, text: "Instant Response" },
  { icon: PhoneIcon, text: "Free Consultation" },
];

export const RajasthanWhatsAppHelp: React.FC = () => {
  // Replace with actual WhatsApp number
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("I need help with RTI filing in Rajasthan.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-responsive max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <AnimatedSection animation="slideRight" delay={200}>
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircleIcon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
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
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={300}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-green-600 hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-xl group flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform">
                <MessageCircleIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Start WhatsApp Chat
              </button>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

