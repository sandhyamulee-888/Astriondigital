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
        description: 'Manage your entire business from one integrated ERP platform with real-time operational visibility.',
        href: '/solutions/erp',
        ctaText: 'Explore',
        image: '/images/solutions/xenedion-erp-product-3d.webp'
      },
      columns: [
        {
          heading: 'Enterprise Solutions',
          items: [
            { 
              title: 'XENedion ERP', 
              href: '/solutions/erp', 
              desc: 'Centralize your business data into one source of truth.' 
            }
          ]
        },
        {
          heading: 'Cloud, Data & Security',
          items: [
            { 
              title: 'Enterprise Digital Transformation', 
              href: '/solutions/digital-transformation', 
              desc: 'Modernize core business operations and bring processes together in one connected platform.' 
            },
            { 
              title: 'AI & Intelligent Automation', 
              href: '/solutions/ai-intelligent-automation', 
              desc: 'Automate repetitive tasks, business workflows, and approval processes.' 
            },
            { 
              title: 'Cloud & Infrastructure', 
              href: '/solutions/cloud-infrastructure', 
              desc: 'Run enterprise applications on reliable, scalable, high-performance cloud infrastructure.' 
            },
            { 
              title: 'Data & Business Intelligence', 
              href: '/solutions/data-business-intelligence', 
              desc: 'Turn business data into real-time insights with dashboards, analytics, and reporting.' 
            }
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
            { title: 'Retail', href: '/industries/retail', desc: 'Unified in-store, warehouse, and online inventory.' },
            { title: 'Distribution', href: '/industries/distribution', desc: 'Multi-warehouse visibility and faster order fulfillment.' }
          ]
        },
        {
          heading: 'Supply Chain & Services',
          items: [
            { title: 'Logistics', href: '/industries/logistics', desc: 'Fleet route optimization and live freight tracking.' },
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
