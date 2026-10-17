import React from 'react';
import { 
  BrainCircuit, Blocks, Code, Shield, Server, 
  Fingerprint, Zap, Database, FlaskConical,
  ArrowRight, ShieldCheck, Cog, Activity, ArrowDown
} from 'lucide-react';

export function Technology() {
  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "Research and development of intelligent systems, AI-powered applications, automation, machine learning, and digital intelligence.",
      status: "UNDER DEVELOPMENT",
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: "Blockchain Technology",
      description: "Research and development of distributed networks, decentralized systems, digital infrastructure, programmable technologies, and blockchain-based applications.",
      status: "UNDER DEVELOPMENT",
      icon: <Blocks className="w-6 h-6" />
    },
    {
      title: "Software Engineering",
      description: "Development of scalable software architectures, applications, platforms, APIs, and digital systems.",
      status: "UNDER DEVELOPMENT",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Cybersecurity",
      description: "Development and research focused on secure applications, infrastructure protection, identity security, data protection, and resilient digital systems.",
      status: "UNDER DEVELOPMENT",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Digital Infrastructure",
      description: "Research into scalable computing, networking, storage, distributed systems, and infrastructure supporting future digital platforms.",
      status: "UNDER DEVELOPMENT",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Digital Identity",
      description: "Research into secure authentication, digital credentials, identity systems, and trusted digital interactions.",
      status: "UNDER DEVELOPMENT",
      icon: <Fingerprint className="w-6 h-6" />
    },
    {
      title: "Automation",
      description: "Development of intelligent and software-driven systems designed to automate workflows, processes, and digital operations.",
      status: "UNDER DEVELOPMENT",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Data & Digital Intelligence",
      description: "Research into data processing, analytics, intelligent information systems, and technologies that transform data into useful digital intelligence.",
      status: "UNDER DEVELOPMENT",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Emerging Technologies",
      description: "Continuous research into new and emerging technologies that could become future VORTEX products, platforms, or infrastructure.",
      status: "RESEARCH & DEVELOPMENT",
      icon: <FlaskConical className="w-6 h-6" />
    }
  ];

  const processSteps = [
    "RESEARCH", "DESIGN", "ENGINEER", "PROTOTYPE", 
    "TEST", "SECURE", "VALIDATE", "DEPLOY", "SCALE"
  ];

  const principles = [
    {
      title: "INNOVATION",
      description: "Explore what is possible.",
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      title: "SECURITY",
      description: "Build with protection from the beginning.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "ENGINEERING",
      description: "Turn concepts into reliable systems.",
      icon: <Cog className="w-5 h-5" />
    },
    {
      title: "SCALABILITY",
      description: "Prepare technology for future growth.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "RESPONSIBILITY",
      description: "Develop technology thoughtfully and responsibly.",
      icon: <Fingerprint className="w-5 h-5" />
    },
    {
      title: "CONTINUOUS DEVELOPMENT",
      description: "Improve as technology evolves.",
      icon: <ArrowRight className="w-5 h-5" />
    }
  ];

  return (
    <section id="technology" className="relative w-full bg-[#060b1a] border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-[10%] left-0 w-[700px] h-[700px] bg-[#2dd4bf]/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Building the technologies of tomorrow
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-8">
            Explore Our Technology
          </h2>
          <div className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              <strong className="text-white font-bold">VORTEX INNOVATIONS LTD</strong> is researching, designing, and developing advanced technologies across multiple fields. Our technology portfolio is currently under development, with projects progressing through research, engineering, prototyping, testing, and validation.
            </p>
            <p>
              We are building the technological foundation for future products, platforms, and digital infrastructure.
            </p>
          </div>
        </div>

        {/* Technology Areas */}
        <div className="mb-32">
          <div className="mb-12 border-b border-white/10 pb-6 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
              Our Technology Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
                <div className="text-[#3b82f6] mb-6">
                  {tech.icon}
                </div>
                <h5 className="text-white font-bold text-xl mb-4">{tech.title}</h5>
                <p className="text-white/60 text-base leading-relaxed flex-grow mb-8">
                  {tech.description}
                </p>
                <div className="mt-auto">
                  <div className={`inline-flex px-3 py-1.5 rounded-sm text-[10px] font-black tracking-widest uppercase ${
                    tech.status === 'UNDER DEVELOPMENT' 
                      ? 'bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20'
                      : 'bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20'
                  }`}>
                    STATUS: {tech.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
              From Research to Real Technology
            </h3>
            <p className="text-[#3b82f6] text-lg font-bold tracking-widest uppercase">
              Our development process follows:
            </p>
          </div>
          
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-10 shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {processSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="px-5 py-3 border border-white/20 rounded-full bg-[#060b1a] text-white font-bold tracking-wider text-sm md:text-base">
                    {step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-white/40 hidden md:block" />
                  )}
                  {index < processSteps.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-white/40 block md:hidden" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center text-white/60 text-lg leading-relaxed">
            <p>
              Not every project will necessarily become a commercial product. Technologies may evolve, change direction, remain experimental, or be discontinued as research and testing progress.
            </p>
          </div>
        </div>

        {/* Technology Principles */}
        <div className="mb-32">
          <div className="mb-16 border-b border-white/10 pb-6 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
              Our Technology Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-[#2dd4bf] mt-1 p-2 bg-[#2dd4bf]/10 rounded-lg">
                    {principle.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-black text-lg tracking-wide uppercase mb-2">
                      {principle.title}
                    </h5>
                    <p className="text-white/60 text-base leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Building What Comes Next - Conclusion */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/10 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Building What Comes Next
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              VORTEX INNOVATIONS LTD is not presenting these technologies as finished products. We are building them.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Our current focus is on research, experimentation, engineering, prototyping, testing, and validation.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              As development progresses, selected technologies may become future products, platforms, services, or infrastructure.
            </p>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h4 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 uppercase tracking-widest">
              VORTEX INNOVATIONS LTD
            </h4>
            <div className="font-heading font-black text-xl md:text-2xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-8 uppercase mb-8">
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

