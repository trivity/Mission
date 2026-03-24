import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VolleyballRates from './pages/VolleyballRates';
import BasketballRates from './pages/BasketballRates';
import BaseballRates from './pages/BaseballRates';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rates/volleyball" element={<VolleyballRates />} />
            <Route path="/rates/basketball" element={<BasketballRates />} />
            <Route path="/rates/baseball-softball" element={<BaseballRates />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
