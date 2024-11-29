import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import OrganizationOverviewPage from './pages/OrganizationOverviewPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WhyTeificPage from './pages/WhyTeificPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/whyteific" element={<WhyTeificPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/organization" element={<OrganizationOverviewPage />} />
    </Routes>
  );
}

export default App;
