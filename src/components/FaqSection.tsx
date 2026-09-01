import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FaqSection() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <section id="faq" className="py-20 sm:py-24 bg-white border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            Support &amp; Clarity
          </span>
          <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-zinc-950 flex items-center justify-center gap-3">
            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 flex-shrink-0" />
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-600 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Find answers regarding our bespoke software architectures, Nepalese IRD compliance, deployment lifecycles, and technical support protocols.
          </p>
        </div>

        {/* Clean, Full-Width Centered Accordion */}
        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200" id="faqs-accordion-container">
          {FAQ_ITEMS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors leading-snug">
                    {faq.question}
                  </h4>
                  <span className="text-zinc-400 group-hover:text-zinc-950 mt-1 flex-shrink-0 transition-colors">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                
                {/* Expanded Answer Panel */}
                {isExpanded && (
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans pr-4 sm:pr-8 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer Bar */}
        <div className="mt-12 p-6 bg-zinc-50 border border-zinc-200/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900">Have a specific or complex query?</h4>
              <p className="text-xs text-zinc-500">Our engineering architects can assist with technical assessments.</p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={handleContactScroll}
            className="w-full sm:w-auto text-center font-mono text-xs font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Direct Inquiry &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
