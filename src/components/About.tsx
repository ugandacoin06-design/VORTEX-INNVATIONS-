import React from 'react';
import { 
  Search, Settings, Lightbulb, ShieldCheck, Activity, Globe, 
  ArrowRight, ArrowDown, Building2, Cpu, Target, FlaskConical, Rocket 
} from 'lucide-react';

export function About() {
  const buildingFocus = [
    {
      title: "Research",
      description: "Exploring new technological possibilities.",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Engineering",
      description: "Turning concepts into functional systems.",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Innovation",
      description: "Developing new approaches to complex problems.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Security",
      description: "Building technology with security and resilience in mind.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Scalability",
      description: "Preparing systems for future growth.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: "Impact",
      description: "Creating technology with meaningful local, African, and global potential.",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const processSteps = [
    "RESEARCH", "DESIGN", "BUILD", "TEST", "SECURE", "VALIDATE", "SCALE"
  ];

  const ecosystemLinks = [
    {
      title: "Our Company",
      description: "Learn who VORTEX is, what we stand for, and where we are going.",
      icon: <Building2 className="w-6 h-6" />,
      href: "#about-us"
    },
    {
      title: "Our Technology",
      description: "Explore the technologies and research areas currently under development.",
      icon: <Cpu className="w-6 h-6" />,
      href: "#technology"
    },
    {
      title: "Our Objectives",
      description: "Understand what VORTEX is working toward in the short and long term.",
      icon: <Target className="w-6 h-6" />,
      href: "#objectives"
    },
    {
      title: "Our Research & Development",
      description: "Explore how we investigate, experiment, prototype, and develop new technologies.",
      icon: <FlaskConical className="w-6 h-6" />,
      href: "#operations"
    },
    {
      title: "Our Future",
      description: "Follow the evolution of VORTEX as our technology portfolio develops.",
      icon: <Rocket className="w-6 h-6" />,
      href: "#impact"
    }
  ];

  return (
    <section id="about-us" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-[#2dd4bf]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Explore the company behind the technology
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-8">
            Discover Vortex
          </h2>
          <div className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              <strong className="text-white font-bold">VORTEX INNOVATIONS LTD</strong> is a private technology and innovation company focused on researching, engineering, and developing advanced digital technologies for the future.
            </p>
            <p>
              From artificial intelligence and blockchain to software engineering, cybersecurity, digital infrastructure, automation, and emerging technologies, VORTEX is building a technology portfolio designed to address real-world challenges and create new possibilities.
            </p>
          </div>
        </div>

        {/* What We Are Building */}
        <div className="mb-32">
          <div className="mb-12 border-b border-white/10 pb-6 text-center md:text-left">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase mb-4">
              What We Are Building
            </h3>
            <p className="text-[#3b82f6] text-lg font-bold tracking-widest uppercase">
              Our technologies are currently under development.
            </p>
            <p className="text-white/60 text-lg mt-2 font-medium">
              We are focused on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingFocus.map((focus, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-[#2dd4bf] mt-1 p-2 bg-[#2dd4bf]/10 rounded-lg shrink-0">
                    {focus.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-black text-lg tracking-wide uppercase mb-2">
                      {focus.title}
                    </h5>
                    <p className="text-white/60 text-base leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-6">
              Our Approach
            </h3>
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
          
          <div className="max-w-3xl mx-auto text-center text-white/70 text-xl leading-relaxed">
            <p>
              We believe meaningful technology is built through continuous research, disciplined engineering, experimentation, and improvement.
            </p>
          </div>
        </div>

        {/* From Africa, Building for the World */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/20 via-transparent to-[#2dd4bf]/10 rounded-3xl border border-white/10 pointer-events-none" />
          <div className="relative p-10 md:p-16 text-center">
            <Globe className="w-12 h-12 text-[#2dd4bf] mx-auto mb-8 opacity-80" />
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-8">
              From Africa, Building for the World
            </h3>
            <div className="max-w-4xl mx-auto space-y-6 text-white/70 text-lg md:text-xl leading-relaxed">
              <p>
                <strong className="text-white">VORTEX INNOVATIONS LTD</strong> is being developed with an African foundation and a global ambition.
              </p>
              <p>
                Our goal is to build technological capabilities, products, platforms, and infrastructure that can eventually serve users and organizations beyond our local market.
              </p>
            </div>
          </div>
        </div>

        {/* Discover the Vortex Ecosystem */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase">
              Discover the Vortex Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace('#', '');
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', link.href);
                  }
                }}
                className={`group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300 flex flex-col h-full ${
                  index === ecosystemLinks.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="text-[#3b82f6] mb-6 group-hover:scale-110 group-hover:text-[#2dd4bf] transition-all duration-300 transform origin-left">
                  {link.icon}
                </div>
                <h4 className="text-white font-black text-xl tracking-wide uppercase mb-3 group-hover:text-[#3b82f6] transition-colors">
                  {link.title}
                </h4>
                <p className="text-white/60 text-base leading-relaxed flex-grow">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Final Conclusion */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Vortex Innovations Ltd
          </h3>
          
          <p className="text-white/90 text-2xl md:text-3xl font-heading font-black uppercase tracking-wide max-w-3xl mx-auto mb-6">
            We are not simply following the future of technology.
            <span className="block text-[#2dd4bf] mt-2">We are building toward it.</span>
          </p>

          <div className="pt-12 mt-12 border-t border-white/10">
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
