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
      headline: 'The Company Behind Intelligent Enterprise Software',
      featured: {
        title: 'About Astrion Digital',
        description: 'An enterprise software company developing technology products that help businesses operate more efficiently, intelligently, and effectively.',
        href: '/about'
      },
      columns: [
        {
          heading: 'Company & Vision',
          items: [
            { 
              title: 'About Astrion', 
              href: '/about#about-astrion',
              desc: 'Our enterprise heritage, mission, and foundational journey.'
            },
            { 
              title: 'Vision & Mission', 
              href: '/about#vision-mission',
              desc: 'Core principles powering intelligent digital operations.'
            },
            { 
              title: 'Our Approach', 
              href: '/about#approach',
              desc: 'How we engineer, deploy, and scale enterprise solutions.'
            }
          ]
        },
        {
          heading: 'Leadership',
          items: [
            { 
              title: 'Leadership', 
              href: '/about#leadership',
              desc: 'Executive team driving innovation and delivery excellence.'
            }
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
      headline: 'Enterprise software capabilities engineered for modern operational growth',
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
              desc: 'One Platform. Every Business Function. Complete Control.',
              badge: 'ERP'
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
      tag: 'INDUSTRIES // OPERATIONAL MANAGEMENT',
      headline: 'Technology That Understands Your Industry',
      featured: {
        title: 'Industry Solutions',
        description: 'Every industry has its own operating environment, business processes and challenges. Astrion Digital focuses on delivering integrated business management solutions.',
        href: '/industries'
      },
      columns: [
        {
          heading: 'Core Sectors',
          items: [
            { title: 'Retail', href: '/industries/retail', desc: 'Manage retail operations with greater control and visibility.' },
            { title: 'Distribution', href: '/industries/distribution', desc: 'Connect your distribution operations.' },
            { title: 'Manufacturing', href: '/industries/manufacturing', desc: 'Bring greater structure to manufacturing operations.' }
          ]
        },
        {
          heading: 'Specialized Sectors',
          items: [
            { title: 'Garments', href: '/industries/garments', desc: 'Manage your garment business from procurement to delivery.' },
            { title: 'Automotive', href: '/industries/automotive', desc: 'Drive efficiency across automotive business operations.' },
            { title: 'Other Industries', href: '/industries/other', desc: 'Integrated business management solutions for diverse sectors.' }
          ]
        }
      ]
    }
  },
  {
    id: 'partners',
    label: 'Partners',
    href: '/partners',
    megaMenu: {
      tag: 'PARTNERS // BUSINESS OPPORTUNITIES',
      headline: 'Build Business Opportunities. Grow With Astrion Digital.',
      featured: {
        title: 'ERP Partner Program',
        description: 'A Partnership That Creates Opportunities. Partner with Astrion Digital to take XENedion ERP to businesses looking to improve operational efficiency.',
        href: '/partners',
        ctaText: 'Become a Partner'
      },
      columns: [
        {
          heading: 'Partner Program & Allies',
          items: [
            { 
              title: 'ERP Partner Program', 
              href: '/partners', 
              desc: 'Product enablement, sales support, and implementation collaboration.' 
            },
            { 
              title: 'Become a Partner', 
              href: '/contact', 
              desc: 'Express your interest in joining our growing partner network.' 
            }
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
      tag: 'INSIGHTS // PRACTICAL KNOWLEDGE',
      headline: 'Knowledge That Helps Businesses Move Forward',
      featured: {
        title: 'Ideas. Perspectives. Practical Business Knowledge.',
        description: 'Explore articles and perspectives on the changing world of enterprise technology, ERP adoption, and business management.',
        href: '/insights/blog',
        ctaText: 'Explore Articles'
      },
      columns: [
        {
          heading: 'Knowledge & Guidance',
          items: [
            { title: 'Blog', href: '/insights/blog', desc: 'Ideas, perspectives, and practical business knowledge on enterprise technology.' },
            { title: 'Case Studies', href: '/insights/case-studies', desc: 'Real business challenges and practical technology solutions with measurable outcomes.' },
            { title: 'Resources', href: '/insights/resources', desc: 'Practical resources, buyer guides, and downloadable checklists for business leaders.' }
          ]
        }
      ]
    }
  }
];
