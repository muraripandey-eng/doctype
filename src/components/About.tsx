import React from 'react';
import { Shield, Settings, Eye, Code, ChevronRight } from 'lucide-react';

interface AboutProps {
  setView: (view: 'home' | 'careers') => void;
}

export default function About({ setView }: AboutProps) {
  const pillars = [
    {
      icon: Code,
      title: 'Bespoke Code Base',
      description: 'We do not utilize restrictive templates. Every product, website, and dashboard is engineered from the ground up, optimized for lightning-fast speeds and clear maintainable layouts.'
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Ready',
      description: 'Our systems, especially our HR/Payroll software and IRD Billing modules, are crafted to meet local taxation and accounting audits. Compliance isn’t an afterthought—it’s baked in.'
    },
    {
      icon: Settings,
      title: 'Decoupled Architectures',
      description: 'We engineer using standard microservices, headless web interfaces, and modern reliable database structures. This prevents hardware locks, securing your systems for future scaling.'
    },
    {
      icon: Eye,
      title: 'Mathematical Design Systems',
      description: 'Our design system is grounded in exact typography scaling and balanced layout proportions. We believe true brand authority is projected through clarity, whitespace, and sharp contrast.'
    }
  ];

  const handleFaqScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('faq');
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

  const handleCareersClick = () => {
    setView('careers');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Text/Intro Column (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Who We Are
              </span>
              <h2 className="mt-3 text-4xl font-serif font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                The Engineering Standard
              </h2>
              <p className="mt-6 text-zinc-600 leading-relaxed font-sans text-base">
                Doctype Innovations is a premium tech development agency. We exist to close the gap between 
                clunky legacy enterprise software and beautiful modern consumer software.
              </p>
              <p className="mt-4 text-zinc-600 leading-relaxed font-sans text-base">
                Our Kathmandu-based squad is composed of dedicated web engineers, systems architects, and meticulous designers. 
                We operate on an engineering-first, compliance-first approach, ensuring that your company's back-end database, 
                fiscal reports, and public web footprints run with optimal performance and absolute security.
              </p>
            </div>

            {/* In-Line CTA Links */}
            <div className="mt-10 pt-8 border-t border-zinc-200 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCareersClick}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors focus:outline-none"
                >
                  Review Career Opportunities 
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <div>
                <button
                  onClick={handleFaqScroll}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors focus:outline-none"
                >
                  Browse FAQs &amp; Help Center
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pillars List Column (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-8 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[200px]"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-md bg-zinc-100 flex items-center justify-center text-zinc-800 mb-6">
                        <PillarIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mini Showcase Block */}
        <div className="mt-24 p-8 bg-zinc-900 rounded-xl text-white relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-inner">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-xl font-serif font-medium tracking-wide">
              Do you have a specialized integration challenge?
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              From sync issues with local tax servers (like Nepal IRD CBMS) to custom payroll calculations, 
              we can design custom bridges tailored precisely to your company workflows.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-wider bg-white text-zinc-950 px-6 py-3.5 rounded hover:bg-zinc-200 transition-colors"
            >
              Inquire Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
