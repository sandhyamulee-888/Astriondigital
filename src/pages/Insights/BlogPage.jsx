import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { BLOGS_DATA } from '../../data/insights';
import Button from '../../components/common/Button/Button';
import './InsightsPage.css';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allCategories = ['ALL', ...BLOGS_DATA.categories];

  const filteredArticles = BLOGS_DATA.initialTopics.filter((article) => {
    const matchesCategory = selectedCategory === 'ALL' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
            <span className="breadcrumb-current">BLOGS</span>
          </div>

          <div className="inner-hero-content">
            <div className="mono-label inner-hero-badge">
              <span className="badge-dot"></span>
              INSIGHTS // PRACTICAL BUSINESS KNOWLEDGE
            </div>

            <h1 className="inner-hero-title">
              {BLOGS_DATA.headline}
            </h1>

            <p className="inner-hero-lead">
              {BLOGS_DATA.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="section">
        <div className="container">
          
          {/* Upcoming Categories Strip */}
          <div style={{ marginBottom: '32px' }}>
            <span className="mono-tag" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '10px' }}>
              UPCOMING BLOG CATEGORIES:
            </span>
            <div className="blog-tags-nav" style={{ flexWrap: 'wrap', gap: '8px' }}>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  className={`tag-filter-btn mono-tag ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ fontSize: '0.8125rem', padding: '6px 14px' }}
                >
                  {cat === 'ALL' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="blog-filter-bar" style={{ marginBottom: '28px' }}>
            <span className="mono-tag" style={{ color: 'var(--text-tertiary)', fontWeight: 700 }}>
              INITIAL BLOG TOPICS: (COMING SOON)
            </span>
            <div className="blog-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search topics..."
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
                    <span className="mono-tag" style={{ color: 'var(--brand-orange)', fontWeight: 600 }}>
                      {art.status}
                    </span>
                  </div>
                  <h2 className="article-title">{art.title}</h2>
                </div>

                <p className="article-summary">{art.summary}</p>

                <div className="article-footer">
                  <span className="mono-tag" style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>
                    {art.readTime} • Practical Guide
                  </span>

                  <Button to="/contact" variant="secondary" size="sm" icon="arrow">
                    Request Topic Early Access
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
                <span>EXPERT GUIDANCE</span>
              </div>
              <h3>Have a specific business challenge or ERP question?</h3>
            </div>
            <p className="commitment-text">
              Our team shares practical guidance on enterprise resource planning, workflow integration, and digital transformation tailored to your industry.
            </p>
            <div className="commitment-actions">
              <Button to="/contact" variant="primary" size="md" icon="arrow">
                Talk to Our Specialists
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
