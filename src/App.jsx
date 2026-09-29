import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ScrollProgressBar from './components/common/ScrollProgressBar/ScrollProgressBar';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import './App.css';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <ScrollProgressBar />
        <Header />
        
        <Routes>
          {/* Main Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* About Routes */}
          <Route path="/about" element={<PlaceholderPage title="About Astrion" section="About" />} />
          <Route path="/about/vision-mission" element={<PlaceholderPage title="Vision & Mission" section="About" />} />
          <Route path="/about/approach" element={<PlaceholderPage title="Our Approach" section="About" />} />
          <Route path="/about/leadership" element={<PlaceholderPage title="Leadership" section="About" />} />
          <Route path="/about/partners" element={<PlaceholderPage title="Strategic Partners" section="About" />} />

          {/* Solutions Routes */}
          <Route path="/solutions" element={<PlaceholderPage title="All Capabilities & Solutions" section="Solutions" />} />
          <Route path="/solutions/digital-transformation" element={<PlaceholderPage title="Enterprise Digital Transformation" section="Solutions" />} />
          <Route path="/solutions/ai-intelligent-automation" element={<PlaceholderPage title="AI & Intelligent Automation" section="Solutions" />} />
          <Route path="/solutions/software-development" element={<PlaceholderPage title="Enterprise Software Development" section="Solutions" />} />
          <Route path="/solutions/erp" element={<PlaceholderPage title="ERP Solutions" section="Solutions" />} />
          <Route path="/solutions/cybersecurity" element={<PlaceholderPage title="Cybersecurity & Zero-Trust" section="Solutions" />} />
          <Route path="/solutions/cloud-infrastructure" element={<PlaceholderPage title="Cloud & Infrastructure" section="Solutions" />} />
          <Route path="/solutions/data-business-intelligence" element={<PlaceholderPage title="Data & Business Intelligence" section="Solutions" />} />
          <Route path="/solutions/integration-api" element={<PlaceholderPage title="Integration & API Solutions" section="Solutions" />} />

          {/* XENedion ERP Platform Routes */}
          <Route path="/xenedion" element={<PlaceholderPage title="XENedion ERP Platform" section="XENedion ERP" />} />
          <Route path="/xenedion/modules" element={<PlaceholderPage title="XENedion Modules" section="XENedion ERP" />} />
          <Route path="/xenedion/industries" element={<PlaceholderPage title="XENedion Industry Blueprints" section="XENedion ERP" />} />
          <Route path="/xenedion/ai-automation" element={<PlaceholderPage title="XENedion AI & Automation" section="XENedion ERP" />} />
          <Route path="/xenedion/integrations" element={<PlaceholderPage title="XENedion Integrations & APIs" section="XENedion ERP" />} />
          <Route path="/xenedion/implementation" element={<PlaceholderPage title="XENedion Implementation Methodology" section="XENedion ERP" />} />
          <Route path="/xenedion/partner-program" element={<PlaceholderPage title="XENedion Partner Program" section="XENedion ERP" />} />

          {/* Industries Routes */}
          <Route path="/industries" element={<PlaceholderPage title="All Industries" section="Industries" />} />
          <Route path="/industries/manufacturing" element={<PlaceholderPage title="Manufacturing Solutions" section="Industries" />} />
          <Route path="/industries/distribution" element={<PlaceholderPage title="Distribution Solutions" section="Industries" />} />
          <Route path="/industries/retail" element={<PlaceholderPage title="Retail Solutions" section="Industries" />} />
          <Route path="/industries/logistics" element={<PlaceholderPage title="Logistics & Fleet Solutions" section="Industries" />} />
          <Route path="/industries/professional-services" element={<PlaceholderPage title="Professional Services Solutions" section="Industries" />} />
          <Route path="/industries/automotive" element={<PlaceholderPage title="Automotive Tier-1 Solutions" section="Industries" />} />
          <Route path="/industries/other" element={<PlaceholderPage title="Specialized Enterprise Industries" section="Industries" />} />

          {/* Insights Routes */}
          <Route path="/insights" element={<PlaceholderPage title="Insights & Research" section="Insights" />} />
          <Route path="/insights/blog" element={<PlaceholderPage title="Technical Journal & Blog" section="Insights" />} />
          <Route path="/insights/case-studies" element={<PlaceholderPage title="Transformation Case Studies" section="Insights" />} />
          <Route path="/insights/resources" element={<PlaceholderPage title="Architecture Resources & Whitepapers" section="Insights" />} />

          {/* Contact Route */}
          <Route path="/contact" element={<PlaceholderPage title="Contact & Strategic Briefings" section="Contact" />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" section="Legal" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" section="Legal" />} />
          <Route path="/security" element={<PlaceholderPage title="Security Governance" section="Legal" />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<PlaceholderPage title="Page Not Found" section="Astrion" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
