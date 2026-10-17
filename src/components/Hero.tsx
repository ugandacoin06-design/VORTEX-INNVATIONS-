import React from 'react';
import { ArrowRight, Cpu, Network, ShieldCheck, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-20 min-h-screen flex flex-col relative overflow-hidden bg-transparent">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vortex-turquoise/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vortex-blue/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.4em] uppercase">
              Vortex Innovations Ltd
            </span>
          </div>

          <h1 className="font-heading font-black text-[4rem] sm:text-[5.5rem] lg:text-[6rem] leading-[0.85] tracking-tighter mb-8">
            <span className="block text-white">INNOVATE.</span>
            <span className="block text-[#3b82f6]">TRANSFORM.</span>
            <span className="block text-[#2dd4bf]">LEAD.</span>
          </h1>

          <div className="space-y-6 text-white/70 font-sans text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
            <p className="font-medium text-white/90">
              <strong className="font-bold text-white">VORTEX INNOVATIONS LTD</strong> is a private technology company dedicated to creating innovative software, intelligent systems, digital infrastructure, and next-generation technology solutions.
            </p>
            <p>
              We transform ideas and real-world challenges into technology that is secure, scalable, intelligent, and built for impact.
            </p>
            <p>
              Our work brings together software engineering, artificial intelligence, blockchain, digital infrastructure, cybersecurity, research, and emerging technologies to create solutions for a rapidly changing world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button 
              onClick={() => window.location.hash = '#technology'}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#2dd4bf] text-white font-bold tracking-widest text-sm uppercase rounded-lg shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:opacity-90 transition-all duration-300"
            >
              EXPLORE OUR TECHNOLOGY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.location.hash = '#about-us'}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 border border-[#1e3a8a] bg-white/5 backdrop-blur-sm text-white font-bold tracking-widest text-sm uppercase rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              DISCOVER VORTEX
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="w-full max-w-[600px] aspect-square relative flex items-center justify-center">
            {/* Abstract futuristic visual */}
            <div className="absolute inset-0 bg-gradient-to-tr from-vortex-blue/10 via-transparent to-vortex-teal/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-vortex-turquoise/20 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border border-vortex-blue/10 rounded-full" />
            
            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-2xl">
              <defs>
                <linearGradient id="grid-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1A56DB" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Outer connecting dots */}
              <circle cx="200" cy="50" r="4" fill="#06B6D4" filter="url(#glow)" className="animate-pulse" />
              <circle cx="320" cy="120" r="3" fill="#14B8A6" />
              <circle cx="350" cy="250" r="5" fill="#1A56DB" filter="url(#glow)" />
              <circle cx="250" cy="350" r="3" fill="#06B6D4" />
              <circle cx="100" cy="300" r="4" fill="#14B8A6" filter="url(#glow)" />
              <circle cx="50" cy="150" r="3" fill="#1A56DB" />

              {/* Connecting lines */}
              <path d="M200 50 L320 120 L350 250 L250 350 L100 300 L50 150 Z" fill="none" stroke="url(#grid-grad)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
              <path d="M200 50 L200 200 L350 250" fill="none" stroke="url(#grid-grad)" strokeWidth="1" opacity="0.4" />
              <path d="M50 150 L200 200 L250 350" fill="none" stroke="url(#grid-grad)" strokeWidth="1" opacity="0.4" />
              
              {/* Central Core */}
              <circle cx="200" cy="200" r="60" fill="none" stroke="url(#grid-grad)" strokeWidth="2" className="origin-center animate-[spin_10s_linear_infinite]" strokeDasharray="100 20" />
              <circle cx="200" cy="200" r="45" fill="none" stroke="#0A1128" strokeWidth="1" opacity="0.5" />
              <circle cx="200" cy="200" r="30" fill="url(#grid-grad)" filter="url(#glow)" opacity="0.9" />
              
              {/* Data streams */}
              <circle cx="200" cy="200" r="100" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.2" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#1A56DB" strokeWidth="1" opacity="0.1" />
            </svg>

            {/* Floating glassmorphism cards */}
            <div className="absolute top-1/4 -right-4 lg:-right-12 bg-[#0a1128]/80 backdrop-blur-md border border-[#2dd4bf]/20 p-4 rounded-2xl shadow-xl animate-[bounce_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a8a]/30 flex items-center justify-center text-[#3b82f6]">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/50">INFRASTRUCTURE</div>
                  <div className="text-sm font-semibold text-white">Secure & Scalable</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 -left-4 lg:-left-12 bg-[#0a1128]/80 backdrop-blur-md border border-[#2dd4bf]/20 p-4 rounded-2xl shadow-xl animate-[bounce_5s_ease-in-out_infinite_reverse]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2dd4bf]/20 flex items-center justify-center text-[#2dd4bf]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/50">INTELLIGENCE</div>
                  <div className="text-sm font-semibold text-white">AI Systems</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Trust Bar & Supporting Statement Section */}
      <div className="w-full bg-[#0a1128] border-t border-white/5 mt-auto relative z-20">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* 4 Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-b border-white/5 py-8 gap-8">
            
            <div className="border-l border-[#2dd4bf]/30 pl-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-4 h-4 text-[#2dd4bf]" />
                <h3 className="text-[#2dd4bf] text-[10px] font-black tracking-widest uppercase">INNOVATION</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Creating new possibilities through technology.
              </p>
            </div>

            <div className="border-l border-[#2dd4bf]/30 pl-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-4 h-4 text-[#2dd4bf]" />
                <h3 className="text-[#2dd4bf] text-[10px] font-black tracking-widest uppercase">INTELLIGENCE</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Building smarter digital systems.
              </p>
            </div>

            <div className="border-l border-[#2dd4bf]/30 pl-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#2dd4bf]" />
                <h3 className="text-[#2dd4bf] text-[10px] font-black tracking-widest uppercase">SECURITY</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Engineering with trust and protection at the core.
              </p>
            </div>

            <div className="border-l border-[#2dd4bf]/30 pl-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Network className="w-4 h-4 text-[#2dd4bf]" />
                <h3 className="text-[#2dd4bf] text-[10px] font-black tracking-widest uppercase">IMPACT</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Technology designed to create meaningful results.
              </p>
            </div>

          </div>

          {/* Supporting Statement */}
          <div className="py-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-8">
              Building Technology for What Comes Next.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#2dd4bf] rounded-full mb-8" />
            <p className="text-lg md:text-xl text-white/70 mb-2">
              VORTEX does not simply develop software.
            </p>
            <p className="text-lg md:text-xl font-medium text-white/90">
              We research. We engineer. We innovate. We transform ideas into technology.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
