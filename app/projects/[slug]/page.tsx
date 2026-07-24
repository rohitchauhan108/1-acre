'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../../../src/data/companyData';
import { 
  MapPin, CheckCircle2, ShieldCheck, ArrowRight, Building2, Phone, ArrowLeft, Calendar
} from 'lucide-react';

interface ProjectDetailPageProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function ProjectDetailPage({ onOpenInquiry }: ProjectDetailPageProps) {
  const params = useParams();
  const slug = params?.slug as string;

  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Top Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold hover:underline mb-2">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-2.5 py-1 rounded border border-amber-800">
              {project.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading text-white">
            {project.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-red-400 font-bold">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Image Gallery & Specs */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Description */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold font-serif-heading text-slate-900 border-b border-slate-100 pb-3">
                  Project Overview & Layout Plan
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold font-serif-heading text-slate-900 border-b border-slate-100 pb-3">
                  Key Infrastructure & Title Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Price Box & Direct Booking */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-slate-900 text-white p-6 rounded-2xl border-top-amber shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                    Pricing & Size Structure
                  </span>
                  <div className="text-3xl font-extrabold text-white mt-1">
                    {project.priceStarting} <span className="text-xs text-slate-400 font-normal">{project.priceUnit}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-t border-slate-800 pt-4">
                  <div className="flex justify-between text-slate-400">
                    <span>Plot Dimensions:</span>
                    <strong className="text-white">{project.plotSizes}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Possession Timeline:</span>
                    <strong className="text-emerald-400">{project.possession}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>UK RERA Reg:</span>
                    <strong className="text-amber-400">{project.reraNo}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry?.(`Book Site Visit for ${project.title}`, project.title)}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Book Free Cab Site Visit</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
