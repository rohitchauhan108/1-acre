'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MapPin, Phone, Mail, ShieldCheck, ExternalLink, ArrowRight, Clock, MessageSquare 
} from 'lucide-react';

interface FooterProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello One Acres Infra Heights team,\nI would like to inquire about plots and villas in Dehradun.`
    );
    window.open(`https://wa.me/919997020323?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="large" variant="dark" showTagline={true} />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              One Acres Infra Heights India Private Limited is Dehradun&apos;s premier real estate & infrastructure developer. Delivering 100% legal freehold plots, luxury villas, and commercial plazas since 2015.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>CIN: {COMPANY_INFO.cin}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>RERA Reg: {COMPANY_INFO.reraRegNo}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">Navigation</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-400 transition-colors">Projects & Plots</Link>
              </li>
              <li>
                <Link href="/dehradun-spotlight" className="hover:text-red-400 transition-colors">Dehradun Growth</Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-red-400 transition-colors">EMI Calculator</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-400 transition-colors">Site Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">Contact Office</Link>
              </li>
            </ul>
          </div>

          {/* Project Direct Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">Popular Townships</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/projects/one-acres-green-valley-plots" className="hover:text-red-400 transition-colors line-clamp-1">
                  Green Valley Sahastradhara Plots
                </Link>
              </li>
              <li>
                <Link href="/projects/one-acres-himalayan-villas" className="hover:text-red-400 transition-colors line-clamp-1">
                  Himalayan Foothills Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/projects/one-acres-corporate-plaza" className="hover:text-red-400 transition-colors line-clamp-1">
                  Corporate Plaza Commercial Hub
                </Link>
              </li>
              <li>
                <Link href="/projects/one-acres-race-course-heights" className="hover:text-red-400 transition-colors line-clamp-1">
                  Race Course Valley Residency
                </Link>
              </li>
              <li>
                <Link href="/projects/one-acres-shimla-bypass-estates" className="hover:text-red-400 transition-colors line-clamp-1">
                  Doon Eco Farmland & Plots
                </Link>
              </li>
            </ul>
          </div>

          {/* Registered Office Contact */}
          <div className="lg:col-span-3 space-y-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">Registered Office</h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.registeredAddress.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.directors[0].rawMobile}`} className="hover:text-white font-bold">
                  {COMPANY_INFO.directors[0].mobile} (MD Rakesh)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-white truncate">
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onOpenInquiry?.('General Contact', 'Footer')}
                className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Call Back</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Chat</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-semibold uppercase tracking-widest">
            <span>Integrity</span>
            <span>&bull;</span>
            <span>Precision</span>
            <span>&bull;</span>
            <span>Vision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
