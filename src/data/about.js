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
  heading: 'Understand Integrate Optimise Grow',
  intro: [
    'We believe successful technology implementation begins with understanding the business, not simply installing software.',
    'Our approach focuses on four key principles.'
  ],
  principles: [
    {
      title: 'Understand the Business',
      description: 'We understand your business model, operating processes, challenges and growth objectives before recommending a technology solution.'
    },
    {
      title: 'Connect the Processes',
      description: 'We bring different business functions together through integrated systems, structured workflows and connected information.'
    },
    {
      title: 'Improve Performance',
      description: 'We help businesses gain visibility into their operations, identify inefficiencies and improve decision-making.'
    },
    {
      title: 'Enable Growth',
      description: 'We build technology foundations that support business expansion, evolving requirements and increasing operational complexity.'
    }
  ]
};

export const LEADERSHIP_SECTION = {
  tag: 'LEADERSHIP',
  heading: 'Experience Vision Execution',
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
    name: 'Executive Management',
    role: 'Executive Management',
    slotLabel: 'EXECUTIVE LEADERSHIP',
    title: 'Executive Management',
    domain: 'Enterprise Technology & Strategy',
    bio: 'Astrion Digital is led by an experienced Executive Management Team with a strong blend of business leadership, technology expertise, and industry knowledge. The team brings strategic vision and operational excellence to drive innovation, deliver meaningful business solutions, and build lasting value for customers and partners.',
    credentials: 'Strategic Vision & Operational Excellence',
    placeholderDesc: 'Astrion Digital is led by an experienced Executive Management Team with a strong blend of business leadership, technology expertise, and industry knowledge. The team brings strategic vision and operational excellence to drive innovation, deliver meaningful business solutions, and build lasting value for customers and partners.',
    image: '/images/about/executive-management.jpg',
    isPlaceholder: false
  },
  {
    id: 'leader-slot-2',
    name: 'Technology & Project Strategy',
    role: 'Technology & Project Strategy',
    slotLabel: 'TECHNOLOGY & ARCHITECTURE',
    title: 'Technology & Project Strategy',
    domain: 'Software Architecture & ERP Engineering',
    bio: 'Astrion Digital’s Technology and Project Strategy Team combines deep technical expertise with strategic thinking to design, develop, and deliver business-focused technology solutions. The team ensures every project is aligned with business objectives, leveraging innovation, robust architecture, and disciplined execution to create scalable, efficient, and future-ready solutions.',
    credentials: 'Enterprise Architecture & Project Engineering',
    placeholderDesc: 'Astrion Digital’s Technology and Project Strategy Team combines deep technical expertise with strategic thinking to design, develop, and deliver business-focused technology solutions. The team ensures every project is aligned with business objectives, leveraging innovation, robust architecture, and disciplined execution to create scalable, efficient, and future-ready solutions.',
    image: '/images/about/technology-product-strategy.jpg',
    isPlaceholder: false
  },
  {
    id: 'leader-slot-3',
    name: 'Operations & Partner Ecosystem',
    role: 'Operations & Partner Ecosystem',
    slotLabel: 'OPERATIONS & CUSTOMER SUCCESS',
    title: 'Operations & Partner Ecosystem',
    domain: 'Business Operations & Delivery Network',
    bio: 'Astrion Digital’s Operations & Partner Ecosystem Management Team drives operational excellence while building and nurturing strong, collaborative partner relationships. The team focuses on streamlining processes, ensuring seamless service delivery, and strengthening the partner network to create sustainable growth and long-term value for customers and stakeholders.',
    credentials: 'Customer Success & Strategic Partnerships',
    placeholderDesc: 'Astrion Digital’s Operations & Partner Ecosystem Management Team drives operational excellence while building and nurturing strong, collaborative partner relationships. The team focuses on streamlining processes, ensuring seamless service delivery, and strengthening the partner network to create sustainable growth and long-term value for customers and stakeholders.',
    image: '/images/about/operations-partner-ecosystem.jpg',
    isPlaceholder: false
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

export const PARTNER_PROGRAM = {
  title: 'Partners',
  heading: 'Build Business Opportunities. Grow With Astrion Digital.',
  intro: [
    'We believe a strong partner ecosystem is essential to making enterprise technology accessible to more businesses.',
    'Astrion Digital welcomes technology consultants, ERP implementation professionals, business advisors and organisations interested in expanding their service portfolios through XENedion.',
    'Our ERP Partner Program is designed to create mutually beneficial business opportunities through product enablement, sales support and implementation collaboration.'
  ],
  overview: {
    tag: 'ERP PARTNER PROGRAM',
    title: 'A Partnership That Creates Opportunities.',
    desc: 'Partner with Astrion Digital to take XENedion ERP to businesses looking to improve their operational efficiency and business management capabilities.'
  },
  whyPartner: [
    {
      title: 'Business Opportunity',
      desc: 'Participate in the growing enterprise software and ERP market.'
    },
    {
      title: 'Product Portfolio',
      desc: 'Offer an integrated ERP solution covering multiple business functions.'
    },
    {
      title: 'Sales Enablement',
      desc: 'Access product information, presentations and sales support.'
    },
    {
      title: 'Implementation Support',
      desc: 'Collaborate on customer onboarding, configuration and implementation.'
    },
    {
      title: 'Recurring Revenue Potential',
      desc: 'Build a sustainable business through ERP licensing and customer relationships.'
    },
    {
      title: 'Long-Term Collaboration',
      desc: 'Develop a mutually beneficial relationship with Astrion Digital.'
    }
  ],
  whoCanPartner: [
    'Regional sales and distribution partners.',
    'Industry-specific solution providers.',
    'Technology service providers.',
    'Independent business consultants.',
    'ERP implementation consultants.',
    'IT consulting companies.'
  ],
  howItWorks: [
    {
      step: '01',
      title: 'Partner Enquiry',
      desc: 'Express your interest in joining our partner network.'
    },
    {
      step: '02',
      title: 'Evaluation',
      desc: 'We understand your business, market reach and capabilities.'
    },
    {
      step: '03',
      title: 'Partner Onboarding',
      desc: 'Get familiar with XENedion and the partner framework.'
    },
    {
      step: '04',
      title: 'Business Development',
      desc: 'Identify and engage prospective customers.'
    },
    {
      step: '05',
      title: 'Implementation & Growth',
      desc: 'Work with Astrion Digital to onboard customers and develop long-term relationships.'
    }
  ],
  cta: {
    label: 'Become a XENedion ERP Partner',
    href: '/contact'
  }
};

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
