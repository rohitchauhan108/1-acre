'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../src/data/companyData';
import { 
  MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare
} from 'lucide-react';

interface ContactProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function ContactPage({ onOpenInquiry }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: 'Site Visit / Plot Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello One Acres Infra Heights team,\nName: ${formData.name}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919997020323?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
            Official Contact Channel
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            Contact Registered <span className="font-semibold italic text-amber-400">Headquarters</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Get in touch with Managing Directors Rakesh & Meenakshi Sundriyal or visit our registered office at Race Course Valley, Dehradun.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Contact Info & Director Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Address Card */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border-top-amber shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Registered Office Address</span>
                </div>
                
                <h3 className="text-xl font-bold font-serif-heading text-white">
                  {COMPANY_INFO.name}
                </h3>

                <p className="text-slate-200 text-sm leading-relaxed">
                  {COMPANY_INFO.registeredAddress.fullAddress}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Office Hours: Mon - Sat (9:30 AM - 6:30 PM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>CIN: {COMPANY_INFO.cin} | Est. {COMPANY_INFO.establishedDate}</span>
                  </div>
                </div>
              </div>

              {/* Directors Cards */}
              <div className="space-y-4">
                <h3 className="text-base font-bold font-serif-heading text-slate-900 border-b border-slate-200 pb-2">
                  Managing Directors Direct Contacts
                </h3>

                {/* Director 1 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">{COMPANY_INFO.directors[0].name}</span>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase">MD</span>
                  </div>
                  <p className="text-xs text-slate-500">{COMPANY_INFO.directors[0].title}</p>
                  <a href={`tel:${COMPANY_INFO.directors[0].rawMobile}`} className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-red-600 transition-colors pt-1">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>{COMPANY_INFO.directors[0].mobile}</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.directors[0].email}`} className="flex items-center gap-2 text-slate-600 text-xs hover:text-red-600 truncate">
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span>{COMPANY_INFO.directors[0].email}</span>
                  </a>
                </div>

                {/* Director 2 */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base">{COMPANY_INFO.directors[1].name}</span>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded uppercase">MD</span>
                  </div>
                  <p className="text-xs text-slate-500">{COMPANY_INFO.directors[1].title}</p>
                  <a href={`tel:${COMPANY_INFO.directors[1].rawMobile}`} className="flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-red-600 transition-colors pt-1">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span>{COMPANY_INFO.directors[1].mobile}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Contact Form & Map */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
                <h2 className="text-2xl font-bold font-serif-heading text-slate-900 border-b border-slate-100 pb-3">
                  Send Direct Inquiry to Dehradun Office
                </h2>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl space-y-3 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold">Message Sent Successfully!</h3>
                    <p className="text-xs text-emerald-700">
                      Our Managing Director Rakesh Sundriyal or Dehradun executive team will call you back shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="your.email@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Inquiry Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Site Visit / Plot Inquiry">Book Site Visit Pickup in Dehradun</option>
                        <option value="Sahastradhara Road Plots">Sahastradhara Road Plot Enquiry</option>
                        <option value="Luxury Villas">Rajpur Road Luxury Villas</option>
                        <option value="Commercial Plaza">Commercial Plaza / Retail Shops</option>
                        <option value="Meeting with Director">Direct Meeting with Managing Director</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Please specify plot size requirements or preferred site visit date..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        WhatsApp Chat
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Google Map Preview Frame */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                  <span>Race Course Dehradun Office Location</span>
                  <span className="text-xs text-red-600 font-semibold">Uttarakhand 248001</span>
                </div>
                <div className="h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                  <iframe 
                    title="One Acres Registered Office Location Map"
                    src={COMPANY_INFO.registeredAddress.googleMapsEmbedUrl} 
                    className="w-full h-full border-0" 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
