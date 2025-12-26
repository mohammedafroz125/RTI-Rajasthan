/**
 * ============================================================================
 * RAJASTHAN COMPREHENSIVE RTI FORM
 * ============================================================================
 * 
 * Purpose: Main RTI application form for Rajasthan homepage. Collects user
 *          information and RTI query, then submits to backend API.
 * 
 * State Usage: Rajasthan (active) - Used only on homepage
 * 
 * Features:
 * - Multi-step form with validation
 * - Integration with consultation API
 * - Navigation to service pages
 * - Animated section transitions
 * 
 * Form Fields:
 * - Full Name
 * - Email
 * - Mobile Number
 * - Address (optional)
 * - RTI Query/Description
 * 
 * Used by: Home.tsx (Rajasthan homepage)
 * ============================================================================
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConsultationForm } from '../../hooks/useConsultationForm';
import { consultationsAPI } from '../../services/api';
import { AnimatedSection } from '../common/AnimatedSection';

// Icon components
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HashIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// FUTURE-USE: FileTextIcon component (currently unused)
// const FileTextIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//   </svg>
// );

export const RajasthanComprehensiveForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    isSubmitting,
    updateField,
    handleSubmit,
    resetForm
  } = useConsultationForm();

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: typeof formData) => {
    try {
      // Submit to consultations API
      await consultationsAPI.createPublic({
        full_name: data.fullName,
        email: data.email,
        mobile: data.mobile,
        address: data.address || null,
        pincode: data.pincode || null,
        state_slug: 'rajasthan',
        source: 'rajasthan_comprehensive_form'
      });

      setShowSuccess(true);
      resetForm();
      
      // Redirect to services page after 2 seconds
      setTimeout(() => {
        navigate('/services/seamless-online-filing');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Error handling is done by the hook
    }
  };

  const formFields = [
    { 
      name: 'fullName' as const, 
      label: 'Full Name', 
      type: 'text', 
      icon: UserIcon, 
      placeholder: 'Enter your full name',
      required: true
    },
    { 
      name: 'email' as const, 
      label: 'Email Address', 
      type: 'email', 
      icon: MailIcon, 
      placeholder: 'your.email@example.com',
      required: true
    },
    { 
      name: 'mobile' as const, 
      label: 'Mobile Number', 
      type: 'tel', 
      icon: PhoneIcon, 
      placeholder: '+91 98765 43210',
      required: true
    },
    { 
      name: 'pincode' as const, 
      label: 'Pincode', 
      type: 'text', 
      icon: HashIcon, 
      placeholder: '302001',
      required: false
    },
  ];

  if (showSuccess) {
    return (
      <section id="application-form" className="py-12 md:py-16 bg-white">
        <div className="container-responsive max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fadeInScale" delay={0}>
              <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
              <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                We'll contact you within 24 hours to proceed with your RTI filing.
              </p>
              <p className="text-sm text-gray-500">Redirecting to services page...</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="py-12 md:py-16 bg-white">
      <div className="container-responsive max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left - Info */}
          <div className="flex flex-col lg:justify-center h-full rounded-2xl px-6 lg:px-8 pt-6 lg:pt-8 pb-6 lg:pb-8" style={{ backgroundColor: 'rgba(1, 103, 173, 0.12)' }}>
            <AnimatedSection animation="slideRight" delay={200}>
              <div className="flex flex-col w-full">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 tracking-wide mb-6">
                  Book Your Free RTI Consultation
                </h2>
                <p className="text-base md:text-lg font-normal text-gray-600 mb-7 leading-relaxed">
                  Talk to our RTI experts to understand whether your query qualifies under the Right to Information Act, 2005. Get guidance on the correct Rajasthan Government department before filing.
                </p>

                <div className="space-y-4">
                  {[
                    "Free eligibility check for your RTI query",
                    "Guidance on the correct Rajasthan department",
                    "Expert advice on drafting RTI questions",
                    "No obligation to file immediately",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg font-normal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form */}
          <div className="flex flex-col h-full">
            <AnimatedSection animation="slideLeft" delay={300}>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit);
              }}
              className="bg-white rounded-2xl p-4 md:p-5 border border-gray-200 shadow-lg h-full flex flex-col"
            >
              <div className="space-y-2.5 flex-grow overflow-hidden">
                {formFields.map((field, index) => (
                  <AnimatedSection key={field.name} animation="slideUp" delay={300 + index * 50}>
                    <div>
                    <label htmlFor={field.name} className="text-gray-700 font-medium mb-1 block text-xs">
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <div className="relative">
                      <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className={`w-full pl-9 pr-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm ${
                          errors[field.name] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required={field.required}
                      />
                    </div>
                    {errors[field.name] && (
                      <p className="text-red-500 text-xs mt-0.5">{errors[field.name]}</p>
                    )}
                    </div>
                  </AnimatedSection>
                ))}

                <AnimatedSection animation="slideUp" delay={550}>
                  <div>
                    <label htmlFor="address" className="text-gray-700 font-medium mb-1 block text-xs">
                      Full Address
                    </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      placeholder="Enter your complete address"
                      className={`w-full pl-9 pr-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent min-h-[50px] resize-none text-sm ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-0.5">{errors.address}</p>
                  )}
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="slideUp" delay={600}>
                <div className="mt-2 flex-shrink-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  style={{ backgroundColor: '#0267AD' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E88E5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0267AD'}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
                </div>
              </AnimatedSection>

              <p className="text-xs text-gray-500 text-center mt-1.5 flex-shrink-0">
                By submitting, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

