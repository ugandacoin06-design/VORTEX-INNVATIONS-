import React from 'react';
import { 
  MapPin, Globe, ArrowDown, Code, Users, Lightbulb, 
  Cpu, Building2, Network, Link, Earth, Rocket 
} from 'lucide-react';

export function Impact() {
  return (
    <section id="impact" className="relative w-full bg-[#060b1a]/75 backdrop-blur-sm border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] left-0 w-[600px] h-[600px] bg-[#1e3a8a]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-[#2dd4bf]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.4em] uppercase">
              Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase">
            Our Impact
          </h2>
        </div>

        {/* Local Impact Section */}
        <div className="mb-32">
          <div className="mb-12 flex flex-col md:flex-row gap-8 items-start justify-between border-b border-white/10 pb-10">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#2dd4bf] w-6 h-6" />
                <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
                  Local Impact
                </h3>
              </div>
              <h4 className="text-xl md:text-2xl text-[#3b82f6] font-bold mb-6">
                Building From Uganda. Creating Opportunities for Africa.
              </h4>
            </div>
            <div className="md:w-1/2 text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                <strong className="text-white">VORTEX INNOVATIONS LTD</strong> is committed to contributing to Uganda's growing technology ecosystem by developing innovative solutions, creating opportunities, building technical skills, and supporting digital transformation.
              </p>
              <p>
                Our local impact focuses on turning technology into practical opportunities for individuals, businesses, institutions, and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
              <Code className="text-[#2dd4bf] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Technology and Digital Transformation</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                VORTEX develops modern software, intelligent systems, digital infrastructure, and technology solutions that can help businesses and organizations improve efficiency, security, connectivity, and digital operations.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
              <Users className="text-[#2dd4bf] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Jobs and Skills Development</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                As VORTEX grows, the company aims to create opportunities for software developers, engineers, researchers, designers, AI specialists, cybersecurity professionals, business professionals, interns, and other technology talent.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
              <Lightbulb className="text-[#2dd4bf] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Supporting Young Innovators</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                VORTEX aims to encourage young people to participate in technology through training, mentorship, internships, research, and practical product development opportunities.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
              <Cpu className="text-[#2dd4bf] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Building Technology in Africa</h5>
              <p className="text-white/60 text-sm leading-relaxed space-y-2">
                <span className="block">VORTEX believes Africa should not only consume technology but also build it.</span>
                <span className="block">By developing technology and intellectual property in Africa, VORTEX aims to contribute to the growth of the continent's digital economy and strengthen its technology capabilities.</span>
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#2dd4bf]/30 hover:bg-white/10 transition-all duration-300">
              <Building2 className="text-[#2dd4bf] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Supporting Businesses</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                VORTEX develops solutions that can help businesses adopt modern technology, automate processes, improve digital operations, strengthen security, and reach new opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a8a]/20 to-[#2dd4bf]/10 border border-[#2dd4bf]/30 rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2dd4bf]/10 rounded-full blur-2xl" />
              <h5 className="text-[#2dd4bf] text-[10px] font-black tracking-widest uppercase mb-2">Our Local Goal</h5>
              <p className="text-white font-bold text-lg leading-snug mb-6 relative z-10">
                Our goal is to build a strong technology foundation in Uganda and use that foundation to expand across Africa.
              </p>
              <div className="flex flex-col gap-2 font-black tracking-widest text-[11px] uppercase text-white/80 relative z-10">
                <span>BUILD LOCALLY.</span>
                <span>CREATE OPPORTUNITIES.</span>
                <span className="text-[#2dd4bf]">SCALE ACROSS AFRICA.</span>
              </div>
            </div>
          </div>
        </div>


        {/* Global Impact Section */}
        <div className="mb-24">
          <div className="mb-12 flex flex-col md:flex-row gap-8 items-start justify-between border-b border-white/10 pb-10">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#3b82f6] w-6 h-6" />
                <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight uppercase">
                  Global Impact
                </h3>
              </div>
              <h4 className="text-xl md:text-2xl text-[#2dd4bf] font-bold mb-6">
                From Africa to the World.
              </h4>
            </div>
            <div className="md:w-1/2 text-white/70 text-lg leading-relaxed space-y-4">
              <p>
                <strong className="text-white">VORTEX INNOVATIONS LTD</strong> is building technology with a global perspective.
              </p>
              <p>
                Our ambition is to create products, platforms, and digital infrastructure that can serve people, businesses, developers, and organizations beyond geographical boundaries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 lg:col-span-1">
              <Network className="text-[#3b82f6] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Global Technology</h5>
              <p className="text-white/60 text-sm leading-relaxed space-y-2">
                <span className="block">VORTEX develops technology with scalability, security, accessibility, reliability, and international usability in mind.</span>
                <span className="block">Our solutions are designed to have the potential to operate across different markets and environments.</span>
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 lg:col-span-1">
              <Link className="text-[#3b82f6] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Connecting People and Markets</h5>
              <p className="text-white/60 text-sm leading-relaxed space-y-2">
                <span className="block">Technology can connect people, businesses, developers, and organizations across borders.</span>
                <span className="block">VORTEX aims to contribute to a more connected digital economy through innovative platforms and technology infrastructure.</span>
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 lg:col-span-1">
              <Earth className="text-[#3b82f6] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">International Innovation</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                VORTEX seeks to collaborate with technology companies, developers, researchers, universities, entrepreneurs, investors, and organizations around the world. These collaborations can help exchange knowledge, accelerate innovation, and create new technological opportunities.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 md:col-span-1 lg:col-span-2">
              <Rocket className="text-[#3b82f6] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">Solving Global Problems</h5>
              <p className="text-white/60 text-sm leading-relaxed">
                VORTEX focuses on technology that can address challenges that extend beyond individual countries, including digital access, business efficiency, automation, secure digital infrastructure, financial technology, education, digital identity, and information systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/30 hover:bg-white/10 transition-all duration-300 lg:col-span-1">
              <Globe className="text-[#3b82f6] w-6 h-6 mb-4" />
              <h5 className="text-white font-bold text-lg mb-3">African Innovation on the Global Stage</h5>
              <p className="text-white/60 text-sm leading-relaxed space-y-2">
                <span className="block">VORTEX believes world-class technology can be built in Africa and serve the world.</span>
                <span className="block">Our long-term ambition is to develop technology from Africa that can compete internationally, create global opportunities, and demonstrate the capabilities of African innovation.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Our Impact Vision */}
        <div className="mt-20 text-center bg-gradient-to-b from-[#1e3a8a]/20 to-transparent border border-[#2dd4bf]/20 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent opacity-80" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[10px] bg-[#2dd4bf]/20 blur-xl" />

          <h3 className="text-[#2dd4bf] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">
            Our Impact Vision
          </h3>
          <p className="text-white/80 text-xl font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
            VORTEX INNOVATIONS LTD aims to create a technology ecosystem that begins with local impact and grows toward global impact.
          </p>

          <div className="flex flex-col items-center gap-6 mb-16 font-heading font-black text-5xl md:text-6xl text-white tracking-widest uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">UGANDA</span>
            <ArrowDown className="w-8 h-8 text-[#3b82f6]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">AFRICA</span>
            <ArrowDown className="w-8 h-8 text-[#2dd4bf]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">THE WORLD</span>
          </div>

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Built Locally. Designed Globally.
          </h4>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            We build technology where we are, create opportunities where we operate, and develop solutions with the ambition to reach the world.
          </p>

          <div className="font-heading font-black text-xl md:text-2xl tracking-[0.2em] flex flex-wrap justify-center gap-4 md:gap-8 uppercase">
            <span className="text-white">INNOVATE.</span>
            <span className="text-[#3b82f6]">TRANSFORM.</span>
            <span className="text-[#2dd4bf]">LEAD.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
