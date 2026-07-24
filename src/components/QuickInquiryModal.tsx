'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/companyData';
import { 
  X, Send, Phone, CheckCircle2, ShieldCheck, MapPin, Building2, Calendar
} from 'lucide-react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  initialProject?: string;
}

export default function QuickInquiryModal({
  isOpen,
  onClose,
  initialSubject = 'General Property Inquiry',
  initialProject = ''
}: QuickInquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    topic: initialSubject,
    project: initialProject,
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      topic: initialSubject,
      project: initialProject
    }));
  }, [initialSubject, initialProject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello One Acres Infra Heights team,\nName: ${formData.fullName}\nMobile: ${formData.mobile}\nTopic: ${formData.topic}\nProject: ${formData.project}\nNote: ${formData.message}`
    );
    window.open(`https://wa.me/919997020323?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-8"
          >
            {/* Modal Header */}
            <div className="bg-slate-950 text-white p-6 border-b border-slate-800 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-slate-900 px-2.5 py-1 rounded border border-amber-500/30">
                  One Acres Direct Inquiry
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-white mt-2">
                  Book Dehradun Site Visit
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Connect directly with Managing Directors Rakesh & Meenakshi Sundriyal.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Received!</h4>
                  <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold">{formData.fullName}</span>. MD Rakesh Sundriyal or our Dehradun team will call you at <span className="font-bold">{formData.mobile}</span> shortly.
                  </p>

                  <div className="pt-4 flex flex-col gap-2">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md"
                    >
                      Continue on WhatsApp Immediately
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="w-full py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Col. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Purpose</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Book Free Dehradun Site Visit">Book Free Site Visit Pickup</option>
                      <option value="Sahastradhara Road Plot Query">Sahastradhara Plot Enquiry</option>
                      <option value="Himalayan Luxury Villas">Rajpur Road Luxury Villas</option>
                      <option value="Commercial Plaza Enquiry">Commercial Showroom & Offices</option>
                      <option value="Bank Loan Assistance">Bank Loan Assistance Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Message / Plot Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Specify budget, preferred plot dimensions (e.g. 200 sq. yards)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free cab pickup provided for site visits in Dehradun valley.</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all shadow-md"
                    >
                      WhatsApp
                    </button>
                  </div>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
