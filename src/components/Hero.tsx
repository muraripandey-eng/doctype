import { motion } from 'motion/react';
import { ArrowDown, Code2, ShieldCheck, Terminal, Layers } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-zinc-50 pt-24 overflow-hidden border-b border-zinc-200"
    >
      {/* Background Decorative Grid Lines - refer to minimalist design rules */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative large text overlay in the background */}
      <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 select-none pointer-events-none opacity-[0.01] text-[18vw] font-serif font-black leading-none">
        DOCTYPE
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Copy (7 Columns) */}
          <div className="lg:col-span-7 text-left">
            
            {/* Tag / Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-mono tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ENGINEERING DIGITAL EXCELLENCE
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-950 leading-[1.1] tracking-tight"
            >
              We craft the code that <span className="italic font-normal text-zinc-600 block sm:inline">defines</span> your business standards.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-xl font-sans"
            >
              Doctype Innovations is a premium tech agency. We engineer custom enterprise-level softwares, 
              certified compliance portals, and lightning-fast digital solutions with mathematical precision.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onExplore}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-sm px-8 py-4 rounded transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                Explore Solutions
                <Code2 className="w-4 h-4" />
              </button>
              
              <button
                onClick={onContact}
                className="bg-transparent hover:bg-zinc-100 text-zinc-900 border-2 border-zinc-900 font-medium text-sm px-8 py-3.5 rounded transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start a Project
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-3 gap-6 max-w-md"
            >
              <div>
                <p className="text-2xl font-mono font-bold text-zinc-950">100%</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Compliance Assurance</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-zinc-950">&lt; 1s</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Web Load Speed</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-zinc-950">24/7</p>
                <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Support SLA</p>
              </div>
            </motion.div>

          </div>

          {/* Visual Presentation (5 Columns - Flat architectural wireframe display) */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto w-full max-w-[380px] h-[440px] bg-white border-2 border-zinc-950 rounded-xl shadow-[12px_12px_0px_0px_rgba(24,24,27,1)] flex flex-col justify-between p-8"
            >
              {/* Wireframe Top Status Bar */}
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-950"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-400"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-200"></span>
                </div>
                <div className="text-[10px] font-mono text-zinc-400">
                  SYSTEM_STATUS: SECURE //
                </div>
              </div>

              {/* Wireframe Logo Display */}
              <div className="flex flex-col items-center justify-center my-auto py-6">
                <Logo size="xl" className="text-zinc-950 transform hover:scale-105 transition-transform duration-500" />
                <h2 className="mt-4 font-serif text-xl font-bold text-zinc-900 tracking-tight">
                  doctype innovations
                </h2>
                <p className="text-xs font-mono text-zinc-400 mt-1 tracking-widest uppercase">
                  &lt; / PRECISION_ENGINEERING &gt;
                </p>
              </div>

              {/* Wireframe Footer Status Bar */}
              <div className="border-t border-zinc-100 pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span className="font-mono text-[10px]">WEB_DEV //</span>
                  <span className="font-semibold text-zinc-900">PROD_READY</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span className="font-mono text-[10px]">IRD_BILLING //</span>
                  <span className="font-semibold text-zinc-900">CBMS_CONNECTED</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span className="font-mono text-[10px]">HR_PAYROLL //</span>
                  <span className="font-semibold text-zinc-900">TAX_COMPLIANT</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-zinc-400 select-none">
          SCROLL
        </span>
        <button 
          onClick={onExplore}
          className="p-2 bg-white border border-zinc-200 hover:border-zinc-950 text-zinc-600 hover:text-zinc-950 rounded-full shadow-sm transition-all duration-300 focus:outline-none"
          aria-label="Scroll down to About Us"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
}
