'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../src/data/companyData';
import { 
  Building2, ShieldCheck, Award, Users, CheckCircle2, Phone, Mail, MapPin, ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function AboutPage({ onOpenInquiry }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            One Acres Infra Heights <span className="font-semibold italic text-amber-400">India Pvt Ltd</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Registered corporate entity established on {COMPANY_INFO.establishedDate}. CIN: {COMPANY_INFO.cin}. Delivering transparent freehold land and infrastructure across Uttarakhand.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded">
                Our Foundation Story
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-serif-heading text-slate-900">
                Pioneering Transparent Land & Infrastructure in Dehradun Valley
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded on 30 December 2015 by Managing Directors Rakesh Sundriyal and Meenakshi Sundriyal, One Acres Infra Heights India Private Limited was built to solve the trust deficit in regional real estate.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Over the past {COMPANY_INFO.yearsInBusiness}+ years, we have developed 35+ acres across 14 townships in Dehradun, serving over 850+ satisfied plot owners. Every project features clear titles, completed road infrastructure, street lighting, and direct bank approval.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {COMPANY_INFO.coreValues.map((val, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Corporate Summary Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6 border-top-amber"
            >
              <h3 className="text-xl font-bold font-serif-heading text-white border-b border-slate-800 pb-3">
                Corporate Registration Details
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Full Legal Entity:</span>
                  <strong className="text-white text-sm">{COMPANY_INFO.name}</strong>
                </div>

                <div>
                  <span className="text-slate-400 block">Corporate Identification Number (CIN):</span>
                  <strong className="text-emerald-400 font-mono text-sm">{COMPANY_INFO.cin}</strong>
                </div>

                <div>
                  <span className="text-slate-400 block">Date of Incorporation:</span>
                  <strong className="text-white text-sm">{COMPANY_INFO.establishedDate}</strong>
                </div>

                <div>
                  <span className="text-slate-400 block">Registered Office Address:</span>
                  <p className="text-slate-200 mt-1 leading-relaxed">{COMPANY_INFO.registeredAddress.fullAddress}</p>
                </div>

                <div>
                  <span className="text-slate-400 block">Official Contact Numbers:</span>
                  <p className="text-white font-bold mt-1">
                    {COMPANY_INFO.directors[0].name}: {COMPANY_INFO.directors[0].mobile}
                  </p>
                  <p className="text-white font-bold">
                    {COMPANY_INFO.directors[1].name}: {COMPANY_INFO.directors[1].mobile}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry?.('Contact Managing Directors', 'About Page')}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with Managing Directors</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
