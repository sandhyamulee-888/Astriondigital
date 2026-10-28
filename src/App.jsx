import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ScrollProgressBar from './components/common/ScrollProgressBar/ScrollProgressBar';

// 1. Home
import HomePage from './pages/Home/HomePage';

// 2. About
import AboutPage from './pages/About/AboutPage';
import VisionMissionPage from './pages/About/VisionMissionPage';
import ApproachPage from './pages/About/ApproachPage';
import LeadershipPage from './pages/About/LeadershipPage';
import PartnersPage from './pages/About/PartnersPage';

// 3. Solutions
import SolutionsPage from './pages/Solutions/SolutionsPage';
import SolutionDetailPage from './pages/Solutions/SolutionDetailPage';
import DigitalTransformationPage from './pages/Solutions/DigitalTransformationPage';
import AIIntelligentAutomationPage from './pages/Solutions/AIIntelligentAutomationPage';
import SoftwareDevelopmentPage from './pages/Solutions/SoftwareDevelopmentPage';
import ERPSolutionsPage from './pages/Solutions/ERPSolutionsPage';
import CybersecurityPage from './pages/Solutions/CybersecurityPage';
import CloudInfrastructurePage from './pages/Solutions/CloudInfrastructurePage';
import DataBIPage from './pages/Solutions/DataBIPage';
import IntegrationAPIPage from './pages/Solutions/IntegrationAPIPage';

// 4. XENedion ERP
import XenedionPage from './pages/Xenedion/XenedionPage';
import XenedionModulesPage from './pages/Xenedion/XenedionModulesPage';
import XenedionIndustriesPage from './pages/Xenedion/XenedionIndustriesPage';
import XenedionAIPage from './pages/Xenedion/XenedionAIPage';
import XenedionIntegrationsPage from './pages/Xenedion/XenedionIntegrationsPage';
import XenedionImplementationPage from './pages/Xenedion/XenedionImplementationPage';
import XenedionPartnerProgramPage from './pages/Xenedion/XenedionPartnerProgramPage';

// 5. Industries
import IndustriesPage from './pages/Industries/IndustriesPage';
import IndustryDetailPage from './pages/Industries/IndustryDetailPage';
import ManufacturingPage from './pages/Industries/ManufacturingPage';
import DistributionPage from './pages/Industries/DistributionPage';
import RetailPage from './pages/Industries/RetailPage';
import LogisticsPage from './pages/Industries/LogisticsPage';
import ProfessionalServicesPage from './pages/Industries/ProfessionalServicesPage';
import AutomotivePage from './pages/Industries/AutomotivePage';
import OtherIndustriesPage from './pages/Industries/OtherIndustriesPage';

// 6. Insights
import InsightsPage from './pages/Insights/InsightsPage';
import BlogPage from './pages/Insights/BlogPage';
import CaseStudiesPage from './pages/Insights/CaseStudiesPage';
import ResourcesPage from './pages/Insights/ResourcesPage';

// Contact & Strategic Briefings
import ContactPage from './pages/Contact/ContactPage';

// Legal & Governance
import LegalPage from './pages/Legal/LegalPage';

// Fallback
import PlaceholderPage from './pages/PlaceholderPage';

import './App.css';

// Scroll restoration & document title management
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname === '/') {
      document.title = 'Astrion Digital — The Company Behind Intelligent Enterprise Software';
    } else if (pathname.startsWith('/about')) {
      document.title = 'About Astrion Digital — Enterprise Software Products | Innovation | Business Technology';
    } else if (pathname.startsWith('/xenedion')) {
      document.title = 'XENedion ERP — One Platform. Your Entire Business. | Astrion Digital';
    } else if (pathname.startsWith('/solutions')) {
      document.title = 'Platform Capabilities & Architecture — Astrion Digital';
    } else if (pathname.startsWith('/industries')) {
      document.title = 'Industry Blueprints — Astrion Digital';
    } else if (pathname.startsWith('/insights')) {
      document.title = 'Insights & Publications — Astrion Digital';
    } else if (pathname.startsWith('/contact')) {
      document.title = 'Book a Live Demo — Astrion Digital';
    } else {
      document.title = 'Astrion Digital — The Company Behind Intelligent Enterprise Software';
    }
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
          {/* 1. Home */}
          <Route path="/" element={<HomePage />} />

          {/* 2. About Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/about-astrion" element={<AboutPage />} />
          <Route path="/about/vision-mission" element={<VisionMissionPage />} />
          <Route path="/about/approach" element={<ApproachPage />} />
          <Route path="/about/our-approach" element={<ApproachPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/partners" element={<PartnersPage />} />

          {/* 3. Solutions Routes */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/solutions/enterprise-digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/solutions/ai-intelligent-automation" element={<AIIntelligentAutomationPage />} />
          <Route path="/solutions/ai-automation" element={<AIIntelligentAutomationPage />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/solutions/enterprise-software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/solutions/erp" element={<ERPSolutionsPage />} />
          <Route path="/solutions/erp-solutions" element={<ERPSolutionsPage />} />
          <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/solutions/cloud-infrastructure" element={<CloudInfrastructurePage />} />
          <Route path="/solutions/data-business-intelligence" element={<DataBIPage />} />
          <Route path="/solutions/business-intelligence" element={<DataBIPage />} />
          <Route path="/solutions/integration-api" element={<IntegrationAPIPage />} />
          <Route path="/solutions/integration-api-solutions" element={<IntegrationAPIPage />} />
          <Route path="/solutions/:id" element={<SolutionDetailPage />} />

          {/* 4. XENedion ERP Platform Routes */}
          <Route path="/xenedion" element={<XenedionPage />} />
          <Route path="/xenedion/overview" element={<XenedionPage />} />
          <Route path="/xenedion-erp" element={<XenedionPage />} />
          <Route path="/xenedion/modules" element={<XenedionModulesPage />} />
          <Route path="/xenedion/industries" element={<XenedionIndustriesPage />} />
          <Route path="/xenedion/ai-automation" element={<XenedionAIPage />} />
          <Route path="/xenedion/integrations" element={<XenedionIntegrationsPage />} />
          <Route path="/xenedion/implementation" element={<XenedionImplementationPage />} />
          <Route path="/xenedion/partner-program" element={<XenedionPartnerProgramPage />} />

          {/* 5. Industries Routes */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/distribution" element={<DistributionPage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/logistics" element={<LogisticsPage />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
          <Route path="/industries/automotive" element={<AutomotivePage />} />
          <Route path="/industries/other" element={<OtherIndustriesPage />} />
          <Route path="/industries/other-industries" element={<OtherIndustriesPage />} />
          <Route path="/industries/:id" element={<IndustryDetailPage />} />

          {/* 6. Insights Routes */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/blog" element={<BlogPage />} />
          <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
          <Route path="/insights/resources" element={<ResourcesPage />} />

          {/* Contact Route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<LegalPage docType="privacy" />} />
          <Route path="/terms" element={<LegalPage docType="terms" />} />
          <Route path="/security" element={<LegalPage docType="security" />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<PlaceholderPage title="Page Not Found" section="Astrion" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
