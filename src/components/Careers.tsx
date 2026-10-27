import React from 'react';
import { 
  Briefcase, Code2, FlaskConical, ShieldCheck, PenTool, 
  Lightbulb, BookOpen, Key, Users, CheckCircle2, Target,
  AlertCircle, ChevronRight
} from 'lucide-react';

export function Careers() {
  const passions = [
    "Technology",
    "Software engineering",
    "Artificial intelligence",
    "Blockchain",
    "Cybersecurity",
    "Research and development",
    "Product development",
    "Digital infrastructure",
    "Design",
    "Business and innovation"
  ];

  const futureRoles = [
    {
      department: "Engineering",
      icon: <Code2 className="w-6 h-6" />,
      roles: [
        "Software Engineers",
        "Backend Engineers",
        "Frontend Engineers",
        "Mobile Developers",
        "Blockchain Engineers",
        "AI/ML Engineers",
        "Infrastructure Engineers"
      ]
    },
    {
      department: "Research & Development",
      icon: <FlaskConical className="w-6 h-6" />,
      roles: [
        "AI Researchers",
        "Blockchain Researchers",
        "Technology Researchers",
        "R&D Engineers"
      ]
    },
    {
      department: "Security",
      icon: <ShieldCheck className="w-6 h-6" />,
      roles: [
        "Cybersecurity Engineers",
        "Security Researchers",
        "Security Operations"
      ]
    },
    {
      department: "Product & Design",
      icon: <PenTool className="w-6 h-6" />,
      roles: [
        "Product Managers",
        "UX/UI Designers",
        "Product Designers"
      ]
    },
    {
      department: "Business",
      icon: <Briefcase className="w-6 h-6" />,
      roles: [
        "Business Development",
        "Partnerships",
        "Marketing",
        "Operations"
      ]
    }
  ];

  const talentApproach = [
    {
      title: "Innovation",
      description: "Think beyond existing solutions.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Learning",
      description: "Continuously develop technical and professional skills.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Ownership",
      description: "Take responsibility for your work and results.",
      icon: <Key className="w-5 h-5" />
    },
    {
      title: "Collaboration",
      description: "Build great technology together.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Integrity",
      description: "Operate with honesty and accountability.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      title: "Excellence",
      description: "Strive for high-quality engineering and execution.",
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <section id="careers" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Careers at Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            Build with us. <br className="hidden md:block"/>Grow with what comes next.
          </h2>
          <div className="text-white/70 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              <strong className="text-white font-bold">VORTEX INNOVATIONS LTD</strong> is a technology and innovation company currently building its foundations, products, research capabilities, and technology ecosystem.
            </p>
            <p>
              Because the company is still developing and scaling, not all departments, positions, or career opportunities are currently available. We are building our team progressively as the company grows.
            </p>
          </div>
        </div>

        {/* Build the Future with Vortex */}
        <div className="mb-24 text-center">
          <h3 className="text-white font-black text-2xl tracking-wide uppercase mb-6">
            Build the future with Vortex
          </h3>
          <p className="text-[#2dd4bf] text-sm font-bold tracking-widest uppercase mb-8">
            We are interested in people who are passionate about:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {passions.map((passion, index) => (
              <span 
                key={index} 
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm font-medium tracking-wide hover:bg-white/10 hover:border-[#3b82f6]/50 hover:text-white transition-all cursor-default"
              >
                {passion}
              </span>
            ))}
          </div>
        </div>

        {/* Current Opportunities Notice */}
        <div className="mb-32">
          <div className="bg-[#1e3a8a]/10 border border-[#3b82f6]/30 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-lg">
            <AlertCircle className="w-10 h-10 text-[#3b82f6] mx-auto mb-6" />
            <h3 className="text-white font-black text-2xl tracking-wide uppercase mb-4">
              Current Opportunities
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Some positions may be available depending on our current development needs. Available opportunities will be published on this page as they are officially opened.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-white/50 text-xs md:text-sm font-medium text-left">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Do not present positions as available unless VORTEX has officially approved them.
            </div>
          </div>
        </div>

        {/* Future Career Opportunities */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-4">
              Future Career Opportunities
            </h3>
            <p className="text-[#2dd4bf] text-sm font-bold tracking-widest uppercase">
              As VORTEX grows, future opportunities may include:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {futureRoles.map((dept, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300">
                <div className="text-[#3b82f6] mb-4">
                  {dept.icon}
                </div>
                <h4 className="text-white font-black text-lg tracking-wide uppercase mb-6 pb-4 border-b border-white/10">
                  {dept.department}
                </h4>
                <ul className="space-y-3">
                  {dept.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                      <ChevronRight className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm italic">
              These are potential future roles, not current vacancies.
            </p>
          </div>
        </div>

        {/* Our Approach to Talent */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-4">
              Our Approach to Talent
            </h3>
            <p className="text-[#3b82f6] text-sm font-bold tracking-widest uppercase">
              We want to build a team that values:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentApproach.map((value, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-[#2dd4bf] mt-1 p-2 bg-[#2dd4bf]/10 rounded-lg shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-black text-lg tracking-wide uppercase mb-2">
                      {value.title}
                    </h5>
                    <p className="text-white/60 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Will Grow With The Company */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase mb-6">
            Careers Will Grow With The Company
          </h3>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              VORTEX is currently in its development stage.
            </p>
            <p>
              As our technology, infrastructure, products, funding, and operations mature, we will gradually expand our teams and open additional career opportunities.
            </p>
            <p className="text-[#3b82f6] font-medium">
              If a position is not currently listed, it should not be assumed that applications are open.
            </p>
          </div>
        </div>

        {/* Conclusion / Join the Future */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Join the Future
          </h3>
          
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tighter uppercase mb-12">
            Vortex Innovations Ltd
          </h2>

          <div className="pt-12 mt-12 border-t border-white/10 mb-12">
            <div className="font-heading font-black text-2xl md:text-3xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-8 uppercase">
              <span className="text-white">INNOVATE.</span>
              <span className="text-[#3b82f6]">TRANSFORM.</span>
              <span className="text-[#2dd4bf]">LEAD.</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#060b1a] border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse" />
            <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
              Current status: Building. Developing. Growing.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
