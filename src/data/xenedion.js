export const XENEDION_DATA = {
  tag: 'FLAGSHIP ENTERPRISE SOFTWARE PRODUCT',
  productName: 'XENedion',
  tagline: 'One Platform. Your Entire Business.',
  headline: 'XENedion ERP — One Platform. Your Entire Business',
  heroHeadline: 'One Platform. Your Entire Business.',
  heroSubheadline: 'Our flagship product, XENedion, is an integrated enterprise resource planning platform designed to connect core business functions, streamline operations, and provide better visibility across the organization.',
  role: 'Flagship Enterprise Software Product',
  copy: 'An integrated enterprise resource planning platform designed to connect core business functions, streamline operations, and provide better visibility across the organization.',
  corporateFoundation: 'Astrion Digital provides the corporate foundation for XENedion\'s product development, innovation, growth, and long-term vision.',
  ctaText: 'Book a Live Demo',
  ctaHref: '/contact',
  coreMetrics: [
    {
      value: '100%',
      label: 'Real-Time Data',
      desc: 'Every sale, stock movement, and invoice updates your entire system instantly'
    },
    {
      value: '90%',
      label: 'Less Manual Work',
      desc: 'Automate routine tasks like invoicing, stock reorders, and payroll calculations'
    },
    {
      value: 'Weeks',
      label: 'Fast Go-Live',
      desc: 'Get up and running in weeks with ready-made industry templates and guided onboarding'
    }
  ],
  showcasePillars: [
    {
      num: '01',
      title: 'Finance & Accounting',
      desc: 'Track cash flow, automate invoicing, manage multi-currency accounts, and stay tax-compliant — without spreadsheets.',
      icon: 'DollarSign'
    },
    {
      num: '02',
      title: 'Inventory & Procurement',
      desc: 'Know exact stock levels across every warehouse, automate purchase orders, and prevent stockouts before they happen.',
      icon: 'Layers'
    },
    {
      num: '03',
      title: 'Sales & Customer Management',
      desc: 'Manage leads, create quotes, convert orders to invoices, and track every customer relationship in one place.',
      icon: 'Users'
    },
    {
      num: '04',
      title: 'HR & Payroll',
      desc: 'Automate salary calculations, track attendance, manage leave approvals, and give employees self-service access to their payslips.',
      icon: 'UserCheck'
    }
  ],
  coreModules: [
    {
      id: 'finance-accounting',
      name: 'Finance & Accounting',
      summary: 'Replace manual spreadsheets with automated bookkeeping, real-time financial reports, and built-in tax compliance tools.',
      bullets: [
        'Live general ledger and profit & loss statements',
        'Automated accounts receivable and payable',
        'Built-in tax compliance and audit-ready records',
        'Multi-currency billing and bank reconciliation'
      ]
    },
    {
      id: 'inventory-warehousing',
      name: 'Inventory & Warehousing',
      summary: 'Get accurate, real-time stock counts across all your locations — and stop losing money to stockouts and overstock.',
      bullets: [
        'Real-time stock visibility across multiple warehouses',
        'Barcode scanning for fast receiving and pick-pack-ship',
        'Automatic low-stock alerts and reorder triggers',
        'Batch tracking, serial numbers, and expiry date management'
      ]
    },
    {
      id: 'procurement-vendor',
      name: 'Procurement & Vendor Management',
      summary: 'Streamline buying, compare suppliers, and automatically match invoices to purchase orders — eliminating overpayments.',
      bullets: [
        'Automated purchase order creation and approval workflows',
        'Supplier performance tracking and cost comparison',
        'Automatic three-way invoice matching (PO, receipt, bill)',
        'Contract management and supplier payment reminders'
      ]
    },
    {
      id: 'sales-crm',
      name: 'Sales & CRM',
      summary: 'Convert more leads, manage customer relationships, and turn approved quotes into invoices with a single click.',
      bullets: [
        'Full customer pipeline and deal tracking',
        'One-click quote-to-order-to-invoice conversion',
        'Automated order processing and shipment notifications',
        'Customer purchase history and credit limit management'
      ]
    },
    {
      id: 'hr-payroll',
      name: 'HR & Payroll',
      summary: 'Manage your entire workforce — from onboarding to payroll — with accuracy, automation, and employee self-service.',
      bullets: [
        'Accurate attendance tracking and shift management',
        'Leave requests, approvals, and holiday calendars',
        'Automated payroll calculation and tax deductions',
        'Employee self-service portal for payslips and documents'
      ]
    }
  ],
    modules: [
    {
      id: 'auth',
      name: 'User Management & Auth',
      category: 'Security',
      desc: '',
      bullets: [
        'Branch-level data access isolation',
        'Action-level role & approval matrices',
        '1-Click user deactivation & audit trail'
      ],
      badges: ['ZERO-TRUST RBAC', '100% AUDIT LOGGED'],
      icon: 'ShieldCheck'
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      category: 'Supply Chain',
      desc: '',
      bullets: [
        'Multi-warehouse & bin-level stock allocation',
        'Batch-level expiry & quarantine status',
        'Statutory GST UQC multi-unit conversions'
      ],
      badges: ['100% REAL-TIME SYNC', 'FIFO / LIFO VALUATION'],
      icon: 'Layers'
    },
    {
      id: 'sales',
      name: 'Sales & Invoicing',
      category: 'Revenue',
      desc: '',
      bullets: [
        '1-Click quotation-to-order conversion',
        'Automated credit limit validation & block',
        'Real-time tax & GST calculation engine'
      ],
      badges: ['AUTOMATED TAX ENGINE', 'SHARED LEDGER'],
      icon: 'TrendingUp'
    },
    {
      id: 'purchasing',
      name: 'Purchasing & Procurement',
      category: 'Procurement',
      desc: '',
      bullets: [
        'Multi-tier PO approval rules & limits',
        '3-Way matching (PO vs GRN vs Invoice)',
        'Landed cost calculation & inward tracking'
      ],
      badges: ['3-WAY MATCHING', 'MULTI-LEVEL APPROVALS'],
      icon: 'ShoppingBag'
    },
    {
      id: 'pos',
      name: 'Point of Sale (POS)',
      category: 'Retail & Store',
      desc: '',
      bullets: [
        'Ultra-fast barcode scan & item lookup',
        'Split tender (Cash, Card, UPI, Credit)',
        'Live drawer reconciliation & shift closes'
      ],
      badges: ['OFFLINE RESILIENT', 'INSTANT TILL SYNC'],
      icon: 'ShoppingCart'
    },
    {
      id: 'crm',
      name: 'CRM & Customer 360',
      category: 'Customer',
      desc: '',
      bullets: [
        'Customer credit health & exposure tracking',
        'Multi-address routing (Billing / Shipping)',
        'Unified purchase & payment history logs'
      ],
      badges: ['CENTRALIZED DIRECTORY', '100% REAL-TIME SYNC'],
      icon: 'Users'
    },
    {
      id: 'gst-compliance',
      name: 'GST & Statutory Compliance',
      category: 'Compliance',
      desc: '',
      bullets: [
        'Built-in GST UQC & HSN statutory registry',
        'Instant e-Invoice (IRN) & e-Way bill readiness',
        'Error-free monthly GST return JSON/Excel export'
      ],
      badges: ['STATUTORY COMPLIANT', 'GSTR-1 / 3B READY'],
      icon: 'FileText'
    },
    {
      id: 'finance-accounts',
      name: 'Finance & Accounts',
      category: 'Ledger',
      desc: '',
      bullets: [
        'Real-time event-driven subledger postings',
        'Automated payment reconciliation & credit notes',
        'Multi-currency trial balance & P&L statements'
      ],
      badges: ['ACID COMPLIANT', 'REAL-TIME LEDGER'],
      icon: 'DollarSign'
    },
    {
      id: 'reports',
      name: 'Reports & Business Analytics',
      category: 'Intelligence',
      desc: '',
      bullets: [
        'Real-time sales, inventory & profit telemetry',
        'Ledger & stock aging drill-down views',
        '1-Click Excel, CSV & PDF export pipelines'
      ],
      badges: ['LIVE TELEMETRY', '1-CLICK EXPORTS'],
      icon: 'BarChart3'
    }
  ]
};
