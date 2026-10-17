/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { LegalCenter } from './pages/LegalCenter';
import { PolicyPage } from './pages/PolicyPage';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060b1a] text-white selection:bg-[#2dd4bf]/30 selection:text-white font-sans overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/legal" element={<LegalCenter />} />
          <Route path="/legal/:id" element={<PolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


