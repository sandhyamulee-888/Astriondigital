/**
 * Astrion Digital — Official Corporate Content
 * Sourced directly from Management
 */

export const ABOUT_HERO = {
  label: 'ABOUT ASTRION DIGITAL',
  badge: 'CORPORATE BRAND // ENTERPRISE TECHNOLOGY',
  heading: 'Building Better Businesses Through Better Technology.',
  introParagraphs: [
    'At Astrion Digital, we believe technology should simplify business, not complicate it.',
    'Modern businesses operate across multiple functions, locations, teams and systems. Managing these interconnected activities efficiently requires more than individual software applications. It requires an integrated approach to business management.',
    'Astrion Digital focuses on developing and delivering enterprise technology solutions that help organisations bring their operations together, improve process efficiency and make informed business decisions.',
    'Our flagship platform, XENedion ERP, is designed to address the operational requirements of growing and established businesses through an integrated business management environment.',
    'We combine technology, business process understanding and a practical implementation approach to help businesses build stronger, more efficient and scalable operations.'
  ],
  commitment: 'Making enterprise technology practical, accessible and valuable for businesses.',
  ctaPrimary: {
    label: 'Explore XENedion ERP',
    href: '/solutions/erp'
  },
  ctaSecondary: {
    label: 'Request a Demo',
    href: '/contact'
  }
};

export const VISION_MISSION = {
  tag: 'VISION & MISSION',
  heading: 'Purpose-Driven Enterprise Technology',
  vision: {
    tag: 'OUR VISION',
    title: 'Our Vision',
    description: 'To empower businesses with intelligent, integrated and accessible technology that transforms the way they operate, compete and grow.',
    pillars: [
      'Empower businesses of all sizes with accessible enterprise technology',
      'Transform operational workflows to build sustainable competitive advantage',
      'Foster continuous innovation through intelligent and integrated solutions'
    ]
  },
  mission: {
    tag: 'OUR MISSION',
    title: 'Our Mission',
    description: 'To simplify business management through innovative enterprise solutions that connect people, processes and information.',
    pillars: [
      'Connect core operations under a unified single source of live information',
      'Replace disconnected point tools with streamlined enterprise workflows',
      'Provide leaders with real-time visibility to make confident decisions'
    ]
  },
  striveHeading: 'We strive to:',
  strivePoints: [
    'Develop technology that solves real business challenges.',
    'Enable organisations to achieve greater operational efficiency.',
    'Improve business visibility through integrated information.',
    'Build long-term relationships with customers and partners.',
    'Make enterprise technology accessible to businesses of different sizes.'
  ]
};

export const OUR_APPROACH = {
  tag: 'OUR APPROACH',
  heading: 'Understand. Integrate. Optimise. Grow.',
  intro: [
    'We believe successful technology implementation begins with understanding the business, not simply installing software.',
    'Our approach focuses on four key principles.'
  ],
  principles: [
    {
      num: '01',
      title: 'Understand the Business',
      description: 'We understand your business model, operating processes, challenges and growth objectives before recommending a technology solution.'
    },
    {
      num: '02',
      title: 'Connect the Processes',
      description: 'We bring different business functions together through integrated systems, structured workflows and connected information.'
    },
    {
      num: '03',
      title: 'Improve Performance',
      description: 'We help businesses gain visibility into their operations, identify inefficiencies and improve decision-making.'
    },
    {
      num: '04',
      title: 'Enable Growth',
      description: 'We build technology foundations that support business expansion, evolving requirements and increasing operational complexity.'
    }
  ]
};

export const LEADERSHIP_SECTION = {
  tag: 'LEADERSHIP',
  heading: 'Experience. Vision. Execution.',
  intro: [
    'Astrion Digital is driven by a leadership philosophy that combines business understanding, technology expertise and a commitment to customer success.',
    'We believe enterprise technology delivers its greatest value when it is aligned with business objectives and supported by people who understand how businesses operate.',
    'Our leadership team is focused on building practical technology solutions, developing strong customer relationships and creating a growing ecosystem of implementation and technology partners.'
  ],
  note: 'Management has not yet finalized individual leadership profiles. Photo assets, names, designations, and executive biographies will be published upon finalization.'
};

export const LEADERSHIP_PROFILES = [
  {
    id: 'leader-slot-1',
    name: 'Leadership Profile',
    role: 'Executive Management',
    slotLabel: 'EXECUTIVE LEADERSHIP',
    title: 'Leadership Profile',
    domain: 'Enterprise Technology & Strategy',
    bio: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    credentials: 'Profile Pending Finalization',
    placeholderDesc: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    isPlaceholder: true
  },
  {
    id: 'leader-slot-2',
    name: 'Leadership Profile',
    role: 'Technology & Product Strategy',
    slotLabel: 'TECHNOLOGY & ARCHITECTURE',
    title: 'Leadership Profile',
    domain: 'Software Architecture & ERP Engineering',
    bio: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    credentials: 'Profile Pending Finalization',
    placeholderDesc: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    isPlaceholder: true
  },
  {
    id: 'leader-slot-3',
    name: 'Leadership Profile',
    role: 'Operations & Partner Ecosystem',
    slotLabel: 'OPERATIONS & CUSTOMER SUCCESS',
    title: 'Leadership Profile',
    domain: 'Business Operations & Delivery Network',
    bio: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    credentials: 'Profile Pending Finalization',
    placeholderDesc: 'Leadership photographs, full names, designations, and individual biographies will be added once finalized by management.',
    isPlaceholder: true
  }
];

// Array-compatible export for any legacy references, with section properties attached
export const LEADERSHIP = Object.assign([...LEADERSHIP_PROFILES], {
  tag: LEADERSHIP_SECTION.tag,
  heading: LEADERSHIP_SECTION.heading,
  intro: LEADERSHIP_SECTION.intro,
  note: LEADERSHIP_SECTION.note,
  profiles: LEADERSHIP_PROFILES
});

export const PARTNERS = [
  {
    id: 'implementation-partners',
    name: 'Certified Delivery Network',
    tier: 'Regional Implementation Partners',
    category: 'Local Onboarding & Consulting',
    desc: 'Regional consulting and IT services partners providing local language training, onboarding, and go-live assistance.',
    tech: ['Hands-On Staff Training', 'Data Migration Support', 'Post-Launch Care']
  }
];

// Compatibility exports for existing components
export const ABOUT_ASTRION = {
  label: ABOUT_HERO.label,
  corporateBrand: 'ASTRION DIGITAL',
  headline: ABOUT_HERO.heading,
  subhead: 'Enterprise Technology Solutions • Integrated Business Management',
  lead: ABOUT_HERO.introParagraphs[0],
  flagshipStatement: ABOUT_HERO.introParagraphs[3],
  foundationStatement: ABOUT_HERO.commitment
};
