/**
 * ============================================================================
 * HOMEPAGE - RAJASTHAN-SPECIFIC
 * ============================================================================
 * 
 * Purpose: Main landing page for the RTI platform, specifically configured
 *          for Rajasthan state.
 * 
 * State Usage: Rajasthan (active) - This is the primary homepage
 * 
 * Key Features:
 * - Hardcoded to use Rajasthan state data
 * - Uses lazy-loaded Rajasthan-specific components
 * - Implements conversion-first layout with trust signals
 * - Comprehensive SEO optimization with structured data
 * 
 * Component Structure (in order):
 * 1. Hero section (headline, value proposition, primary CTA)
 * 2. Trust signals (applications filed, experience, credibility)
 * 3. Booking/consultation form
 * 4. Why FileMyRTI (platform benefits)
 * 5. Final CTA section
 * 6. Service cards (interactive two-column layout)
 * 7. How RTI filing works (step-by-step process)
 * 8. Testimonials
 * 9. WhatsApp help section
 * 10. Departments covered (auto-sliding carousel)
 * 11. RTI Templates section
 * 12. FAQ section
 * 
 * Performance:
 * - All components are lazy-loaded with Suspense boundaries
 * - Uses useDeferredValue for non-critical state updates
 * - Static data fallback ensures immediate rendering
 * 
 * Used by: Rajasthan (homepage route "/")
 * ============================================================================
 */

import React, { lazy, Suspense, useDeferredValue } from 'react';
import { Helmet } from 'react-helmet-async';
import { useStateData } from '../hooks/useStateData';
import { LazyChatbot } from '../components/common/LazyChatbot';

// ====== COMMON COMPONENTS (Lazy Loaded) ======
const Navbar = lazy(() => import('../components/common/Navbar').then(m => ({ default: m.Navbar })));
const Footer = lazy(() => import('../components/common/Footer').then(m => ({ default: m.Footer })));

// ====== RAJASTHAN-SPECIFIC COMPONENTS (Lazy Loaded) ======
// All Rajasthan components are state-specific and used only on homepage
const RajasthanHero = lazy(() => import('../components/rajasthan/RajasthanHero').then(m => ({ default: m.RajasthanHero })));
const RajasthanTrustStrip = lazy(() => import('../components/rajasthan/RajasthanTrustStrip').then(m => ({ default: m.RajasthanTrustStrip })));
const RajasthanDepartmentsCoveredSection = lazy(() => import('../components/rajasthan/RajasthanDepartmentsCoveredSection').then(m => ({ default: m.RajasthanDepartmentsCoveredSection })));
const RajasthanFinalCTASection = lazy(() => import('../components/rajasthan/RajasthanFinalCTASection').then(m => ({ default: m.RajasthanFinalCTASection })));
const RajasthanWhyFileRTISection = lazy(() => import('../components/rajasthan/RajasthanWhyFileRTISection').then(m => ({ default: m.RajasthanWhyFileRTISection })));
const RajasthanComprehensiveForm = lazy(() => import('../components/rajasthan/RajasthanComprehensiveForm').then(m => ({ default: m.RajasthanComprehensiveForm })));
const RajasthanEnhancedHowItWorks = lazy(() => import('../components/rajasthan/RajasthanEnhancedHowItWorks').then(m => ({ default: m.RajasthanEnhancedHowItWorks })));
const RajasthanEnhancedDepartments = lazy(() => import('../components/rajasthan/RajasthanEnhancedDepartments').then(m => ({ default: m.RajasthanEnhancedDepartments })));
const RajasthanEnhancedFAQ = lazy(() => import('../components/rajasthan/RajasthanEnhancedFAQ').then(m => ({ default: m.RajasthanEnhancedFAQ })));
const RajasthanEnhancedTestimonials = lazy(() => import('../components/rajasthan/RajasthanEnhancedTestimonials').then(m => ({ default: m.RajasthanEnhancedTestimonials })));
const RajasthanWhatsAppHelp = lazy(() => import('../components/rajasthan/RajasthanWhatsAppHelp').then(m => ({ default: m.RajasthanWhatsAppHelp })));
const RajasthanEnhancedServices = lazy(() => import('../components/rajasthan/RajasthanEnhancedServices').then(m => ({ default: m.RajasthanEnhancedServices })));

export const Home: React.FC = () => {
  // ====== STATE DATA MANAGEMENT ======
  // Homepage is hardcoded to Rajasthan state
  const { stateData, isLoading } = useStateData('rajasthan');
  
  // Defer non-critical state updates to reduce Total Blocking Time (TBT)
  const deferredStateData = useDeferredValue(stateData);

  // Show minimal loading state only if no static data available
  if (isLoading && !stateData) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <LazyChatbot />
        </div>
      </>
    );
  }

  // Fallback if stateData is null (shouldn't happen with static data)
  // Use stateData for the check, deferredStateData might be null initially
  if (!stateData) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to load state data</h1>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <LazyChatbot />
        </div>
      </>
    );
  }

  // ====== DATA PREPARATION ======
  // Use stateData for rendering (deferredStateData might be null initially)
  const dataToUse = deferredStateData || stateData;

  // ====== SEO METADATA ======
  const pageTitle = `File RTI Online in Rajasthan - FileMyRTI`;
  const pageDescription = `File RTI online in Rajasthan with FileMyRTI. Get expert-drafted RTI applications and appeals for Rajasthan Government departments, Secretariat and district offices from home.`;
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : `https://filemyrti.com/`;
  const ogImage = `https://filemyrti.com/src/assets/icons/logo.webp`;

  // ====== STRUCTURED DATA (JSON-LD) ======
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FileMyRTI",
    "url": "https://filemyrti.com",
    "logo": "https://filemyrti.com/src/assets/icons/logo.webp",
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "State",
      "name": dataToUse.name
    },
    "serviceType": "RTI Filing Service",
    "offers": {
      "@type": "Offer",
      "description": "RTI Filing Services",
      "areaServed": dataToUse.name
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://filemyrti.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `RTI in ${dataToUse.name}`,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`RTI, ${dataToUse.name}, Right to Information, File RTI Online, ${dataToUse.name} RTI, RTI Act 2005, ${dataToUse.name} government information, RTI filing ${dataToUse.name}, RTI application ${dataToUse.name}`} />
        <meta name="author" content="FileMyRTI" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="FileMyRTI" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      <Suspense fallback={<div className="h-12 bg-white sticky top-0 z-[100]" />}>
        <Navbar />
      </Suspense>
      <div className="min-h-screen flex flex-col">
        <main id="main-content" className="flex-grow" role="main" aria-label="Main content" style={{ paddingTop: 0 }}>
          {/* 1. Hero section (headline, value proposition, primary CTA) */}
          <Suspense fallback={
            <div className="bg-primary-600 pt-12 pb-12" data-loading>
              <div className="container-responsive max-w-7xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  File RTI Online for Rajasthan Government Departments
                </h1>
              </div>
            </div>
          }>
            <RajasthanHero stateName={dataToUse.name} />
          </Suspense>

          {/* 2. Trust signals (applications filed, experience, credibility) */}
          <Suspense fallback={<div className="min-h-[120px] bg-primary-600" />}>
            <RajasthanTrustStrip />
          </Suspense>

          {/* 3. Booking / consultation form */}
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <RajasthanComprehensiveForm />
          </Suspense>

          {/* 4. Why FileMyRTI (platform benefits, not RTI law explanation) */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanWhyFileRTISection />
          </Suspense>

          {/* 5. "Ready to Exercise Your RTI?" CTA section (button only) */}
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <RajasthanFinalCTASection />
          </Suspense>

          {/* Service Cards Section */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanEnhancedServices />
          </Suspense>

          {/* 6. How RTI filing works (step-by-step process) */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanEnhancedHowItWorks />
          </Suspense>

          {/* 7. Testimonials */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanEnhancedTestimonials />
          </Suspense>

          {/* 8. WhatsApp help section (informational support) */}
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <RajasthanWhatsAppHelp />
          </Suspense>

          {/* 13. List of Rajasthan government departments supported */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanDepartmentsCoveredSection />
          </Suspense>

          {/* 9. RTI Templates for Rajasthan (letter templates/resources) */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanEnhancedDepartments />
          </Suspense>

          {/* 10. FAQ section */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <RajasthanEnhancedFAQ />
          </Suspense>


        </main>
        <footer role="contentinfo">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </footer>
        <LazyChatbot />
      </div>
    </>
  );
};

