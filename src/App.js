import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProcessSummary from './components/ProcessSummary';
import Prototype from './components/Prototype';
import Reflection from './components/Reflection';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';

function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <SectionWrapper id="introduction">
        <Introduction />
      </SectionWrapper>
      <SectionWrapper id="process">
        <ProcessSummary />
      </SectionWrapper>
      <SectionWrapper id="prototype">
        <Prototype />
      </SectionWrapper>
      <SectionWrapper id="reflection">
        <Reflection />
      </SectionWrapper>
      <SectionWrapper id="conclusion">
        <Conclusion />
      </SectionWrapper>
      <Footer />
    </div>
  );
}

export default App;
