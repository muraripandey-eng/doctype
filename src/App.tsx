import { useState } from 'react';
import { ProductId } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CareersPage from './components/CareersPage';
import FaqSection from './components/FaqSection';

export default function App() {
  const [activeProductId, setActiveProductId] = useState<ProductId>('website-development');
  const [view, setView] = useState<'home' | 'careers'>('home');
  const [preselectedProduct, setPreselectedProduct] = useState('');

  const handleConsult = (productTitle: string) => {
    setPreselectedProduct(productTitle);
    
    // Scroll smoothly to contact form
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExploreClick = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    setPreselectedProduct('General Inquiry');
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans" id="doctype-app-root">
      {/* Dynamic Navigation Bar */}
      <Navbar 
        activeProductId={activeProductId} 
        setActiveProductId={setActiveProductId} 
        currentView={view}
        setView={setView}
      />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {view === 'home' ? (
          <>
            {/* Hero Banner Section */}
            <Hero 
              onExplore={handleExploreClick} 
              onContact={handleContactClick} 
            />

            {/* Corporate About Us Section */}
            <About setView={setView} />

            {/* Dynamic Product Details Showcase */}
            <Products 
              activeProductId={activeProductId} 
              setActiveProductId={setActiveProductId} 
              onConsult={handleConsult} 
            />

            {/* In-page FAQ Section (Placed right before Contact) */}
            <FaqSection />

            {/* Customized Inquiry / Contact Section */}
            <Contact preselectedProduct={preselectedProduct} />
          </>
        ) : (
          /* Full Page Careers Component */
          <CareersPage onBackToHome={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
        )}
      </main>

      {/* Website Footer & Contacts Panel */}
      <Footer 
        currentView={view}
        setView={setView}
        onProductSelect={(id) => setActiveProductId(id)}
      />
    </div>
  );
}
