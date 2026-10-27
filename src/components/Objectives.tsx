import React from 'react';
import { Target, Flag } from 'lucide-react';

export function Objectives() {
  const objectives = [
    { title: "Develop Advanced Technology", desc: "To research and develop advanced solutions across artificial intelligence, blockchain, software engineering, cybersecurity, digital infrastructure, automation, and emerging technologies." },
    { title: "Build Scalable Technology Products", desc: "To transform technological ideas into reliable, secure, user-focused products and platforms capable of serving growing numbers of users and organizations." },
    { title: "Strengthen Digital Infrastructure", desc: "To develop and support modern digital infrastructure that enables secure, efficient, connected, and scalable digital services." },
    { title: "Drive Research and Innovation", desc: "To establish continuous research and development programs that explore emerging technologies and convert promising innovations into practical solutions." },
    { title: "Develop African Technology", desc: "To build technology, intellectual property, engineering capabilities, and digital products from Africa that can compete in international markets." },
    { title: "Advance Artificial Intelligence", desc: "To develop practical AI technologies that improve automation, information processing, decision support, productivity, and digital experiences." },
    { title: "Advance Blockchain Technology", desc: "To research and develop secure blockchain and distributed technologies for digital transactions, decentralized applications, digital assets, and next-generation digital ecosystems." },
    { title: "Build Secure Technology", desc: "To make cybersecurity, privacy, reliability, resilience, and responsible technology development fundamental parts of VORTEX products and infrastructure." },
    { title: "Develop Technical Talent", desc: "To attract, develop, and support engineers, developers, researchers, designers, and technology professionals capable of building advanced digital systems." },
    { title: "Create Strategic Partnerships", desc: "To collaborate with technology companies, universities, research institutions, developers, businesses, investors, and other organizations to accelerate innovation and technological development." },
    { title: "Support Digital Transformation", desc: "To help organizations adopt modern technology and improve their operations through software, automation, digital platforms, infrastructure, and intelligent systems." },
    { title: "Expand Internationally", desc: "To develop technology with the scalability and reliability required to enter international markets and establish VORTEX as a globally recognized technology company." },
    { title: "Build a Technology Ecosystem", desc: "To create an interconnected ecosystem of products, platforms, infrastructure, developers, users, and partners that can support continuous technological growth." },
    { title: "Create Sustainable Technology Businesses", desc: "To transform successful technologies into sustainable products and businesses capable of generating long-term economic value while continuing to invest in innovation and research." },
    { title: "Lead Through Innovation", desc: "To establish VORTEX INNOVATIONS LTD as a technology company recognized for engineering excellence, innovation, security, research, scalability, and technological impact." }
  ];

  return (
    <section id="objectives" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.4em] uppercase">
              Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            Our Objectives
          </h2>
        </div>

        {/* Core Objective */}
        <div className="mb-24 flex flex-col lg:flex-row gap-10 items-start justify-between border-b border-white/10 pb-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-[#3b82f6] w-10 h-10" />
              <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase">
                Core Objective
              </h3>
            </div>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-medium">
              The core objective of <strong className="text-white">VORTEX INNOVATIONS LTD</strong> is to research, develop, engineer, and deploy innovative technologies that solve real-world problems, strengthen digital infrastructure, and create scalable technology products for local, African, and global markets.
            </p>
          </div>
        </div>

        {/* Strategic Objectives Grid */}
        <div className="mb-32">
          <h3 className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight uppercase mb-16 text-center">
            Strategic Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2dd4bf]/40 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg">
                <div className="text-[#2dd4bf]/10 font-heading font-black text-7xl absolute -top-4 -right-2 group-hover:text-[#2dd4bf]/20 transition-colors pointer-events-none select-none">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
                <h4 className="text-white font-bold text-lg mb-4 relative z-10 w-[85%] leading-snug">{obj.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* One Statement */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#3b82f6]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-80" />
          
          <Flag className="w-12 h-12 text-[#3b82f6] mx-auto mb-8" />
          
          <h3 className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Our Objective In One Statement
          </h3>

          <p className="text-white text-xl md:text-3xl font-medium max-w-4xl mx-auto mb-16 leading-relaxed">
            <strong className="text-white">VORTEX INNOVATIONS LTD</strong> exists to research, engineer, and build advanced technology that transforms ideas into secure, scalable, and impactful digital solutions—building from Africa with the ambition to serve the world.
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
