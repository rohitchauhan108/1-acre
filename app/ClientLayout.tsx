'use client';

import React, { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import QuickInquiryModal from '../src/components/QuickInquiryModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('General Property Inquiry');
  const [inquiryProject, setInquiryProject] = useState('');

  const handleOpenInquiry = (subject = 'General Property Inquiry', project = '') => {
    setInquirySubject(subject);
    setInquiryProject(project);
    setInquiryModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-red-600 selection:text-white">
      <Header onOpenInquiry={handleOpenInquiry} />

      <main className="flex-1">
        {/* Pass onOpenInquiry to page children via cloneElement or React Context if needed */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { onOpenInquiry: handleOpenInquiry });
          }
          return child;
        })}
      </main>

      <Footer onOpenInquiry={handleOpenInquiry} />

      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialSubject={inquirySubject}
        initialProject={inquiryProject}
      />
    </div>
  );
}
