'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CalculatorProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function CalculatorPage({ onOpenInquiry }: CalculatorProps) {
  const [loanAmountLakhs, setLoanAmountLakhs] = useState(35);
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5);

  const principal = loanAmountLakhs * 100000;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let emi = 0;
  if (monthlyRate > 0) {
    emi = Math.round(
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  } else {
    emi = Math.round(principal / totalMonths);
  }

  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);
  const interestPercentage = totalPayment > 0 ? Math.round((totalInterest / totalPayment) * 100) : 0;
  const principalPercentage = 100 - interestPercentage;

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
            Plot & Villa Finance Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            Home Loan & <span className="font-semibold italic text-amber-400">EMI Calculator</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Estimate your exact plot purchase monthly EMI, interest payable, and bank loan eligibility for Dehradun property investment.
          </p>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Sliders */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md space-y-8">
              <h2 className="text-xl font-bold font-serif-heading text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-red-600" />
                <span>Adjust Your Loan Parameters</span>
              </h2>

              {/* Slider 1: Loan Amount */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-bold">
                  <label className="text-slate-700">Loan Amount Required</label>
                  <span className="text-red-600 font-extrabold text-lg">{formatRupees(principal)}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="1"
                  value={loanAmountLakhs}
                  onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>₹5 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-bold">
                  <label className="text-slate-700">Interest Rate (% p.a.)</label>
                  <span className="text-red-600 font-extrabold text-lg">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="6.5"
                  max="14.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>6.5% (SBI Housing)</span>
                  <span>8.5% (Avg Land Loan)</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* Slider 3: Tenure */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-bold">
                  <label className="text-slate-700">Loan Tenure (Years)</label>
                  <span className="text-red-600 font-extrabold text-lg">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Bank Partners Info */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Approved Bank Loan Assistance</span>
                </div>
                <p className="text-slate-600">
                  One Acres Infra Heights maintains direct bank approvals with <strong>State Bank of India (SBI)</strong>, <strong>HDFC Bank</strong>, <strong>Punjab National Bank</strong>, and <strong>ICICI Bank</strong>.
                </p>
              </div>

            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border-top-amber shadow-xl space-y-6">
                <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Monthly Installment Estimate
                </span>

                <div className="space-y-1">
                  <div className="text-slate-400 text-xs">Your Estimated Monthly EMI</div>
                  <div className="text-4xl font-extrabold text-white font-serif-heading">
                    {formatRupees(emi)} <span className="text-xs text-slate-400 font-sans font-normal">/ month</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Principal Loan Amount:</span>
                    <strong className="text-white font-bold">{formatRupees(principal)}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Interest Payable:</span>
                    <strong className="text-amber-400 font-bold">{formatRupees(totalInterest)}</strong>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-sm">
                    <span className="text-slate-300 font-bold">Total Payable Amount:</span>
                    <strong className="text-red-400 font-extrabold">{formatRupees(totalPayment)}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry?.(`Bank Loan Assistance for ${formatRupees(principal)}`, 'Calculator')}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Loan & Check Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
