/**
 * Rajasthan Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface RajasthanDepartmentSection {
  category: string;
  items: string[];
}

export const rajasthanDepartments: RajasthanDepartmentSection[] = [
  {
    category: 'RTI Rajasthan Police & Home Affairs',
    items: [
      'RTI Rajasthan Home Department',
      'RTI Rajasthan Police Department',
      'RTI Rajasthan Anti-Corruption Bureau (ACB)',
      'RTI Rajasthan Prisons Department',
      'RTI Rajasthan Prosecution Department',
      'RTI Rajasthan Disaster Management & Relief Department',
    ],
  },
  {
    category: 'RTI Rajasthan Finance, Tax & Revenue',
    items: [
      'RTI Rajasthan Finance Department',
      'RTI Rajasthan Revenue Department',
      'RTI Rajasthan Commercial Taxes (GST) Department',
      'RTI Rajasthan Registration & Stamps Department',
      'RTI Rajasthan Treasuries & Accounts Department',
      'RTI Rajasthan Excise Department',
    ],
  },
  {
    category: 'RTI Rajasthan Transport & Public Infrastructure',
    items: [
      'RTI Rajasthan Transport Department',
      'RTI Rajasthan Public Works Department (PWD)',
      'RTI Rajasthan Urban Development Department',
      'RTI Rajasthan Local Self Government Department',
      'RTI Rajasthan Jaipur Development Authority (JDA)',
      'RTI Rajasthan Rajasthan State Road Development Corporation',
    ],
  },
  {
    category: 'RTI Rajasthan Education, Skill & Health',
    items: [
      'RTI Rajasthan School Education Department',
      'RTI Rajasthan Higher Education Department',
      'RTI Rajasthan Technical Education Department',
      'RTI Rajasthan Medical & Health Department',
      'RTI Rajasthan Medical Education Department',
      'RTI Rajasthan Skill, Employment & Entrepreneurship Department',
    ],
  },
  {
    category: 'RTI Rajasthan Agriculture, Animal & Rural Development',
    items: [
      'RTI Rajasthan Agriculture Department',
      'RTI Rajasthan Horticulture Department',
      'RTI Rajasthan Animal Husbandry Department',
      'RTI Rajasthan Rural Development Department',
      'RTI Rajasthan Panchayati Raj Department',
      'RTI Rajasthan Watershed Development Department',
    ],
  },
  {
    category: 'RTI Rajasthan Social Justice & Welfare',
    items: [
      'RTI Rajasthan Social Justice & Empowerment Department',
      'RTI Rajasthan Women & Child Development Department',
      'RTI Rajasthan Minority Affairs Department',
      'RTI Rajasthan Labour Department',
      'RTI Rajasthan Empowerment of Persons with Disabilities Department',
    ],
  },
  {
    category: 'RTI Rajasthan Industries, Mines & MSME',
    items: [
      'RTI Rajasthan Industries Department',
      'RTI Rajasthan MSME & Export Promotion Department',
      'RTI Rajasthan Mines & Geology Department',
      'RTI Rajasthan RIICO (Industrial Development)',
      'RTI Rajasthan Handloom & Handicrafts Department',
    ],
  },
  {
    category: 'RTI Rajasthan Environment, Water & Energy',
    items: [
      'RTI Rajasthan Forest Department',
      'RTI Rajasthan Environment Department',
      'RTI Rajasthan Water Resources Department',
      'RTI Rajasthan Public Health Engineering Department (PHED)',
      'RTI Rajasthan Renewable Energy Corporation (RRECL)',
    ],
  },
  {
    category: 'RTI Rajasthan Information, IT & Public Relations',
    items: [
      'RTI Rajasthan Information Technology & Communication Department',
      'RTI Rajasthan DoIT&C',
      'RTI Rajasthan e-Governance Services',
      'RTI Rajasthan Information & Public Relations Department',
    ],
  },
  {
    category: 'RTI Rajasthan Culture, Tourism & Religious Affairs',
    items: [
      'RTI Rajasthan Tourism Department',
      'RTI Rajasthan Art, Culture & Archaeology Department',
      'RTI Rajasthan Devasthan (Temple) Department',
      'RTI Rajasthan Archives Department',
    ],
  },
];

