import React from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2M6 7l6 2m0 0l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M15 16l3-1m-3 1l-3-9m3 9l3 1m-3-1l-6 2m9-10l-6-2m6 2l3 1m-3-1l-3 9" />
  </svg>
);

const FileCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const reasons = [
  {
    icon: EyeIcon,
    title: "Promote Transparency",
    description: "RTI empowers citizens to access government information, ensuring transparency in public administration and decision-making processes."
  },
  {
    icon: ScaleIcon,
    title: "Ensure Accountability",
    description: "Hold government officials accountable for their actions. RTI helps expose corruption, delays, and malpractices in public offices."
  },
  {
    icon: FileCheckIcon,
    title: "Constitutional Right",
    description: "The Right to Information Act, 2005 is your legal right. Every citizen has the power to seek information from public authorities."
  },
  {
    icon: UsersIcon,
    title: "Citizen Empowerment",
    description: "RTI strengthens democracy by enabling citizens to participate in governance and make informed decisions about public matters."
  }
];

export const RajasthanWhyRTISection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5EDF5] shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatedSection animation="slideRight" delay={200}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
                Why File RTI?
              </h2>
              <p className="text-base md:text-lg font-normal text-gray-600 mb-8 leading-relaxed">
                The Right to Information Act empowers every citizen of India to question, 
                examine, and audit the government's decisions and actions. It is a powerful 
                tool for ensuring good governance and fighting corruption.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4" style={{ borderLeftColor: '#0267AD' }}>
                <p className="text-gray-900 italic font-serif text-lg font-normal">
                  "Information is the currency of democracy."
                </p>
                <p className="text-sm text-gray-600 font-normal mt-2">
                  — Thomas Jefferson
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} animation="fadeInScale" delay={400 + index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 flex-shrink-0" style={{ backgroundColor: '#C8E0F0' }}>
                    <reason.icon className="w-6 h-6" style={{ color: '#0267AD' }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex-shrink-0">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

