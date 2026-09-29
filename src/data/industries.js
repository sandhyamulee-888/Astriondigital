export const INDUSTRIES = [
  {
    id: 'manufacturing',
    num: '01',
    name: 'Manufacturing',
    headline: 'Connected production. Smarter operations. Real-time intelligence.',
    description: 'Transform discrete and process manufacturing floors into synchronized, telemetry-driven environments with automated scheduling and closed-loop quality control.',
    capabilities: ['ERP', 'Automation', 'Supply Chain', 'Data & Analytics'],
    outcomes: [
      'Shop-floor telemetry synchronized with enterprise ERP ledger',
      'Real-time Overall Equipment Effectiveness (OEE) tracking',
      'Automated Bill of Materials (BOM) & sub-assembly routing',
      'Predictive maintenance reducing unpredicted equipment downtime'
    ],
    xenedionFocus: ['Manufacturing Execution (MES)', 'Inventory Control', 'Vendor Procurement', 'Predictive Quality'],
    href: '/industries/manufacturing'
  },
  {
    id: 'distribution',
    num: '02',
    name: 'Distribution',
    headline: 'Omni-channel routing. Dynamic inventory. Precision fulfillment.',
    description: 'Empower wholesale and regional distributors with automated cross-docking, real-time stock allocation, and AI-optimized freight consolidation.',
    capabilities: ['Warehouse Management', 'EDI Integration', 'Order Routing', 'Forecasting'],
    outcomes: [
      'Multi-warehouse automated allocation and stock re-balancing',
      'Real-time automated vendor re-ordering based on velocity',
      'Integrated B2B order portal with dynamic pricing tiers',
      'Sub-minute picking route optimization for warehouse pickers'
    ],
    xenedionFocus: ['Order Management', 'Warehouse Management', 'Purchasing', 'Logistics'],
    href: '/industries/distribution'
  },
  {
    id: 'retail',
    num: '03',
    name: 'Retail',
    headline: 'Unified commerce. Frictionless inventory. Customer intelligence.',
    description: 'Bridge physical storefronts with digital commerce platforms through a centralized real-time inventory ledger and customer telemetry.',
    capabilities: ['Omnichannel ERP', 'POS Integration', 'Demand Sensing', 'Loyalty Engines'],
    outcomes: [
      'Single inventory ledger across physical stores and digital channels',
      'Automated replenishment based on local demand variances',
      'Real-time margin analysis by SKU, store location, and promotion',
      'Seamless return processing and cross-store inventory lookups'
    ],
    xenedionFocus: ['Sales & POS', 'Inventory', 'CRM & Loyalty', 'Financial Ledger'],
    href: '/industries/retail'
  },
  {
    id: 'logistics',
    num: '04',
    name: 'Logistics',
    headline: 'End-to-end visibility. Dynamic routing. Resilient carrier networks.',
    description: 'Orchestrate complex multi-modal freight networks, automated dispatch, electronic proof of delivery, and continuous carrier performance scoring.',
    capabilities: ['Fleet Management', 'Telematics Integration', 'Freight Billing', 'Route AI'],
    outcomes: [
      'Real-time vehicle tracking and automated status notifications',
      'Automated freight rate calculation and automated carrier billing',
      'Dynamic re-routing around transit bottlenecks and weather delays',
      'Full compliance auditing for hazardous materials and driver hours'
    ],
    xenedionFocus: ['Logistics & Dispatch', 'Vendor Management', 'Order Management', 'Analytics'],
    href: '/industries/logistics'
  },
  {
    id: 'professional-services',
    num: '05',
    name: 'Professional Services',
    headline: 'Resource optimization. Milestone billing. Project profitability.',
    description: 'Maximize billable consultant utilization, automate project accounting, and deliver transparent client reporting across global advisory practices.',
    capabilities: ['Project Accounting', 'Resource Allocation', 'Contract Lifecycle', 'Time & Expense'],
    outcomes: [
      'Global resource utilization dashboards with predictive staffing',
      'Automated time tracking and complex milestone-based invoicing',
      'Multi-currency and multi-tax entity financial consolidation',
      'Project margin forecasting before engagement contracts are finalized'
    ],
    xenedionFocus: ['Finance & Accounts', 'HR & Resource Management', 'CRM', 'Reports & Analytics'],
    href: '/industries/professional-services'
  },
  {
    id: 'automotive',
    num: '06',
    name: 'Automotive',
    headline: 'Tier-1 supply sync. Component traceability. Stringent compliance.',
    description: 'Ensure just-in-sequence delivery, complex multi-tier BOM tracking, and rigorous quality audit trails required by global automotive OEMs.',
    capabilities: ['EDI / JIT Protocols', 'Serial Batch Tracking', 'OEM Compliance', 'Supplier Portals'],
    outcomes: [
      'Strict serialization and lot-level traceability down to raw components',
      'Seamless integration with OEM automated sequencing systems (JIS/JIT)',
      'Automated engineering change order (ECO) propagation across BOMs',
      'Zero-defect quality tracking and automated recall isolation'
    ],
    xenedionFocus: ['Order Management', 'Inventory', 'Purchasing', 'Warehouse Management'],
    href: '/industries/automotive'
  },
  {
    id: 'other',
    num: '07',
    name: 'Other Industries',
    headline: 'Engineered platforms for specialized enterprise operations.',
    description: 'Customized digital transformations, ERP implementations, and intelligent automation architectures for life sciences, energy, public sector, and aerospace.',
    capabilities: ['Regulatory Compliance', 'Custom Workflows', 'Legacy Integration', 'Security Controls'],
    outcomes: [
      'Bespoke operational workflows built on robust enterprise foundations',
      'Audit-ready data trails adhering to industry-specific regulations',
      'Scalable digital foundations ready for global expansion',
      'Seamless interoperability with legacy core systems'
    ],
    xenedionFocus: ['Core Ledger', 'Custom Extensions', 'Integration API', 'Analytics'],
    href: '/industries/other'
  }
];
