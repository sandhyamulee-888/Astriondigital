export const SOLUTION_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'ai-automation', label: 'Business Automation' },
  { id: 'platforms-erp', label: 'Core Software & ERP' },
  { id: 'cloud-cyber', label: 'Cloud & Security' },
  { id: 'data-integration', label: 'BI & API Integrations' }
];

export const SOLUTIONS = [
  {
    id: 'digital-transformation',
    aliasId: 'enterprise-digital-transformation',
    num: '01',
    category: 'platforms-erp',
    categoryLabel: 'Business Automation',
    title: 'Enterprise Digital Transformation',
    headline: 'Modernize Your Core Operations Without Disrupting Business',
    tagline: 'Modernization → Continuity',
    shortDesc: 'Replace outdated spreadsheets and disconnected legacy tools with automated, connected cloud systems that keep your entire team synchronized.',
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
    num: '02',
    category: 'ai-automation',
    categoryLabel: 'Intelligent Workflows',
    title: 'AI & Intelligent Automation',
    headline: 'AI & Intelligent Automation',
    tagline: 'Automation → Time Saved',
    shortDesc: 'From automated invoice processing to smart inventory reordering, our intelligent workflows reduce manual re-entry errors and save hundreds of employee hours every month.',
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
    id: 'software-development',
    aliasId: 'enterprise-software-development',
    num: '03',
    category: 'platforms-erp',
    categoryLabel: 'Core Engineering',
    title: 'Enterprise Software Development',
    headline: 'Custom Software Architectures Built for High Scale',
    tagline: 'Custom Code → High Scale',
    shortDesc: 'When off-the-shelf tools don’t fit, we design and build robust, custom internal modules tailored to your specific organizational workflows.',
    overview: 'Every business has unique operational advantages. When commercial off-the-shelf tools fail to match your workflow, Astrion’s senior software engineering team designs and develops high-performance custom modules that integrate seamlessly with your core platform.',
    problemSolved: 'Solves the frustration of generic off-the-shelf software that forces your team into rigid, unnatural workflows.',
    services: [
      'Tailored Internal Business Applications',
      'High-Throughput Transactional Systems',
      'Custom Customer & Supplier Portals',
      'Dedicated API Backends & Microservices'
    ],
    architecture: 'High-availability microservices architecture with robust databases and automated CI/CD deployment.',
    metrics: 'Engineered for High-Transaction Enterprise Scale'
  },
  {
    id: 'erp',
    aliasId: 'erp-solutions',
    num: '04',
    category: 'platforms-erp',
    categoryLabel: 'Unified Platform',
    title: 'ERP Solutions & XENedion',
    headline: 'Centralize Your Business Data into One Source of Truth',
    tagline: 'Unified Data → Complete Clarity',
    shortDesc: 'Connect your financial records, supply chain, purchasing, and sales tracking into a unified operational platform.',
    overview: 'Astrion Digital is the software company behind XENedion ERP. We unify finance, inventory, purchasing, sales, and HR into one cohesive system so every department works from the exact same accurate numbers in real time.',
    problemSolved: 'Replaces disconnected software tools that cause reconciliation errors and duplicate work.',
    services: [
      'Integrated General Ledger & Financial Accounting',
      'Real-Time Multi-Warehouse Inventory Tracking',
      'Procurement & Automated Three-Way Matching',
      'Sales Pipelines & Quotes-to-Cash Automation'
    ],
    architecture: 'Centralized transactional database with real-time sync across inventory, sales, and financial ledgers.',
    metrics: '100% Real-Time Ledger Synchronization'
  },
  {
    id: 'cybersecurity',
    aliasId: 'cybersecurity',
    num: '05',
    category: 'cloud-cyber',
    categoryLabel: 'Enterprise Security',
    title: 'Cybersecurity & Governance',
    headline: 'Enterprise-Grade Protection for Your Sensitive Business Data',
    tagline: 'Security → Peace of Mind',
    shortDesc: 'Granular role-based access, end-to-end data encryption, and complete audit logging to ensure your operational records stay compliant and secure.',
    overview: 'Your enterprise data is your most valuable asset. We build security directly into every level of your software stack, ensuring only authorized personnel have access, data is protected at rest and in transit, and regulatory compliance is maintained.',
    problemSolved: 'Protects against data breaches, unauthorized internal access, and compliance penalties.',
    services: [
      'Role-Based Access Control (RBAC)',
      'End-to-End Data Encryption (AES-256 / TLS)',
      'Immutable Audit Logging & Activity Trails',
      'Automated Disaster Recovery & Backups'
    ],
    architecture: 'Zero-trust network architecture with multi-factor authentication, granular permissions, and encrypted storage.',
    metrics: 'Enterprise-Grade Security Standards'
  },
  {
    id: 'cloud-infrastructure',
    aliasId: 'cloud-infrastructure',
    num: '06',
    category: 'cloud-cyber',
    categoryLabel: 'Cloud Architecture',
    title: 'Cloud & Infrastructure',
    headline: 'High-Uptime Cloud Performance with Zero Compromises',
    tagline: 'Reliability → Fast Performance',
    shortDesc: 'Cloud infrastructure engineered for speed, high availability, and effortless scaling as your transaction volumes grow.',
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
    num: '07',
    category: 'data-integration',
    categoryLabel: 'Business Intelligence',
    title: 'Data & Business Intelligence',
    headline: 'Real-Time Dashboards for Better Business Decisions',
    tagline: 'Real-Time Data → Faster Decisions',
    shortDesc: 'Stop waiting until month-end for performance reports. Get real-time visibility into revenue, margins, stock turnover, and operational costs.',
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
  },
  {
    id: 'integration-api',
    aliasId: 'integration-api',
    num: '08',
    category: 'data-integration',
    categoryLabel: 'API & Integrations',
    title: 'Integration & API Solutions',
    headline: 'Connect Your Existing Apps Effortlessly',
    tagline: 'Open APIs → Seamless Flow',
    shortDesc: 'Pre-built connectors and robust APIs to sync your banking, eCommerce platforms, third-party logistics, and CRM tools without data loss.',
    overview: 'Your enterprise software should work harmoniously with your existing toolset. We build clean, pre-built connectors and standard REST/GraphQL APIs that automatically sync data between your ERP, bank feeds, eCommerce shops, and third-party logistics providers.',
    problemSolved: 'Stops double-entry between eCommerce stores, warehouse portals, and accounting software.',
    services: [
      'eCommerce Sync (Shopify, WooCommerce, Magento)',
      'Automated Bank Feeds & Payment Gateway Sync',
      '3PL & Carrier Shipping Connectors (FedEx, UPS, DHL)',
      'Secure Webhooks & Real-Time Event Sync'
    ],
    architecture: 'Standardized REST and GraphQL API gateways with rate limiting, retry queues, and encryption.',
    metrics: 'Seamless Automated Data Flow Across Systems'
  }
];

export const SOLUTIONS_DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Focus on Real Business Value',
    desc: 'We build software that directly saves employee hours, cuts operational waste, and increases profitability.'
  },
  {
    num: '02',
    title: 'Zero Vendor Lock-In',
    desc: 'You always maintain full control and ownership of your data with standard APIs and flexible export tools.'
  },
  {
    num: '03',
    title: 'Enterprise Security by Default',
    desc: 'Granular permissions, encrypted data storage, and complete audit tracking protect your business from day one.'
  },
  {
    num: '04',
    title: 'One Connected Foundation',
    desc: 'Every module and capability connects back to your core ledger, eliminating reconciliation headaches.'
  }
];
