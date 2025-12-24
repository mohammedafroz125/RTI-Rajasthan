import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection';

interface RajasthanHeroProps {
  stateName: string;
}

export const RajasthanHero: React.FC<RajasthanHeroProps> = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ backgroundColor: '#1a2332', marginTop: 0, paddingTop: '64px' }}>
      {/* Hawa Mahal Background Image - Positioned to show palace prominently on left */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/hawa%20mahal.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay gradient from left to right - lighter on left to show palace, darker on right for text */}
        {/* Reduced opacity to make image visible while maintaining text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/35 via-[#1a2332]/50 to-[#1a2332]/70"></div>
      </div>

      {/* Subtle pattern overlay for texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container-responsive max-w-7xl mx-auto px-4 relative z-10 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection animation="slideDown" delay={200}>
            <div className="mb-8 inline-flex items-center">
              <div className="bg-transparent border-2 border-gray-400 rounded-lg px-6 py-3 inline-flex items-center gap-3">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm md:text-base text-white font-medium">
                  Official RTI Filing Service for Rajasthan
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Main Heading */}
          <AnimatedSection animation="slideUp" delay={300}>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              File RTI Online in <span style={{ color: '#CFE4F7', fontWeight: 800, letterSpacing: '0.5px' }}>Rajasthan</span>
            </h1>
          </AnimatedSection>
          
          {/* Description */}
          <AnimatedSection animation="slideUp" delay={400}>
            <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
              Exercise your constitutional right to information. File RTI applications for any Rajasthan Government department with our trusted, legal assistance.
            </p>
          </AnimatedSection>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AnimatedSection animation="fadeInScale" delay={500}>
              <button
                onClick={() => navigate('/services/custom-rti')}
                className="text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg"
                style={{ backgroundColor: '#0267AD' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E88E5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0267AD'}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Start RTI Application
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </AnimatedSection>
            <AnimatedSection animation="fadeInScale" delay={600}>
              <button
                onClick={() => navigate('/services/anonymous')}
                className="bg-white border-2 border-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-gray-50 text-lg"
              >
                File Anonymously
              </button>
            </AnimatedSection>
          </div>

          {/* Trust Text */}
          <AnimatedSection animation="fadeIn" delay={700}>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Trusted by citizens across Rajasthan
            </p>
          </AnimatedSection>

          {/* Feature Bullets */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-white">
            <AnimatedSection animation="slideUp" delay={800}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Secure & Confidential</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideUp" delay={900}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0267AD' }}></div>
                <span>Expert Legal Support</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
