import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { policiesData } from './policies/policiesData';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function LegalCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32 max-w-[1400px] mx-auto px-6 relative z-10">
      
      {/* Header */}
      <div className="mb-20 border-b border-white/10 pb-12 text-center md:text-left flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
        <div className="md:w-2/3">
          <h1 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
            Vortex Innovations Ltd
          </h1>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            Legal & Policies
          </h2>
          <p className="text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
            The VORTEX INNOVATIONS LTD Legal & Policies Center provides the policies, terms, notices, and guidelines that govern the use of our websites, technology, platforms, products, and services.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <ShieldCheck className="w-32 h-32 text-[#2dd4bf] opacity-80" />
        </div>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policiesData.map((policy) => (
          <div key={policy.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300 flex flex-col h-full shadow-lg group relative overflow-hidden">
            <div className="flex-grow relative z-10">
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide uppercase">{policy.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                {policy.description}
              </p>
            </div>
            <Link 
              to={`/legal/${policy.id}`} 
              className="relative z-10 mt-auto flex items-center gap-2 text-[#2dd4bf] font-bold text-xs tracking-widest uppercase hover:text-white transition-colors w-fit"
            >
              Read Policy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-white/10 text-center">
        <h4 className="text-white/40 text-[11px] font-bold tracking-[0.4em] uppercase mb-6">
          Vortex Innovations Ltd
        </h4>
        <div className="font-heading font-black text-xl md:text-2xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-8 uppercase">
          <span className="text-white">INNOVATE.</span>
          <span className="text-[#3b82f6]">TRANSFORM.</span>
          <span className="text-[#2dd4bf]">LEAD.</span>
        </div>
      </div>

    </div>
  );
}
