import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import OrganizationOverviewPage from './pages/OrganizationOverviewPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WhyTeificPage from './pages/WhyTeificPage';
import ContactPage from './pages/ContactPage';
import Terms from './components/Terms/Terms';
import Privacy from './components/Terms/Privacy';
import Refund from './components/Terms/Refund';
import Acknowledgments from './components/Terms/Acknowledgments.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/whyteific" element={<WhyTeificPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/organization" element={<OrganizationOverviewPage />} />
      <Route path="/terms-and-conditions" element={<Terms/>} />
      <Route path="/privacy-policy" element={<Privacy/>} />
      <Route path="/refund-policy" element={<Refund/>} />
      <Route path="/acknowledgments" element={<Acknowledgments/>} />
    </Routes>
  );
}

export default App;
