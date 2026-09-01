import React from 'react';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ProductId } from '../types';
import Logo from './Logo';

interface FooterProps {
  currentView: 'home' | 'careers';
  setView: (view: 'home' | 'careers') => void;
  onProductSelect: (id: ProductId) => void;
}

export default function Footer({ currentView, setView, onProductSelect }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleProductClick = (id: ProductId) => {
    onProductSelect(id);
    
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById('products');
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
      }, 150);
    } else {
      const element = document.getElementById('products');
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
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
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
    }
  };

  const handleCareersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('careers');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-20 pb-12" id="footer-section">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Logo & Description Column (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Logo size="md" className="text-white border-white bg-zinc-950" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white leading-none tracking-tight">
                  doctype innovations
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mt-0.5 leading-none">
                  tech agency
                </span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm">
              We design and engineer compliance-certified enterprise software, pixel-perfect dynamic web experiences, and seamless corporate solutions built to excel in audit environments.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-white hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-all duration-300"
                aria-label="Doctype Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-white hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-all duration-300"
                aria-label="Doctype GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-white hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-all duration-300"
                aria-label="Doctype LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Software Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleProductClick('website-development')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleProductClick('hr-payroll-software')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  HR &amp; Payroll Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleProductClick('ird-billing-software')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  IRD Billing Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleProductClick('mobile-app-development')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleProductClick('business-email-services')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Business Email Services
                </button>
              </li>
            </ul>
          </div>

          {/* Quick links FAQ Column (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleScrollToSection('about')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleCareersClick(e)}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('faq')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('contact')}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                <span>Bakhundole, Lalitpur,<br />Kathmandu 44600, Nepal</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <a href="mailto:info@doctype.agency" className="hover:text-white transition-colors">
                  info@doctype.agency
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <a href="tel:+977014445555" className="hover:text-white transition-colors">
                  +977 1 444 5555
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono">
          <div>
            <span>© {currentYear} Doctype Innovations Pvt. Ltd. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }} className="hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
