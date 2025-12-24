/**
 * ============================================================================
 * STATE DATA CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central configuration file containing static data for all states.
 *          Provides fallback data when backend API is unavailable.
 * 
 * State Usage: All states (Rajasthan, Telangana, Delhi, etc.)
 * 
 * Architecture:
 * - Static data ensures zero blocking time
 * - Backend API enhances this data when available
 * - Each state has complete configuration (hero, departments, FAQs, etc.)
 * 
 * Key Data Structures:
 * - StateData: Complete state configuration
 * - StateHero: Hero section content
 * - StateFAQ: Frequently asked questions
 * 
 * Usage:
 * - Imported by useStateData hook
 * - Used as fallback when API fails
 * - Provides immediate data for SSR/SSG
 * 
 * Used by: useStateData hook, all state pages
 * ============================================================================
 */

// ====== TYPE DEFINITIONS ======
export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'telangana' | 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'telangana': {
    name: "Telangana",
    slug: "telangana",
    languages: ["English", "Telugu", "Urdu"],
    designTheme: "telangana",
    hero: {
      title: "File RTI Online in Telangana — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Telangana Government departments and offices without visiting in person.",
      image: "/images/telangana-banner.jpg",
      cta: "Start RTI for Telangana",
    },
    departments: [
      "Telangana Secretariat",
      "Telangana Revenue Department",
      "Telangana Police Department",
      "Telangana Education Department",
      "Telangana Health & Family Welfare Department",
      "Telangana Transport Department",
      "Telangana Public Works Department (PWD)",
      "Telangana Irrigation & CAD Department",
      "Telangana Rural Development Department",
      "Telangana Municipal Administration & Urban Development Department",
      "Telangana Registration & Stamps Department",
      "Telangana Commercial Taxes Department",
      "Telangana Labour Department",
      "Telangana Social Welfare Department",
      "Telangana Scheduled Castes Development Department",
      "Telangana Scheduled Tribes Welfare Department",
      "Telangana Women & Child Development Department",
      "Telangana Backward Classes Welfare Department",
      "Telangana Minority Welfare Department",
      "Telangana Youth & Sports Department",
      "Telangana Information & Public Relations Department",
      "Telangana Finance Department",
      "Telangana Planning Department",
      "Telangana Home Department",
      "Telangana Law Department",
      "Telangana Forest Department",
      "Telangana Environment Department",
      "Telangana Mines & Geology Department",
      "Telangana Industries & Commerce Department",
      "Telangana Information Technology Department",
      "Telangana Tourism & Culture Department",
      "Telangana Housing Department",
      "Telangana Water Resources Department",
      "Telangana Energy Department",
      "Telangana Agriculture & Cooperation Department",
      "Telangana Food & Civil Supplies Department",
      "Telangana Panchayat Raj & Rural Development Department",
      "Telangana Urban Development Department",
      "Telangana Medical & Health Department",
      "Telangana School Education Department",
      "Telangana Higher Education Department",
      "Telangana Technical Education Department",
      "Telangana Animal Husbandry Department",
      "Telangana Fisheries Department",
      "Telangana Horticulture Department",
      "Telangana Sericulture Department",
      "Telangana Handlooms & Textiles Department",
      "Telangana Endowments Department",
      "Telangana BC Welfare Department",
    ],
    highlights: [
      "Covered: Telangana Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
    ],
    faqs: [
      { q: "Can I file RTI to Telangana Secretariat online?", a: "Yes, you can file RTI applications to Telangana Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Telangana?", a: "As per RTI Act 2005, government departments in Telangana must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and property disputes in Telangana?", a: "Yes, you can file RTI applications for land records, property documents, and related information from Telangana Revenue Department, Registration & Stamps Department, and other relevant authorities." },
      { q: "Can I file RTI without visiting Meeseva or government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting Meeseva centers or government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Telangana department or office",
          description: "Tell us what information you need from any Telangana Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Telangana rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Telangana state rules.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals if needed.",
        },
      ],
    },
    commission: "Telangana State Information Commission (TSIC)",
    fee: "₹10",
  },
  'rajasthan': {
    name: "Rajasthan",
    slug: "rajasthan",
    languages: ["English", "Hindi"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Rajasthan Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Education, Transport and more – without visiting offices.",
      image: "/images/rajasthan-banner.jpg",
      cta: "File RTI for Rajasthan",
    },
    departments: [
      "RTI Rajasthan Police & Home Affairs",
      "RTI Rajasthan Home Department",
      "RTI Rajasthan Police Department",
      "RTI Rajasthan Anti-Corruption Bureau (ACB)",
      "RTI Rajasthan Prisons Department",
      "RTI Rajasthan Prosecution Department",
      "RTI Rajasthan Disaster Management & Relief Department",
      "RTI Rajasthan Finance, Tax & Revenue",
      "RTI Rajasthan Finance Department",
      "RTI Rajasthan Revenue Department",
      "RTI Rajasthan Commercial Taxes (GST) Department",
      "RTI Rajasthan Registration & Stamps Department",
      "RTI Rajasthan Treasuries & Accounts Department",
      "RTI Rajasthan Excise Department",
      "RTI Rajasthan Transport & Public Infrastructure",
      "RTI Rajasthan Transport Department",
      "RTI Rajasthan Public Works Department (PWD)",
      "RTI Rajasthan Urban Development Department",
      "RTI Rajasthan Local Self Government Department",
      "RTI Rajasthan Jaipur Development Authority (JDA)",
      "RTI Rajasthan Rajasthan State Road Development Corporation",
      "RTI Rajasthan Education, Skill & Health",
      "RTI Rajasthan School Education Department",
      "RTI Rajasthan Higher Education Department",
      "RTI Rajasthan Technical Education Department",
      "RTI Rajasthan Medical & Health Department",
      "RTI Rajasthan Medical Education Department",
      "RTI Rajasthan Skill, Employment & Entrepreneurship Department",
      "RTI Rajasthan Agriculture, Animal & Rural Development",
      "RTI Rajasthan Agriculture Department",
      "RTI Rajasthan Horticulture Department",
      "RTI Rajasthan Animal Husbandry Department",
      "RTI Rajasthan Rural Development Department",
      "RTI Rajasthan Panchayati Raj Department",
      "RTI Rajasthan Watershed Development Department",
      "RTI Rajasthan Social Justice & Welfare",
      "RTI Rajasthan Social Justice & Empowerment Department",
      "RTI Rajasthan Women & Child Development Department",
      "RTI Rajasthan Minority Affairs Department",
      "RTI Rajasthan Labour Department",
      "RTI Rajasthan Empowerment of Persons with Disabilities Department",
      "RTI Rajasthan Industries, Mines & MSME",
      "RTI Rajasthan Industries Department",
      "RTI Rajasthan MSME & Export Promotion Department",
      "RTI Rajasthan Mines & Geology Department",
      "RTI Rajasthan RIICO (Industrial Development)",
      "RTI Rajasthan Handloom & Handicrafts Department",
      "RTI Rajasthan Environment, Water & Energy",
      "RTI Rajasthan Forest Department",
      "RTI Rajasthan Environment Department",
      "RTI Rajasthan Water Resources Department",
      "RTI Rajasthan Public Health Engineering Department (PHED)",
      "RTI Rajasthan Renewable Energy Corporation (RRECL)",
      "RTI Rajasthan Information, IT & Public Relations",
      "RTI Rajasthan Information Technology & Communication Department",
      "RTI Rajasthan DoIT&C",
      "RTI Rajasthan e-Governance Services",
      "RTI Rajasthan Information & Public Relations Department",
      "RTI Rajasthan Culture, Tourism & Religious Affairs",
      "RTI Rajasthan Tourism Department",
      "RTI Rajasthan Art, Culture & Archaeology Department",
      "RTI Rajasthan Devasthan (Temple) Department",
      "RTI Rajasthan Archives Department",
    ],
    highlights: [
      "Covered: Rajasthan Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all 33 districts of Rajasthan",
    ],
    faqs: [
      { q: "Can I file RTI online in Rajasthan?", a: "Yes, you can file RTI applications for Rajasthan state departments online through FileMyRTI without visiting government offices." },
      { q: "Do I need to visit any government office to file RTI?", a: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI." },
      { q: "What if I don't know the correct department?", a: "If you are unsure about the department, your RTI application can still be filed and routed to the appropriate authority." },
      { q: "Can RTI be filed for state government departments in Rajasthan?", a: "Yes, RTI can be filed for Rajasthan state government departments and public authorities." },
      { q: "Is RTI filing available for individual citizens?", a: "Yes, any Indian citizen can file an RTI application." },
      { q: "Can I file RTI from outside Rajasthan?", a: "Yes, you can file an RTI for Rajasthan departments from anywhere in India." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Rajasthan department or office",
          description: "Tell us what information you need from any Rajasthan Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Rajasthan rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Rajasthan Information Commission (RIC) guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Rajasthan Information Commission if needed.",
        },
      ],
    },
    commission: "Rajasthan Information Commission (RIC)",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};
