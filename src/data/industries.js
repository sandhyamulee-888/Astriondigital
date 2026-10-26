export const INDUSTRIES = [
  {
    id: 'manufacturing',
    num: '01',
    name: 'Manufacturing',
    headline: 'Connected Shop Floors and Automated Bill of Materials',
    simpleHeadline: 'Connected Shop Floors and Automated Bill of Materials',
    coreProblemSolved: 'Tracks production schedules, raw material stock, scrap rates, and machine maintenance in real time.',
    challenge: 'Factory floors struggle with disconnected paper schedules, unexpected machine breakdowns, and material shortages that delay delivery to clients.',
    solution: 'XENedion links your Bill of Materials (BOM), raw inventory, machine schedules, and quality inspections into one real-time shop floor dashboard.',
    result: 'Zero production delays from missing parts, accurate cost-per-unit calculations, and real-time scrap tracking that protects profit margins.',
    description: 'Tracks production schedules, raw material stock, scrap rates, and machine maintenance in real time.',
    capabilities: ['Shop-Floor Scheduling', 'Automated BOM Tracking', 'Raw Material Inventory', 'Machine Maintenance Alerts'],
    outcomes: [
      'Shop-floor operations synchronized with enterprise ERP ledger in real time',
      'Accurate Bill of Materials (BOM) & sub-assembly component routing',
      'Live scrap rate monitoring and raw material waste reduction',
      'Preventative machine maintenance alerts to eliminate unplanned downtime'
    ],
    xenedionFocus: ['Production Scheduling', 'Inventory Control', 'Purchasing & POs', 'Quality Control'],
    href: '/industries/manufacturing'
  },
  {
    id: 'distribution',
    num: '02',
    name: 'Distribution',
    headline: 'Multi-Warehouse Visibility and Faster Fulfillment',
    simpleHeadline: 'Multi-Warehouse Visibility and Faster Fulfillment',
    coreProblemSolved: 'Eliminates stock-outs and delivery delays with real-time stock allocation across distribution centers.',
    challenge: 'Distributors face lost revenue from stock-outs at one warehouse while inventory sits idle at another, coupled with slow manual packing processes.',
    solution: 'XENedion provides real-time stock allocation across all distribution centers, automated inter-warehouse transfers, and dynamic order routing.',
    result: 'Eliminates stock-outs, cuts order fulfillment turnaround by 50%, and minimizes shipping costs by shipping from the closest facility.',
    description: 'Eliminates stock-outs and delivery delays with real-time stock allocation across distribution centers.',
    capabilities: ['Multi-Warehouse Visibility', 'Cross-Docking', 'Automated Reorders', 'Fast Pick-Pack-Ship'],
    outcomes: [
      'Multi-warehouse automated allocation and stock re-balancing',
      'Real-time automated vendor re-ordering based on sales velocity',
      'Integrated B2B customer order portal with custom pricing tiers',
      'Sub-minute picking route optimization for warehouse teams'
    ],
    xenedionFocus: ['Order Management', 'Warehouse Barcoding', 'Purchasing', 'Logistics'],
    href: '/industries/distribution'
  },
  {
    id: 'retail',
    num: '03',
    name: 'Retail & Wholesale',
    headline: 'Unified In-Store, Warehouse, and Online Inventory',
    simpleHeadline: 'Unified In-Store, Warehouse, and Online Inventory',
    coreProblemSolved: 'Prevents overselling by automatically syncing POS registers, web stores, and back-office stock.',
    challenge: 'Retailers oversell out-of-stock items online because physical store registers and eCommerce shopping carts run on separate databases.',
    solution: 'XENedion synchronizes point-of-sale (POS) registers, eCommerce channels (Shopify, WooCommerce), and warehouse stock instantly in one shared database.',
    result: 'Zero overselling, accurate inventory availability for customers, and instant consolidated sales and margin reporting across all channels.',
    description: 'Prevents overselling by automatically syncing POS registers, web stores, and back-office stock.',
    capabilities: ['Omnichannel Sync', 'POS Integration', 'Real-Time Stock Counts', 'Promotions & Pricing'],
    outcomes: [
      'Single inventory ledger shared between physical stores and online shops',
      'Automated replenishment orders based on real-time sales trends',
      'Live gross margin calculations by SKU, store location, and promotion',
      'Seamless cross-store stock lookups and customer return processing'
    ],
    xenedionFocus: ['Sales & POS', 'Inventory Management', 'Customer CRM', 'Financial Ledger'],
    href: '/industries/retail'
  },
  {
    id: 'logistics',
    num: '04',
    name: 'Logistics & Supply Chain',
    headline: 'Fleet Route Optimization and Freight Tracking',
    simpleHeadline: 'Fleet Route Optimization and Freight Tracking',
    coreProblemSolved: 'Tracks shipments live, automates dispatch documentation, and manages proof of delivery.',
    challenge: 'Freight teams lose hours answering "where is my order?" calls, dealing with manual paper manifests, and handling disputed delivery claims.',
    solution: 'XENedion tracks freight shipments in real time, automates bill-of-lading and dispatch documents, and captures digital proof of delivery on mobile.',
    result: 'Total shipment transparency for clients, instant billing upon delivery confirmation, and reduced fuel and dispatch overhead.',
    description: 'Tracks shipments live, automates dispatch documentation, and manages proof of delivery.',
    capabilities: ['Live Freight Tracking', 'Automated Manifests', 'Electronic Proof of Delivery', 'Carrier Rate Matching'],
    outcomes: [
      'Real-time vehicle and shipment tracking with automated customer alerts',
      'Automated freight rate calculation and instant invoice generation',
      'Mobile digital proof-of-delivery signatures and photo uploads',
      'Full audit compliance for driver hours, fuel logs, and safety checks'
    ],
    xenedionFocus: ['Logistics & Fleet', 'Dispatch Manifests', 'Order Tracking', 'Billing Automation'],
    href: '/industries/logistics'
  },
  {
    id: 'professional-services',
    num: '05',
    name: 'Professional Services',
    headline: 'Real-Time Project Billing and Resource Allocation',
    simpleHeadline: 'Real-Time Project Billing and Resource Allocation',
    coreProblemSolved: 'Tracks billable hours, project milestones, and contract profitability on one simple dashboard.',
    challenge: 'Agencies and consulting firms struggle with unbilled hours, scope creep, and discovering unprofitable projects only after the work is done.',
    solution: 'XENedion tracks staff timesheets, project milestones, and expenses in real time, comparing current spend against contract budgets.',
    result: '100% of billable hours captured, automated milestone invoices sent on time, and real-time visibility into project profit margins.',
    description: 'Tracks billable hours, project milestones, and contract profitability on one simple dashboard.',
    capabilities: ['Project Accounting', 'Resource Scheduling', 'Milestone Invoicing', 'Time & Expense Tracking'],
    outcomes: [
      'Live consultant billability dashboards and forward-looking staffing plans',
      'One-click automated invoicing based on approved hours and milestones',
      'Real-time project expense tracking against contract budget caps',
      'Instant margin visibility before, during, and after client engagements'
    ],
    xenedionFocus: ['Project Accounting', 'Time & Billing', 'CRM & Contracts', 'Financial Reports'],
    href: '/industries/professional-services'
  },
  {
    id: 'automotive',
    num: '06',
    name: 'Automotive',
    headline: 'Parts Traceability and Dealer Supply Chain Integration',
    simpleHeadline: 'Parts Traceability and Dealer Supply Chain Integration',
    coreProblemSolved: 'Manages complex serial numbering, tier supplier deliveries, and warranty tracking without paperwork.',
    challenge: 'Automotive suppliers and distributors must meet strict OEM compliance, manage complex serial numbers, and process warranty claims without error.',
    solution: 'XENedion provides end-to-end lot and serial number tracking from supplier receiving through assembly and dealer dispatch.',
    result: 'Instant recall isolation in seconds, error-free warranty validations, and seamless adherence to OEM delivery standards.',
    description: 'Manages complex serial numbering, tier supplier deliveries, and warranty tracking without paperwork.',
    capabilities: ['Serial & Lot Tracking', 'Tier Supplier Sync', 'Warranty Management', 'OEM Compliance'],
    outcomes: [
      'Lot-level traceability and serial number history down to individual parts',
      'Integration with tier-1 supplier schedules and just-in-time deliveries',
      'Digital warranty verification eliminating fraudulent or duplicate claims',
      'Automated quality inspection logs adhering strictly to industry standards'
    ],
    xenedionFocus: ['Serial Tracking', 'Purchasing & POs', 'Warehouse Barcoding', 'Warranty Module'],
    href: '/industries/automotive'
  },
  {
    id: 'other',
    num: '07',
    name: 'Other Sectors',
    headline: 'Flexible ERP Solutions for Specialized Businesses',
    simpleHeadline: 'Flexible ERP Solutions for Specialized Businesses',
    coreProblemSolved: 'Configurable software workflows tailored for life sciences, energy, food & beverage, and contracting.',
    challenge: 'Specialized industries often find generic software rigid, requiring expensive bespoke custom code to meet regulatory compliance.',
    solution: 'XENedion provides configurable data fields, customizable approval workflows, and modular deployment tailored to your business model.',
    result: 'Rapid go-live in weeks, total audit readiness, and software that molds to how your company actually operates.',
    description: 'Configurable software workflows tailored for life sciences, energy, food & beverage, and contracting.',
    capabilities: ['Custom Workflows', 'Audit Compliance', 'Flexible Data Fields', 'Modular Rollout'],
    outcomes: [
      'Tailored operational workflows configured around your specific processes',
      'Audit-ready electronic records and approval histories',
      'Scalable cloud architecture ready for multi-location expansion',
      'Seamless API connections to existing specialized equipment'
    ],
    xenedionFocus: ['Core Ledger', 'Custom Workflows', 'API Integrations', 'Real-Time Reports'],
    href: '/industries/other'
  }
];
