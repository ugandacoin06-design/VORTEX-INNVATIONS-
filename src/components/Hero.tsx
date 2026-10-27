import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Zap, 
  Blocks, 
  BrainCircuit, 
  ExternalLink, 
  Play, 
  Pause, 
  Activity, 
  X,
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react';

export function Hero() {
  // Interactive state for video / showcase modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Interactive state for media block preview tab
  const [mediaTab, setMediaTab] = useState<'protocol' | 'neural' | 'matrix'>('protocol');
  const [isSimulating, setIsSimulating] = useState(true);
  const [metricPulse, setMetricPulse] = useState(1);

  // Periodic metric pulse animation for live telemetry
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setMetricPulse((prev) => (prev % 100) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleNavClick = (hash: string) => {
    window.location.hash = hash;
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 lg:pt-28 pb-16 relative overflow-hidden bg-transparent text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1677FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#2dd4bf]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Container matching reference wireframe */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 
          ASYMMETRIC MODULAR GRID (Matching Screenshot Wireframe):
          - Top: Full-width Navigation (in Header.tsx)
          - Left: Title (large), Media (middle), Text (bottom)
          - Center: Dominant Image with prominent central circular Play button
          - Right: Card (top), Text (middle), CTA (bottom)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

          {/* ========================================================
              LEFT COLUMN (lg:col-span-4)
              Contains:
              - Block 1 (Top): Title Block (Mobile order-1)
              - Block 2 (Middle): Media Block (Mobile order-4)
              - Block 3 (Bottom): Text Block (Mobile order-5)
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between contents lg:flex">

            {/* BLOCK 1: Title & Main Headline */}
            <div className="order-1 lg:order-none bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
                  <span className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.35em] uppercase font-mono">
                    VORTEX INNOVATIONS LTD
                  </span>
                </div>

                <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl leading-[0.92] tracking-tighter mb-6 text-white text-balance">
                  <span className="block text-white">INNOVATE.</span>
                  <span className="block bg-gradient-to-r from-[#1677FF] to-[#3b82f6] bg-clip-text text-transparent">TRANSFORM.</span>
                  <span className="block text-[#2dd4bf]">LEAD.</span>
                </h1>

                <div className="text-white/80 text-base sm:text-lg leading-relaxed font-sans space-y-4">
                  <p>
                    <strong className="text-white font-semibold">VORTEX INNOVATIONS LTD</strong> is a private technology company dedicated to creating innovative software, intelligent systems, digital infrastructure, and next-generation technology solutions.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button 
                  onClick={() => handleNavClick('#about-us')}
                  className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-[#2dd4bf] transition-colors"
                >
                  <span>DISCOVER VORTEX</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#2dd4bf]" />
                </button>
                <span className="text-white/40 text-xs font-mono">EST. TECHNOLOGY R&D</span>
              </div>
            </div>

            {/* BLOCK 2: Media Block */}
            <div className="order-4 lg:order-none bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group">
              {/* Media Block Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1677FF]" />
                  <span className="text-white font-bold text-xs uppercase tracking-wider">
                    Interactive System Media
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#202328] px-2.5 py-1 rounded-md border border-white/5">
                  <button 
                    onClick={() => setIsSimulating(!isSimulating)}
                    className="text-[11px] font-mono text-white/80 hover:text-white flex items-center gap-1"
                    title={isSimulating ? "Pause Simulation" : "Resume Simulation"}
                  >
                    {isSimulating ? <Pause className="w-3 h-3 text-[#2dd4bf]" /> : <Play className="w-3 h-3 text-white" />}
                    <span>{isSimulating ? "LIVE" : "PAUSED"}</span>
                  </button>
                </div>
              </div>

              {/* Media Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[#202328] rounded-lg mb-3 text-xs font-medium border border-white/5">
                <button 
                  onClick={() => setMediaTab('protocol')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center truncate ${mediaTab === 'protocol' ? 'bg-[#1677FF] text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
                >
                  Blockchain
                </button>
                <button 
                  onClick={() => setMediaTab('neural')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center truncate ${mediaTab === 'neural' ? 'bg-[#2dd4bf] text-[#050505] font-bold shadow-sm' : 'text-white/60 hover:text-white'}`}
                >
                  VERA AI
                </button>
                <button 
                  onClick={() => setMediaTab('matrix')}
                  className={`flex-1 py-1.5 px-2 rounded-md transition-all text-center truncate ${mediaTab === 'matrix' ? 'bg-[#6D28D9] text-white shadow-sm' : 'text-white/60 hover:text-white'}`}
                >
                  Network
                </button>
              </div>

              {/* Dynamic Waveform Display */}
              <div className="w-full h-32 bg-[#0c0e12] border border-white/10 rounded-xl relative overflow-hidden flex flex-col justify-between p-3">
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="uppercase">
                    {mediaTab === 'protocol' && "MONETA LEDGER · VALIDATING"}
                    {mediaTab === 'neural' && "NEURAL INFERENCE · STREAMING"}
                    {mediaTab === 'matrix' && "GRID FABRIC · CONNECTED"}
                  </span>
                  <span className="text-[#2dd4bf] font-bold">
                    {mediaTab === 'protocol' && "BLOCK #4,921,802"}
                    {mediaTab === 'neural' && "99.4% ACCURACY"}
                    {mediaTab === 'matrix' && "12 NODES SYNCED"}
                  </span>
                </div>

                {/* Animated Audio/Frequency Waveform Bars */}
                <div className="relative z-10 flex items-end justify-between gap-1.5 h-14 pt-1">
                  {[45, 65, 30, 85, 95, 55, 75, 40, 80, 60, 90, 50, 70, 85, 40, 65].map((val, i) => {
                    const dynamicHeight = Math.min(100, Math.max(18, (val + (metricPulse * (i + 1))) % 95));
                    return (
                      <div 
                        key={i} 
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${dynamicHeight}%`,
                          backgroundColor: i % 3 === 0 ? '#1677FF' : i % 3 === 1 ? '#2dd4bf' : '#6D28D9',
                          opacity: isSimulating ? 0.9 : 0.4
                        }}
                      />
                    );
                  })}
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] text-white/50 border-t border-white/5 pt-1.5">
                  <span>Engine: VORTEX CORE v2.4</span>
                  <span>Latency: <strong className="text-white font-mono">1.2ms</strong></span>
                </div>
              </div>
            </div>

            {/* BLOCK 3: Supporting Text Block */}
            <div className="order-5 lg:order-none bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="space-y-3.5 text-white/75 text-sm sm:text-base leading-relaxed">
                <p>
                  We transform ideas and real-world challenges into technology that is secure, scalable, intelligent, and built for impact.
                </p>
                <p>
                  Our work brings together software engineering, artificial intelligence, blockchain, digital infrastructure, cybersecurity, research, and emerging technologies.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-white/60">
                <span className="text-[#2dd4bf] font-semibold">Research</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[#3b82f6] font-semibold">Engineering</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-white font-semibold">Security</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[#2dd4bf] font-semibold">Scalability</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-white/80 font-semibold">Global Impact</span>
              </div>
            </div>

          </div>


          {/* ========================================================
              CENTER COLUMN (lg:col-span-5)
              Dominant Hero Visual (Mobile order-2)
              Matches Screenshot: Large image block with central PLAY button!
             ======================================================== */}
          <div className="order-2 lg:order-none lg:col-span-5 bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl p-3 sm:p-4 flex flex-col shadow-2xl relative overflow-hidden group min-h-[480px] sm:min-h-[580px] lg:min-h-full">
            
            {/* Visual Container */}
            <div className="relative w-full h-full min-h-[440px] sm:min-h-[520px] rounded-xl overflow-hidden flex flex-col justify-between">
              
              {/* Background Central Showcase Image */}
              <img 
                src="/src/assets/images/hero_central_showcase_1793131402139.jpg" 
                alt="VORTEX Quantum Computing & Architecture Core"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Vignette & Contrast Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-black/35 to-black/60 pointer-events-none" />

              {/* Top Status & Overlay Tags */}
              <div className="relative z-10 flex items-center justify-between p-4 sm:p-5">
                <div className="flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white font-mono">
                    ARCHITECTURE CORE
                  </span>
                </div>
                <div className="bg-[#050505]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] font-mono text-[#2dd4bf]">
                  ACTIVE STREAM
                </div>
              </div>

              {/* PROMINENT CENTRAL CIRCULAR PLAY BUTTON (Exact match to screenshot wireframe) */}
              <div className="relative z-20 my-auto flex flex-col items-center justify-center p-4">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play VORTEX technology video showcase"
                  className="group/btn relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#15171A]/90 hover:bg-[#1677FF] text-white border-2 border-white/30 hover:border-white shadow-[0_0_35px_rgba(22,119,255,0.6)] hover:shadow-[0_0_50px_rgba(45,212,191,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
                >
                  {/* Subtle outer pulse aura */}
                  <span className="absolute -inset-2 rounded-full bg-[#1677FF]/30 animate-ping opacity-60 group-hover/btn:opacity-100 pointer-events-none" />
                  
                  {/* Play Triangle Icon */}
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white translate-x-1 group-hover/btn:scale-105 transition-transform" />
                </button>

                {/* Caption below play button */}
                <div className="mt-4 px-4 py-1.5 bg-[#050505]/80 backdrop-blur-md rounded-full border border-white/15 text-xs font-bold tracking-wider uppercase text-white/90 font-mono">
                  PLAY TECH SHOWCASE REEL
                </div>
              </div>

              {/* Bottom Telemetry Overlay */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-xs text-white/70 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent">
                <div>
                  <div className="text-white font-bold text-sm">VORTEX Quantum Neural Fabric</div>
                  <div className="text-[11px] font-mono text-white/50">Decentralized Systems & AI Architecture</div>
                </div>
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-mono font-medium transition-colors"
                >
                  EXPAND REEL ↗
                </button>
              </div>

            </div>
          </div>


          {/* ========================================================
              RIGHT COLUMN (lg:col-span-3)
              Contains:
              - Block 1 (Top): Featured Product Card (Mobile order-6)
              - Block 2 (Middle): Architecture Specs Text (Mobile order-6)
              - Block 3 (Bottom): Primary CTA (Mobile order-3)
             ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-5 contents lg:flex">

            {/* BLOCK 1: Featured Card (MONETA CHAIN) */}
            <div className="order-6 lg:order-none bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-[#2dd4bf]/40 transition-all rounded-2xl overflow-hidden shadow-xl group">
              {/* Card Image Thumbnail */}
              <div className="relative h-32 w-full overflow-hidden">
                <img 
                  src="/src/assets/images/moneta_blockchain_card_1793131401620.jpg" 
                  alt="Moneta Chain Ledger"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15171A] via-transparent to-transparent" />
                <div className="absolute top-2.5 right-2.5 bg-[#050505]/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold font-mono text-[#2dd4bf] border border-[#2dd4bf]/30">
                  FEATURED
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#2dd4bf] text-[10px] font-bold tracking-widest uppercase font-mono">
                    BLOCKCHAIN INFRASTRUCTURE
                  </span>
                  <Blocks className="w-4 h-4 text-[#2dd4bf]" />
                </div>
                <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-2 group-hover:text-[#2dd4bf] transition-colors">
                  MONETA CHAIN
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  Next-generation blockchain ecosystem with programmable decentralized digital systems, smart contract infrastructure, and high-throughput transactions.
                </p>
                <a 
                  href="https://moneta-chain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white hover:text-[#2dd4bf] transition-colors"
                >
                  <span>VISIT MONETA CHAIN</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2dd4bf]" />
                </a>
              </div>
            </div>

            {/* BLOCK 2: Technical Specs / Architecture Text */}
            <div className="order-6 lg:order-none bg-[#15171A]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase font-mono">
                  SYSTEM ARCHITECTURE
                </span>
                <Activity className="w-4 h-4 text-[#2dd4bf]" />
              </div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
                DISCIPLINED ENGINEERING
              </h4>
              <div className="space-y-2 text-xs text-white/65">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span>Active Pipeline</span>
                  <span className="text-white font-mono font-medium">9 R&D Stages</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span>Moneta Testnet</span>
                  <span className="text-[#2dd4bf] font-mono font-medium">Dev Sandbox</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Global Impact</span>
                  <span className="text-white font-mono font-medium">Africa & Global</span>
                </div>
              </div>
            </div>

            {/* BLOCK 3: Primary CTA Block (Mobile order-3) */}
            <div className="order-3 lg:order-none bg-gradient-to-br from-[#15171A] to-[#202328] border border-white/15 hover:border-white/25 transition-all rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1677FF]/15 rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-[#2dd4bf] text-[10px] font-black tracking-[0.25em] uppercase font-mono block mb-1.5">
                  NEXT-GEN PORTFOLIO
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-tight mb-2">
                  BUILDING WHAT COMES NEXT
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-5">
                  Explore our complete portfolio of emerging technologies, scalable software, and distributed digital infrastructure.
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Primary CTA Button */}
                <button 
                  onClick={() => handleNavClick('#technology')}
                  className="w-full group flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#1677FF] via-[#3b82f6] to-[#2dd4bf] text-white font-bold tracking-widest text-xs uppercase rounded-xl shadow-[0_0_20px_rgba(22,119,255,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:opacity-95 transition-all duration-300"
                >
                  <span>EXPLORE OUR TECHNOLOGY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Destination Button */}
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full text-center py-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-wider"
                >
                  CONNECT WITH VORTEX →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          FULL INTERACTIVE VIDEO / TECH SHOWCASE MODAL
          Triggered when user clicks the center circular Play button.
         ======================================================== */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#0c0e12] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#15171A]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                <span className="font-heading font-black text-sm uppercase tracking-wider text-white">
                  VORTEX INNOVATIONS — TECHNOLOGY SHOWCASE REEL
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAudioMuted(!isAudioMuted)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  title={isAudioMuted ? "Unmute" : "Mute"}
                >
                  {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#2dd4bf]" />}
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Preview Canvas Player */}
            <div className="relative aspect-video w-full bg-[#050505] overflow-hidden flex items-center justify-center">
              <img 
                src="/src/assets/images/hero_central_showcase_1793131402139.jpg" 
                alt="Technology Reel"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-black/40" />

              {/* HUD / Telemetry graphic overlay */}
              <div className="absolute inset-8 border border-white/10 rounded-xl pointer-events-none p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs text-[#2dd4bf] bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-[#2dd4bf]/30">
                    REC · LIVE 4K INFRASTRUCTURE
                  </div>
                  <div className="font-mono text-xs text-white/70 bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
                    LATENCY: 1.2MS
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#1677FF]/80 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
                    NEXT-GEN DECENTRALIZED PROTOCOLS & AI
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">
                    ENGINEERING THE FOUNDATIONS OF TOMORROW
                  </h3>
                </div>

                <div className="flex justify-between items-end font-mono text-[11px] text-white/60">
                  <div>VORTEX RESEARCH & DEVELOPMENT LABS</div>
                  <div>MONETA CHAIN + VERA AI PLATFORM</div>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-4 bg-[#15171A] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs text-white/70 font-mono">
                <span>STATUS: <strong className="text-[#2dd4bf]">DEPLOYED</strong></span>
                <span>NETWORK: <strong className="text-white">GLOBAL FIBER</strong></span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    handleNavClick('#products');
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-[#1677FF] to-[#2dd4bf] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:opacity-95 transition-opacity"
                >
                  EXPLORE ALL PRODUCTS
                </button>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TRUST BAR & SUPPORTING STATEMENT SECTION
          Directly connects the asymmetric hero grid to the landing page.
         ======================================================== */}
      <div className="w-full bg-[#0a0d14]/70 backdrop-blur-md border-t border-white/10 mt-16 lg:mt-24 relative z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 4 Architectural Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 lg:py-10 gap-8 border-b border-white/5">
            
            <div className="border-l-2 border-[#2dd4bf] pl-4 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Zap className="w-4 h-4 text-[#2dd4bf]" />
                <h3 className="text-white text-xs font-black tracking-widest uppercase font-heading">
                  INNOVATION
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Creating new possibilities through technology.
              </p>
            </div>

            <div className="border-l-2 border-[#3b82f6] pl-4 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Cpu className="w-4 h-4 text-[#3b82f6]" />
                <h3 className="text-white text-xs font-black tracking-widest uppercase font-heading">
                  INTELLIGENCE
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Building smarter digital systems.
              </p>
            </div>

            <div className="border-l-2 border-[#1677FF] pl-4 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
                <h3 className="text-white text-xs font-black tracking-widest uppercase font-heading">
                  SECURITY
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Engineering with trust and protection at the core.
              </p>
            </div>

            <div className="border-l-2 border-[#6D28D9] pl-4 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-1.5">
                <Network className="w-4 h-4 text-[#a78bfa]" />
                <h3 className="text-white text-xs font-black tracking-widest uppercase font-heading">
                  IMPACT
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Technology designed to create meaningful results.
              </p>
            </div>

          </div>

          {/* Supporting Statement Banner */}
          <div className="py-14 sm:py-20 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mb-6 uppercase tracking-tight">
              Building Technology for What Comes Next.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1677FF] via-[#6D28D9] to-[#2dd4bf] rounded-full mb-8" />
            <p className="text-base sm:text-xl text-white/70 mb-3 leading-relaxed">
              VORTEX does not simply develop software.
            </p>
            <p className="text-base sm:text-xl font-semibold text-white/95 leading-relaxed">
              We research. We engineer. We innovate. We transform ideas into technology.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
