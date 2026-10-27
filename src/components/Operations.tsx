import React from 'react';
import { 
  ArrowDown, GitBranch, Code, ShieldCheck, Rocket, 
  Settings, RefreshCw, Maximize, Briefcase, Globe,
  Search, PenTool, Database, Cpu, PieChart, Users, LineChart
} from 'lucide-react';

export function Operations() {
  const steps = [
    {
      title: "IDENTIFY",
      desc: "VORTEX begins by identifying important problems, technology gaps, market opportunities, and emerging possibilities. We study the problem, understand the users and environment, and determine whether technology can provide a meaningful solution.",
      icon: Search
    },
    {
      title: "RESEARCH",
      desc: "Our teams investigate the technologies, architectures, tools, and approaches required to solve the identified problem. Research may involve: Artificial intelligence, Blockchain, Software architecture, Cybersecurity, Digital infrastructure, Automation, Data systems, and Emerging technologies.",
      icon: Database
    },
    {
      title: "DESIGN",
      desc: "Once an opportunity is validated, VORTEX designs the technical architecture, product experience, system requirements, security model, and development strategy. The objective is to establish a strong foundation before significant engineering resources are committed.",
      icon: PenTool
    },
    {
      title: "ENGINEER",
      desc: "Our engineers transform designs and technical concepts into functioning systems. This includes: Software development, Infrastructure engineering, API development, Database engineering, AI development, Blockchain development, Security engineering, and System integration.",
      icon: Code
    },
    {
      title: "TEST & SECURE",
      desc: "Technology is tested before deployment. VORTEX evaluates functionality, performance, reliability, security, scalability, and user experience. Security is integrated throughout development rather than added only at the end.",
      icon: ShieldCheck
    },
    {
      title: "DEPLOY",
      desc: "Validated technology is deployed into its intended environment. Deployment may involve cloud infrastructure, servers, networks, applications, APIs, blockchain networks, or other digital infrastructure depending on the product.",
      icon: Rocket
    },
    {
      title: "OPERATE",
      desc: "After deployment, VORTEX monitors and maintains its technology. Operations can include: System monitoring, Performance monitoring, Security monitoring, Infrastructure management, Technical support, Data management, Incident response, and Reliability management.",
      icon: Settings
    },
    {
      title: "IMPROVE",
      desc: "VORTEX continuously collects technical and user feedback to identify opportunities for improvement. Products are updated, optimized, secured, and expanded as technology and user requirements evolve.",
      icon: RefreshCw
    },
    {
      title: "SCALE",
      desc: "When a technology demonstrates product-market fit and operational stability, VORTEX can scale it to additional users, organizations, industries, and geographic markets. The company designs its technology with scalability in mind from the beginning.",
      icon: Maximize
    },
    {
      title: "COMMERCIALIZE",
      desc: "VORTEX can transform successful technology into sustainable products and services. Commercial activities may include: Product sales, Software services, Technology licensing, Platform services, Enterprise solutions, Strategic partnerships, and Other technology-based business models.",
      icon: Briefcase
    },
    {
      title: "BUILD THE ECOSYSTEM",
      desc: "VORTEX does not operate only through individual products. The company aims to develop an interconnected technology ecosystem where its products, infrastructure, developers, partners, customers, and users can create additional value.",
      icon: Globe
    }
  ];

  const orgStructure = [
    { title: "TECHNOLOGY & ENGINEERING", desc: "Builds software, infrastructure, platforms, and technical systems.", icon: Code },
    { title: "RESEARCH & DEVELOPMENT", desc: "Explores emerging technologies and develops new technical capabilities.", icon: Database },
    { title: "PRODUCT", desc: "Defines product requirements, user needs, roadmaps, and product strategy.", icon: PieChart },
    { title: "SECURITY", desc: "Protects systems, infrastructure, data, identities, and technology operations.", icon: ShieldCheck },
    { title: "BUSINESS & OPERATIONS", desc: "Manages company operations, finance, administration, commercial activities, and organizational growth.", icon: Briefcase },
    { title: "SALES & BUSINESS DEVELOPMENT", desc: "Builds customer relationships, commercial opportunities, partnerships, and market expansion.", icon: LineChart },
    { title: "PEOPLE & TALENT", desc: "Builds the teams, skills, culture, and working environment required to execute the company's objectives.", icon: Users }
  ];

  const cycleSteps = [
    "IDENTIFY",
    "RESEARCH",
    "DESIGN",
    "ENGINEER",
    "TEST & SECURE",
    "DEPLOY",
    "OPERATE",
    "IMPROVE",
    "SCALE",
    "COMMERCIALIZE",
    "RESEARCH AGAIN"
  ];

  return (
    <section id="operations" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-[#1e3a8a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            How Vortex Operates
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">VORTEX INNOVATIONS LTD</strong> operates as a technology and innovation company that combines research, engineering, product development, technology infrastructure, and business operations to transform ideas and real-world problems into practical technology solutions.
          </p>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6">
            Our operating model is designed to support innovation, security, scalability, continuous development, and long-term growth.
          </p>
        </div>

        {/* Operating Steps Grid */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg">
              <div className="text-[#3b82f6]/10 font-heading font-black text-7xl absolute -top-4 -right-2 group-hover:text-[#3b82f6]/20 transition-colors pointer-events-none select-none">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>
              <step.icon className="w-8 h-8 text-[#3b82f6] mb-6 relative z-10" />
              <h4 className="text-white font-bold text-lg mb-4 relative z-10 w-[85%] leading-snug uppercase tracking-wide">{step.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Vortex Operating Cycle */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase">
              Vortex Operating Cycle
            </h3>
            <p className="text-white/60 text-sm mt-4 uppercase tracking-widest">A continuous technology-development cycle.</p>
          </div>
          
          <div className="max-w-xl mx-auto flex flex-col items-center">
            {cycleSteps.map((step, index, array) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center w-full relative z-10">
                  <div className={`w-full bg-white/5 border ${index === array.length - 1 ? 'border-[#2dd4bf]/50 bg-[#2dd4bf]/5' : 'border-white/10'} rounded-2xl p-5 text-center hover:border-[#3b82f6]/40 transition-all hover:bg-white/10 shadow-lg`}>
                    <h4 className={`${index === array.length - 1 ? 'text-[#2dd4bf]' : 'text-white'} font-black text-lg md:text-xl tracking-widest uppercase`}>
                      {step}
                    </h4>
                  </div>
                  {index < array.length - 1 && (
                    <div className="h-10 border-l-2 border-white/20 border-dashed flex items-center justify-center relative">
                      <ArrowDown className="w-5 h-5 text-[#3b82f6]/60 absolute" />
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* How The Company is Organized */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-4">
              How The Company Is Organized
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              VORTEX can operate through specialized functions that work together:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orgStructure.map((org, i) => (
              <div key={i} className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2dd4bf]/40 hover:bg-white/10 transition-all duration-300 shadow-lg ${i === orgStructure.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <org.icon className="w-6 h-6 text-[#2dd4bf] mb-4" />
                <h4 className="text-white font-bold text-[13px] tracking-widest uppercase mb-3 leading-snug">{org.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Operating Principle */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <GitBranch className="w-12 h-12 text-[#3b82f6] mx-auto mb-8" />
          
          <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Our Operating Principle
          </h3>

          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            VORTEX operates around one fundamental principle:
          </p>

          <p className="text-[#2dd4bf] text-2xl md:text-3xl font-heading font-black uppercase tracking-wide max-w-4xl mx-auto mb-16 leading-tight border-y border-white/10 py-10">
            DO NOT BUILD TECHNOLOGY JUST BECAUSE IT IS POSSIBLE. BUILD TECHNOLOGY BECAUSE IT CAN CREATE VALUE.
          </p>

          <p className="text-white/70 text-lg mb-10">
            Every major initiative should therefore answer four questions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center shrink-0 text-[#3b82f6] font-black text-sm">01</div>
              <p className="text-white font-bold text-lg pt-1">What problem are we solving?</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center shrink-0 text-[#3b82f6] font-black text-sm">02</div>
              <p className="text-white font-bold text-lg pt-1">Why is technology the right solution?</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center shrink-0 text-[#3b82f6] font-black text-sm">03</div>
              <p className="text-white font-bold text-lg pt-1">Can we build it securely and reliably?</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center shrink-0 text-[#3b82f6] font-black text-sm">04</div>
              <p className="text-white font-bold text-lg pt-1">Can it create sustainable value at scale?</p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h4 className="text-white/40 text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
              Vortex Innovations Ltd
            </h4>
            <div className="font-heading font-black text-xl md:text-2xl tracking-[0.1em] text-white flex flex-col gap-3 uppercase mb-10">
              <span>Research the future.</span>
              <span>Engineer the present.</span>
              <span>Build what comes next.</span>
            </div>
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
