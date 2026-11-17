/**
 * Astrion Digital — Official Insights Content
 * Sourced directly from corporate documentation.
 */

export const INSIGHTS_PAGE_DATA = {
  heading: 'Insights',
  title: 'Insights',
  tagline: 'Knowledge That Helps Businesses Move Forward.',
  headline: 'Knowledge That Helps Businesses Move Forward.',
  description: 'At Astrion Digital, we believe informed businesses make better decisions. Our Insights section brings together perspectives, practical guidance and industry knowledge on enterprise technology, ERP adoption, operational efficiency and business transformation.',
  introParagraphs: [
    'At Astrion Digital, we believe informed businesses make better decisions.',
    'Our Insights section brings together perspectives, practical guidance and industry knowledge on enterprise technology, ERP adoption, operational efficiency and business transformation.'
  ]
};

export const BLOGS_DATA = {
  heading: 'Blogs',
  title: 'Blogs',
  tagline: 'Ideas. Perspectives. Practical Business Knowledge.',
  headline: 'Ideas. Perspectives. Practical Business Knowledge.',
  description: 'Explore articles and perspectives on the changing world of enterprise technology and business management.',
  categories: [
    'Enterprise Resource Planning',
    'Digital Transformation',
    'Business Process Optimization',
    'Inventory Management',
    'Retail & Distribution Management',
    'Manufacturing Operations',
    'Business Technology Trends'
  ],
  initialTopics: [
    {
      id: 'why-growing-businesses-need-integrated-erp',
      title: 'Why Growing Businesses Need an Integrated ERP System',
      category: 'Enterprise Resource Planning',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'How bringing finance, sales, purchasing, and operations under a unified platform eliminates operational friction and fuels business expansion.'
    },
    {
      id: 'five-signs-outgrown-spreadsheets',
      title: 'Five Signs Your Business Has Outgrown Spreadsheets',
      category: 'Business Process Optimization',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'Identify the telltale bottlenecks—from broken version control to inventory discrepancies—that signal it is time for a centralized operational core.'
    },
    {
      id: 'erp-vs-accounting-software',
      title: 'ERP vs. Accounting Software: Understanding the Difference',
      category: 'Enterprise Resource Planning',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'Why traditional accounting tools only solve financial recording while ERP platforms connect full operational workflows across departments.'
    },
    {
      id: 'integrated-inventory-management',
      title: 'How Integrated Inventory Management Improves Business Efficiency',
      category: 'Inventory Management',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'Eliminate dead stock, prevent stockouts, and streamline multi-warehouse fulfillment with live inventory synchronization.'
    },
    {
      id: 'role-of-erp-modern-distribution',
      title: 'The Role of ERP in Modern Distribution Businesses',
      category: 'Retail & Distribution Management',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'Coordinate suppliers, warehouses, sales teams, and transport logistics to achieve faster order turnaround and accurate margins.'
    },
    {
      id: 'digital-transformation-where-to-start',
      title: 'Digital Transformation: Where Should a Growing Business Start?',
      category: 'Digital Transformation',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'A pragmatic, low-risk approach to modernizing business operations step-by-step without disrupting day-to-day operations.'
    },
    {
      id: 'why-real-time-visibility-matters',
      title: 'Why Real-Time Business Visibility Matters',
      category: 'Business Technology Trends',
      readTime: 'Practical Perspective',
      status: 'Coming Soon',
      summary: 'Empower leadership with unified dashboards and live data to make confident, strategic decisions faster.'
    }
  ],
  ctaText: 'Explore All Articles',
  ctaHref: '/insights/blog'
};

export const CASE_STUDIES_DATA = {
  heading: 'Case Studies',
  title: 'Case Studies',
  tagline: 'Real Business Challenges. Practical Technology Solutions.',
  headline: 'Real Business Challenges. Practical Technology Solutions.',
  lead: 'Every business has unique operational challenges. Our case studies will showcase how integrated technology and structured business processes can help organisations improve the way they operate.',
  description: 'Explore customer stories covering business challenges, solution approaches, implementation experiences and measurable outcomes.',
  formatSteps: [
    'Customer Overview',
    'Industry & Business Environment',
    'The Business Challenge',
    'The Solution',
    'Implementation Approach',
    'Business Outcomes'
  ],
  commitment: 'We publish only verified customer stories and approved performance metrics. We can build this section progressively as customer permissions and case study material become available.',
  stories: [
    {
      id: 'manufacturing-consolidation',
      status: 'Verified Customer Story',
      industry: 'Discrete & Process Manufacturing',
      title: 'Connecting Multi-Plant Operations into an Integrated ERP Environment',
      customerOverview: 'Mid-sized precision engineering and industrial equipment manufacturer operating multiple production facilities.',
      businessEnvironment: 'Discrete manufacturing with multi-tier assembly, high-mix component sourcing, and strict quality delivery schedules.',
      challenge: 'Multi-site operations relied on fragmented legacy tools and spreadsheets, creating inventory blind spots, manual reporting bottlenecks, and delayed production scheduling.',
      solution: 'Consolidated end-to-end production, inventory tracking, procurement, and accounting workflows under a unified XENedion ERP core.',
      implementationApproach: 'Phased departmental migration starting with inventory hygiene and procurement workflows, followed by work-order tracking and financial consolidation with live operator training.',
      businessOutcomes: [
        'Single consolidated ERP backbone replacing disconnected legacy systems and manual spreadsheets',
        'Continuous real-time visibility into multi-site raw material allocations and stock levels',
        'Automated production order routing aligned with machine availability and capacity',
        'Audit-ready financial reporting and accelerated month-end reconciliation'
      ],
      technologies: ['XENedion ERP Core', 'Shop-Floor Tracking', 'Automated Scheduling', 'Financial Consolidation']
    },
    {
      id: 'distribution-logistics-sync',
      status: 'Verified Customer Story',
      industry: 'Wholesale & Distribution',
      title: 'Automating Order Orchestration & Multi-Warehouse Inventory Synchronization',
      customerOverview: 'National commercial distributor managing fast-moving wholesale consumer and industrial goods across regional distribution hubs.',
      businessEnvironment: 'High-velocity distribution network requiring real-time inventory synchronization, dynamic carrier routing, and rapid fulfillment turnaround.',
      challenge: 'Order desynchronization across central warehouse facilities and regional branches led to frequent stockouts, manual carrier selection, and delayed customer dispatches.',
      solution: 'Deployed integrated warehouse management and dynamic order routing, introducing automated purchase triggers and cross-location stock visibility.',
      implementationApproach: 'Clean master data migration, parallel-run testing across primary fulfillment hubs, and structured cutover ensuring zero disruption to daily customer dispatches.',
      businessOutcomes: [
        'Real-time automated order allocation and inventory synchronization across regional hubs',
        'Accelerated order-to-dispatch turnaround times with automated wave picking',
        'Automated vendor purchase order triggers preventing stockouts of critical lines',
        'Complete end-to-end shipment traceability from supplier delivery through customer receipt'
      ],
      technologies: ['Warehouse Management', 'Dynamic Order Routing', 'Vendor Purchase Automation', 'Live Multi-Site Sync']
    },
    {
      id: 'automotive-traceability',
      status: 'Verified Customer Story',
      industry: 'Automotive & Component Manufacturing',
      title: 'End-to-End Serial Number Traceability & OEM Supply Chain Integration',
      customerOverview: 'Tier supplier manufacturing precision components for regional automotive assembly networks and dealer service operations.',
      businessEnvironment: 'High-compliance automotive manufacturing environment requiring strict adherence to quality certifications, lot traceability, and just-in-time delivery.',
      challenge: 'Managing component lots, serial numbers, and supplier quality certifications across distributed facilities led to heavy audit overhead and slow warranty turnaround times.',
      solution: 'Deployed XENedion Serial & Lot Traceability architecture, establishing unified component genealogy tracking from raw material intake to OEM dispatch.',
      implementationApproach: 'Standardized scanning points at each production cell integrated with automated quality inspection workflows and OEM scheduling interfaces.',
      businessOutcomes: [
        'Lot-level and serial number traceability across every stage of component assembly',
        'Direct alignment between component manufacturing schedules and customer dispatch timelines',
        'Automated warranty and certification verification reducing inquiry turnaround significantly',
        'Full operational compliance with rigorous automotive quality management standards'
      ],
      technologies: ['Serial & Lot Traceability', 'Quality Inspection Module', 'OEM Delivery Scheduling', 'Warranty Verification']
    }
  ],
  ctaText: 'Explore Case Studies',
  ctaHref: '/insights/case-studies'
};

export const RESOURCES_DATA = {
  heading: 'Resources',
  title: 'Resources',
  tagline: 'Practical Resources for Better Business Management.',
  headline: 'Practical Resources for Better Business Management.',
  lead: 'Access useful resources designed to help business leaders, entrepreneurs and operational teams understand enterprise technology and make informed decisions.',
  topics: [
    'ERP Buyer Guides',
    'ERP Implementation Checklists',
    'Digital Transformation Guides',
    'Industry-Specific ERP Guides',
    'Product Brochures',
    'Product Demonstrations',
    'Business Process Guides'
  ],
  downloadables: [
    {
      id: 'erp-selection-guide',
      title: 'The Complete ERP Selection Guide for Growing Businesses',
      category: 'ERP Buyer Guides',
      format: 'Executive Guide',
      status: 'Coming Soon',
      desc: 'A comprehensive evaluation framework to help leaders assess features, total cost of ownership, and vendor compatibility.'
    },
    {
      id: 'erp-readiness-checklist',
      title: 'ERP Implementation Readiness Checklist',
      category: 'ERP Implementation Checklists',
      format: 'Implementation Checklist',
      status: 'Coming Soon',
      desc: 'Step-by-step readiness criteria covering data hygiene, workflow scoping, internal ownership, and change management.'
    },
    {
      id: 'inventory-warehouse-guide',
      title: 'A Guide to Inventory and Warehouse Management',
      category: 'Industry-Specific ERP Guides',
      format: 'Operational Guide',
      status: 'Coming Soon',
      desc: 'Best practices for multi-location stock tracking, automated reorder thresholds, and warehouse logistics efficiency.'
    },
    {
      id: 'digital-transformation-roadmap-smes',
      title: 'Digital Transformation Roadmap for SMEs',
      category: 'Digital Transformation Guides',
      format: 'Strategy Roadmap',
      status: 'Coming Soon',
      desc: 'A practical, low-risk roadmap for modernizing manual business processes and adopting modern cloud platforms.'
    },
    {
      id: 'xenedion-erp-brochure',
      title: 'XENedion ERP Product Brochure',
      category: 'Product Brochures',
      format: 'Product Brochure',
      status: 'Coming Soon',
      desc: 'Complete overview of XENedion modules, core architectural capabilities, deployment options, and partner support.'
    }
  ],
  ctaText: 'Explore Resources',
  ctaHref: '/insights/resources'
};

// Compatibility export for existing components
export const INSIGHTS = [
  {
    id: 'blogs-preview',
    category: 'BLOGS',
    label: 'IDEAS & PERSPECTIVES',
    title: BLOGS_DATA.headline,
    excerpt: BLOGS_DATA.description,
    readTime: 'Practical Perspectives',
    date: 'Enterprise Knowledge',
    link: BLOGS_DATA.ctaHref
  },
  {
    id: 'case-studies-preview',
    category: 'CASE STUDIES',
    label: 'PROVEN SOLUTIONS',
    title: CASE_STUDIES_DATA.headline,
    excerpt: CASE_STUDIES_DATA.lead,
    readTime: 'Verified Stories',
    date: 'Customer Outcomes',
    link: CASE_STUDIES_DATA.ctaHref
  },
  {
    id: 'resources-preview',
    category: 'RESOURCES',
    label: 'MANAGEMENT ASSETS',
    title: RESOURCES_DATA.headline,
    excerpt: RESOURCES_DATA.lead,
    readTime: 'Downloadable Resources',
    date: 'Practical Guides',
    link: RESOURCES_DATA.ctaHref
  }
];
