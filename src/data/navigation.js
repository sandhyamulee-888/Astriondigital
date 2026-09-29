export const NAV_ITEMS = [
  {
    id: 'about',
    label: 'About',
    href: '/about',
    megaMenu: {
      tag: '01 / COMPANY',
      headline: 'Architecting resilient enterprise futures through engineering excellence.',
      featured: {
        title: 'The Astrion Approach',
        description: 'How our proprietary transformation frameworks bridge executive strategy with scalable technical reality.',
        href: '/about/approach'
      },
      columns: [
        {
          heading: 'Organization',
          items: [
            { title: 'About Astrion', href: '/about', desc: 'Enterprise background, global footprint and technical mission.' },
            { title: 'Vision & Mission', href: '/about/vision-mission', desc: 'Guiding principles driving our enterprise solutions.' },
            { title: 'Our Approach', href: '/about/approach', desc: 'Four-phase transformation model from discovery to evolution.' }
          ]
        },
        {
          heading: 'People & Ecosystem',
          items: [
            { title: 'Leadership', href: '/about/leadership', desc: 'Executive technologists and industry domain specialists.' },
            { title: 'Partners', href: '/about/partners', desc: 'Global technology alliances and ecosystem integrations.' }
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
      tag: '02 / CAPABILITIES',
      headline: 'End-to-end technical capabilities engineered for complex enterprise domains.',
      featured: {
        title: 'Enterprise Architecture',
        description: 'Cohesive multi-tier systems integrating legacy backbones with modern cloud & AI workloads.',
        href: '/solutions/digital-transformation'
      },
      columns: [
        {
          heading: 'Modernization & Platforms',
          items: [
            { title: 'Enterprise Digital Transformation', href: '/solutions/digital-transformation', desc: 'Holistic operating model modernization.' },
            { title: 'Enterprise Software Development', href: '/solutions/software-development', desc: 'Mission-critical distributed systems.' },
            { title: 'ERP Solutions', href: '/solutions/erp', desc: 'Core operational system consolidation & workflows.' },
            { title: 'Integration & API Solutions', href: '/solutions/integration-api', desc: 'High-throughput enterprise event buses & mesh.' }
          ]
        },
        {
          heading: 'Intelligence & Infrastructure',
          items: [
            { title: 'AI & Intelligent Automation', href: '/solutions/ai-intelligent-automation', desc: 'Agentic workflows, private models & automated ops.' },
            { title: 'Data & Business Intelligence', href: '/solutions/data-business-intelligence', desc: 'Unified lakehouse architectures & telemetry.' },
            { title: 'Cloud & Infrastructure', href: '/solutions/cloud-infrastructure', desc: 'Hybrid-cloud orchestration & DevOps automation.' },
            { title: 'Cybersecurity', href: '/solutions/cybersecurity', desc: 'Zero-trust architecture & enterprise governance.' }
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
      tag: '03 / FLAGSHIP PLATFORM',
      headline: 'XENedion: The next-generation connected enterprise resource platform.',
      featured: {
        title: 'Platform Architecture',
        description: 'Modular core unifying inventory, finance, shop-floor execution, and autonomous supply chains.',
        href: '/xenedion/modules'
      },
      columns: [
        {
          heading: 'Core Platform',
          items: [
            { title: 'Overview', href: '/xenedion', desc: 'Unified architecture for resilient operations.' },
            { title: 'Modules', href: '/xenedion/modules', desc: '11 integrated enterprise operational modules.' },
            { title: 'AI & Automation', href: '/xenedion/ai-automation', desc: 'Embedded predictive intelligence & workflow bots.' }
          ]
        },
        {
          heading: 'Adoption & Delivery',
          items: [
            { title: 'Industries', href: '/xenedion/industries', desc: 'Pre-configured domain templates for manufacturing & trade.' },
            { title: 'Integrations', href: '/xenedion/integrations', desc: 'Real-time bridges to legacy systems and cloud APIs.' },
            { title: 'Implementation', href: '/xenedion/implementation', desc: 'Structured rollout methodology and risk controls.' },
            { title: 'Partner Program', href: '/xenedion/partner-program', desc: 'Value-added reseller and certified delivery network.' }
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
      tag: '04 / VERTICALS',
      headline: 'Deep sector specialization engineered around operational realities.',
      featured: {
        title: 'Sector Blueprint',
        description: 'Industry-specific operational ontologies, compliance guardrails, and pre-built integrations.',
        href: '/industries/manufacturing'
      },
      columns: [
        {
          heading: 'Industrial & Supply Chain',
          items: [
            { title: 'Manufacturing', href: '/industries/manufacturing', desc: 'Smart factory, MES integration and quality tracking.' },
            { title: 'Distribution', href: '/industries/distribution', desc: 'Omni-channel order routing and fulfillment logistics.' },
            { title: 'Logistics', href: '/industries/logistics', desc: 'Fleet visibility, freight tracking and automated dispatch.' },
            { title: 'Automotive', href: '/industries/automotive', desc: 'Tier-1 supply sync, BOM complexity and traceability.' }
          ]
        },
        {
          heading: 'Services & Commerce',
          items: [
            { title: 'Retail', href: '/industries/retail', desc: 'Unified inventory, POS integration and predictive demand.' },
            { title: 'Professional Services', href: '/industries/professional-services', desc: 'Resource utilization, milestone billing and compliance.' },
            { title: 'Other Industries', href: '/industries/other', desc: 'Tailored platforms for specialized business domains.' }
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
      tag: '05 / KNOWLEDGE',
      headline: 'Technical perspectives, architecture breakdowns, and enterprise briefings.',
      featured: {
        title: 'Enterprise Architecture Journal',
        description: 'Practical engineering guides for migrating monolithic ERPs to event-driven services.',
        href: '/insights/blog'
      },
      columns: [
        {
          heading: 'Publications',
          items: [
            { title: 'Blog & Editorial', href: '/insights/blog', desc: 'Deep-dive technology commentary and architectural essays.' },
            { title: 'Case Studies', href: '/insights/case-studies', desc: 'Architectural walkthroughs of complex enterprise transformations.' },
            { title: 'Technical Resources', href: '/insights/resources', desc: 'Whitepapers, reference architectures and maturity benchmarks.' }
          ]
        }
      ]
    }
  }
];
