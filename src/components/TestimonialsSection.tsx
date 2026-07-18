import { motion } from 'framer-motion';
import { Quote, ArrowRight, Building, Activity, Star } from 'lucide-react';

import avatarBata from '../assets/avatar_bata.png';
import avatarBhaane from '../assets/avatar_bhaane.png';
import avatarInventaa from '../assets/avatar_inventaa.png';
import avatarNissin from '../assets/avatar_nissin.png';

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const featuredTestimonial = {
  name: 'C. Govindaraju & Ashwani Kumar',
  company: 'Bata India Limited',
  designation: 'Supply Chain Leadership',
  industry: 'Retail & Footwear',
  avatar: avatarBata,
  quote:
    "Seagull has been instrumental in managing our supply chain complexities at Bata India. Their expertise in warehousing, distribution, and timely customs clearance ensures our retail outlets are always stocked. They understand the fast-paced nature of the footwear industry and consistently deliver reliable, pan-India logistics support.",
};

const supportingTestimonials = [
  {
    name: 'Rakshit Rustogi',
    company: 'Bhaane Retail Private Limited',
    designation: 'Head of Operations',
    industry: 'Apparel & Retail',
    avatar: avatarBhaane,
    rating: 5,
    quote:
      "Working with Seagull has transformed our logistics framework. From smooth customs processing for our fashion imports to seamless nationwide forwarding, their team is highly proactive. They provide the agility required in modern retail.",
  },
  {
    name: 'V. Ravichandran',
    company: 'Inventaa LED Lights Private Limited',
    designation: 'Managing Director',
    industry: 'Electronics',
    avatar: avatarInventaa,
    rating: 5,
    quote:
      "For importing sensitive electronic components, precision is key. Seagull's customs clearance team handles our documentation flawlessly, preventing any delays. Their warehousing solutions ensure our inventory is safe and accessible.",
  },
  {
    name: 'S. Sreedharan',
    company: 'Nissin ABC India Private Limited',
    designation: 'Logistics Director',
    industry: 'Manufacturing',
    avatar: avatarNissin,
    rating: 5,
    quote:
      "Seagull provides exceptional end-to-end logistics. Their fleet reliability and transparent tracking give us complete peace of mind. We consider them a core partner in maintaining our nationwide distribution efficiency.",
  },
];

const metrics = [
  { icon: <Building className="w-6 h-6" />, value: '200+', label: 'Long-Term Clients', bg: 'bg-blue-50', color: 'text-primary' },
  { icon: <Activity className="w-6 h-6" />, value: '50,000+', label: 'Shipments Delivered', bg: 'bg-green-50', color: 'text-green-600' },
  { icon: <Star className="w-6 h-6" />, value: '4.9/5', label: 'Client Satisfaction', bg: 'bg-amber-50', color: 'text-amber-500' },
  { icon: <Activity className="w-6 h-6" />, value: '98%', label: 'On-Time Delivery', bg: 'bg-indigo-50', color: 'text-indigo-600' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-white py-[140px] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[760px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Client Success</span>
            <div className="w-2 h-2 bg-[#2E8B57] rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6"
          >
            Trusted by Businesses <br />
            <span className="text-primary">Across Industries.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted font-medium"
          >
            Long-term client relationships are built through dependable service, transparent communication and consistent logistics performance.
          </motion.p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col gap-8 mb-24">

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden group"
          >
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
              {/* Left: Author Info */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 shrink-0">
                <Quote className="w-14 h-14 text-primary/15" />
                <StarRating />
                <div className="flex items-center gap-5">
                  <img
                    src={featuredTestimonial.avatar}
                    alt={featuredTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover object-top shadow-[0_8px_20px_rgba(0,0,0,0.12)] border-2 border-white ring-2 ring-primary/10"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-navy">{featuredTestimonial.name}</h4>
                    <p className="text-brand-muted font-medium text-[14px]">{featuredTestimonial.designation}</p>
                    <p className="text-primary font-semibold text-[13px]">{featuredTestimonial.company}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/8 text-primary text-[12px] font-bold rounded-full tracking-wide">
                      {featuredTestimonial.industry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Quote */}
              <div className="w-full lg:w-2/3">
                <p className="text-[16px] md:text-[18px] font-medium text-navy/80 leading-relaxed">
                  "{featuredTestimonial.quote}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportingTestimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-primary/20 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-primary/3 rounded-full blur-[50px] pointer-events-none" />
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <Quote className="w-10 h-10 text-slate-200 group-hover:text-primary/20 transition-colors" />
                  <StarRating count={t.rating} />
                </div>
                <p className="text-[16px] text-brand-muted leading-relaxed mb-8 grow relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100 relative z-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover object-top shadow-md border border-white ring-1 ring-primary/10 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h5 className="font-bold text-navy text-[15px]">{t.name}</h5>
                    <p className="text-[12px] text-brand-muted font-medium">{t.designation}</p>
                    <p className="text-[12px] text-primary font-semibold">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] mb-24 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100"
        >
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 py-4 lg:py-0">
              <div className={`w-12 h-12 ${m.bg} ${m.color} rounded-xl flex items-center justify-center mb-4`}>
                {m.icon}
              </div>
              <span className="text-3xl font-extrabold text-navy mb-1">{m.value}</span>
              <span className="text-sm font-semibold text-brand-muted uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary to-navy rounded-[32px] p-12 md:p-16 lg:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Build Your Next Success Story.
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
              Our team is ready to understand your logistics requirements and deliver reliable end-to-end solutions tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="group w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                Speak with Our Experts
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
