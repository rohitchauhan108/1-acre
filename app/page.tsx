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

  const [activeId, setActiveId] = useState(1);
  const features = [
    {
      id: 1,
      title: "Featured Properties",
      description:
        "Discover a curated selection of premium homes designed to match your lifestyle, preferences, and budget.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Book Your Property Visit",
      description:
        "Schedule a convenient property tour with our experts and experience your future home in person.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Visit Our Office",
      description:
        "Stop by our office or reach out to our team for personalized guidance, property inquiries, and expert real estate advice.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-1.webp"
            alt="One Acres Infra Heights Dehradun Township"
            className="w-full h-full object-cover object-[center_25%]"
            onError={(e) => {
              // Fallback debugging style if path is wrong
              console.error("Hero background image failed to load");
            }}
          />
          {/* Dark radial/linear gradient overlay to ensure high text contrast */}
          <div className="absolute inset-0 bg-slate-950/60"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wide">
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
                <div className="bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-white">35+</div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Acres Developed
                  </div>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-emerald-400">
                    14
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Gated Townships
                  </div>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-extrabold text-amber-400">
                    850+
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">
                    Plot Owners
                  </div>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-slate-800">
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
                  className="px-6 py-3.5 bg-slate-900/90 backdrop-blur-sm hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
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
            {COMPANY_INFO.coreValues.map((val, idx) => {
              // ✅ Fixed (Cast to any)
const IconComponent = (val as any).icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{val.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
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
            Explore exceptional properties with expert guidance every step of
            the way.
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

          {/* Right Column: Dynamic Content Based on activeId */}
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-2xl">
            {/* 1. First Item: Image View */}
            {activeId === 1 && (
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Interior Room View"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* 2. Second Item: Tour/Contact Form */}
            {activeId === 2 && (
              <div className="w-full aspect-[4/3] rounded-2xl bg-slate-50 p-6 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  Schedule a Visit
                </h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#1C4E4E]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#1C4E4E]"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#1C4E4E]"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#1C4E4E]"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-1 py-2.5 px-4 rounded-xl bg-slate-950 cursor-pointer text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            )}

            {/* 3. Third Item: Map with Contact Info */}
            {activeId === 3 && (
              <div className="w-full aspect-[4/3] rounded-2xl bg-slate-100 relative overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-end p-4">
                {/* Background Map Iframe */}
                <div className="absolute inset-0 z-0">
                  <iframe
                    title="One Acres Registered Office Location Map"
                    src={COMPANY_INFO.registeredAddress.googleMapsEmbedUrl}
                    className="w-full h-full border-0 filter contrast-[0.95] hover:contrast-100 transition-all duration-300"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Optional Subtle Gradient Overlay for Depth (helps text readability if map is bright) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none z-10"></div>

                {/* Floating Contact Card Overlay */}
<div className="relative z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-lg flex flex-col gap-1 transition-transform hover:-translate-y-0.5">
  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
    Direct Contact
  </span>
  <a
    href={`tel:${(COMPANY_INFO as any)?.registeredAddress?.phone || "+919997020323"}`}
    className="text-sm text-[#1C4E4E] font-bold hover:underline w-fit"
  >
    +91 99970 20323
  </a>
  <a
    href="mailto:gamlrakesh1@gmail.com"
    className="text-xs text-slate-600 hover:text-[#1C4E4E] transition-colors w-fit"
  >
    gamlrakesh1@gmail.com
  </a>
</div>
              </div>
            )}
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
      <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Sticky Header & Context */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-700 bg-slate-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full">
                  Buyer Intelligence
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Dehradun Property Buyer FAQs
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Got questions about purchasing property, legal clearances, or
                  local regulations in Dehradun? Find transparent answers here.
                </p>
              </div>

              {/* Quick Help Card */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl shadow-slate-900/10">
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">
                    Still have questions?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Our local real estate experts are available to guide you
                    through every step.
                  </p>
                </div>
                <button className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-400 text-white font-semibold text-xs rounded-xl transition-all shadow-sm cursor-pointer">
                  Speak With an Expert
                </button>
              </div>
            </div>

            {/* Right Column: Accordion List */}
            <div className="lg:col-span-8 space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`group rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-white border-emerald-500/40 shadow-lg shadow-emerald-900/5 ring-4 ring-emerald-500/5"
                        : "bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                    } overflow-hidden`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left font-bold text-slate-900 text-base flex items-center justify-between gap-6 cursor-pointer"
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`text-xs font-mono font-semibold transition-colors ${isOpen ? "text-emerald-600" : "text-slate-400"}`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 ml-10">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
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

      <div className="fixed bottom-6 right-6 z-50 font-sans">
        {/* Expanded Options Container */}
        <div
          className={`absolute bottom-20 right-0 w-64 bg-slate-950 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col gap-3 transition-all duration-300 ease-out origin-bottom-right ${
            isOpen
              ? "opacity-100 visible scale-100 translate-y-0"
              : "opacity-0 invisible scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fe9a00]">
              Quick Support
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          {/* Call Option */}
          <a
            href="tel:+919997020323"
            className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-900 transition-colors group"
            aria-label="Call Us"
          >
            <div className="bg-sky-500 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20 transition-transform group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white group-hover:text-[#fe9a00] transition-colors">
                Call Us
              </span>
              <span className="text-xs text-slate-400">Direct phone line</span>
            </div>
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/9997243232?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-900 transition-colors group"
            aria-label="Chat on WhatsApp"
          >
            <div className="bg-[#25d366] text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/20 transition-transform group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white group-hover:text-[#25d366] transition-colors">
                WhatsApp
              </span>
              <span className="text-xs text-slate-400">
                Chat with us instantly
              </span>
            </div>
          </a>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Toggle Contact Menu"
        >
          <span className="text-sm">Contact Us</span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
