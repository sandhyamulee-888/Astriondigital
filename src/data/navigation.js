export const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    megaMenu: {
      tag: 'ASTRION DIGITAL // CORPORATE ENTITY',
      headline: 'The Company Behind Intelligent Enterprise Software.',
      featured: {
        title: 'About Astrion Digital',
        description: 'An enterprise software company developing technology products that help businesses operate more efficiently, intelligently, and effectively.',
        href: '/about'
      },
      columns: [
        {
          heading: 'Company & Vision',
          items: [
            { title: 'About Astrion', href: '/about', desc: 'The enterprise software company behind intelligent business technology.' },
            { title: 'Vision & Mission', href: '/about/vision-mission', desc: 'The corporate foundation and long-term vision powering modern software.' },
            { title: 'Our Approach', href: '/about/approach', desc: 'Product ownership, continuous innovation, and enduring governance.' }
          ]
        },
        {
          heading: 'Leadership & Partners',
          items: [
            { title: 'Leadership', href: '/about/leadership', desc: 'Experienced software architects and operational leaders.' },
            { title: 'Partners', href: '/about/partners', desc: 'Global cloud infrastructure and certified delivery partners.' }
          ]
        }
      ]
    }
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    megaMenu: {
      tag: 'SOLUTIONS // PLATFORM CAPABILITIES',
      headline: 'Enterprise software capabilities engineered for modern operational growth.',
      featured: {
        title: 'Enterprise Digital Transformation',
        description: 'Modernize core business operations and eliminate spreadsheets without disruption.',
        href: '/solutions/digital-transformation'
      },
      columns: [
        {
          heading: 'Core Transformation & Platforms',
          items: [
            { title: 'Enterprise Digital Transformation', href: '/solutions/digital-transformation', desc: 'Modernize core operations without business disruption.' },
            { title: 'AI & Intelligent Automation', href: '/solutions/ai-intelligent-automation', desc: 'Put everyday routine tasks and approvals on autopilot.' },
            { title: 'Enterprise Software Development', href: '/solutions/software-development', desc: 'Custom software architectures built for high transaction scale.' },
            { title: 'ERP Solutions', href: '/solutions/erp', desc: 'Centralize your business data into one source of truth.' }
          ]
        },
        {
          heading: 'Cloud, Data & Security',
          items: [
            { title: 'Cybersecurity', href: '/solutions/cybersecurity', desc: 'Enterprise-grade protection for your sensitive business records.' },
            { title: 'Cloud & Infrastructure', href: '/solutions/cloud-infrastructure', desc: 'High-uptime cloud performance with speed and zero compromises.' },
            { title: 'Data & Business Intelligence', href: '/solutions/data-business-intelligence', desc: 'Real-time dashboards for faster, better business decisions.' },
            { title: 'Integration & API Solutions', href: '/solutions/integration-api', desc: 'Connect your existing software applications effortlessly.' }
          ]
        }
      ]
    }
  },
  {
    id: 'xenedion',
    label: 'XENedion ERP',
    href: '/xenedion',
    badge: 'Platform',
    megaMenu: {
      tag: 'XENEDION ERP // FLAGSHIP PRODUCT',
      headline: 'One Platform. Your Entire Business.',
      featured: {
        title: 'Platform Overview',
        description: 'Unite your finance, operations, supply chain, and human resources in one intuitive workspace.',
        href: '/xenedion'
      },
      columns: [
        {
          heading: 'Core Platform',
          items: [
            { title: 'Overview', href: '/xenedion', desc: 'Centralize your entire company in one intuitive workspace.' },
            { title: 'Modules', href: '/xenedion/modules', desc: 'Finance, inventory, sales, purchasing, HR, and warehousing.' },
            { title: 'Industries', href: '/xenedion/industries', desc: 'Ready-to-use workflows configured specifically for your vertical.' },
            { title: 'AI & Automation', href: '/xenedion/ai-automation', desc: 'Smart forecasting, duplicate bill detection, and automated alerts.' }
          ]
        },
        {
          heading: 'Deployment & Ecosystem',
          items: [
            { title: 'Integrations', href: '/xenedion/integrations', desc: 'Sync your banking, eCommerce, and logistics tools effortlessly.' },
            { title: 'Implementation', href: '/xenedion/implementation', desc: 'Smooth onboarding, guided data migration, and team training.' },
            { title: 'Partner Program', href: '/xenedion/partner-program', desc: 'Build and grow your consulting agency by implementing XENedion.' }
          ]
        }
      ]
    }
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries',
    megaMenu: {
      tag: 'INDUSTRIES // BUILT FOR YOUR SECTOR',
      headline: 'Pre-configured workflows tailored to how your industry actually works.',
      featured: {
        title: 'Manufacturing Blueprint',
        description: 'Connected shop floors, live Bills of Materials, and real-time scrap tracking.',
        href: '/industries/manufacturing'
      },
      columns: [
        {
          heading: 'Production & Trade',
          items: [
            { title: 'Manufacturing', href: '/industries/manufacturing', desc: 'Connected shop floors and automated Bill of Materials.' },
            { title: 'Distribution', href: '/industries/distribution', desc: 'Multi-warehouse visibility and faster order fulfillment.' },
            { title: 'Retail', href: '/industries/retail', desc: 'Unified in-store, warehouse, and online inventory.' }
          ]
        },
        {
          heading: 'Supply Chain & Services',
          items: [
            { title: 'Logistics', href: '/industries/logistics', desc: 'Fleet route optimization and live freight tracking.' },
            { title: 'Professional Services', href: '/industries/professional-services', desc: 'Real-time project billing and resource allocation.' },
            { title: 'Automotive', href: '/industries/automotive', desc: 'Parts traceability and dealer supply chain integration.' },
            { title: 'Other Industries', href: '/industries/other', desc: 'Custom-fit operational platforms for specialized business domains.' }
          ]
        }
      ]
    }
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '/insights',
    megaMenu: {
      tag: 'INSIGHTS // PRACTICAL PERSPECTIVES',
      headline: 'Practical perspectives on modernizing business operations and ERP best practices.',
      featured: {
        title: 'Customer Success Stories',
        description: 'Real stories of companies cutting admin time, stopping inventory leaks, and scaling fast.',
        href: '/insights/case-studies'
      },
      columns: [
        {
          heading: 'Publications & Case Studies',
          items: [
            { title: 'Blog', href: '/insights/blog', desc: 'Practical guides on modernizing operations and supply chains.' },
            { title: 'Case Studies', href: '/insights/case-studies', desc: 'Real stories of companies cutting admin time and overhead.' },
            { title: 'Resources', href: '/insights/resources', desc: 'Downloadable implementation checklists and ROI calculators.' }
          ]
        }
      ]
    }
  }
];
