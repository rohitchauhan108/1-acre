'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'normal' | 'large';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  size = 'normal',
  variant = 'light',
  showTagline = true,
  className = ''
}: LogoProps) {
  const isCompact = size === 'small';
  const isLarge = size === 'large';

  return (
    <Link href="/" className={`inline-flex flex-col items-start group select-none ${className}`}>
      <div className="flex items-center gap-2">
        {/* SVG Graphic faithfully recreating uploaded OneAcres logo */}
        <div className={`relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          isLarge ? 'w-12 h-12' : isCompact ? 'w-8 h-8' : 'w-10 h-10'
        }`}>
          <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
            {/* House Roof Red Gradient */}
            <path
              d="M100 15 L185 85 L160 85 L100 35 L40 85 L15 85 Z"
              fill="url(#roofRedGradient)"
            />
            {/* Dark Red Roof Trim */}
            <path
              d="M100 15 L180 80 L168 88 L100 32 L32 88 L20 80 Z"
              fill="#b91c1c"
            />
            
            {/* 4-Pane White Window */}
            <g transform="translate(82, 52)">
              <rect x="0" y="0" width="16" height="16" rx="1.5" fill="#FFFFFF" />
              <rect x="20" y="0" width="16" height="16" rx="1.5" fill="#FFFFFF" />
              <rect x="0" y="20" width="16" height="16" rx="1.5" fill="#FFFFFF" />
              <rect x="20" y="20" width="16" height="16" rx="1.5" fill="#FFFFFF" />
            </g>

            {/* Red Sweeping Curve Baseline */}
            <path
              d="M15 130 C 40 100, 90 95, 190 95 C 195 95, 195 102, 185 102 C 95 102, 50 110, 25 140 Z"
              fill="url(#roofRedGradient)"
            />

            <defs>
              <linearGradient id="roofRedGradient" x1="15" y1="15" x2="190" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dc2626" />
                <stop offset="1" stopColor="#991b1b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text Part: OneAcres.com */}
        <div className="flex flex-col leading-none">
          <div className={`font-black tracking-tight ${
            isLarge ? 'text-3xl' : isCompact ? 'text-xl' : 'text-2xl'
          } ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            <span>One</span>
            <span className="text-red-600">Acres</span>
            <span className={`${variant === 'dark' ? 'text-slate-300' : 'text-slate-900'} font-bold`}>.com</span>
          </div>
        </div>
      </div>

      {/* Sub-tagline "— www.oneacres.com —" */}
      {showTagline && !isCompact && (
        <div className="text-[9px] tracking-widest uppercase font-semibold text-slate-500 mt-1 flex items-center gap-1">
          <span className="h-[1px] w-2.5 bg-red-600/60 inline-block"></span>
          <span>www.oneacres.com</span>
          <span className="h-[1px] w-2.5 bg-red-600/60 inline-block"></span>
        </div>
      )}
    </Link>
  );
}
