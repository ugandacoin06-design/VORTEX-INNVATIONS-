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
  Layers, 
  Activity, 
  Sparkles,
  Maximize2
} from 'lucide-react';

export function Hero() {
  // Interactive state for central visual beacon focus
  const [activeSubsystem, setActiveSubsystem] = useState<'infrastructure' | 'intelligence' | 'blockchain' | 'security'>('infrastructure');
  
  // Interactive state for media block preview tab
  const [mediaTab, setMediaTab] = useState<'protocol' | 'neural' | 'matrix'>('protocol');
  const [isSimulating, setIsSimulating] = useState(true);
  const [metricPulse, setMetricPulse] = useState(1);

  // Periodic metric pulse animation
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setMetricPulse((prev) => (prev % 100) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const subsystemDetails = {
    infrastructure: {
      title: "SCALABLE INFRASTRUCTURE",
      desc: "Distributed high-throughput computing nodes with automated load routing and fault-tolerant cloud fabric.",
      tag: "ACTIVE · 99.98% UPTIME",
      metric: "4.8M ops/sec",
      color: "#1677FF"
    },
    intelligence: {
      title: "VERA AI ENGINE",
      desc: "Autonomous neural inference pipelines designed for real-time monitoring, decision modeling, and smart analytics.",
      tag: "INFERENCE STREAM READY",
      metric: "9.4ms latency",
      color: "#2dd4bf"
    },
    blockchain: {
      title: "MONETA CHAIN PROTOCOL",
      desc: "High-speed decentralized validation layer supporting smart contracts, programmable transactions, and digital assets.",
      tag: "TESTNET ACTIVE",
      metric: "65K TPS PEAK",
      color: "#6D28D9"
    },
    security: {
      title: "CRYPTOGRAPHIC CORE",
      desc: "Multi-layered enterprise encryption, identity verification, and zero-trust protocol safeguards across all systems.",
      tag: "ENCRYPTED SHA-384",
      metric: "ZERO-TRUST VERIFIED",
      color: "#3b82f6"
    }
  };

  const handleNavClick = (hash: string) => {
    window.location.hash = hash;
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 lg:pt-28 pb-16 relative overflow-hidden bg-[#050505] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1677FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#2dd4bf]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#6D28D9]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 
          ASIMMETRIC MODULAR GRID:
          Desktop: 3 columns (Left 4 cols / Center 5 cols / Right 3 cols)
          Tablet: Flexible 2-column or stacked grid
          Mobile: Strictly ordered 1 to 6 sequence:
            1. (Header Nav - fixed)
            2. Main headline and introduction (Block B)
            3. Dominant hero visual (Block E)
            4. Primary CTA (Block G)
            5. Supporting media and text (Block C & D)
            6. Relevant product and feature blocks (Block F)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">

          {/* ========================================================
              LEFT COLUMN (lg:col-span-4)
              Contains:
              - Block B: Headline & Introductory Content (Mobile order-1)
              - Block C: Media Block (Mobile order-4)
              - Block D: Supporting Text Block (Mobile order-5)
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between contents lg:flex">

            {/* BLOCK B: Main Headline & Introductory Content */}
            <div className="order-1 lg:order-none bg-[#15171A] border border-white/10 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
                  <span className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.35em] uppercase font-mono">
                    VORTEX INNOVATIONS LTD
                  </span>
                </div>

                <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl leading-[0.92] tracking-tighter mb-6 text-white">
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
                  className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/90 hover:text-[#2dd4bf] transition-colors"
                >
                  <span>DISCOVER VORTEX</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#2dd4bf]" />
                </button>
                <span className="text-white/40 text-xs font-mono">EST. TECHNOLOGY R&D</span>
              </div>
            </div>

            {/* BLOCK C: Left Column — Media Block */}
            <div className="order-4 lg:order-none bg-[#15171A] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden group">
              {/* Media Block Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
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
              <div className="flex items-center gap-1.5 p-1 bg-[#202328] rounded-lg mb-4 text-xs font-medium border border-white/5">
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

              {/* Dynamic Media Screen Preview */}
              <div className="w-full h-36 bg-[#0c0e12] border border-white/10 rounded-xl relative overflow-hidden flex flex-col justify-between p-3.5">
                {/* Visualizer Canvas Lines */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                    <path
                      d={
                        mediaTab === 'protocol'
                          ? `M0,60 Q75,${20 + (metricPulse % 25)} 150,60 T300,${60 - (metricPulse % 25)}`
                          : mediaTab === 'neural'
                          ? `M0,${80 - (metricPulse % 30)} Q75,30 150,${70 + (metricPulse % 20)} T300,50`
                          : `M0,40 L75,${60 + (metricPulse % 20)} L150,30 L225,${70 - (metricPulse % 15)} L300,45`
                      }
                      fill="none"
                      stroke={mediaTab === 'protocol' ? '#1677FF' : mediaTab === 'neural' ? '#2dd4bf' : '#6D28D9'}
                      strokeWidth="2"
                    />
                    <path
                      d="M0,80 Q75,40 150,85 T300,75"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="0.75"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />
                  </svg>
                </div>

                {/* Subsystem Telemetry Badge */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="uppercase">
                    {mediaTab === 'protocol' && "MONETA LEDGER // VALIDATING"}
                    {mediaTab === 'neural' && "NEURAL INFERENCE // STREAMING"}
                    {mediaTab === 'matrix' && "GRID FABRIC // CONNECTED"}
                  </span>
                  <span className="text-[#2dd4bf] font-bold">
                    {mediaTab === 'protocol' && "BLOCK #4,921,802"}
                    {mediaTab === 'neural' && "99.4% ACCURACY"}
                    {mediaTab === 'matrix' && "12 NODES SYNCED"}
                  </span>
                </div>

                {/* Interactive Waveform / Matrix Display */}
                <div className="relative z-10 flex items-end justify-between gap-1.5 h-16 pt-2">
                  {[45, 65, 30, 85, 95, 55, 75, 40, 80, 60, 90, 50, 70, 85, 40, 65].map((val, i) => {
                    const dynamicHeight = Math.min(100, Math.max(15, (val + (metricPulse * (i + 1))) % 95));
                    return (
                      <div 
                        key={i} 
                        className="flex-1 rounded-t-sm transition-all duration-300"
                        style={{
                          height: `${dynamicHeight}%`,
                          backgroundColor: i % 3 === 0 ? '#1677FF' : i % 3 === 1 ? '#2dd4bf' : '#6D28D9',
                          opacity: isSimulating ? 0.85 : 0.4
                        }}
                      />
                    );
                  })}
                </div>

                {/* Media Bar Info */}
                <div className="relative z-10 flex items-center justify-between text-[10px] text-white/50 border-t border-white/5 pt-1.5">
                  <span>Engine: VORTEX CORE v2.4</span>
                  <span>Latency: <strong className="text-white font-mono">1.2ms</strong></span>
                </div>
              </div>
            </div>

            {/* BLOCK D: Left Column — Supporting Text Block */}
            <div className="order-5 lg:order-none bg-[#15171A] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed">
                <p>
                  We transform ideas and real-world challenges into technology that is secure, scalable, intelligent, and built for impact.
                </p>
                <p>
                  Our work brings together software engineering, artificial intelligence, blockchain, digital infrastructure, cybersecurity, research, and emerging technologies to create solutions for a rapidly changing world.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex flex-wrap gap-2 text-xs text-white/60">
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
              Block E: Dominant Hero Visual (Mobile order-2)
              Occupies ~42-45% of desktop grid width, spanning vertically
              full height across the grid rows.
             ======================================================== */}
          <div className="order-2 lg:order-none lg:col-span-5 bg-gradient-to-b from-[#15171A] via-[#101216] to-[#0c0e12] border border-white/10 rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[460px] sm:min-h-[540px] lg:min-h-full">
            {/* Background Core Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-tr from-[#1677FF]/20 via-[#2dd4bf]/20 to-[#6D28D9]/20 rounded-full blur-[70px] pointer-events-none" />

            {/* Dominant Visual Header Status Bar */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2dd4bf]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white font-mono">
                  CENTRAL ARCHITECTURE CORE
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/50">
                NODE_GRID: ONLINE
              </span>
            </div>

            {/* Central Dominant Visual Engine Graphic */}
            <div className="relative z-10 my-auto py-6 sm:py-10 flex flex-col items-center justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] aspect-square relative flex items-center justify-center">
                
                {/* Layer 1: Outer Rotating Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1677FF]/20 via-transparent to-[#2dd4bf]/20 rounded-full animate-[spin_24s_linear_infinite]" />
                
                {/* Layer 2: Dashed Gyro Ring */}
                <div className="absolute inset-4 sm:inset-5 border border-[#2dd4bf]/30 rounded-full border-dashed animate-[spin_32s_linear_infinite_reverse]" />
                
                {/* Layer 3: Solid Concentric Ring */}
                <div className="absolute inset-10 sm:inset-14 border border-[#1677FF]/25 rounded-full" />
                <div className="absolute inset-18 sm:inset-24 border border-white/10 rounded-full" />

                {/* SVG Constellation & Vector Paths */}
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-[0_0_35px_rgba(45,212,191,0.25)]">
                  <defs>
                    <linearGradient id="vortex-grad-main" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1677FF" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#2dd4bf" />
                    </linearGradient>
                    <filter id="core-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Orbital Vector Trajectories */}
                  <circle cx="200" cy="200" r="175" fill="none" stroke="#202328" strokeWidth="1" />
                  <circle cx="200" cy="200" r="130" fill="none" stroke="#1677FF" strokeWidth="1" opacity="0.25" strokeDasharray="6 6" />
                  <circle cx="200" cy="200" r="85" fill="none" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.4" />

                  {/* Constellation Nodes */}
                  <circle cx="200" cy="25" r="4.5" fill="#2dd4bf" filter="url(#core-glow-filter)" />
                  <circle cx="345" cy="115" r="3.5" fill="#1677FF" />
                  <circle cx="365" cy="265" r="4.5" fill="#6D28D9" filter="url(#core-glow-filter)" />
                  <circle cx="260" cy="375" r="3.5" fill="#2dd4bf" />
                  <circle cx="75" cy="320" r="4.5" fill="#1677FF" filter="url(#core-glow-filter)" />
                  <circle cx="35" cy="150" r="3.5" fill="#3b82f6" />

                  {/* Energy Connection Polygons */}
                  <path 
                    d="M200 25 L345 115 L365 265 L260 375 L75 320 L35 150 Z" 
                    fill="none" 
                    stroke="url(#vortex-grad-main)" 
                    strokeWidth="1.25" 
                    opacity="0.35" 
                    strokeDasharray="4 4" 
                  />
                  
                  {/* Radiant Spoke Rays */}
                  <line x1="200" y1="25" x2="200" y2="200" stroke="url(#vortex-grad-main)" strokeWidth="1" opacity="0.4" />
                  <line x1="365" y1="265" x2="200" y2="200" stroke="url(#vortex-grad-main)" strokeWidth="1" opacity="0.4" />
                  <line x1="75" y1="320" x2="200" y2="200" stroke="url(#vortex-grad-main)" strokeWidth="1" opacity="0.4" />
                  <line x1="35" y1="150" x2="200" y2="200" stroke="url(#vortex-grad-main)" strokeWidth="1" opacity="0.4" />

                  {/* Reactor Core Structure */}
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="58" 
                    fill="none" 
                    stroke="url(#vortex-grad-main)" 
                    strokeWidth="2.5" 
                    className="origin-center animate-[spin_12s_linear_infinite]" 
                    strokeDasharray="90 30" 
                  />
                  <circle cx="200" cy="200" r="40" fill="#0c0e12" stroke="#2dd4bf" strokeWidth="1" opacity="0.6" />
                  <circle cx="200" cy="200" r="26" fill="url(#vortex-grad-main)" filter="url(#core-glow-filter)" opacity="0.95" />
                </svg>

                {/* Interactive Orbital Beacons Around Core */}
                
                {/* 1. Infrastructure Beacon (Top-Right) */}
                <button
                  onClick={() => setActiveSubsystem('infrastructure')}
                  className={`absolute -top-1 sm:top-2 -right-1 sm:right-0 p-2 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 text-left z-20 shadow-lg ${
                    activeSubsystem === 'infrastructure' 
                      ? 'bg-[#15171A] border-[#1677FF] ring-2 ring-[#1677FF]/40 scale-105' 
                      : 'bg-[#15171A]/85 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#1677FF]/20 flex items-center justify-center text-[#1677FF] shrink-0">
                      <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-white/50 tracking-wider uppercase font-mono">INFRASTRUCTURE</div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Secure & Scalable</div>
                    </div>
                  </div>
                </button>

                {/* 2. Intelligence Beacon (Top-Left) */}
                <button
                  onClick={() => setActiveSubsystem('intelligence')}
                  className={`absolute -top-1 sm:top-2 -left-1 sm:left-0 p-2 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 text-left z-20 shadow-lg ${
                    activeSubsystem === 'intelligence' 
                      ? 'bg-[#15171A] border-[#2dd4bf] ring-2 ring-[#2dd4bf]/40 scale-105' 
                      : 'bg-[#15171A]/85 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#2dd4bf]/20 flex items-center justify-center text-[#2dd4bf] shrink-0">
                      <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-white/50 tracking-wider uppercase font-mono">INTELLIGENCE</div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">VERA AI Systems</div>
                    </div>
                  </div>
                </button>

                {/* 3. Blockchain Beacon (Bottom-Right) */}
                <button
                  onClick={() => setActiveSubsystem('blockchain')}
                  className={`absolute -bottom-1 sm:bottom-2 -right-1 sm:right-0 p-2 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 text-left z-20 shadow-lg ${
                    activeSubsystem === 'blockchain' 
                      ? 'bg-[#15171A] border-[#6D28D9] ring-2 ring-[#6D28D9]/40 scale-105' 
                      : 'bg-[#15171A]/85 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#6D28D9]/20 flex items-center justify-center text-[#a78bfa] shrink-0">
                      <Blocks className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-white/50 tracking-wider uppercase font-mono">BLOCKCHAIN</div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">MONETA CHAIN</div>
                    </div>
                  </div>
                </button>

                {/* 4. Security Beacon (Bottom-Left) */}
                <button
                  onClick={() => setActiveSubsystem('security')}
                  className={`absolute -bottom-1 sm:bottom-2 -left-1 sm:left-0 p-2 sm:p-3.5 rounded-xl border backdrop-blur-md transition-all duration-300 text-left z-20 shadow-lg ${
                    activeSubsystem === 'security' 
                      ? 'bg-[#15171A] border-[#3b82f6] ring-2 ring-[#3b82f6]/40 scale-105' 
                      : 'bg-[#15171A]/85 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6] shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-white/50 tracking-wider uppercase font-mono">SECURITY</div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">Enterprise Core</div>
                    </div>
                  </div>
                </button>

              </div>
            </div>

            {/* Bottom Focused Subsystem Inspection Bar */}
            <div className="relative z-10 pt-4 sm:pt-5 mt-4 border-t border-white/10 bg-[#0c0e12]/80 -mx-5 sm:-mx-7 lg:-mx-8 -mb-5 sm:-mb-7 lg:-mb-8 p-4 sm:p-6 rounded-b-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: subsystemDetails[activeSubsystem].color }} />
                  <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-heading">
                    {subsystemDetails[activeSubsystem].title}
                  </h4>
                </div>
                <div className="flex items-center gap-3 text-[11px] sm:text-xs font-mono">
                  <span className="text-white/60">{subsystemDetails[activeSubsystem].tag}</span>
                  <span className="text-[#2dd4bf] font-bold">{subsystemDetails[activeSubsystem].metric}</span>
                </div>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {subsystemDetails[activeSubsystem].desc}
              </p>
            </div>
          </div>


          {/* ========================================================
              RIGHT COLUMN (lg:col-span-3)
              Contains:
              - Block F: Information Cards Stacked Vertically (Mobile order-6)
              - Block G: Primary CTA Block (Mobile order-3)
             ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-5 contents lg:flex">

            {/* BLOCK F: Right Column — Information Cards */}
            <div className="order-6 lg:order-none flex flex-col gap-4">
              
              {/* Card 1: MONETA CHAIN Highlight */}
              <div className="bg-[#15171A] border border-white/10 hover:border-[#2dd4bf]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#2dd4bf] text-[10px] font-bold tracking-widest uppercase font-mono">
                    BLOCKCHAIN INFRASTRUCTURE
                  </span>
                  <Blocks className="w-4 h-4 text-[#2dd4bf]" />
                </div>
                <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-1.5 group-hover:text-[#2dd4bf] transition-colors">
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

              {/* Card 2: VERA AI Highlight */}
              <div className="bg-[#15171A] border border-white/10 hover:border-[#3b82f6]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#3b82f6] text-[10px] font-bold tracking-widest uppercase font-mono">
                    AI & AUTOMATION
                  </span>
                  <BrainCircuit className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <h3 className="font-heading font-black text-xl text-white uppercase tracking-tight mb-1.5 group-hover:text-[#3b82f6] transition-colors">
                  VERA AI
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-4">
                  Artificial intelligence initiative researching adaptive neural frameworks, intelligent digital experiences, and automated system monitoring.
                </p>
                <button 
                  onClick={() => handleNavClick('#products')}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white/80 hover:text-white transition-colors text-left"
                >
                  <span>EXPLORE VERA AI</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3b82f6]" />
                </button>
              </div>

              {/* Card 3: Core Technology Summary */}
              <div className="bg-[#15171A] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase font-mono">
                    R&D CAPABILITIES
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

            </div>

            {/* BLOCK G: Right Column — Primary CTA Block (Mobile order-3) */}
            <div className="order-3 lg:order-none bg-gradient-to-br from-[#15171A] to-[#202328] border border-white/15 rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1677FF]/15 rounded-bl-full pointer-events-none" />

              <div>
                <span className="text-[#2dd4bf] text-[10px] font-black tracking-[0.25em] uppercase font-mono block mb-2">
                  NEXT-GEN PORTFOLIO
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                  BUILDING WHAT COMES NEXT
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  Explore our complete portfolio of emerging technologies, scalable software, and distributed digital infrastructure.
                </p>
              </div>

              <div className="space-y-3">
                {/* Primary CTA Button */}
                <button 
                  onClick={() => handleNavClick('#technology')}
                  className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1677FF] via-[#3b82f6] to-[#2dd4bf] text-white font-bold tracking-widest text-xs sm:text-sm uppercase rounded-xl shadow-[0_0_25px_rgba(22,119,255,0.4)] hover:shadow-[0_0_35px_rgba(45,212,191,0.5)] hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>EXPLORE OUR TECHNOLOGY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Destination Button */}
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full text-center py-2 text-xs font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-wider"
                >
                  CONNECT WITH VORTEX →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          TRUST BAR & SUPPORTING STATEMENT SECTION
          Directly connects the asymmetric hero grid to the landing page.
         ======================================================== */}
      <div className="w-full bg-[#0a0d14] border-t border-white/10 mt-16 lg:mt-24 relative z-20">
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
