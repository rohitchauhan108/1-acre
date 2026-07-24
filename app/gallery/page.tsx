'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Camera, ShieldCheck, X } from 'lucide-react';

interface GalleryProps {
  onOpenInquiry?: (subject?: string, project?: string) => void;
}

export default function GalleryPage({ onOpenInquiry }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const items = [
    {
      title: "Gated Plot Colony Infrastructure - Sahastradhara Road",
      category: "Plot Developments",
      image: "/src/assets/images/dehradun_plots_township_1784874005001.jpg"
    },
    {
      title: "Himalayan Foothills Luxury Villa Construction",
      category: "Villas",
      image: "/src/assets/images/dehradun_villas_banner_1784873991288.jpg"
    },
    {
      title: "Commercial Business Plaza & High-Street Retail",
      category: "Commercial",
      image: "/src/assets/images/commercial_infra_center_1784874016592.jpg"
    },
    {
      title: "Metalled Internal Roads & Street Lighting Setup",
      category: "Plot Developments",
      image: "/src/assets/images/dehradun_plots_township_1784874005001.jpg"
    },
    {
      title: "Duplex Villa Front Elevation & Landscaped Garden",
      category: "Villas",
      image: "/src/assets/images/dehradun_villas_banner_1784873991288.jpg"
    }
  ];

  const filteredItems = items.filter(
    i => activeCategory === 'All' || i.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
            On-Site Progress
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            Photo & <span className="font-semibold italic text-amber-400">Media Gallery</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Authentic on-site construction progress, plot demarcations, and completed projects across Dehradun.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['All', 'Plot Developments', 'Villas', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="p-3 bg-red-600 rounded-full shadow-lg">
                      <Eye className="w-6 h-6" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm font-serif-heading line-clamp-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 text-white rounded-2xl overflow-hidden max-w-4xl w-full border border-slate-800 shadow-2xl space-y-4 p-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-sm font-bold">{selectedImage.title}</span>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-slate-400 hover:text-white font-bold p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-96 sm:h-[480px] bg-black rounded-xl overflow-hidden">
                <img src={selectedImage.image} alt="Enlarged" className="w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
