import { CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'خدماتنا',
    description: 'اكتشف خدماتنا الهندسية المتكاملة في العراق: الأعمال المعمارية، الميكانيكية، المدنية، محطات معالجة المياه، غرف العمليات، والاستشارات الهندسية من الكوثر كروب.',
};

const detailedServices = [
    {
        id: 'architectural',
        title: 'تصميم وتنفيذ جميع الأعمال المعمارية',
        desc: 'نقدّم خدمات التصميم المعماري والتنفيذ الشامل للمباني بمختلف أنواعها، من التصميم الداخلي المبتكر إلى الواجهات الخارجية الحديثة.',
        features: ['التصميم المعماري الداخلي والخارجي', 'تنفيذ الواجهات بأحدث المواد', 'أعمال الديكور والتصميم الداخلي', 'إدارة مشاريع معمارية متكاملة'],
        badge: 'معماري',
    },
    {
        id: 'mechanical',
        title: 'تصميم وتنفيذ جميع الأعمال الميكانيكية',
        desc: 'متخصصون في تصميم وتنفيذ الأنظمة الميكانيكية بكافة تخصصاتها: تكييف وتهوية، إطفاء حريق، سباكة، وأنظمة الغاز الطبي للمستشفيات.',
        features: ['أنظمة التكييف والتهوية HVAC', 'أنظمة إطفاء الحريق Fire Fighting', 'أنظمة السباكة والصرف Plumbing', 'منظومة الغاز الطبي Medical Gas'],
        badge: 'ميكانيك',
    },
    {
        id: 'civil',
        title: 'تصميم وتنفيذ جميع الأعمال المدنية',
        desc: 'ننفّذ جميع الأعمال المدنية والإنشائية بجودة عالية، من الهياكل الخرسانية إلى التشطيبات النهائية والأرضيات والجبس بورد.',
        features: ['أعمال البناء والهياكل الإنشائية', 'تشطيبات داخلية وخارجية', 'أعمال السيراميك والأرضيات', 'أعمال الجبس بورد والأسقف'],
        badge: 'مدني',
    },
    {
        id: 'water-treatment',
        title: 'تصميم وتنفيذ محطات معالجة المياه',
        desc: 'نقدّم حلولاً متكاملة لتصميم وتنفيذ محطات معالجة المياه والمحطات البايولوجية بأحدث التقنيات وأعلى معايير الجودة البيئية.',
        features: ['محطات معالجة المياه', 'المحطات البايولوجية', 'أنظمة التنقية والتصفية', 'محطات الضخ والتوزيع'],
        badge: 'معالجة مياه',
    },
    {
        id: 'operating-rooms',
        title: 'تصميم وتنفيذ غرف العمليات في المستشفيات',
        desc: 'خبرة واسعة في تنفيذ غرف العمليات وفق المعايير الدولية، مع أنظمة تعقيم وتهوية وغاز طبي ومراقبة متكاملة.',
        features: ['تصميم غرف عمليات بمعايير دولية', 'أنظمة التعقيم والتهوية المتقدمة', 'أنظمة الغاز الطبي والمراقبة', 'فلاتر HEPA وأنظمة العزل'],
        badge: 'طبي',
    },
    {
        id: 'consulting',
        title: 'الحلول الهندسية والاستشارة والإشراف',
        desc: 'نقدّم خدمات الاستشارة الهندسية والإشراف على المشاريع بكافة تخصصاتها، مع حلول هندسية مبتكرة تقلّل التكاليف وتضمن الجودة.',
        features: ['تقديم الحلول الهندسية المبتكرة', 'خدمات الاستشارة الفنية', 'الإشراف الهندسي على التنفيذ', 'إدارة المشاريع وضبط الجودة'],
        badge: 'استشارات',
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-l from-[#0f2c5e] to-[#1a3f82] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">خدماتنا</span>
                    <h1 className="text-4xl font-black text-white mb-4">خدمات هندسية متكاملة</h1>
                    <p className="text-blue-200 max-w-2xl mx-auto">نغطّي كامل احتياجاتك الهندسية — معمارية، ميكانيكية، ومدنية — تحت سقف واحد</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedServices.map((svc) => (
                            <div
                                key={svc.id}
                                className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-[0_8px_40px_rgba(15,44,94,0.16)] transition-all group"
                            >
                                <span className="inline-block bg-blue-50 text-[#0f2c5e] text-xs font-bold px-3 py-1 rounded-full mb-4 border border-blue-100">
                                    {svc.badge}
                                </span>
                                <h2 className="text-[#0f2c5e] font-black text-lg mb-3">{svc.title}</h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                                <ul className="space-y-2">
                                    {svc.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-black text-[#0f2c5e] mb-4">هل مشروعك يحتاج خدمة مخصّصة؟</h2>
                    <p className="text-gray-500 mb-6 text-sm">تواصل معنا وسنقدّم لك الحل الهندسي المناسب</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-2xl transition-colors shadow-md"
                        >
                            <MessageCircle size={18} />
                            تواصل معنا
                        </a>
                        <Link
                            href="/consultation"
                            className="flex items-center gap-2 border-2 border-[#0f2c5e] text-[#0f2c5e] hover:bg-[#0f2c5e] hover:text-white font-bold px-7 py-3.5 rounded-2xl transition-all"
                        >
                            اطلب استشارة مجانية
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
