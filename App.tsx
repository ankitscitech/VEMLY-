
import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Minus, 
  ArrowRight, 
  Zap, 
  Eye, 
  Cpu, 
  Dna, 
  Atom,
  ChevronRight,
  ArrowUp
} from 'lucide-react';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToExplore = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-stone-950 text-stone-50 rounded-full shadow-2xl z-50 transition-all duration-500 hover:bg-stone-800 hover:scale-110 active:scale-95 border border-white/5 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-stone-950 uppercase">VEMLY</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-semibold">Exploring Science & Technology</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#problem" className="text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors">The Challenge</a>
            <a href="#method" className="text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors">Our Method</a>
            <a href="#explore" className="text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors">Learning Resources</a>
          </nav>
          <button 
            onClick={scrollToExplore}
            className="px-6 py-2.5 bg-stone-950 text-stone-50 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all shadow-sm"
          >
            Explore
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-sm font-bold tracking-[0.3em] text-emerald-800 uppercase mb-8 block">VEMLY</span>
          <h1 className="serif-font text-5xl md:text-7xl font-bold text-stone-950 mb-8 leading-[1.1] tracking-tight">
            Clear explanations of science. <br />
            <span className="text-stone-400 italic font-normal">Built for curiosity, not hype.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            We explain complex scientific ideas using first principles, real-world analogies, and connected thinking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToExplore}
              className="w-full sm:w-auto px-10 py-4 bg-stone-950 text-stone-50 rounded-xl text-lg font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group shadow-xl"
            >
              Explore a concept
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-stone-100 rounded-full blur-3xl -z-0 opacity-40"></div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-28 border-t border-stone-200/50 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-10 text-stone-950 leading-snug">Why science feels difficult for most people</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-stone-100">
                    <Zap className="text-stone-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-950 mb-2 text-lg">Textbooks explain “what”, not “why”</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Memorizing conclusions is a substitute for understanding. We prioritize the reasoning that leads to the conclusion.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-stone-100">
                    <Eye className="text-stone-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-950 mb-2 text-lg">Content is either shallow or complex</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Explanations often skip the middle steps. This creates a disconnect between the concept and the learner.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-stone-100">
                    <Atom className="text-stone-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-950 mb-2 text-lg">Real-world connections are missing</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">Abstract theories require a bridge to practical application. We anchor science to the world you see.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-32">
              <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm relative">
                <blockquote className="serif-font text-2xl italic text-stone-800 leading-relaxed mb-8">
                  "Science isn’t difficult. Bad explanations are. When concepts are explained step-by-step, understanding replaces confusion."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-emerald-800/60"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">The Core Shift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="method" className="py-28 bg-stone-950 text-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">How VEMLY explains science differently</h2>
            <p className="text-stone-400 text-lg font-light">Precision in thought. Clarity in delivery.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-emerald-800 group-hover:border-emerald-700 transition-all duration-300">
                <Cpu size={22} className="text-stone-50" />
              </div>
              <h3 className="text-xl font-bold mb-4">First Principles</h3>
              <p className="text-stone-400 text-sm leading-relaxed">We dismantle ideas to their most basic truths. No assumptions are left unexamined.</p>
            </div>
            <div className="group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-emerald-800 group-hover:border-emerald-700 transition-all duration-300">
                <Eye size={22} className="text-stone-50" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mental Models</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Visual and logical frameworks that help you predict and understand natural systems.</p>
            </div>
            <div className="group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-emerald-800 group-hover:border-emerald-700 transition-all duration-300">
                <Dna size={22} className="text-stone-50" />
              </div>
              <h3 className="text-xl font-bold mb-4">Connectedness</h3>
              <p className="text-stone-400 text-sm leading-relaxed">We trace concepts across biology, physics, and technology to show the underlying unity of science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Systems */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 mb-6 block">Our Approach</span>
              <h2 className="text-4xl font-bold mb-8 text-stone-950 leading-tight">Understanding modern systems through science</h2>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed font-light">
                Modern technology, nature, and society are deeply connected. VEMLY breaks down these systems by tracing them back to the scientific principles that govern them.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-800/40"></div> Logical pathways for beginners
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-800/40"></div> Tracing origins of technology
                </li>
                <li className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-800/40"></div> Analyzing societal systems
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square bg-stone-50 rounded-3xl overflow-hidden border border-stone-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/5 to-transparent"></div>
                <Cpu size={180} strokeWidth={0.5} className="text-stone-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore a Concept - Non-Interactive */}
      <section id="explore" className="py-28 bg-stone-50 border-y border-stone-200/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-stone-950">Start Exploring</h2>
          <p className="text-xl text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore concepts across physics, biology, space, and emerging technology — explained step by step.
          </p>
          <button className="px-10 py-5 bg-stone-950 text-stone-50 rounded-2xl text-xl font-bold hover:bg-stone-800 transition-all shadow-xl flex items-center gap-3 mx-auto">
            Read an explanation
            <ArrowRight size={24} />
          </button>
        </div>
      </section>

      {/* Who it's For */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[2.5rem] bg-stone-50 border border-stone-200">
              <h3 className="text-xl font-bold mb-10 text-stone-950 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-800/5 flex items-center justify-center text-emerald-800">
                  <Check size={18} />
                </div>
                Who VEMLY is for
              </h3>
              <ul className="space-y-6">
                <li className="text-stone-600 text-sm font-medium">Curious learners seeking the "why"</li>
                <li className="text-stone-600 text-sm font-medium">Students prioritizing clarity over rote memorization</li>
                <li className="text-stone-600 text-sm font-medium">Enthusiasts who value logical reasoning</li>
                <li className="text-stone-600 text-sm font-medium">People who enjoy understanding how things work</li>
              </ul>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-stone-100/30 border border-stone-200/50 grayscale opacity-60">
              <h3 className="text-xl font-bold mb-10 text-stone-400 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-400">
                  <Minus size={18} />
                </div>
                Not for
              </h3>
              <ul className="space-y-6">
                <li className="text-stone-400 text-sm font-medium">People seeking shortcuts or hacks</li>
                <li className="text-stone-400 text-sm font-medium">Those preferring hype over depth</li>
                <li className="text-stone-400 text-sm font-medium">Audience looking for marketing buzzwords</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principle Quote */}
      <section className="py-32 bg-stone-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="serif-font text-2xl md:text-4xl text-stone-400 mb-8 italic">
            Built with one principle:
          </div>
          <h2 className="serif-font text-4xl md:text-6xl font-bold text-stone-950 mb-12 leading-tight">
            If something can’t be explained simply, it isn’t understood deeply enough.
          </h2>
          <div className="flex items-center justify-center gap-4 text-stone-300">
            <div className="h-[1px] w-12 bg-stone-200"></div>
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Research Driven</span>
            <div className="h-[1px] w-12 bg-stone-200"></div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Final Soft CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-stone-950">Start exploring science — one idea at a time.</h2>
          <button className="px-10 py-5 bg-stone-950 text-stone-50 rounded-2xl text-xl font-bold hover:bg-stone-800 transition-all shadow-lg flex items-center gap-3 mx-auto">
            Read an explanation
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div>
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-bold tracking-tighter text-stone-950">VEMLY</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Concept Focused Education</span>
              </div>
              <p className="text-stone-500 max-w-sm text-sm leading-relaxed font-light">
                Providing logical explanations of complex ideas using first principles and connected thinking. Built for those who value depth.
              </p>
            </div>
            <div className="md:text-right flex flex-col md:items-end">
              <h4 className="font-bold text-stone-950 mb-6 uppercase text-xs tracking-widest">Navigation</h4>
              <nav className="flex flex-col gap-4 text-sm font-medium text-stone-500">
                <a href="#problem" className="hover:text-stone-950 transition-colors">The Challenge</a>
                <a href="#method" className="hover:text-stone-950 transition-colors">Our Method</a>
                <a href="#explore" className="hover:text-stone-950 transition-colors">Resources</a>
                <a href="#" className="hover:text-stone-950 transition-colors">Privacy</a>
              </nav>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-200 text-[10px] uppercase tracking-[0.1em] font-bold text-stone-400 flex flex-col md:flex-row justify-between items-center gap-6">
            <p>© 2025 VEMLY. Exploring Science, Technology & Human Understanding.</p>
            <div className="flex gap-8">
              <span className="text-stone-300">Concept-Driven</span>
              <span className="text-stone-300">Research-Based</span>
              <span className="text-stone-300">Hype-Free</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
