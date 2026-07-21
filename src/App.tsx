import WhyChooseSection from "./components/WhyChooseSection";
import CargoJourneySection from './components/CargoJourneySection';
import FooterSection from './components/FooterSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InfrastructureSection from './components/InfrastructureSection';
import GlobalNetworkSection from './components/GlobalNetworkSection';
import LeadershipSection from './components/LeadershipSection';
import Preloader from './components/Preloader';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useMotionValue, useSpring, useInView } from 'motion/react';
import { ArrowRight, Anchor, Globe, ShieldCheck, Award, CheckCircle, Navigation, MessageCircle, Target, Check, Truck, FileText, Plane, Package, MapPin, ArrowUpRight, Clock, Users, Building, Activity, Star } from 'lucide-react';

import heroImg from './assets/hero.png';
import heroVid1 from './assets/videos/hero-vid-1.mp4';
import heroVid2 from './assets/videos/hero-vid-2.mp4';
import heroVid3 from './assets/videos/hero-vid-3.mp4';
import heroVid4 from './assets/videos/hero-vid-4.mp4';
import aboutWarehouseImg from './assets/about_warehouse.png';
import aboutProfessionalImg from './assets/about_professional.png';
import serviceCustomsImg from './assets/service_customs.png';
import serviceFreightImg from './assets/service_freight.png';
import serviceTransportImg from './assets/service_transport.png';
import serviceWarehousingImg from './assets/service_warehousing.png';

import logoImg from './assets/logo-seagull.png';
import clLogo1 from './assets/cl-logo-1.png';
import clLogo2 from './assets/cl-logo-2.png';
import clLogo3 from './assets/cl-logo-3.png';
import clLogo4 from './assets/cl-logo-4.png';
import clLogo5 from './assets/cl-logo-5.png';
import clLogo6 from './assets/cl-logo-6.png';
import clLogo7 from './assets/cl-logo-7.png';
import clLogo8 from './assets/cl-logo-8.png';
import clLogo9 from './assets/cl-logo-9.png';
import clLogo10 from './assets/cl-logo-10.png';
import clLogo11 from './assets/cl-logo-11.png';
import clLogo12 from './assets/cl-logo-12.png';
import clLogo13 from './assets/cl-logo-13.png';
import clLogo14 from './assets/cl-logo-14.png';
import clLogo15 from './assets/cl-logo-15.png';
import clLogo16 from './assets/cl-logo-16.png';
import clLogo17 from './assets/cl-logo-17.png';
import clLogo18 from './assets/cl-logo-18.png';
import clLogo19 from './assets/cl-logo-19.png';
import clLogo20 from './assets/cl-logo-20.png';
import clLogo21 from './assets/cl-logo-21.png';
import clLogo22 from './assets/cl-logo-22.png';
import clLogo23 from './assets/cl-logo-23.png';
import clLogo24 from './assets/cl-logo-24.png';
import clLogo25 from './assets/cl-logo-25.png';
import clLogo26 from './assets/cl-logo-26.png';

// Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about-us', 'services', 'infrastructure', 'network', 'industries', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is somewhat in the top half of the viewport
          if (rect.top <= 250) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-4' : 'bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0)_100%)] py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Seagull Logo" className="h-10 w-auto object-contain" />
          {/* <span className="font-heading font-extrabold text-2.5xl tracking-tight text-navy">SEAGULL</span> */}
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['Home', 'About Us', 'Services', 'Infrastructure', 'Network', 'Industries', 'Contact'].map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-');
            const isActive = activeSection === sectionId;
            return (
              <a key={item} href={`#${sectionId}`} className={`text-brand-text hover:text-primary font-sans text-sm font-semibold relative group transition-colors ${isActive ? 'text-primary' : ''}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
        </div>

        <a href="#contact" className="hidden lg:flex items-center gap-2 px-7 py-3 rounded-md bg-[#0CAE49] text-white font-semibold text-sm hover:bg-[#20b858] hover:shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all duration-300 group">
          Request a Quote
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-navy p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-[0_20px_40px_rgb(0,0,0,0.1)] overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-bg/50">
              <img src={logoImg} alt="Seagull Logo" className="h-10 w-auto object-contain" />
              <button
                className="text-navy p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="flex flex-col px-6 py-6 space-y-5">
              {['Home', 'About Us', 'Services', 'Infrastructure', 'Network', 'Industries', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase().replace(' ', '-');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans text-[16px] font-semibold transition-colors ${isActive ? 'text-primary' : 'text-brand-text hover:text-primary'}`}
                  >
                    {item}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-brand-bg/80">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20b858] transition-colors text-white font-semibold text-[15px]"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// TrustStrip
const TrustStrip = () => {
  const items = [
    { icon: ShieldCheck, title: "ISO Certified", sub: "Quality Management" },
    { icon: Award, title: "AEO Certified", sub: "Authorized Economic Operator" },
    { icon: CheckCircle, title: "25+ Years", sub: "Industry Experience" },
    { icon: Globe, title: "Pan India", sub: "Network Coverage" },
    { icon: Navigation, title: "Worldwide", sub: "Logistics Operations" }
  ];

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 -mt-16 lg:-mt-24 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white rounded-[24px] lg:rounded-[28px] shadow-[0_20px_40px_rgba(11,58,102,0.06)] border border-brand-bg/50 p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 group flex-1">
            <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center shrink-0">
              <item.icon size={22} className={i === 1 || i === 3 ? "text-accent" : "text-primary"} />
            </div>
            <div>
              <div className="font-heading font-bold text-navy text-[15px]">{item.title}</div>
              <div className="font-sans text-[13px] text-brand-muted mt-0.5 leading-tight">{item.sub}</div>
            </div>
            {i !== items.length - 1 && (
              <div className="hidden lg:block w-px h-10 bg-brand-bg ml-auto mr-4" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ClientLogos
const ClientLogos = () => {
  const row1Logos = [
    clLogo1, clLogo2, clLogo3, clLogo4, clLogo5, clLogo6, clLogo7,
    clLogo8, clLogo9, clLogo10, clLogo11, clLogo12, clLogo13,
  ];

  const row2Logos = [
    clLogo14, clLogo15, clLogo16, clLogo17, clLogo18, clLogo19, clLogo20,
    clLogo21, clLogo22, clLogo23, clLogo24, clLogo25, clLogo26,
  ];

  const metrics = [
    { icon: Building, value: '200+', label: 'CLIENTS WORLDWIDE', bg: 'bg-blue-50/80', color: 'text-primary' },
    { icon: Award, value: '27+', label: 'YEARS OF EXPERIENCE', bg: 'bg-amber-50/80', color: 'text-amber-500' },
    { icon: Activity, value: '50,000+', label: 'PROJECTS DELIVERED', bg: 'bg-emerald-50/80', color: 'text-emerald-600' },
    { icon: Globe, value: 'GLOBAL REACH', label: 'MULTIPLE INDUSTRIES', bg: 'bg-indigo-50/80', color: 'text-indigo-600' },
  ];

  return (
    <div className="w-full bg-brand-bg pt-12 pb-16 overflow-hidden relative z-10 border-b border-brand-text/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8 flex items-center justify-center gap-3 text-center">
        <span className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0" />
        <span className="text-[12px] sm:text-[13px] font-bold text-brand-muted uppercase tracking-[0.15em] text-center">
          Trusted by 200+ Clients Worldwide
        </span>
        <span className="h-px w-6 sm:w-10 bg-brand-muted/30 shrink-0" />
      </div>

      {/* Two-Row Carousels */}
      <div className="flex flex-col gap-6 lg:gap-8 relative w-full overflow-hidden mb-12 lg:mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left Carousel */}
        <div className="flex relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 lg:gap-20 px-6 items-center hover:[animation-play-state:paused]"
          >
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <div key={`r1-${i}`} className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-16 hover:scale-105">
                <img src={logo} alt={`Client logo ${i + 1}`} className="h-full w-auto object-contain max-w-[160px]" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right Carousel */}
        <div className="flex relative w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap gap-12 lg:gap-20 px-6 items-center hover:[animation-play-state:paused]"
          >
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <div key={`r2-${i}`} className="transition-transform duration-300 cursor-default select-none shrink-0 flex items-center justify-center h-12 lg:h-16 hover:scale-105">
                <img src={logo} alt={`Client logo ${i + 14}`} className="h-full w-auto object-contain max-w-[160px]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Metrics Card */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] lg:rounded-[28px] shadow-[0_15px_35px_rgba(11,58,102,0.05)] border border-slate-100 p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-slate-100"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-3 sm:px-6 py-4 lg:py-0 ${
                i % 2 === 0 ? 'border-r border-slate-100 lg:border-r-0' : ''
              } ${i < 2 ? 'border-b border-slate-100 pb-6 lg:border-b-0 lg:pb-0' : 'pt-6 lg:pt-0'}`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 ${m.bg} ${m.color} rounded-xl flex items-center justify-center mb-3 shadow-sm shrink-0`}>
                <m.icon size={22} strokeWidth={2} />
              </div>

              {/* Value with fixed height container */}
              <div className="h-12 flex items-center justify-center mb-1 w-full">
                <span
                  className={`font-heading font-extrabold text-navy tracking-tight text-center leading-tight ${
                    m.value.length > 8 ? 'text-lg sm:text-xl lg:text-2xl' : 'text-2xl sm:text-3xl'
                  }`}
                >
                  {m.value}
                </span>
              </div>

              {/* Label with min height container */}
              <div className="min-h-[32px] flex items-center justify-center w-full">
                <span className="font-sans text-[11px] sm:text-[12px] font-bold text-brand-muted uppercase tracking-wider text-center leading-snug">
                  {m.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// WhatsApp Button
const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      href="#whatsapp-placeholder"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center gap-3 group"
    >
      <div className="bg-white px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        <span className="text-sm font-semibold text-brand-text">Chat with us</span>
      </div>
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300">
        <MessageCircle size={28} />
      </div>
    </motion.a>
  );
};

// AboutSection
const AboutSection = () => {
  return (
    <section id="about-us" className="w-full py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTEsIDU4LCAxMDIsIDAuMDMpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 mix-blend-multiply" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Column - Visual Story */}
          <div className="w-full lg:w-[54%] relative mb-6 lg:mb-0">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:w-[85%] aspect-[4/3] lg:aspect-[4/5] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(11,58,102,0.08)] group"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 6, ease: "easeOut" }}
                src={aboutWarehouseImg}
                alt="Modern logistics warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute -bottom-4 lg:-bottom-8 right-2 lg:-right-4 w-[55%] lg:w-[50%] aspect-square rounded-[20px] lg:rounded-[24px] border-[8px] lg:border-[12px] border-brand-bg overflow-hidden shadow-[0_25px_50px_rgba(11,58,102,0.12)] z-10 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 4, ease: "easeOut" }}
                src={aboutProfessionalImg}
                alt="Logistics professional coordinating shipments"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute top-6 lg:top-10 -left-2 lg:-left-8 bg-white px-5 lg:px-6 py-3 lg:py-4 rounded-[16px] lg:rounded-[20px] shadow-[0_15px_35px_rgba(11,58,102,0.1)] border border-brand-text/5 flex flex-col z-20"
            >
              <div className="flex items-center gap-2 mb-0.5 lg:mb-1">
                <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-heading font-extrabold text-navy text-xl lg:text-2xl">Since 1995</span>
              </div>
              <span className="text-[12px] lg:text-[13px] font-sans font-medium text-brand-muted">Trusted logistics expertise</span>
            </motion.div>

            {/* Decorative Map Ring */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-primary/10 rounded-full border-dashed animate-[spin_30s_linear_infinite] pointer-events-none -z-10 hidden lg:block" />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[46%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary/40 rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy mb-5 lg:mb-6"
            >
              A trusted logistics partner for <br className="hidden lg:block" />
              <span className="text-primary">seamless global trade.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-[16px] lg:text-[17px] leading-relaxed max-w-[600px] mb-8 lg:mb-10"
            >
              Seagull Clearing & Forwarding Agencies Pvt. Ltd. has delivered reliable and integrated logistics solutions since 1995. With a strong presence across major Indian ports and cities, we simplify customs clearance, freight forwarding, transportation and warehousing through a coordinated single-window approach.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-8 lg:mb-10">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[18px] p-5 lg:p-6 border border-brand-text/[0.04] shadow-[0_4px_20px_rgba(11,58,102,0.02)] hover:shadow-[0_12px_30px_rgba(11,58,102,0.06)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative">
                  <Target size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent border-2 border-white" />
                </div>
                <h3 className="font-heading font-bold text-navy text-[16px] lg:text-[17px] mb-2">Our Mission</h3>
                <p className="text-brand-muted text-[13.5px] leading-relaxed">To deliver efficient, reliable and cost-effective logistics solutions that enable seamless global trade.</p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-[18px] p-5 lg:p-6 border border-brand-text/[0.04] shadow-[0_4px_20px_rgba(11,58,102,0.02)] hover:shadow-[0_12px_30px_rgba(11,58,102,0.06)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative">
                  <Globe size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-accent border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-bold text-navy text-[16px] lg:text-[17px] mb-2">Our Vision</h3>
                <p className="text-brand-muted text-[13.5px] leading-relaxed">To be a trusted logistics partner recognised for excellence, innovation and customer satisfaction.</p>
              </motion.div>
            </div>

            {/* Operational Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 lg:mb-10"
            >
              <h4 className="font-heading font-bold text-navy text-[15px] lg:text-[16px] mb-4">Built for dependable execution</h4>
              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Experienced professionals",
                  "Strong operational infrastructure",
                  "Multi-location presence",
                  "Customer-centric service"
                ].map((strength, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-[2px] lg:mt-[1px]">
                      <Check size={12} className="text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] lg:text-[15px] font-sans text-brand-muted font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#about" className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group">
                Discover Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ServicesSection
const ServicesSection = () => {
  const [hoveredRoute, setHoveredRoute] = useState(false);

  return (
    <section id="services" className="w-full pt-20 pb-0 lg:pt-32 lg:pb-0 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-20">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary/40 rounded-full" />
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.15em]">Our Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] leading-[1.15] text-navy"
            >
              Integrated logistics solutions, <br className="hidden md:block" />
              <span className="text-primary">built around your business.</span>
            </motion.h2>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-muted text-[15px] lg:text-[16px] leading-relaxed lg:text-right mb-4"
            >
              From customs clearance and global freight forwarding to transportation, warehousing and final delivery, Seagull coordinates every stage through one dependable logistics network.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] lg:text-[15px] group hover:text-brightblue transition-colors"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 1: Customs Clearing (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:row-span-2 relative min-h-[480px] lg:min-h-[580px] rounded-[26px] lg:rounded-[30px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)]"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={serviceCustomsImg}
              alt="Customs clearance and port handling"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/20 to-navy/90 group-hover:to-navy/95 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10 pointer-events-none">
              <span className="font-heading font-bold text-white/80 text-xl tracking-wider">01</span>

              <div className="pointer-events-auto w-full max-w-lg">
                <h3 className="font-heading font-extrabold text-white text-3xl lg:text-4xl mb-3 transition-colors">Customs Clearing</h3>
                <p className="text-white/85 text-[16px] lg:text-[17px] mb-6 leading-relaxed">Fast, compliant and hassle-free customs processing across major ports.</p>

                {/* Expandable Services */}
                <div className="h-0 overflow-hidden opacity-0 -translate-y-4 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col gap-2.5 mb-2">
                  {['Import & Export Documentation', 'DGFT & Licensing Support', 'Duty Assessment & Compliance', 'Port Handling'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-white/90 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            {/* <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(21,101,192,0.4)] transition-all duration-300">
              <ArrowRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div> */}

          </motion.div>

          {/* Card 2: Freight Forwarding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative min-h-[320px] lg:min-h-0 rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)] bg-navy"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={serviceFreightImg}
              alt="Air and ocean freight forwarding"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 to-navy/20 group-hover:from-navy/90 transition-colors" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/50 text-lg">02</span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">Freight Forwarding</h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">Flexible air and ocean freight solutions tailored to your timelines and cargo requirements.</p>

                <div className="flex gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">Air Freight</span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">Ocean Freight</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Card 3: Transportation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative min-h-[320px] lg:min-h-0 rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)]"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 4, ease: "easeOut" }}
              src={serviceTransportImg}
              alt="Nationwide transportation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <span className="absolute top-8 left-8 font-heading font-bold text-white/70 text-lg">03</span>

              <div className="pointer-events-auto">
                <h3 className="font-heading font-extrabold text-white text-2xl mb-2">Transportation</h3>
                <p className="text-white/80 text-[14px] leading-relaxed mb-5">Dependable nationwide road and rail movement supported by a strong logistics network.</p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">Road</span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium">Rail</span>
                  <span className="px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[12px] font-medium hidden sm:block">Containerised</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Card 4: Warehousing (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 relative rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.06)] bg-[#F8FAFC] border border-brand-text/5 flex flex-col md:flex-row min-h-[380px] lg:min-h-0"
          >
            <div className="w-full md:w-1/2 relative h-[200px] md:h-auto overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 4, ease: "easeOut" }}
                src={serviceWarehousingImg}
                alt="Modern warehousing and distribution"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative">
              <span className="font-heading font-bold text-primary/40 text-lg mb-2">04</span>
              <h3 className="font-heading font-extrabold text-navy text-2xl mb-3">Warehousing & Distribution</h3>
              <p className="text-brand-muted text-[15px] leading-relaxed mb-6">Secure storage, inventory coordination, packing and distribution for efficient fulfilment.</p>

              <ul className="flex flex-col gap-2.5">
                {['Modern storage facilities', 'Temperature-controlled storage', 'Inventory management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-[13.5px] text-brand-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-8">
                <div className="w-10 h-10 rounded-full bg-white border border-brand-text/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer shadow-sm">
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div> */}
            </div>

          </motion.div>

          {/* Card 5: End-to-End (Distinct) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-[24px] lg:rounded-[28px] overflow-hidden group shadow-[0_15px_40px_rgba(11,58,102,0.15)] bg-navy p-8 lg:p-10 flex flex-col justify-between min-h-[380px] lg:min-h-0"
            onMouseEnter={() => setHoveredRoute(true)}
            onMouseLeave={() => setHoveredRoute(false)}
          >
            {/* Subtle background route graphic */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full" stroke="url(#gradient)" strokeWidth="0.5" fill="none">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#256FD5" />
                    <stop offset="100%" stopColor="#2E8B57" />
                  </linearGradient>
                </defs>
                <path d="M -10 50 Q 25 20, 50 50 T 110 50" strokeDasharray="2 4" className={hoveredRoute ? "animate-[dash_10s_linear_infinite]" : ""} />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="font-heading font-bold text-white/30 text-lg mb-4 block">05</span>
              <h3 className="font-heading font-extrabold text-white text-2xl lg:text-3xl mb-3">End-to-End Logistics</h3>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">From pickup and documentation to customs, storage and final delivery, we coordinate the complete supply chain.</p>
            </div>

            <div className="relative z-10">
              {/* Interactive Route Line */}
              <div className="flex items-center gap-1.5 mb-8 text-[11px] font-bold tracking-wider uppercase text-white/60">
                <span className={hoveredRoute ? "text-accent transition-colors" : ""}>Pickup</span>
                <ArrowRight size={10} />
                <span className={hoveredRoute ? "text-accent transition-colors delay-100" : ""}>Customs</span>
                <ArrowRight size={10} />
                <span className={hoveredRoute ? "text-accent transition-colors delay-200" : ""}>Freight</span>
                <ArrowRight size={10} />
                <span className="hidden sm:inline">Warehouse</span>
                <ArrowRight size={10} className="hidden sm:inline" />
                <span className={hoveredRoute ? "text-accent transition-colors delay-300" : ""}>Delivery</span>
              </div>

              <a href="#workflow" className="inline-flex items-center gap-2 text-white font-semibold text-[14px] group-hover:text-primary transition-colors bg-white/10 hover:bg-white px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/20 hover:border-white">
                See How It Works
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-t border-brand-text/5"
        >
          <p className="font-heading font-bold text-navy text-[16px] lg:text-[18px]">
            One partner. Every stage of your logistics journey.
          </p>
          <a href="#services" className="group flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-6 py-3 rounded-[14px] font-semibold text-[14px] transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5">
            Explore All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// HeroSection with Video Slider
const heroVideos = [
  heroVid1,
  heroVid2,
  heroVid3,
  heroVid4,
];

const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-advance slider
  useEffect(() => {
    if (heroVideos.length <= 1) return;
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Play the active video, pause others
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeVideo) {
        vid.currentTime = 0;
        vid.play().catch(() => { });
      } else {
        vid.pause();
      }
    });
  }, [activeVideo]);

  return (
    <section id="home" className="relative w-full min-h-[100vh] lg:min-h-[880px] lg:h-[85vh] flex items-center pt-24 lg:pt-0 bg-navy overflow-hidden">

      {/* Video Background Slides */}
      {heroVideos.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full z-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === activeVideo ? 1 : 0 }}
        >
          <video
            ref={(el) => { videoRefs.current[i] = el; }}
            src={src}
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* White gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/90 via-white/80 to-white/40 sm:from-white/85 sm:via-white/15 sm:to-transparent z-[2] pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col justify-center pb-20 lg:pb-0">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm mb-6 lg:mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="text-[11px] font-bold text-navy tracking-widest uppercase">Global Logistics Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-heading font-extrabold text-[44px] sm:text-5xl lg:text-[56px] leading-[1.1] text-brand-dark tracking-tight"
          >
            Delivering Global Logistics with <br className="hidden md:block" />
            <span className="text-primary">Precision, Speed & Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-6 lg:mt-8 text-[14px] lg:text-[17px] text-brand-muted font-sans max-w-[580px] leading-relaxed"
          >
            Seagull Clearing & Forwarding Agencies Pvt. Ltd. provides integrated customs clearance, freight forwarding, transportation, and warehousing solutions across India and international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-10 lg:mt-12"
          >
            <a href="#services" className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(21,101,192,0.4)] hover:bg-brightblue">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#contact" className="group flex items-center justify-center gap-2 backdrop-blur-md bg-white/30 text-primary border-2 border-primary/20 px-8 py-4 rounded-md font-semibold text-[15px] transition-all duration-300 hover:border-primary hover:bg-white/50 hover:-translate-y-1">
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slider Navigation Dots */}
      {heroVideos.length > 1 && (
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 flex items-center gap-3">
          {heroVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(i)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${i === activeVideo
                ? 'bg-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                : 'bg-white/40 hover:bg-white/70'
                }`}
            >
              {/* Progress ring for active dot */}
              {i === activeVideo && (
                <svg className="absolute -inset-1.5 w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <motion.circle
                    cx="12" cy="12" r="10"
                    fill="none" stroke="white" strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 10}
                    initial={{ strokeDashoffset: 2 * Math.PI * 10 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 8, ease: "linear" }}
                    key={activeVideo}
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default function App() {
  return (
    <main className="w-full min-h-screen bg-brand-bg relative selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Preloader />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <TrustStrip />
      <ClientLogos />
      <AboutSection />
      <LeadershipSection />
      <ServicesSection />
      <CargoJourneySection />
      <WhyChooseSection />
      <GlobalNetworkSection />
      <InfrastructureSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      {/* <WhatsAppButton /> */}

    </main>
  );
}

