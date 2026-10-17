import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { policiesData } from './policies/policiesData';
import { ArrowLeft } from 'lucide-react';

export function PolicyPage() {
  const { id } = useParams();
  const policy = policiesData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!policy) {
    return <Navigate to="/legal" replace />;
  }

  return (
    <div className="pt-32 pb-32 max-w-4xl mx-auto px-6 text-white/80 leading-relaxed">
      <Link to="/legal" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-white text-sm font-bold tracking-widest uppercase mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Legal & Policies
      </Link>

      <div className="mb-12 border-b border-white/10 pb-10">
        <h1 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">
          Vortex Innovations Ltd
        </h1>
        <h2 className="font-heading font-black text-4xl md:text-5xl text-white tracking-tighter uppercase mb-6">
          {policy.title}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm text-[#2dd4bf] font-bold tracking-widest uppercase mt-8">
          <span>Effective Date: {policy.effectiveDate}</span>
          <span>Last Updated: {policy.lastUpdated}</span>
        </div>
      </div>
      
      <div className="space-y-12 policy-content">
        {policy.sections.map((section, idx) => (
          <section key={idx} className="scroll-mt-24">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">{section.title}</h3>
            <div className="space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-lg leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-white/10 text-center">
        <div className="font-heading font-black text-xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-6 uppercase">
          <span className="text-white">INNOVATE.</span>
          <span className="text-[#3b82f6]">TRANSFORM.</span>
          <span className="text-[#2dd4bf]">LEAD.</span>
        </div>
      </div>
    </div>
  );
}
