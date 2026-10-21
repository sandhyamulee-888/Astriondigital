import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Clock, 
  Tag, 
  ArrowUpRight, 
  BookOpen, 
  ChevronRight, 
  Layers, 
  Search,
  Code2,
  Cpu,
  ShieldCheck,
  Database
} from 'lucide-react';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

const BLOG_ARTICLES = [
  {
    id: 'strangler-fig-erp',
    category: 'ARCHITECTURAL PATTERN',
    title: 'De-risking Legacy Modernization: The Strangler Fig Pattern in Enterprise ERP',
    author: 'Chief Systems Architect',
    date: 'Enterprise Architecture Journal',
    readTime: '8 min read',
    tags: ['Legacy Modernization', 'ERP', 'Event-Driven', 'Microservices'],
    summary: 'Phasing out monolithic legacy ERP backbones without breaking mission-critical transactional integrity requires event-driven interception and incremental domain extraction.',
    keyTakeaways: [
      'Establishing an event-interception proxy layer ahead of legacy database tables',
      'Migrating individual business domains (e.g., Inventory, Procurement) to autonomous services',
      'Dual-writing transactional state with automated reconciliation queues',
      'Eliminating monolithic single points of failure without high-risk big-bang cutovers'
    ]
  },
  {
    id: 'agentic-ai-governance',
    category: 'AI & AUTOMATION',
    title: 'Productionizing Agentic AI: Moving From Uncontrolled Chatbots to Governed Workflows',
    author: 'Director of Applied Intelligence',
    date: 'Applied AI Technical Report',
    readTime: '11 min read',
    tags: ['Agentic AI', 'Deterministic Guardrails', 'State Machines', 'LLM Governance'],
    summary: 'Autonomous AI agents in enterprise systems must adhere to strict state machine constraints, deterministic validation layers, and role-based clearance boundaries.',
    keyTakeaways: [
      'Schema-enforced JSON validation for all model-driven function execution',
      'Human-in-the-loop escalation policies for transactions exceeding financial thresholds',
      'Cryptographic provenance logging for audit defense and regulatory compliance',
      'Benchmarking hallucination rates under high-stress operational edge cases'
    ]
  },
  {
    id: 'zero-trust-hybrid-cloud',
    category: 'SECURITY & INFRASTRUCTURE',
    title: 'The Multi-Tier Enterprise Security Blueprint: Zero-Trust Across Hybrid Infrastructure',
    author: 'Principal Security Officer',
    date: 'Cybersecurity Whitepaper',
    readTime: '10 min read',
    tags: ['Zero-Trust', 'mTLS', 'Workload Identity', 'Kubernetes'],
    summary: 'Deploying cryptographic SPIFFE/SPIRE workload identities and automated micro-segmentation across distributed on-premise data centers and multi-cloud Kubernetes clusters.',
    keyTakeaways: [
      'Mutual TLS (mTLS) enforcement across all inter-service RPC communications',
      'Ephemeral credential rotation reducing credential exposure windows to under 15 minutes',
      'Automated policy-as-code enforcement integrated into CI/CD deployment pipelines',
      'Unified SIEM telemetry correlation across heterogeneous cloud providers'
    ]
  },
  {
    id: 'real-time-data-mesh',
    category: 'DATA ARCHITECTURE',
    title: 'Building an Event-Driven Data Mesh for Real-Time Supply Chain Telemetry',
    author: 'Principal Data Engineer',
    date: 'Data Engineering Quarterly',
    readTime: '9 min read',
    tags: ['Data Mesh', 'Kafka', 'Apache Flink', 'Real-Time Telemetry'],
    summary: 'Decentralizing data ownership into domain-oriented data products with sub-second stream processing for global supply chain visibility.',
    keyTakeaways: [
      'Domain-driven schema ownership preventing centralized data warehouse bottlenecks',
      'Stream processing pipelines computing rolling metrics with sub-second latency',
      'Automated schema evolution governance with backward-compatibility guarantees',
      'Self-serve data infrastructure provisioning for analytical engineering teams'
    ]
  }
];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allTags = ['ALL', 'Legacy Modernization', 'Agentic AI', 'Zero-Trust', 'Data Mesh', 'ERP'];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesTag = selectedTag === 'ALL' || article.tags.includes(selectedTag);
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="inner-page blog-main-page">
      {/* Hero Section */}
      <section className="inner-hero-section">
        <div className="inner-hero-bg" aria-hidden="true">
          <img src="/solutions-bg.jpg" alt="" className="inner-hero-bg-img" />
          <div className="inner-hero-overlay"></div>
        </div>

        <div className="container inner-hero-container">
          <div className="inner-breadcrumb mono-tag">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-slash">/</span>
            <Link to="/insights">INSIGHTS</Link>
            <span className="breadcrumb-slash">/</span>
            <span className="breadcrumb-current">BLOG &amp; TECHNICAL JOURNAL</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // TECHNICAL JOURNAL &amp; ESSAYS
            </div>

            <h1 className="inner-hero-title">
              Technical commentary and architectural engineering essays.
            </h1>

            <p className="inner-hero-lead">
              Deep dives into distributed systems, event-driven integrations, deterministic AI orchestration, and enterprise cloud resilience written by our practicing engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="section">
        <div className="container">
          
          {/* Filter and Search Bar */}
          <div className="blog-filter-bar">
            <div className="blog-tags-nav">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-filter-btn mono-tag ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="blog-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </div>

          {/* Articles List */}
          <div className="blog-articles-list">
            {filteredArticles.map((art) => (
              <article key={art.id} className="blog-article-card">
                <div className="article-header">
                  <div className="article-meta-row">
                    <span className="mono-tag article-cat-tag">{art.category}</span>
                    <span className="mono-tag article-time">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                    <span className="mono-tag article-date">{art.date}</span>
                  </div>
                  <h2 className="article-title">{art.title}</h2>
                  <span className="article-author mono-tag">AUTHOR: {art.author}</span>
                </div>

                <p className="article-summary">{art.summary}</p>

                {/* Key Architectural Takeaways */}
                <div className="article-takeaways-box">
                  <span className="takeaways-label mono-tag">ARCHITECTURAL HIGHLIGHTS:</span>
                  <ul className="takeaways-list">
                    {art.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="takeaway-item">
                        <span className="takeaway-bullet mono-tag">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    {art.tags.map((t, idx) => (
                      <span key={idx} className="article-tag-pill mono-tag">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Button to="/contact" variant="secondary" size="sm" icon="arrow">
                    Discuss Architecture
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Strategic Consultation Banner */}
          <div className="commitment-card">
            <div className="commitment-header">
              <div className="mono-label">
                <ShieldCheck size={16} />
                <span>ARCHITECTURAL REVIEW</span>
              </div>
              <h3>Explore an architectural evaluation for your enterprise</h3>
            </div>
            <p className="commitment-text">
              Our principal engineers conduct deep-dive technical evaluations to review your current tech stack, identify operational bottlenecks, and design modern decoupled architectures.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Schedule Engineering Review
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
