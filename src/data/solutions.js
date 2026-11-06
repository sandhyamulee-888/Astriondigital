export const SOLUTION_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'enterprise-solutions', label: 'Enterprise Solutions' },
  { id: 'cloud-data-security', label: 'Cloud, Data & Security' }
];

export const SOLUTIONS = [
  {
    id: 'erp',
    aliasId: 'erp-solutions',
    category: 'enterprise-solutions',
    categoryLabel: 'Enterprise Solutions',
    title: 'XENedion ERP',
    image: '/images/solutions/erp-solutions.webp',
    headline: 'Centralize Your Business Data into One Source of Truth',
    tagline: 'Centralized Operations → Complete Visibility',
    shortDesc: 'Centralize your business data into one source of truth. Connect core operations, finance, inventory, supply chain, and sales tracking into a unified operational platform.',
    overview: 'Astrion Digital is the software company behind XENedion ERP. We unify finance, inventory, purchasing, sales, and HR into one cohesive platform so every department works from the exact same accurate numbers in real time.',
    problemSolved: 'Replaces fragmented software tools and spreadsheets that cause reconciliation errors and duplicate work.',
    services: [
      'Core Ledger & General Accounting',
      'Real-Time Multi-Warehouse Inventory Tracking',
      'Integrated Procurement & Order Automation',
      'Unified Operational Systems & Dashboards'
    ],
    architecture: 'High-availability unified transactional database with real-time operational synchronization.',
    metrics: '100% Real-Time Ledger Synchronization'
  },
  {
    id: 'digital-transformation',
    aliasId: 'enterprise-digital-transformation',
    category: 'cloud-data-security',
    categoryLabel: 'Cloud, Data & Security',
    title: 'Enterprise Digital Transformation',
    image: '/images/solutions/enterprise-digital-transformation.webp',
    headline: 'Modernize Your Core Operations Without Disrupting Business',
    tagline: 'Modernization → Continuity',
    shortDesc: 'Modernize core business operations and bring processes together in one connected platform. Replace outdated spreadsheets and disconnected legacy tools with automated cloud systems.',
    overview: 'Astrion Digital helps growing organizations replace clunky legacy software, manual paperwork, and disconnected spreadsheets with clean, modern cloud systems. We upgrade your mission-critical operations without causing downtime or disrupting day-to-day business.',
    problemSolved: 'Eliminates data silos, fragmented spreadsheets, and slow manual communication across departments.',
    services: [
      'Legacy Tool Replacement & Cloud Migration',
      'Automated Cross-Department Workflows',
      'Unified Operational Systems & Dashboards',
      'Hands-On Staff Onboarding & Change Support'
    ],
    architecture: 'Clean modern cloud architecture with 100% data integrity and uninterrupted business continuity.',
    metrics: '90% Reduction in Disconnected Manual Workflows'
  },
  {
    id: 'ai-intelligent-automation',
    aliasId: 'ai-automation',
    category: 'cloud-data-security',
    categoryLabel: 'Cloud, Data & Security',
    title: 'AI & Intelligent Automation',
    image: '/images/solutions/ai-intelligent-automation.webp',
    headline: 'AI & Intelligent Automation',
    tagline: 'Automation → Time Saved',
    shortDesc: 'Automate repetitive tasks, business workflows, and approval processes. Reduce manual re-entry errors and save hundreds of employee hours every month.',
    overview: 'Practical artificial intelligence built directly into your daily operations. Instead of hype, our automation solves real headaches: reading invoices, matching purchase orders, forecasting inventory reorder points, and catching shipping delays before they hurt your margins.',
    problemSolved: 'Stops repetitive manual data entry, human calculation errors, and tedious administrative busywork.',
    services: [
      'Automated Invoice & Receipt Processing',
      'Smart Inventory Reorder Forecasting',
      'Automated Order Routing & Status Updates',
      'Exception Detection & Duplicate Alerts'
    ],
    architecture: 'Embedded AI agent loops that trigger instant notifications and execute actions without human latency.',
    metrics: 'Hundreds of Employee Hours Saved Every Month'
  },
  {
    id: 'cloud-infrastructure',
    aliasId: 'cloud-infrastructure',
    category: 'cloud-data-security',
    categoryLabel: 'Cloud, Data & Security',
    title: 'Cloud & Infrastructure',
    image: '/images/solutions/cloud-infrastructure.webp',
    headline: 'High-Uptime Cloud Performance with Zero Compromises',
    tagline: 'Reliability → Fast Performance',
    shortDesc: 'Run enterprise applications on reliable, scalable, high-performance cloud infrastructure engineered for speed and high availability.',
    overview: 'Fast, dependable cloud hosting that keeps your software running 24/7/365. We design cloud environments on AWS, Azure, and Google Cloud that automatically scale during traffic spikes and guarantee maximum uptime for your business.',
    problemSolved: 'Eliminates slow server response times, unexpected system crashes, and expensive hardware maintenance.',
    services: [
      'High-Availability Multi-Region Cloud Hosting',
      'Automated Elastic Compute & Auto-Scaling',
      'Real-Time Server Health & Performance Monitoring',
      'Automated Daily Encrypted Backups'
    ],
    architecture: 'Containerized Kubernetes infrastructure with automated failover and multi-zone redundancy.',
    metrics: '99.9% High-Availability Cloud Uptime'
  },
  {
    id: 'data-business-intelligence',
    aliasId: 'business-intelligence',
    category: 'cloud-data-security',
    categoryLabel: 'Cloud, Data & Security',
    title: 'Data & Business Intelligence',
    image: '/images/solutions/data-business-intelligence.webp',
    headline: 'Real-Time Dashboards for Better Business Decisions',
    tagline: 'Real-Time Data → Faster Decisions',
    shortDesc: 'Turn business data into real-time insights with dashboards, analytics, and reporting. Get real-time visibility into revenue, margins, and operational costs.',
    overview: 'Make business decisions with complete confidence. Astrion replaces slow month-end spreadsheets with live, interactive dashboards that display your current cash flow, inventory turnover, gross margins, and operational performance.',
    problemSolved: 'Ends the frustration of waiting weeks for financial reports or guessing your true inventory levels.',
    services: [
      'Executive KPI & Performance Dashboards',
      'Live Profit & Loss and Cash Flow Tracking',
      'Inventory Turnover & Slow-Moving Stock Alerts',
      'One-Click Export to Excel & PDF Reports'
    ],
    architecture: 'Real-time analytics engine connecting directly to operational databases for instant calculations.',
    metrics: 'Instant Real-Time Reporting, Zero Waiting'
  }
];

export const SOLUTIONS_DIFFERENTIATORS = [
  {
    title: 'Focus on Real Business Value',
    desc: 'We build software that directly saves employee hours, cuts operational waste, and increases profitability.'
  },
  {
    title: 'Zero Vendor Lock-In',
    desc: 'You always maintain full control and ownership of your data with standard APIs and flexible export tools.'
  },
  {
    title: 'Enterprise Security by Default',
    desc: 'Granular permissions, encrypted data storage, and complete audit tracking protect your business from day one.'
  },
  {
    title: 'One Connected Foundation',
    desc: 'Every module and capability connects back to your core ledger, eliminating reconciliation headaches.'
  }
];
