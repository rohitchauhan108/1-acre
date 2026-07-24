'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, Mail, MapPin, Menu, X, ChevronRight, ShieldCheck, Calculator, Sparkles, Building2
} from 'lucide-react';

interface HeaderProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Dehradun Spotlight', href: '/dehradun-spotlight' },
    { label: 'EMI Calculator', href: '/calculator' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const activeLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* Top Corporate Strip */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CIN: {COMPANY_INFO.cin}</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span className="truncate">Race Course, Dehradun</span>
            </span>
            <span className="hidden lg:inline-block text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Est. {COMPANY_INFO.establishedDate}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a 
              href={`tel:${COMPANY_INFO.directors[0].rawMobile}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-400 transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>MD Rakesh Sundriyal: {COMPANY_INFO.directors[0].mobile}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo size="normal" showTagline={true} />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-xs font-bold transition-colors ${
                  isActive ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="header-active-tab"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/calculator"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-red-600 border border-slate-200 rounded-lg hover:border-red-300 transition-all bg-slate-50"
          >
            <Calculator className="w-3.5 h-3.5 text-red-600" />
            <span>Loan Calculator</span>
          </Link>

          <button
            onClick={() => onOpenInquiry?.('Book Free Dehradun Site Visit', 'General')}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Book Site Visit</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-red-50 text-red-600 font-extrabold border-l-4 border-red-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-red-600' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry?.('Book Free Dehradun Site Visit', 'General');
                }}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Book Free Site Visit</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.directors[0].rawMobile}`}
                className="w-full py-3 bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call MD: {COMPANY_INFO.directors[0].mobile}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
