import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutTemplate, Zap, Search, Database,
  Clock, CreditCard, UserCheck, ShieldAlert,
  RefreshCw, BookOpen, Layers,
  Cpu, Activity, WifiOff, Smartphone,
  Lock, Mail, HardDrive, Calendar,
  ArrowRight, Check, Award
} from 'lucide-react';
import { ProductId } from '../types';
import { PRODUCTS } from '../data';

// Helper to resolve icon components dynamically safely
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutTemplate, Zap, Search, Database,
  Clock, CreditCard, UserCheck, ShieldAlert,
  RefreshCw, BookOpen, Layers,
  Cpu, Activity, WifiOff, Smartphone,
  Lock, Mail, HardDrive, Calendar
};

interface ProductsProps {
  activeProductId: ProductId;
  setActiveProductId: (id: ProductId) => void;
  onConsult: (productTitle: string) => void;
}

export default function Products({ activeProductId, setActiveProductId, onConsult }: ProductsProps) {
  const activeProduct = PRODUCTS.find(p => p.id === activeProductId) || PRODUCTS[0];

  return (
    <section id="products" className="py-20 sm:py-24 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Tailored Technologies
            </span>
            <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-zinc-950">
              Products &amp; Services
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans">
              We build specialized, compliance-certified platforms and high-speed digital architectures 
              engineered to optimize workflows and scale with absolute precision.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-zinc-400 font-serif text-base sm:text-lg italic hidden lg:block">
            / Built for Performance &amp; Compliance
          </div>
        </div>

        {/* Tab Selection Row (Horizontal smooth scrolling & touch-friendly on mobile, grid on desktop) */}
        <div className="mb-8 sm:mb-12">
          <div 
            className="flex md:grid md:grid-cols-5 gap-1.5 sm:gap-2 p-1.5 bg-zinc-100 rounded-xl overflow-x-auto no-scrollbar scroll-smooth"
            id="products-tab-list"
          >
            {PRODUCTS.map((product) => {
              const isActive = product.id === activeProductId;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  className={`py-2.5 sm:py-3 px-3.5 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 flex-shrink-0 md:flex-shrink flex items-center justify-center text-center whitespace-nowrap md:whitespace-normal ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                  }`}
                >
                  {product.title}
                </button>
              );
            })}
          </div>
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-2 text-[11px] text-zinc-400 font-mono">
            <span>&larr; Swipe tabs to view all solutions &rarr;</span>
          </div>
        </div>

        {/* Display Active Product with Animated Transitions */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Product Info Column (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {activeProduct.complianceBadge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 sm:mb-6 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                      <Award className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{activeProduct.complianceBadge}</span>
                    </div>
                  )}
                  
                  <span className="text-zinc-500 font-semibold tracking-wider uppercase text-xs">
                    Featured Software
                  </span>
                  <h3 className="mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-zinc-900 leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg font-medium text-zinc-800 italic">
                    &ldquo;{activeProduct.tagline}&rdquo;
                  </p>
                  <p className="mt-4 sm:mt-6 text-zinc-600 leading-relaxed font-sans text-sm sm:text-base">
                    {activeProduct.detailedDescription}
                  </p>

                  {/* Core Benefits */}
                  <div className="mt-6 sm:mt-8">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase text-zinc-900 tracking-wider mb-3 sm:mb-4">
                      Expected Outcomes
                    </h4>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {activeProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px]">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Tags & Call to Action */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-zinc-100">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2.5">
                      Core Architecture
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProduct.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-700 bg-zinc-100 border border-zinc-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onConsult(activeProduct.title)}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-all duration-300 shadow-sm"
                  >
                    Consult our Engineers
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Product Features Column (7 Columns) */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6 sm:gap-8">
                
                {/* Visual Stats Block (Fully responsive grid: stacks cleanly on small mobile, 3 columns on larger screens) */}
                {activeProduct.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-6 bg-zinc-50 border border-zinc-200/80 rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/80">
                    {activeProduct.stats.map((stat, idx) => (
                      <div 
                        key={idx} 
                        className={`text-left ${idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 sm:first:pl-0' : ''}`}
                      >
                        <div className="text-2xl sm:text-2xl lg:text-3xl font-mono font-bold text-zinc-950 tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs font-medium text-zinc-600 mt-1 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Grid of Key Product Features (Responsive 1 or 2 column cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {activeProduct.features.map((feature, index) => {
                    const FeatureIcon = iconMap[feature.iconName] || Zap;
                    return (
                      <div 
                        key={index} 
                        className="p-5 sm:p-6 bg-zinc-50 hover:bg-zinc-100/60 border border-zinc-200/60 rounded-xl transition-all duration-200 flex flex-col justify-between min-h-[140px]"
                      >
                        <div>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-950 text-white flex items-center justify-center mb-3 sm:mb-4">
                            <FeatureIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <h4 className="text-sm sm:text-base font-bold text-zinc-900">
                            {feature.title}
                          </h4>
                          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
