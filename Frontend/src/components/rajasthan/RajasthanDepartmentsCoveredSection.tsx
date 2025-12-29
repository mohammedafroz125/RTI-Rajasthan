import React, { useEffect, useRef } from 'react';
import { AnimatedSection } from '../common/AnimatedSection';

export const RajasthanDepartmentsCoveredSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const departments = [
    "Home Department", "Police Department", "Revenue Department", "Education Department",
    "Health Department", "Transport Department", "Urban Development", "Rural Development",
    "Public Works Department", "Water Resources", "Energy Department", "Agriculture Department",
    "Finance Department", "Law Department", "Food & Civil Supplies", "Tourism Department"
  ];

  // Duplicate departments for seamless infinite scroll
  const duplicatedDepartments = [...departments, ...departments];

  // Continuous smooth scrolling animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame (adjust for speed)

    const animate = () => {
      if (container) {
        scrollPosition += scrollSpeed;
        
        // Reset to start when we've scrolled through one set of departments
        const cardWidth = 220; // Approximate card width
        const gap = 16;
        const totalWidth = (cardWidth + gap) * departments.length;
        
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [departments.length]);

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#E0EDF5' }}>
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">Rajasthan Departments Covered</h2>
            <p className="text-base md:text-lg font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We handle RTI applications across all Rajasthan government departments with state-specific expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-hidden scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedDepartments.map((dept, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] md:w-[220px]"
              >
                <div className="bg-white border border-gray-300 rounded-lg p-4 text-center text-sm font-medium text-gray-800 w-full h-full flex items-center justify-center">
                  {dept}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#E0EDF5] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#E0EDF5] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
