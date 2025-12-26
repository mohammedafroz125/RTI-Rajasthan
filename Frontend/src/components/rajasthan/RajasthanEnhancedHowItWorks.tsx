import React from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

// FUTURE-USE: ClockIcon component (currently unused)
// const ClockIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

const PencilIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const steps = [
  {
    icon: FileTextIcon,
    step: "01",
    title: "Submit Application",
    description: "Fill out the RTI application form with your question and select the relevant department."
  },
  {
    icon: PencilIcon,
    step: "02",
    title: "Expert Drafting",
    description: "Our legal experts draft your RTI application professionally and accurately."
  },
  {
    icon: SendIcon,
    step: "03",
    title: "We Process",
    description: "Our experts review and file your application with the appropriate Public Information Officer."
  },
  {
    icon: CheckCircleIcon,
    step: "04",
    title: "Receive Response",
    description: "Get the official response from the government department directly delivered to you."
  }
];

export const RajasthanEnhancedHowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#E0EDF5' }}>
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
              How RTI Filing Works
            </h2>
            <p className="text-base md:text-lg font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Filing an RTI application is simple. Follow these four easy steps to get 
              the information you need from Rajasthan Government departments.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-300" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} animation="fadeInScale" delay={400 + index * 100}>
                <div className="relative group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full border border-gray-200">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300" style={{ backgroundColor: '#C8E0F0' }}>
                      <step.icon className="w-7 h-7 text-[#0267AD]" />
                    </div>
                    <span className="text-xs font-bold mb-2" style={{ color: '#1E88E5' }}>STEP {step.step}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRightIcon className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0" />
                  </div>
                )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

