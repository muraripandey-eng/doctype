import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Laptop, ShieldAlert, Cpu, Lock, FileSpreadsheet } from 'lucide-react';
import { ProductId } from '../types';
import { PRODUCTS } from '../data';
import Logo from './Logo';

interface NavbarProps {
  activeProductId: ProductId;
  setActiveProductId: (id: ProductId) => void;
  currentView: 'home' | 'careers';
  setView: (view: 'home' | 'careers') => void;
}

// Icon mapper for dropdown visual hints
const dropdownIconMap: Record<ProductId, React.ComponentType<{ className?: string }>> = {
  'website-development': Laptop,
  'hr-payroll-software': FileSpreadsheet,
  'ird-billing-software': ShieldAlert,
  'mobile-app-development': Cpu,
  'business-email-services': Lock,
};

export default function Navbar({ activeProductId, setActiveProductId, currentView, setView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Monitor scroll height to add borders/shadows to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    if (currentView !== 'home') {
      setView('home');
      // Wait for home view to mount so element is in DOM
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

  const handleProductSelect = (productId: ProductId) => {
    setActiveProductId(productId);
    setDropdownOpen(false);
    setIsOpen(false);
    
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        handleScrollToSection('products');
      }, 150);
    } else {
      setTimeout(() => {
        handleScrollToSection('products');
      }, 100);
    }
  };

  const handleNavigateToCareers = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setView('careers');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white border-b border-zinc-200 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('home');
          }}
          className="flex items-center gap-3 group focus:outline-none"
          id="navbar-brand-link"
        >
          <Logo className="text-zinc-950 transition-transform duration-300 group-hover:rotate-6" size="sm" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none tracking-tight text-zinc-950">
              doctype innovations
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mt-0.5 leading-none">
              tech agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }}
            className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-950'}`}
          >
            Home
          </a>
          <a 
            href="#about"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            About Us
          </a>

          {/* Products Dropdown Module */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors focus:outline-none"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Card */}
            {dropdownOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white border border-zinc-200 rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="px-4 py-1.5 border-b border-zinc-100 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    Our Software &amp; Solutions
                  </span>
                </div>
                {PRODUCTS.map((prod) => {
                  const IconComponent = dropdownIconMap[prod.id];
                  return (
                    <button
                      key={prod.id}
                      onClick={() => handleProductSelect(prod.id)}
                      className="w-full text-left px-4 py-2.5 hover:bg-zinc-50 flex items-start gap-3 group transition-colors focus:outline-none"
                    >
                      <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-950">
                          {prod.title}
                        </p>
                        <p className="text-xs text-zinc-500 truncate mt-0.5">
                          {prod.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <a 
            href="#faq"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('faq'); }}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            FAQs
          </a>

          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Contact
          </a>

          {/* Quick links shortcut to career */}
          <button
            onClick={handleNavigateToCareers}
            className={`text-sm font-medium transition-colors focus:outline-none ${currentView === 'careers' ? 'text-zinc-950 font-semibold' : 'text-zinc-500 hover:text-zinc-950'}`}
          >
            Careers
          </button>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleScrollToSection('contact')}
            className="text-xs font-mono font-bold tracking-wider uppercase border-2 border-zinc-900 text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white px-5 py-2.5 transition-all duration-300"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-800 hover:text-zinc-950 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (100% Solid opaque background & scrollable) */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[65px] bg-white z-50 md:hidden flex flex-col justify-between p-6 border-t border-zinc-200 overflow-y-auto shadow-2xl">
          <div className="space-y-6 pb-6">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => { setIsOpen(false); handleScrollToSection('home'); }}
                className="text-left text-xl font-serif font-bold text-zinc-950 border-b border-zinc-100 pb-3"
              >
                Home
              </button>
              <button
                onClick={() => { setIsOpen(false); handleScrollToSection('about'); }}
                className="text-left text-xl font-serif font-bold text-zinc-950 border-b border-zinc-100 pb-3"
              >
                About Us
              </button>
              
              {/* Expandable Mobile Submenu for Products */}
              <div className="border-b border-zinc-100 pb-3">
                <p className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                  Products &amp; Services
                </p>
                <div className="grid grid-cols-1 gap-2.5 pl-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleProductSelect(prod.id)}
                      className="text-left text-sm font-semibold text-zinc-800 hover:text-zinc-950 flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                      {prod.title}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setIsOpen(false); handleScrollToSection('faq'); }}
                className="text-left text-xl font-serif font-bold text-zinc-950 border-b border-zinc-100 pb-3"
              >
                FAQs
              </button>

              <button
                onClick={() => { setIsOpen(false); handleScrollToSection('contact'); }}
                className="text-left text-xl font-serif font-bold text-zinc-950"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Footer of the Drawer */}
          <div className="border-t border-zinc-200 pt-6 space-y-4 bg-white mt-auto">
            <div className="flex justify-between text-xs text-zinc-600 font-mono">
              <button onClick={(e) => handleNavigateToCareers(e)} className="hover:text-zinc-950 font-bold">
                Join Careers &rarr;
              </button>
              <button onClick={() => { setIsOpen(false); handleScrollToSection('faq'); }} className="hover:text-zinc-950">
                Help Center
              </button>
            </div>
            <button
              onClick={() => { setIsOpen(false); handleScrollToSection('contact'); }}
              className="w-full py-4 bg-zinc-950 text-white font-mono text-xs font-bold uppercase text-center tracking-wider hover:bg-zinc-800 transition-colors rounded"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
