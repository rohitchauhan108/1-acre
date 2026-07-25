"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PROJECTS_DATA,
  COMPANY_INFO,
  TESTIMONIALS,
  DEHRADUN_LOCATION_HIGHLIGHTS,
  FAQS,
} from "../src/data/companyData";
import {
  Building2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Phone,
  TrendingUp,
  Sparkles,
  ChevronDown,
  Check,
  X,
  Send,
  Star,
  Quote,
  UserCheck,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Fallback high-res real estate images from Unsplash CDN
const FALLBACK_IMAGES: Record<string, string> = {
  "Residential Plots":
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  "Luxury Villas":
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  "Commercial Infrastructure":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  default:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
};

export default function HomePage() {
  // Built-in Inquiry Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Inquire Now");
  const [modalSource, setModalSource] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Other Page State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Open Modal Handler
  const openInquiryModal = (title: string, source: string) => {
    setModalTitle(title);
    setModalSource(source);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 2000);
  };

  const featuredProjects = PROJECTS_DATA.filter((p) => {
    return activeCategory === "All" || p.category === activeCategory;
  });

  const [activeId, setActiveId] = useState("virtual-tour");
  const features = [
    {
      id: "virtual-tour",
      title: "Home TOUR",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nib posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v3h-2zm0 8h2v2h-2zm-3-5h8v2H8z" />
        </svg>
      ),
    },
    {
      id: "online-appointment",
      title: "ONLINE APPOINTMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nib posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
        </svg>
      ),
    },
    {
      id: "easy-search",
      title: "EASY SEARCH",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nib posuere sed sed bibendum. Risus cursus sapien arcu in dignissim.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8zm5.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Established 2015 &bull; Dehradun Registered Office</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-light text-white leading-[1.15] tracking-tight">
                One Acres Infra Heights <br />
                <span className="font-bold text-amber-400 italic font-serif">
                  India Pvt Ltd
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Dehradun&apos;s leading developer of 100% legal, clear-title
                freehold residential plots, hillside luxury villas, and
                high-street commercial developments across Sahastradhara Road,
                Rajpur Road, and Race Course.
              </p>

              {/* Key Trust Stats Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-white">35+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Acres Developed
                  </div>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-emerald-400">
                    14
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Gated Townships
                  </div>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-amber-400">
                    850+
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Plot Owners
                  </div>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-red-500">
                    100%
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Bank Approved
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() =>
                    openInquiryModal(
                      "Book Free Dehradun Site Visit Pickup",
                      "Hero Section",
                    )
                  }
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Book Free Cab Site Visit</span>
                </button>

                <Link
                  href="/projects"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <span>View All 14 Townships</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Direct Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border-t-2 border-amber-500 shadow-2xl space-y-6"
            >
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-800">
                  Managing Directors Direct Desk
                </span>
                <h2 className="text-xl font-bold text-white mt-2">
                  Inquire Directly with Leadership
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  Connect with Rakesh Sundriyal & Meenakshi Sundriyal for
                  verified plot availability & legal diligence.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">
                      MD Rakesh Sundriyal:
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.directors[0].rawMobile}`}
                      className="text-white font-bold text-sm hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.directors[0].mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">
                      MD Meenakshi Sundriyal:
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.directors[1].rawMobile}`}
                      className="text-white font-bold text-sm hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.directors[1].mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-semibold">
                      Corporate Registration:
                    </span>
                    <span className="text-emerald-400 font-mono font-bold text-xs">
                      CIN: {COMPANY_INFO.cin}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  openInquiryModal(
                    "Direct Director Consultation Request",
                    "Home Direct Desk",
                  )
                }
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Direct Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects & Plots Portfolio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded">
                Verified Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
                Featured Dehradun Townships & Projects
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Explore premium freehold residential plots, hillside villas, and
                commercial spaces.
              </p>
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                "All",
                "Residential Plots",
                "Luxury Villas",
                "Commercial Infrastructure",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid with Image Fallbacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => {
              const fallbackUrl =
                FALLBACK_IMAGES[project.category] || FALLBACK_IMAGES["default"];
              const imgSrc =
                project.image && project.image.startsWith("http")
                  ? project.image
                  : fallbackUrl;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-60 bg-slate-900 overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={project.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = fallbackUrl;
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                        {project.category}
                      </div>
                      <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                        {project.status}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-1.5 text-xs text-red-600 font-bold">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5">
                        <div className="flex justify-between text-slate-500">
                          <span>Plot / Unit Dimensions:</span>
                          <strong className="text-slate-800 font-bold">
                            {project.plotSizes}
                          </strong>
                        </div>
                        <div className="flex justify-between text-slate-500 pt-1 border-t border-slate-200/60">
                          <span>Starting Price:</span>
                          <strong className="text-red-600 font-extrabold text-sm">
                            {project.priceStarting} {project.priceUnit}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors text-center"
                    >
                      View Layout & Details
                    </Link>
                    <button
                      onClick={() =>
                        openInquiryModal(
                          `Inquiry for ${project.title}`,
                          project.title,
                        )
                      }
                      className="py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
            >
              <span>Browse Full 14-Township Directory</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Company Core Values */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded border border-amber-800">
              Why Buy With One Acres
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Transparent & Bank Approved Real Estate
            </h2>
            <p className="text-slate-400 text-sm">
              We eliminate title risks and infrastructure delays with 100% legal
              clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* dream home today */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 font-sans">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D171A] mb-4">
            Find Your Dream Home Today
          </h2>
          <p className="text-[#3B6366] text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nib posuere sed sed
            bibendum. Risus cursus sapien arcu in dignissim.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Feature Cards */}
          <div className="flex flex-col gap-5">
            {features.map((feature) => {
              const isActive = activeId === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  className={`flex items-start gap-5 p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-slate-950 border-[#1C4E4E] text-white shadow-xl shadow-[#1C4E4E]/25"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-white text-[#1C4E4E]"
                        : "bg-[#E4EEED] text-[#1C4E4E]"
                    }`}
                  >
                    {feature.icon}
                  </div>

                  {/* Card Text Content */}
                  <div>
                    <h3
                      className={`font-bold tracking-wider text-sm uppercase mb-2 ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isActive ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Video Preview Frame */}
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-2xl">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Interior Room View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Spotlight */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded">
                Dehradun Corridor Growth
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Delhi-Dehradun Expressway & IT Park Surge
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                With travel time from Delhi reduced to just 2.5 hours via the
                new expressway, land values in Sahastradhara, Rajpur Road, and
                Race Course are projected to appreciate rapidly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {DEHRADUN_LOCATION_HIGHLIGHTS.slice(0, 4).map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
                  >
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{h.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/dehradun-spotlight"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
                >
                  <span>
                    Explore Full Dehradun Infrastructure & Valuation Analysis
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-amber-400">
                Free Cab Pickup for Site Visits
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                We provide complimentary chauffeur-driven vehicles to pick you
                up anywhere in Dehradun or Jolly Grant Airport to inspect plot
                demarcations and township layouts.
              </p>
              <button
                onClick={() =>
                  openInquiryModal(
                    "Book Free Cab Site Visit Pickup",
                    "Spotlight Teaser",
                  )
                }
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Schedule Free Site Visit Cab
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials with Real Avatars & Stars */}
      <section className="py-16 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded inline-block">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              What Our Plot Owners Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Read authentic experiences from defense officers, NRI investors,
              and local residents.
            </p>
          </div>

          {/* Slider Container with Relative Positioning for Side Arrows */}
          <div className="relative px-0 sm:px-12">
            {/* Left Arrow Button */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow Button */}
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              // pagination={{
              //   clickable: true,
              //   dynamicBullets: true,
              // }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {TESTIMONIALS.map((t, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between relative h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-400">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <Quote className="w-6 h-6 text-slate-200" />
                      </div>

                      <p className="text-slate-700 text-xs italic leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                      <img
                        src={`https://images.pexels.com/photos/${1036623 + index * 50}/pexels-photo-${1036623 + index * 50}.jpeg?auto=compress&cs=tinysrgb&w=150`}
                        alt={t.name}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://i.pravatar.cc/150?img=${index + 10}`;
                        }}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center gap-1">
                          <strong className="text-slate-900 text-xs block font-bold truncate">
                            {t.name}
                          </strong>
                          <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </div>
                        <span className="text-[11px] text-slate-500 block truncate">
                          {t.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Dehradun Property Buyer FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180 text-red-600" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Find Your Ideal Plot in Dehradun?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Contact Managing Director Rakesh Sundriyal directly or book a free
            cab site visit today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                openInquiryModal(
                  "Book Free Dehradun Site Visit",
                  "Bottom Banner",
                )
              }
              className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Book Free Site Visit Cab
            </button>
            <a
              href={`tel:${COMPANY_INFO.directors[0].rawMobile}`}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition-all"
            >
              Call MD: {COMPANY_INFO.directors[0].mobile}
            </a>
          </div>
        </div>
      </section>

      {/* 8. Built-in Interactive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200"
            >
              <div className="bg-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800">
                <div>
                  <h3 className="font-bold text-sm text-amber-400">
                    {modalTitle}
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    Source: {modalSource}
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Our team or Managing Director will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="p-6 space-y-4 text-xs"
                >
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. rajesh@example.com"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Specific Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Preferred plot size, location or budget..."
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
