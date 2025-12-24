import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection';

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const resources = [
  {
    icon: BookOpenIcon,
    title: "RTI Act 2005 Guide",
    description: "Complete guide to understanding the Right to Information Act and how to use it effectively.",
    category: "Legal Guide",
    route: "/guides/rti-act-2005"
  },
  {
    icon: LightbulbIcon,
    title: "Success Stories",
    description: "Inspiring stories of citizens who used RTI to bring transparency and accountability.",
    category: "Inspiration",
    route: "/success-stories"
  },
  {
    icon: FileTextIcon,
    title: "RTI Templates",
    description: "Ready-to-use RTI application templates for various government departments in Rajasthan.",
    category: "Templates",
    route: "/templates"
  },
];

export const RajasthanResourcesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-normal mb-6" style={{ backgroundColor: 'rgba(1, 103, 173, 0.18)', color: '#0267AD' }}>
              Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
              Get Inspired, Enlightened & Empowered
            </h2>
            <p className="text-base md:text-lg font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Learn everything you need to know about RTI and how to exercise your right to information
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <AnimatedSection key={resource.title} animation="fadeInScale" delay={300 + index * 100}>
              <div
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => navigate(resource.route)}
              >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#C8E0F0' }}>
                <resource.icon className="w-8 h-8" style={{ color: '#0267AD' }} />
              </div>
              
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4" style={{ backgroundColor: '#C8E0F0', color: '#0267AD' }}>
                {resource.category}
              </span>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors group-hover:text-[#1E88E5]">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 font-normal mb-6">
                {resource.description}
              </p>
              
              <button className="group/btn flex items-center font-medium" style={{ color: '#0267AD' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1E88E5'} onMouseLeave={(e) => e.currentTarget.style.color = '#0267AD'}>
                Read More 
                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </AnimatedSection>
        ))}
        </div>
      </div>
    </section>
  );
};

