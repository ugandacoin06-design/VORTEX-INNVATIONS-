import React from 'react';
import { 
  Blocks, BrainCircuit, TestTube2, ArrowRight, ArrowDown, 
  AlertTriangle, Box, Code, Server, ShieldCheck, Zap, 
  Settings, Layers, Fingerprint, Sparkles, Activity, ExternalLink
} from 'lucide-react';

export function Products() {
  const featuredProducts = [
    {
      title: "MONETA CHAIN",
      subtitle: "Next-Generation Blockchain Technology",
      description: "MONETA CHAIN is a blockchain technology initiative being developed by VORTEX INNOVATIONS LTD. It is focused on developing blockchain infrastructure, programmable digital systems, decentralized applications, digital transactions, and other next-generation blockchain capabilities.",
      status: "UNDER DEVELOPMENT",
      statusColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
      icon: <Blocks className="w-8 h-8" />,
      linkText: "EXPLORE MONETA CHAIN →",
      linkUrl: "https://moneta-chain.vercel.app/"
    },
    {
      title: "VERA AI",
      subtitle: "Intelligent Technology",
      description: "VERA AI is an artificial-intelligence initiative being developed within the VORTEX technology ecosystem. It is being developed to support future intelligent digital experiences, automation, monitoring, interaction, and AI-powered technology systems.",
      status: "UNDER DEVELOPMENT",
      statusColor: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/20",
      icon: <BrainCircuit className="w-8 h-8" />,
      linkText: "EXPLORE VERA AI →"
    },
    {
      title: "MONETA CHAIN TESTNET",
      subtitle: "Blockchain Testing Environment",
      description: "MONETA CHAIN TESTNET is a controlled development and testing environment for MONETA CHAIN. It is intended to allow developers and the VORTEX engineering team to test network functionality, transactions, applications, performance, security, and other blockchain components before potential future production deployment.",
      status: "TESTNET / DEVELOPMENT",
      statusColor: "text-[#2dd4bf] bg-[#2dd4bf]/10 border-[#2dd4bf]/20",
      icon: <TestTube2 className="w-8 h-8" />,
      linkText: "EXPLORE TESTNET →"
    }
  ];

  const futureProducts = [
    "Software platforms",
    "AI systems",
    "Blockchain technologies",
    "Developer tools",
    "Digital infrastructure",
    "Cybersecurity technologies",
    "Automation systems",
    "Digital services",
    "Emerging technology solutions"
  ];

  const developmentSteps = [
    "RESEARCH", "DESIGN", "ENGINEERING", "PROTOTYPE", 
    "TEST", "SECURE", "VALIDATE", "DEPLOY", "SCALE"
  ];

  const productStatuses = [
    {
      label: "UNDER DEVELOPMENT",
      desc: "Technology is actively being researched, designed, or engineered.",
      color: "text-[#3b82f6] border-[#3b82f6]/30 bg-[#3b82f6]/5"
    },
    {
      label: "TESTNET",
      desc: "Technology is being tested in a controlled environment.",
      color: "text-[#2dd4bf] border-[#2dd4bf]/30 bg-[#2dd4bf]/5"
    },
    {
      label: "RESEARCH",
      desc: "The technology is currently being investigated or experimentally developed.",
      color: "text-purple-400 border-purple-400/30 bg-purple-400/5"
    },
    {
      label: "COMING SOON",
      desc: "An upcoming product or technology that has been officially announced.",
      color: "text-orange-400 border-orange-400/30 bg-orange-400/5"
    },
    {
      label: "LIVE",
      desc: "Only displayed when VORTEX officially confirms that the product is launched and operational.",
      color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
    }
  ];

  return (
    <section id="products" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[5%] w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Products
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-8">
            Technology We Are Building
          </h2>
          <div className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Explore the products, platforms, and technology initiatives being researched and developed by <strong className="text-white font-bold">VORTEX INNOVATIONS LTD</strong>.
            </p>
            <p>
              Our product ecosystem is growing. Some technologies are under active development, while others are progressing through testing and research. New products will be officially announced as development progresses.
            </p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-32">
          <div className="mb-12 border-b border-white/10 pb-6 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
              Featured Products
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 hover:border-[#3b82f6]/40 transition-all duration-300 flex flex-col h-full relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none" />
                
                <div className="text-[#3b82f6] mb-8 bg-[#060b1a] w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                  {product.icon}
                </div>
                
                <h4 className="text-white font-black text-2xl tracking-wide uppercase mb-2">
                  {product.title}
                </h4>
                <p className="text-[#2dd4bf] text-sm font-bold tracking-widest uppercase mb-6">
                  {product.subtitle}
                </p>
                
                <p className="text-white/60 text-base leading-relaxed flex-grow mb-8">
                  {product.description}
                </p>
                
                <div className="mt-auto space-y-6">
                  <div className={`inline-flex px-3 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase border ${product.statusColor}`}>
                    STATUS: {product.status}
                  </div>
                  
                  {product.linkUrl ? (
                    <a
                      href={product.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 text-xs font-bold tracking-widest uppercase hover:text-[#2dd4bf] transition-colors group-hover:translate-x-2 transform duration-300"
                    >
                      <span>{product.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#2dd4bf]" />
                    </a>
                  ) : (
                    <button className="w-full text-left text-white/80 text-xs font-bold tracking-widest uppercase hover:text-[#3b82f6] transition-colors group-hover:translate-x-2 transform duration-300">
                      {product.linkText}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Products Coming */}
        <div className="mb-32 bg-[#1e3a8a]/5 border border-[#3b82f6]/20 rounded-3xl p-10 md:p-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Box className="w-12 h-12 text-[#3b82f6] mx-auto mb-6" />
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
              More Products Coming
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              VORTEX INNOVATIONS LTD is continuously researching and developing additional technologies. Future products may include new:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
            {futureProducts.map((item, index) => (
              <span key={index} className="px-6 py-3 bg-[#060b1a] border border-white/10 rounded-full text-white/70 font-medium hover:border-[#2dd4bf]/40 hover:text-white transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-white/60 text-base mb-6 italic">
              These products will be announced officially as they reach appropriate stages of development.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 rounded-full text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              Coming Soon: More VORTEX technology is being built.
            </div>
          </div>
        </div>

        {/* Product Development Journey */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
              Product Development
            </h3>
            <p className="text-[#3b82f6] text-sm font-bold tracking-widest uppercase">
              Every VORTEX product follows a continuous development journey:
            </p>
          </div>
          
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-10 shadow-lg overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-start md:justify-center gap-3 md:gap-4 min-w-max">
              {developmentSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="px-4 md:px-5 py-2 md:py-3 border border-white/20 rounded-full bg-[#060b1a] text-white font-bold tracking-wider text-xs md:text-sm whitespace-nowrap">
                    {step}
                  </div>
                  {index < developmentSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/40 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center text-white/60 text-lg leading-relaxed">
            <p>
              Not every research project will become a released product. Technologies may evolve, change direction, remain experimental, or be discontinued during development.
            </p>
          </div>
        </div>

        {/* Product Status Legend */}
        <div className="mb-32">
          <div className="mb-12 border-b border-white/10 pb-6 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
              Product Status
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productStatuses.map((status, index) => (
              <div key={index} className={`border rounded-xl p-6 flex flex-col ${status.color}`}>
                <h4 className="font-black text-sm tracking-widest uppercase mb-3">
                  {status.label}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  {status.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-20">
          <div className="bg-[#060b1a] border-l-4 border-l-[#3b82f6] border-y border-r border-y-white/10 border-r-white/10 rounded-r-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="bg-[#3b82f6]/10 p-3 rounded-lg shrink-0">
                <AlertTriangle className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-black text-xl tracking-wide uppercase">
                  Important Notice
                </h3>
                <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                  <p>
                    All VORTEX products and technologies presented on this page are subject to change during development.
                  </p>
                  <p>
                    Unless explicitly marked LIVE, a product should not be considered fully launched, commercially available, or production-ready.
                  </p>
                  <p>
                    Product features, specifications, availability, architecture, timelines, and capabilities may change as research and development progresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tighter uppercase mb-6">
            Vortex Innovations Ltd
          </h2>
          
          <p className="text-white/80 text-xl font-medium tracking-wide max-w-3xl mx-auto mb-12">
            Building technology today for what comes next.
          </p>

          <div className="pt-12 border-t border-white/10">
            <div className="font-heading font-black text-2xl md:text-3xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-8 uppercase">
              <span className="text-white">INNOVATE.</span>
              <span className="text-[#3b82f6]">TRANSFORM.</span>
              <span className="text-[#2dd4bf]">LEAD.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
