'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DEHRADUN_LOCATION_HIGHLIGHTS } from '../../src/data/companyData';
import { 
  TrendingUp, MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface SpotlightProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function DehradunSpotlightPage({ onOpenInquiry }: SpotlightProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
            Growth Corridor & Equity Analysis
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            Why Invest in <span className="font-semibold italic text-amber-400">Dehradun Real Estate</span> Right Now?
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            With the 2.5-hour Delhi-Dehradun Expressway nearing completion, land valuation across Sahastradhara, Rajpur Road, and Shimla Bypass is experiencing record appreciation.
          </p>
        </div>
      </section>

      {/* Grid Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEHRADUN_LOCATION_HIGHLIGHTS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3"
              >
                <div className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded inline-block">
                  {item.time}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl border-top-amber shadow-xl max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading">
              Secure Freehold Land Before Price Escalation
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
              Our Managing Directors offer personal consultation on upcoming plot layouts, land appreciation forecasts, and legal diligence.
            </p>
            <button
              onClick={() => onOpenInquiry?.('Dehradun Growth Investment Advice', 'Spotlight')}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Managing Director Rakesh Sundriyal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
