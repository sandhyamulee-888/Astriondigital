export const SOLUTION_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'ai-automation', label: 'Intelligent AI & Automation' },
  { id: 'platforms-erp', label: 'Enterprise Platforms & ERP' },
  { id: 'cloud-cyber', label: 'Cloud & Cybersecurity' },
  { id: 'data-integration', label: 'Data & API Integration' }
];

export const SOLUTIONS = [
  {
    id: 'digital-transformation',
    num: '01',
    category: 'platforms-erp',
    categoryLabel: 'Transformation',
    title: 'Enterprise Digital Transformation',
    tagline: 'Strategy → Transformation',
    shortDesc: 'Re-engineering legacy operating models into agile, cloud-native enterprise ecosystems that accelerate time-to-market.',
    overview: 'Astrion partners with enterprise leadership to align technology roadmaps with core business outcomes. We decompose brittle legacy processes, establishing modern digital foundations built on event-driven architectures and real-time operational feedback loops.',
    services: [
      'Legacy Modernization & Core Decoupling',
      'Digital Operating Model Blueprinting',
      'Enterprise Agile & Value Stream Mapping',
      'Continuous Change Governance'
    ],
    architecture: 'Modular micro-services with unified API gateways and distributed event streaming.',
    metrics: '40% Faster Release Velocity'
  },
  {
    id: 'ai-intelligent-automation',
    num: '02',
    category: 'ai-automation',
    categoryLabel: 'Artificial Intelligence',
    title: 'AI & Intelligent Automation',
    tagline: 'Intelligence → Action',
    shortDesc: 'Embedding generative, predictive and agentic AI models directly into operational workflows for autonomous decision execution.',
    overview: 'Moving beyond isolated prototypes, Astrion deploys production-grade AI systems with strict data provenance, low-latency inferencing, and deterministic enterprise guardrails directly within core operational applications.',
    services: [
      'Agentic Process Automation & Workflow Bots',
      'Private Enterprise LLMs & Domain RAG',
      'Predictive Maintenance & Asset Optimization',
      'Automated Quality Inspection & Computer Vision'
    ],
    architecture: 'RAG pipelines, vector stores, real-time inference clusters, and policy enforcement engines.',
    metrics: '65% Automation of Repetitive Tasks'
  },
  {
    id: 'software-development',
    num: '03',
    category: 'platforms-erp',
    categoryLabel: 'Custom Platforms',
    title: 'Enterprise Software Development',
    tagline: 'Ideas → Platforms',
    shortDesc: 'Engineering bespoke, mission-critical platforms designed for high transaction volume, zero downtime, and regulatory compliance.',
    overview: 'We architect and build tailored enterprise platforms that solve complex operational challenges that off-the-shelf software cannot address. Built with clean domain-driven design and resilient fault tolerance.',
    services: [
      'High-Throughput Transactional Core Systems',
      'Custom B2B Enterprise Portals & Dashboards',
      'Domain-Driven Microservices Architecture',
      'Mission-Critical Modernization & Migration'
    ],
    architecture: 'Cloud-native multi-tenant backends, resilient event loops, and strict ACID/distributed consistency.',
    metrics: '99.999% Platform Uptime'
  },
  {
    id: 'erp',
    num: '04',
    category: 'platforms-erp',
    categoryLabel: 'ERP & Operations',
    title: 'ERP Solutions & XENedion',
    tagline: 'Operations → Integration',
    shortDesc: 'Unifying fragmented financial, supply chain, production, and workforce systems into a single authoritative source of truth.',
    overview: 'Astrion provides comprehensive ERP consulting, modernization, and implementation services, including our proprietary flagship platform XENedion ERP, transforming siloed operations into fluid, synchronized execution.',
    services: [
      'Next-Gen ERP Implementation & Migration',
      'Multi-Entity Financial Consolidation',
      'Warehouse & Shop-Floor Execution Sync',
      'Supply Chain Traceability & Auditing'
    ],
    architecture: 'Relational data core with event-driven data distribution and low-latency transactional ledger.',
    metrics: '35% Inventory Holding Cost Reduction'
  },
  {
    id: 'cybersecurity',
    num: '05',
    category: 'cloud-cyber',
    categoryLabel: 'Zero-Trust Security',
    title: 'Cybersecurity & Governance',
    tagline: 'Risk → Resilience',
    shortDesc: 'Enforcing proactive Zero-Trust security postures across hybrid cloud estates, critical endpoints, and digital identities.',
    overview: 'Security engineered as foundational code rather than an afterthought. We implement continuous posture monitoring, automated compliance enforcement, identity federation, and threat telemetry across all enterprise tiers.',
    services: [
      'Zero-Trust Architecture & Identity Federation',
      'Cloud Security Posture Management (CSPM)',
      'Threat Modeling & DevSecOps Automated Gates',
      'Cryptographic Controls & Audit Provenance'
    ],
    architecture: 'Mutual TLS, least-privilege RBAC/ABAC, cryptographically signed audit logs, and SIEM integration.',
    metrics: '100% Zero-Trust Compliance Audit Score'
  },
  {
    id: 'cloud-infrastructure',
    num: '06',
    category: 'cloud-cyber',
    categoryLabel: 'Cloud Engineering',
    title: 'Cloud & Infrastructure',
    tagline: 'Infrastructure → Scale',
    shortDesc: 'Designing high-availability multi-cloud foundations with automated Infrastructure as Code and elastic resource orchestration.',
    overview: 'We engineer robust, sovereign cloud infrastructures across AWS, Azure, and private data centers. Our solutions optimize compute efficiency, ensure disaster resilience, and provide automated failover for continuous operations.',
    services: [
      'Multi-Cloud & Hybrid Cloud Engineering',
      'Kubernetes & Container Orchestration',
      'Infrastructure as Code (IaC) & GitOps',
      'FinOps & Compute Workload Optimization'
    ],
    architecture: 'Multi-region mesh, declarative Terraform/OpenTofu configurations, and automated self-healing clusters.',
    metrics: '30% Cloud OpEx Cost Reduction'
  },
  {
    id: 'data-business-intelligence',
    num: '07',
    category: 'data-integration',
    categoryLabel: 'Data & Analytics',
    title: 'Data & Business Intelligence',
    tagline: 'Data → Decisions',
    shortDesc: 'Constructing modern data mesh and lakehouse foundations that convert raw operational telemetry into strategic board-level insight.',
    overview: 'Astrion dissolves data silos by establishing unified governance, real-time ETL/ELT pipelines, and semantic data layers. We enable self-serve business intelligence and automated regulatory reporting across all subsidiaries.',
    services: [
      'Lakehouse & Data Warehouse Modernization',
      'Real-Time Streaming Pipelines (Kafka / Flink)',
      'Executive Dashboards & Semantic Metrics',
      'Data Governance, Lineage & Quality Guardrails'
    ],
    architecture: 'Delta Lake / Iceberg storage layers, streaming ingestion pipelines, and enterprise metric catalogs.',
    metrics: '< 1s Real-Time Analytics Latency'
  },
  {
    id: 'integration-api',
    num: '08',
    category: 'data-integration',
    categoryLabel: 'API & Mesh',
    title: 'Integration & API Solutions',
    tagline: 'Systems → Connectivity',
    shortDesc: 'Connecting distributed enterprise systems, third-party clouds, and legacy mainframes with resilient, governed API fabrics.',
    overview: 'Enterprises thrive on interconnected systems. We build high-throughput API gateways, asynchronous message queues, and enterprise service buses that ensure instantaneous data consistency across geographically dispersed operations.',
    services: [
      'Enterprise Service Mesh & API Management',
      'Event-Driven Architecture (EDA) & Webhooks',
      'B2B EDI & Supply Chain Data Bridges',
      'Legacy Mainframe Connector Integration'
    ],
    architecture: 'Asynchronous event brokers, API gateway rate-limiting, schema registries, and circuit-breaker patterns.',
    metrics: '50M+ Daily API Transactions'
  }
];

export const SOLUTIONS_DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Production-Grade AI Guardrails',
    desc: 'Deterministic outputs with strict schema validation, provenance tracking, and zero public data retention.'
  },
  {
    num: '02',
    title: 'Zero Vendor Lock-In',
    desc: 'Open-standard microservices, portable Kubernetes deployments, and sovereign multi-cloud architectures.'
  },
  {
    num: '03',
    title: 'Deterministic Security by Design',
    desc: 'Mutual TLS, least-privilege RBAC/ABAC access control, and continuous CSPM compliance enforcement.'
  },
  {
    num: '04',
    title: 'Unified Operational Core',
    desc: 'Deep bi-directional synchronization with ERP ledgers, warehouse systems, and real-time streaming buses.'
  }
];
