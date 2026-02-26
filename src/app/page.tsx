'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain, Clock, HardHat, CheckCircle, Lightbulb, FileText,
  Wind, Building2, Wrench, ShoppingBag, TrendingUp, Briefcase,
  Factory, HeartPulse, MessageCircle, ChevronLeft, Droplets, ClipboardCheck
} from 'lucide-react';
import { whyUsPoints, mainServices, workSteps, sectors, siteConfig, teamStats } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Brain, Clock, HardHat, CheckCircle, Lightbulb, FileText,
  Wind, Building2, Wrench, ShoppingBag, TrendingUp, Briefcase,
  Factory, HeartPulse, Droplets, ClipboardCheck
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Side */}
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <span className="inline-block bg-blue-50 text-[#0f2c5e] text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-blue-100">
                ✦ الجودة والالتزام
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c5e] leading-tight mb-6">
                حلول هندسية متكاملة…{' '}
                <span className="gradient-text">من التخطيط إلى التسليم</span>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl">
                شركة الكوثر كروب للمقاولات العامة تقدّم خدمات تصميم وتنفيذ وإشراف هندسي للمشاريع التجارية والصناعية والمرافق الحيوية. نعمل بمنهج "شريك النجاح" عبر نظام عمل منضبط يركز على الجودة، الالتزام، والتوثيق في كل مرحلة.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0f2c5e] hover:bg-[#1a3f82] text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  تواصل عبر واتساب الآن
                </a>
                <Link
                  href="/services"
                  className="flex items-center gap-2 border-2 border-[#0f2c5e] text-[#0f2c5e] hover:bg-[#0f2c5e] hover:text-white font-bold px-6 py-3.5 rounded-2xl transition-all"
                >
                  استعرض خدماتنا
                  <ChevronLeft size={18} />
                </Link>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'التخصص الأساسي', value: 'الأنظمة الميكانيكية والأعمال المدنية' },
                  { label: 'نطاق الخدمة', value: 'جميع محافظات العراق' },
                  { label: 'آلية العمل', value: 'إشراف هندسي وتوثيق مستمر' },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    custom={i} initial="hidden" animate="visible" variants={fadeUp}
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm"
                  >
                    <p className="text-gray-400 text-xs mb-1">{card.label}</p>
                    <p className="text-[#0f2c5e] font-bold text-sm">{card.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Grid Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-3 h-[500px]">
                {/* Large image */}
                <div className="col-span-1 row-span-2 relative overflow-hidden rounded-3xl shadow-card group">
                  <Image
                    src="/images/hero-1.jpg"
                    alt="تنفيذ مشاريع هندسية متكاملة وأنظمة ميكانيكية متطورة في العراق بواسطة الكوثر كروب"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c5e]/40 to-transparent rounded-3xl" />
                </div>
                {/* Small image 1 */}
                <div className="relative overflow-hidden rounded-3xl shadow-card group">
                  <Image
                    src="/images/hero-2.jpg"
                    alt="تصميم وتركيب أنظمة التكييف والتهوية المركزية (HVAC) للمشاريع التجارية"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d9488]/30 to-transparent rounded-3xl" />
                </div>
                {/* Small image 2 */}
                <div className="relative overflow-hidden rounded-3xl shadow-card group">
                  <Image
                    src="/images/hero-3.jpg"
                    alt="إشراف موقعي ومراجعة مخططات هندسية دقيقة لضمان أعلى معايير التنفيذ"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c5e]/30 to-transparent rounded-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#0f2c5e]">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black text-emerald-400">{s.value}</p>
                <p className="text-blue-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-blue-50 text-[#0f2c5e] text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-blue-100">
              مميزاتنا
            </span>
            <h2 className="text-3xl font-black text-[#0f2c5e]">لماذا الكوثر؟</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">ما يجعلنا الخيار الأمثل لمشروعك الهندسي</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((point, i) => {
              const Icon = iconMap[point.icon];
              return (
                <motion.div
                  key={i} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} variants={fadeUp}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0f2c5e] transition-colors">
                    {Icon && <Icon size={22} className="text-[#0f2c5e] group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="font-bold text-[#0f2c5e] text-base mb-2">{point.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-teal-100">
              ما نقدّمه
            </span>
            <h2 className="text-3xl font-black text-[#0f2c5e]">خدماتنا الأساسية</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainServices.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <motion.div
                  key={i} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} variants={fadeUp}
                  className="relative bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-card-hover transition-all group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0f2c5e] to-[#0d9488] rounded-r-full" />
                  <div className="w-14 h-14 bg-[#0f2c5e]/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0f2c5e] transition-colors">
                    {Icon && <Icon size={26} className="text-[#0f2c5e] group-hover:text-white transition-colors" />}
                  </div>
                  <p className="text-xs text-teal-600 font-semibold mb-1">{svc.subtitle}</p>
                  <h3 className="font-black text-[#0f2c5e] text-xl mb-4">{svc.title}</h3>
                  <ul className="space-y-2">
                    {svc.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Link href="/services" className="text-[#0f2c5e] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      تفاصيل أكثر <ChevronLeft size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== HOW WE WORK ========== */}
      <section className="py-20 bg-[#0f2c5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">
              منهجيتنا
            </span>
            <h2 className="text-3xl font-black text-white">آلية العمل</h2>
            <p className="text-blue-200 mt-3 text-sm">خطوات واضحة لضمان إنجاز مشروعك بأعلى معايير الجودة</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 right-0 left-0 h-0.5 bg-white/10 mx-16" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {workSteps.map((step, i) => (
                <motion.div
                  key={i} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} variants={fadeUp}
                  className="relative text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors">
                    <span className="text-emerald-400 font-black text-lg group-hover:text-white transition-colors">{step.num}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                  <p className="text-blue-300 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTORS ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="inline-block bg-blue-50 text-[#0f2c5e] text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-blue-100">
              قطاعاتنا
            </span>
            <h2 className="text-3xl font-black text-[#0f2c5e]">قطاعات نخدمها</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {sectors.map((sec, i) => {
              const Icon = iconMap[sec.icon];
              return (
                <motion.div
                  key={i} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} variants={fadeUp}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-[#0f2c5e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon size={24} className="text-white" />}
                  </div>
                  <h3 className="font-bold text-[#0f2c5e] text-sm mb-1">{sec.title}</h3>
                  <p className="text-gray-400 text-xs">{sec.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-black text-[#0f2c5e] mb-4">مستعد لإطلاق مشروعك؟</h2>
            <p className="text-gray-500 mb-8 text-base">تواصل معنا الآن لمناقشة متطلباتك والحصول على عرض هندسي متخصص مجاناً.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                تواصل عبر واتساب الآن
              </a>
              <Link
                href="/consultation"
                className="flex items-center gap-2 border-2 border-[#0f2c5e] text-[#0f2c5e] hover:bg-[#0f2c5e] hover:text-white font-bold px-8 py-4 rounded-2xl transition-all"
              >
                اطلب استشارة هندسية
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
