import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import BusinessImpactSection from './components/BusinessImpactSection';
import ServicesSection from './components/ServicesSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateAI from './components/GeneratAI';
import AIImplementationTimeline from './components/AIImplementationTimeline';
import CaseStudies from './components/CaseStudies';
import AllCaseStudies from './components/AllCaseStudies';
import YoutubeVideos from './components/YoutubeVideos';
import BlogSection from './components/BlogSection';
import AllBlogs from './components/AllBlogs';
import BlogDetails from './components/BlogDetails';
import Contact from './components/Contact';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

// Main page component
const MainPage = () => {
  const [activeSection, setActiveSection] = useState('main');
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    // Handle scroll-to-section when navigating back from case studies
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location.state]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'business', 'services', 'ai-plan', 'case-studies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
     
      <HeroSection />
      <BusinessImpactSection />
      <ServicesSection />
      <GenerateAI/>
      <AIImplementationTimeline/>
      <CaseStudies/>
      <YoutubeVideos/>
      <BlogSection/>
      
      <Contact/>
      <PricingSection/>

      <Footer/>

    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/all-case-studies" element={<AllCaseStudies />} />
      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
    </Routes>
  );
}

export default App;
