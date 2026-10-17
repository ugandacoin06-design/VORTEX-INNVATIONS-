import React from 'react';
import { 
  Lightbulb, Gem, ShieldCheck, Lock, Users, Key, 
  Network, BookOpen, Scale, Globe, Target, Rocket,
  Sparkles
} from 'lucide-react';

export function Values() {
  const valuesData = [
    { 
      title: "INNOVATION", 
      icon: Lightbulb, 
      color: "text-[#2dd4bf]",
      desc: [
        "We challenge conventional thinking and continuously search for better ways to solve difficult problems.",
        "We encourage bold ideas, experimentation, research, and the development of technologies that create new possibilities."
      ]
    },
    { 
      title: "EXCELLENCE", 
      icon: Gem, 
      color: "text-[#3b82f6]",
      desc: [
        "We pursue high standards in engineering, design, research, security, and execution.",
        "We do not build technology simply to make it work. We strive to make it reliable, efficient, scalable, and exceptional."
      ]
    },
    { 
      title: "INTEGRITY", 
      icon: ShieldCheck, 
      color: "text-[#2dd4bf]",
      desc: [
        "We operate with honesty, transparency, accountability, and respect.",
        "We believe trust must be earned through our actions, our technology, and the way we conduct business."
      ]
    },
    { 
      title: "SECURITY", 
      icon: Lock, 
      color: "text-[#3b82f6]",
      desc: [
        "Security is fundamental to everything we build.",
        "We design technology with protection, privacy, resilience, responsible access, and digital trust at its core."
      ]
    },
    { 
      title: "CUSTOMER & USER FOCUS", 
      icon: Users, 
      color: "text-[#2dd4bf]",
      desc: [
        "Technology exists to solve problems for people.",
        "We listen, understand real needs, and design products that are useful, accessible, intuitive, and capable of creating genuine value."
      ]
    },
    { 
      title: "OWNERSHIP", 
      icon: Key, 
      color: "text-[#3b82f6]",
      desc: [
        "We take responsibility for our decisions, our technology, our commitments, and our results.",
        "We encourage people to take initiative, solve problems, and follow through."
      ]
    },
    { 
      title: "COLLABORATION", 
      icon: Network, 
      color: "text-[#2dd4bf]",
      desc: [
        "Great technology is built by great teams.",
        "We bring together engineers, researchers, designers, businesses, developers, partners, and innovators to solve problems that cannot be solved alone."
      ]
    },
    { 
      title: "CONTINUOUS LEARNING", 
      icon: BookOpen, 
      color: "text-[#3b82f6]",
      desc: [
        "Technology never stops evolving.",
        "We continuously learn, experiment, research, improve our skills, and adapt to new technological possibilities."
      ]
    },
    { 
      title: "RESPONSIBLE TECHNOLOGY", 
      icon: Scale, 
      color: "text-[#2dd4bf]",
      desc: [
        "We believe powerful technology should be developed responsibly.",
        "We consider security, privacy, reliability, sustainability, and the broader consequences of the technologies we create."
      ]
    },
    { 
      title: "GLOBAL MINDSET", 
      icon: Globe, 
      color: "text-[#3b82f6]",
      desc: [
        "We build from Africa with a global perspective.",
        "We design technology with the ambition to cross borders, connect ecosystems, and compete in international markets."
      ]
    },
    { 
      title: "IMPACT", 
      icon: Target, 
      color: "text-[#2dd4bf]",
      desc: [
        "We measure our success by the value our technology creates.",
        "Our goal is not simply to develop advanced technology, but to transform that technology into solutions that make a meaningful difference."
      ]
    },
    { 
      title: "COURAGE TO LEAD", 
      icon: Rocket, 
      color: "text-[#3b82f6]",
      desc: [
        "We are willing to explore difficult problems, take calculated risks, challenge established assumptions, and pursue ambitious technological goals.",
        "We do not simply follow technological change. We aim to help create it."
      ]
    }
  ];

  return (
    <section id="values" className="relative w-full bg-[#060b1a] border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            Core Company Values
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            At <strong className="text-white">VORTEX INNOVATIONS LTD</strong>, our values define how we build technology, how we work, and how we create long-term impact.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((val, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300 shadow-lg group">
              <val.icon className={`${val.color} w-8 h-8 mb-6 group-hover:scale-110 transition-transform duration-300`} />
              <h4 className="text-white font-bold text-lg mb-4 tracking-wide uppercase">{val.title}</h4>
              <div className="space-y-3">
                {val.desc.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-white/60 text-sm leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values In Three Words */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent opacity-80" />
          
          <Sparkles className="w-12 h-12 text-[#2dd4bf] mx-auto mb-8" />
          
          <h3 className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.4em] uppercase mb-10">
            Our Values In Three Words
          </h3>

          <div className="font-heading font-black text-4xl md:text-5xl tracking-[0.2em] flex flex-wrap justify-center gap-6 md:gap-10 uppercase mb-16">
            <span className="text-white">INNOVATE.</span>
            <span className="text-[#3b82f6]">TRANSFORM.</span>
            <span className="text-[#2dd4bf]">LEAD.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center">
              <h4 className="text-white font-black tracking-widest uppercase mb-3 text-lg">Innovate</h4>
              <p className="text-white/60 text-sm leading-relaxed text-center">Think beyond what exists.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-[#3b82f6] font-black tracking-widest uppercase mb-3 text-lg">Transform</h4>
              <p className="text-white/60 text-sm leading-relaxed text-center">Turn ideas into meaningful technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-[#2dd4bf] font-black tracking-widest uppercase mb-3 text-lg">Lead</h4>
              <p className="text-white/60 text-sm leading-relaxed text-center">Build with the ambition to shape what comes next.</p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <h4 className="text-white/40 text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
              Vortex Innovations Ltd
            </h4>
            <div className="font-heading font-black text-xl md:text-2xl tracking-[0.1em] text-white flex flex-col gap-3 uppercase">
              <span>We build with purpose.</span>
              <span>We engineer with excellence.</span>
              <span>We innovate with courage.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
