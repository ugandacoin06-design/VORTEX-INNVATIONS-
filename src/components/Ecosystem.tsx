import React from 'react';
import { 
  Blocks, 
  Globe2, 
  Cpu, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake,
  Network
} from 'lucide-react';

export function Ecosystem() {
  const ecosystemEntities = [
    {
      id: "moneta-chain",
      badge: "BLOCKCHAIN INFRASTRUCTURE",
      title: "MONETA CHAIN",
      tagline: "NEXT-GENERATION BLOCKCHAIN INFRASTRUCTURE",
      description: "Explore MONETA CHAIN, its technology, ecosystem, infrastructure, and vision for the future of blockchain.",
      icon: <Blocks className="w-8 h-8 text-[#2dd4bf]" />,
      gradient: "from-[#2dd4bf]/20 via-[#3b82f6]/10 to-transparent",
      borderColor: "border-[#2dd4bf]/30 hover:border-[#2dd4bf]/60",
      accentColor: "#2dd4bf",
      btnText: "VISIT MONETA CHAIN →",
      url: "https://moneta-chain.vercel.app/",
      displayUrl: "moneta-chain.vercel.app",
      statusNote: "Live Official Website",
      highlights: [
        "Programmable decentralized architecture",
        "High-throughput transactional validation",
        "Next-gen developer tooling & smart contract layers",
        "Enterprise-grade security & scalability"
      ]
    },
    {
      id: "moneta-foundation",
      badge: "GLOBAL IMPACT & INITIATIVES",
      title: "MONETA GLOBAL FOUNDATION",
      tagline: "TECHNOLOGY FOR GLOBAL IMPACT",
      description: "Explore MONETA GLOBAL FOUNDATION and its initiatives focused on community development, social impact, opportunity, and positive change.",
      icon: <HeartHandshake className="w-8 h-8 text-[#3b82f6]" />,
      gradient: "from-[#3b82f6]/20 via-[#8b5cf6]/10 to-transparent",
      borderColor: "border-[#3b82f6]/30 hover:border-[#3b82f6]/60",
      accentColor: "#3b82f6",
      btnText: "VISIT MONETA GLOBAL FOUNDATION →",
      url: "https://moneta-globle-foundation.vercel.app",
      displayUrl: "moneta-globle-foundation.vercel.app",
      statusNote: "Live Official Website",
      highlights: [
        "Grassroots community empowerment programs",
        "Digital literacy & technological inclusion",
        "Sustainable socioeconomic development grants",
        "Global partnerships for humanitarian impact"
      ]
    }
  ];

  const officialLinks = [
    {
      entity: "VORTEX INNOVATIONS",
      domain: "Technology & Innovation",
      role: "Core Technology & R&D Parent Company",
      icon: <Cpu className="w-6 h-6 text-[#2dd4bf]" />,
      status: "Active Platform",
      statusColor: "text-[#2dd4bf] bg-[#2dd4bf]/10 border-[#2dd4bf]/20",
      url: "/#about-us",
      isExternal: false
    },
    {
      entity: "MONETA CHAIN",
      domain: "Blockchain Infrastructure",
      role: "Distributed Ledger & Web3 Ecosystem",
      icon: <Network className="w-6 h-6 text-[#2dd4bf]" />,
      status: "Live Official Portal",
      statusColor: "text-[#2dd4bf] bg-[#2dd4bf]/10 border-[#2dd4bf]/20",
      url: "https://moneta-chain.vercel.app/",
      isExternal: true
    },
    {
      entity: "MONETA GLOBAL FOUNDATION",
      domain: "Global Impact & Community",
      role: "Social Impact & Community Initiatives",
      icon: <Globe2 className="w-6 h-6 text-[#3b82f6]" />,
      status: "Live Official Portal",
      statusColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
      url: "https://moneta-globle-foundation.vercel.app",
      isExternal: true
    }
  ];

  return (
    <section id="ecosystem" className="py-28 relative bg-[#060b1a]/75 backdrop-blur-sm overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#3b82f6]/10 via-[#2dd4bf]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#8b5cf6]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#2dd4bf] text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            VORTEX INNOVATIONS — ECOSYSTEM
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-6 font-heading">
            EXPLORE OUR <span className="bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] bg-clip-text text-transparent">ECOSYSTEM</span>
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed">
            VORTEX INNOVATIONS is building a connected ecosystem of technology, blockchain infrastructure, and global-impact initiatives.
          </p>
        </div>

        {/* Featured Ecosystem Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {ecosystemEntities.map((entity) => (
            <div 
              key={entity.id}
              className={`relative rounded-3xl bg-[#0a1128]/80 border ${entity.borderColor} p-8 md:p-12 transition-all duration-300 hover:shadow-[0_0_50px_rgba(45,212,191,0.15)] flex flex-col justify-between overflow-hidden group`}
            >
              {/* Background gradient flare */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${entity.gradient} rounded-bl-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60`} />
              
              <div className="relative z-10">
                {/* Badge & Icon Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[11px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                    {entity.badge}
                  </span>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {entity.icon}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase mb-2 font-heading">
                  {entity.title}
                </h3>
                <h4 className="text-sm font-bold text-[#2dd4bf] tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse" />
                  {entity.tagline}
                </h4>

                <p className="text-white/75 text-base leading-relaxed mb-8">
                  {entity.description}
                </p>

                {/* Core Pillars List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10">
                  {entity.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Note */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={entity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1128] hover:bg-[#2dd4bf] hover:text-[#060b1a] font-bold tracking-widest uppercase text-xs px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] group-hover:translate-x-1"
                >
                  <span>{entity.btnText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                
                <a
                  href={entity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-[#2dd4bf] transition-colors"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#2dd4bf]" />
                  <span className="underline decoration-white/20 underline-offset-4">{entity.displayUrl}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Ecosystem Links Section */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0a1128]/90 to-[#070d1f] border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="text-xs font-black tracking-[0.25em] text-[#2dd4bf] uppercase mb-2">
                  DIRECTORY
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase font-heading">
                  OFFICIAL ECOSYSTEM LINKS
                </h3>
              </div>
              <p className="text-white/60 text-sm max-w-md">
                Connecting technology infrastructure with societal development to drive sustainable global transformation.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {officialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#2dd4bf]/50 p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {item.icon}
                      </div>
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-white tracking-wide uppercase mb-1 font-heading group-hover:text-[#2dd4bf] transition-colors">
                      {item.entity}
                    </h4>
                    <div className="text-xs font-bold text-[#3b82f6] tracking-wider uppercase mb-3">
                      {item.domain}
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {item.role}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50 group-hover:text-white transition-colors">
                    <span className="font-semibold tracking-wider uppercase text-[11px]">
                      {item.isExternal ? "Visit Portal" : "Ecosystem Member"}
                    </span>
                    {item.isExternal ? (
                      <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:text-[#2dd4bf] transition-all" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Ecosystem Manifesto Banner */}
            <div className="text-center py-6 px-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-xs md:text-sm font-black tracking-[0.25em] md:tracking-[0.35em] uppercase text-white/90 font-heading">
                <span className="text-white">ONE ECOSYSTEM.</span>{' '}
                <span className="text-[#3b82f6]">CONNECTED BY VISION.</span>{' '}
                <span className="text-[#2dd4bf]">BUILT FOR THE FUTURE.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
