import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <About />
        <Activities />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;