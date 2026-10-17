import React, { useState } from 'react';
import { 
  Mail, Building2, Code, ShieldCheck, Newspaper, 
  Send, MapPin, Phone, AtSign, Globe, CheckCircle2, ChevronDown
} from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    reason: '',
    subject: '',
    message: ''
  });

  const contactChannels = [
    {
      title: "General Inquiries",
      description: "For general questions about VORTEX INNOVATIONS LTD, its technology, activities, or website.",
      icon: <Mail className="w-5 h-5" />,
      actionText: "Contact General Support →",
      reasonValue: "General Inquiry"
    },
    {
      title: "Business & Partnerships",
      description: "For organizations interested in partnerships, collaborations, technology opportunities, or business relationships.",
      icon: <Building2 className="w-5 h-5" />,
      actionText: "Contact Business Team →",
      reasonValue: "Business / Partnership"
    },
    {
      title: "Technology & Developers",
      description: "For developers or technical teams with questions about VORTEX technology, APIs, platforms, or development opportunities.",
      icon: <Code className="w-5 h-5" />,
      actionText: "Contact Technology Team →",
      reasonValue: "Developer"
    },
    {
      title: "Security",
      description: "For reporting a potential security vulnerability or security-related issue.",
      icon: <ShieldCheck className="w-5 h-5" />,
      actionText: "Report a Security Issue →",
      reasonValue: "Security"
    },
    {
      title: "Media & Press",
      description: "For journalists, media organizations, interviews, company information, or official media inquiries.",
      icon: <Newspaper className="w-5 h-5" />,
      actionText: "Contact Media Team →",
      reasonValue: "Media / Press"
    }
  ];

  const handleChannelClick = (reason: string) => {
    setFormData(prev => ({ ...prev, reason }));
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setValidationErrors({});
    
    // Client-side validation
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.reason) errors.reason = 'Please select a reason for contact.';
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    } else if (formData.message.trim().length > 3000) {
      errors.message = 'Message must be less than 3000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.code === 'EMAIL_ALREADY_EXISTS') {
          throw new Error('EMAIL_ALREADY_EXISTS');
        }
        throw new Error(data.error || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      if (err.message === 'EMAIL_ALREADY_EXISTS') {
        setError('EMAIL_ALREADY_EXISTS');
      } else if (err.message === 'Failed to save the message to the database.') {
        // If the backend explicitly told us the DB rejected it, we show the generic message
        setError('We couldn\'t send your message right now. Please check your information and try again.');
      } else {
        // Show other specific backend errors (like rate limiting, etc.)
        setError(err.message || 'We couldn\'t send your message right now. Please check your information and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative w-full bg-[#060b1a] border-t border-white/5 pt-24 pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#1e3a8a]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#3b82f6] text-[11px] font-bold tracking-[0.4em] uppercase">
              Contact Vortex Innovations Ltd
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-6">
            Let's connect, collaborate, <br className="hidden md:block"/>and build what comes next.
          </h2>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you have a technology inquiry, partnership proposal, business opportunity, developer question, media inquiry, or general question, use the appropriate contact channel below.
          </p>
        </div>

        {/* Contact Channels */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactChannels.map((channel, index) => (
              <div 
                key={index} 
                className={`bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#3b82f6]/40 hover:bg-white/10 transition-all duration-300 flex flex-col h-full ${
                  index >= 3 && contactChannels.length === 5 ? 'lg:col-span-1.5' : ''
                }`}
              >
                <div className="text-[#3b82f6] mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3 tracking-wide uppercase">
                  {channel.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-grow mb-8">
                  {channel.description}
                </p>
                <button 
                  onClick={() => handleChannelClick(channel.reasonValue)}
                  className="text-[#2dd4bf] text-sm font-bold tracking-widest uppercase hover:text-white transition-colors text-left flex items-center gap-2"
                >
                  {channel.actionText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12" id="contact-form">
            <h3 className="text-white font-black text-2xl tracking-wide uppercase mb-8">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <CheckCircle2 className="w-16 h-16 text-[#2dd4bf] mx-auto mb-6" />
                <h4 className="text-white font-bold text-xl mb-4">Message Sent Successfully</h4>
                <p className="text-white/70 text-lg leading-relaxed max-w-md mx-auto">
                  Thank you for contacting VORTEX INNOVATIONS. We have received your message and our team will review it. We will get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      organization: '',
                      reason: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="mt-8 px-6 py-3 border border-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      className={`w-full bg-[#060b1a] border rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                        validationErrors.name 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-white/10 focus:border-[#3b82f6] focus:ring-[#3b82f6]'
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-red-400 text-xs mt-1">{validationErrors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      className={`w-full bg-[#060b1a] border rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                        validationErrors.email 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-white/10 focus:border-[#3b82f6] focus:ring-[#3b82f6]'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-red-400 text-xs mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Organization (Optional)</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter organization" 
                      className="w-full bg-[#060b1a] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <label htmlFor="reason" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Reason for Contact</label>
                    <div className="relative">
                      <select 
                        id="reason" 
                        name="reason" 
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className={`w-full bg-[#060b1a] border rounded-lg px-4 py-3.5 text-white appearance-none focus:outline-none focus:ring-1 transition-all cursor-pointer ${
                          validationErrors.reason 
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                            : 'border-white/10 focus:border-[#3b82f6] focus:ring-[#3b82f6]'
                        }`}
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Business / Partnership">Business / Partnership</option>
                        <option value="Technology">Technology</option>
                        <option value="Developer">Developer</option>
                        <option value="Media / Press">Media / Press</option>
                        <option value="Security">Security</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                    </div>
                    {validationErrors.reason && (
                      <p className="text-red-400 text-xs mt-1">{validationErrors.reason}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject" 
                    className={`w-full bg-[#060b1a] border rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                      validationErrors.subject 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                        : 'border-white/10 focus:border-[#3b82f6] focus:ring-[#3b82f6]'
                    }`}
                  />
                  {validationErrors.subject && (
                    <p className="text-red-400 text-xs mt-1">{validationErrors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/70 text-xs font-bold tracking-widest uppercase ml-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message" 
                    rows={6}
                    className={`w-full bg-[#060b1a] border rounded-lg px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all resize-y ${
                      validationErrors.message 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                        : 'border-white/10 focus:border-[#3b82f6] focus:ring-[#3b82f6]'
                    }`}
                  ></textarea>
                  {validationErrors.message && (
                    <p className="text-red-400 text-xs mt-1">{validationErrors.message}</p>
                  )}
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    <strong className="block font-bold mb-1">
                      {error === "EMAIL_ALREADY_EXISTS" 
                        ? "Email Already Exists" 
                        : "Unable to Send Message"}
                    </strong>
                    {error === "EMAIL_ALREADY_EXISTS"
                      ? "We already have a message associated with this email address. Please use a different email address."
                      : error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#2dd4bf] text-white font-bold tracking-widest text-sm uppercase rounded-lg shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Info & Guidelines */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Office Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-black text-xl tracking-wide uppercase mb-6 flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#3b82f6]" />
                Office & Company Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-1">VORTEX INNOVATIONS LTD</h4>
                  <p className="text-white/60 text-sm">Company Type: Private Limited Company</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm leading-relaxed">[Official Company Location]</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <AtSign className="w-5 h-5 text-white/40 shrink-0" />
                  <a href="mailto:ugandacoin06@gmail.com" className="text-[#3b82f6] hover:text-[#2dd4bf] transition-colors text-sm font-bold">ugandacoin06@gmail.com</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/40 shrink-0" />
                  <p className="text-white/70 text-sm">[Official Company Telephone]</p>
                </div>
              </div>
            </div>

            {/* Before You Contact Us */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-[#2dd4bf] font-black text-sm tracking-widest uppercase mb-4">
                Before You Contact Us
              </h3>
              <p className="text-white/80 text-sm mb-4">
                For faster assistance, provide:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Your name",
                  "Your organization, if applicable",
                  "The reason for contacting VORTEX",
                  "A clear description of your inquiry",
                  "Relevant technical or business information"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                    <span className="text-[#2dd4bf] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="bg-[#1e3a8a]/20 border border-[#3b82f6]/30 rounded-lg p-4">
                <p className="text-white/80 text-xs leading-relaxed">
                  <strong className="text-white block mb-1">SECURITY NOTICE:</strong>
                  Never submit passwords, private keys, API keys, financial credentials, or other sensitive security information through the general contact form.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-black text-sm tracking-widest uppercase mb-6">
                Connect With Vortex
              </h3>
              <div className="flex flex-wrap gap-3">
                {["LinkedIn", "X", "YouTube", "Instagram", "Facebook", "GitHub"].map((platform) => (
                  <a 
                    key={platform} 
                    href={`#${platform.toLowerCase()}`}
                    className="px-4 py-2 border border-white/10 rounded-full text-white/60 text-xs font-bold tracking-wide hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
