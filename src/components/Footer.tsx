import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Twitter, Linkedin, Github, Blocks, HeartHandshake, Cpu, Network, Globe2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export function Footer() {

  return (
    <footer className="bg-[#0a1128] border-t border-white/5 text-white pt-24 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2dd4bf]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-8">
              <Logo />
            </div>
            <div className="font-heading font-black text-lg md:text-xl tracking-[0.15em] mb-6 flex flex-col gap-1 uppercase">
              <span className="text-white">INNOVATE.</span>
              <span className="text-[#3b82f6]">TRANSFORM.</span>
              <span className="text-[#2dd4bf]">LEAD.</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              VORTEX INNOVATIONS LTD is a private technology and innovation company developing advanced software, artificial intelligence, blockchain technology, digital infrastructure, cybersecurity solutions, and emerging technologies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#2dd4bf] hover:border-[#2dd4bf]/40 hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#3b82f6] hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Company</h4>
              <a href="/#about-us" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">About Us</a>
              <a href="/#ecosystem" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Our Ecosystem</a>
              <a href="/#operations" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">What We Do</a>
              <a href="/#about-us" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Our Vision</a>
              <a href="/#about-us" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Our Mission</a>
              <a href="/#objectives" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Our Objectives</a>
              <a href="/#careers" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Careers</a>
              <a href="/#contact" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">Contact Us</a>
            </div>

            {/* Technology */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Technology</h4>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Artificial Intelligence</a>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Blockchain</a>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Software Engineering</a>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Digital Infrastructure</a>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Cybersecurity</a>
              <a href="/#operations" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Research & Development</a>
              <a href="/#technology" className="text-white/60 hover:text-[#3b82f6] text-sm transition-colors">Emerging Technologies</a>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Products</h4>
              <a href="/#products" className="text-white/60 hover:text-white text-sm transition-colors">Products</a>
              <a href="/#products" className="text-white/60 hover:text-white text-sm transition-colors">Platforms</a>
              <a href="/#ecosystem" className="text-white/60 hover:text-white text-sm transition-colors">Ecosystem Portals</a>
              <a href="/#technology" className="text-white/60 hover:text-white text-sm transition-colors">Technology Ecosystem</a>
              <a href="/#news" className="text-white/60 hover:text-white text-sm transition-colors">Product Updates</a>
            </div>

            {/* Legal & Policies */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">Legal & Policies</h4>
              <Link to="/legal" className="text-[#2dd4bf] hover:text-white text-sm font-bold transition-colors">Legal & Policies Center</Link>
              <Link to="/legal/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/legal/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/legal/cookie-policy" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              <Link to="/legal/acceptable-use" className="text-white/60 hover:text-white text-sm transition-colors">Acceptable Use Policy</Link>
              <Link to="/legal/security-policy" className="text-white/60 hover:text-white text-sm transition-colors">Security</Link>
              <Link to="/legal/intellectual-property" className="text-white/60 hover:text-white text-sm transition-colors">Intellectual Property</Link>
              <Link to="/legal/responsible-disclosure" className="text-white/60 hover:text-white text-sm transition-colors">Responsible Disclosure</Link>
              <Link to="/legal/accessibility-statement" className="text-white/60 hover:text-white text-sm transition-colors">Accessibility Statement</Link>
            </div>
          </div>
        </div>

        {/* VORTEX INNOVATIONS — ECOSYSTEM Showcase */}
        <div className="mb-20 rounded-3xl bg-[#060b1a]/90 border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6]/10 via-[#2dd4bf]/5 to-[#8b5cf6]/10 opacity-70 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#2dd4bf] text-[11px] font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3 h-3" />
                VORTEX INNOVATIONS — ECOSYSTEM
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-4 font-heading">
                EXPLORE OUR ECOSYSTEM
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                VORTEX INNOVATIONS is building a connected ecosystem of technology, blockchain infrastructure, and global-impact initiatives.
              </p>
            </div>

            {/* Ecosystem Dual Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Moneta Chain Card */}
              <div className="rounded-2xl bg-white/[0.03] border border-[#2dd4bf]/30 hover:border-[#2dd4bf]/60 p-8 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/20">
                      BLOCKCHAIN INFRASTRUCTURE
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#2dd4bf]">
                      <Blocks className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-black text-white tracking-wider uppercase mb-1 font-heading">
                    MONETA CHAIN
                  </h4>
                  <div className="text-xs font-bold text-[#2dd4bf] tracking-widest uppercase mb-4">
                    NEXT-GENERATION BLOCKCHAIN INFRASTRUCTURE
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Explore MONETA CHAIN, its technology, ecosystem, infrastructure, and vision for the future of blockchain.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href="https://moneta-chain.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1128] hover:bg-[#2dd4bf] hover:text-[#060b1a] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl text-xs transition-all shadow-md hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                  >
                    <span>VISIT MONETA CHAIN &rarr;</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://moneta-chain.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/60 hover:text-[#2dd4bf] transition-colors"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-[#2dd4bf]" />
                    <span className="underline decoration-white/20 underline-offset-4">moneta-chain.vercel.app</span>
                  </a>
                </div>
              </div>

              {/* Moneta Global Foundation Card */}
              <div className="rounded-2xl bg-white/[0.03] border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 p-8 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                      GLOBAL IMPACT
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#3b82f6]">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-black text-white tracking-wider uppercase mb-1 font-heading">
                    MONETA GLOBAL FOUNDATION
                  </h4>
                  <div className="text-xs font-bold text-[#3b82f6] tracking-widest uppercase mb-4">
                    TECHNOLOGY FOR GLOBAL IMPACT
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Explore MONETA GLOBAL FOUNDATION and its initiatives focused on community development, social impact, opportunity, and positive change.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href="https://moneta-globle-foundation.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1128] hover:bg-[#3b82f6] hover:text-white font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl text-xs transition-all shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  >
                    <span>VISIT MONETA GLOBAL FOUNDATION &rarr;</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://moneta-globle-foundation.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/60 hover:text-[#3b82f6] transition-colors"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-[#3b82f6]" />
                    <span className="underline decoration-white/20 underline-offset-4">moneta-globle-foundation.vercel.app</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Ecosystem Links Grid */}
            <div className="pt-8 border-t border-white/10 mb-8">
              <div className="text-xs font-bold text-white/50 tracking-widest uppercase mb-6 text-center">
                OFFICIAL ECOSYSTEM LINKS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="/#about-us"
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/20 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-[#2dd4bf] group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white tracking-wider uppercase group-hover:text-[#2dd4bf] transition-colors">VORTEX INNOVATIONS</div>
                      <div className="text-xs text-white/50">Technology & Innovation</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#2dd4bf] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://moneta-chain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-[#2dd4bf]/30 hover:border-[#2dd4bf] flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-[#2dd4bf] group-hover:scale-110 transition-transform">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white tracking-wider uppercase group-hover:text-[#2dd4bf] transition-colors">MONETA CHAIN</div>
                      <div className="text-xs text-white/50">Blockchain Infrastructure</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#2dd4bf] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://moneta-globle-foundation.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-[#3b82f6]/30 hover:border-[#3b82f6] flex items-center justify-between transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-[#3b82f6] group-hover:scale-110 transition-transform">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white tracking-wider uppercase group-hover:text-[#3b82f6] transition-colors">MONETA GLOBAL FOUNDATION</div>
                      <div className="text-xs text-white/50">Global Impact & Community</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Ecosystem Manifesto */}
            <div className="text-center text-xs md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] uppercase py-3 text-white/90">
              <span className="text-[#2dd4bf]">ONE ECOSYSTEM.</span>{' '}
              <span className="text-[#3b82f6]">CONNECTED BY VISION.</span>{' '}
              <span className="text-white">BUILT FOR THE FUTURE.</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
          <div className="text-center text-white/50 text-sm tracking-widest uppercase font-bold">
            &copy; {new Date().getFullYear()} VORTEX INNOVATIONS LTD. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[11px] text-white/40 tracking-[0.05em] uppercase font-bold">
            <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/security-policy" className="hover:text-white transition-colors">Security</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/intellectual-property" className="hover:text-white transition-colors">Intellectual Property</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/responsible-disclosure" className="hover:text-white transition-colors">Responsible Disclosure</Link>
            <span className="text-white/20">|</span>
            <Link to="/legal/accessibility-statement" className="hover:text-white transition-colors">Accessibility</Link>
          </div>

          <div className="mt-8 text-center text-[#2dd4bf] text-[10px] font-black tracking-[0.3em] uppercase">
            Vortex Innovations Ltd <br className="md:hidden" /><span className="hidden md:inline"> — </span> Innovate. Transform. Lead.
          </div>
        </div>

      </div>
    </footer>
  );
}

