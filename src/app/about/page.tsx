import { CheckCircle } from 'lucide-react';
import { teamStats } from '@/data/siteData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'من نحن',
    description: 'تعرّف على الكوثر كروب للمقاولات العامة في العراق. خبرة هندسية، التزام بأعلى المواصفات (ASHRAE, NFPA, ISO)، وإشراف موقعي دقيق للمشاريع المدنية والميكانيكية.',
};

const features = [
    'شركاء في نجاح زبائننا — لا نعمل لإرضاء الزبون فقط بل نعمل معه لتحقيق أهدافه',
    'نقدّم خبرات هندسية لتقديم الحلول ونجعل رؤية عملائنا ونجاحهم واقعاً',
    'مرونة عالية في التعامل مع متطلبات المشاريع المختلفة',
    'سرعة الإنجاز مع الحفاظ على أعلى مستويات الجودة',
    'اتباع أعلى معايير الأمن والسلامة المهنية',
    'تنفيذ مشاريع تتسم بالكفاءة والاستدامة',
    'تلبية توقعات العملاء بدقة عالية وثقة كاملة',
];

const servicesList = [
    'تصميم وتنفيذ جميع الأعمال المعمارية',
    'تصميم وتنفيذ جميع الأعمال الميكانيكية',
    'تصميم وتنفيذ جميع الأعمال المدنية',
    'تصميم وتنفيذ محطات معالجة المياه والمحطات البايولوجية',
    'تصميم وتنفيذ غرف العمليات في المستشفيات',
    'تقديم الحلول الهندسية وخدمات الاستشارة والإشراف الهندسي',
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-l from-[#0f2c5e] to-[#1a3f82] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                        من نحن
                    </span>
                    <h1 className="text-4xl font-black text-white mb-4">الكوثر كروب… شريك تنفيذ هندسي</h1>
                    <p className="text-blue-200 max-w-2xl mx-auto">
                        نحن شركة مقاولات عامة متخصصة بتنفيذ المشاريع الهندسية المدنية والميكانيكية والكهربائية المتكاملة
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl font-black text-[#0f2c5e] mb-5">من نحن</h2>
                            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                <p>
                                    نحن شركة مقاولات عامة متخصصة بتنفيذ المشاريع الهندسية المدنية والميكانيكية والكهربائية المتكاملة. نعمل بمنهجية تعتمد على التخطيط الدقيق، الكفاءة في التنفيذ والجودة العالية، مما يجعلنا شريكاً موثوقاً للقطاعين الحكومي والخاص.
                                </p>
                                <p>
                                    نلتزم بتطبيق أبرز المواصفات العالمية مثل <span className="font-bold text-[#0f2c5e]">ASHRAE</span>، <span className="font-bold text-[#0f2c5e]">NFPA</span>، <span className="font-bold text-[#0f2c5e]">SMACNA</span>، <span className="font-bold text-[#0f2c5e]">ASTM</span>، و<span className="font-bold text-[#0f2c5e]">ISO</span>، ونستخدم مواد معتمدة ومعدات حديثة يديرها فريق هندسي متخصص يشرف على المشروع من التصميم حتى التسليم.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {teamStats.map((s, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                                    <p className="text-4xl font-black text-[#0f2c5e] mb-2">{s.value}</p>
                                    <p className="text-gray-500 text-sm">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What we offer & what sets us apart */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Services list */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h2 className="text-xl font-black text-[#0f2c5e] mb-6">خدماتنا الكاملة</h2>
                            <ul className="space-y-3">
                                {servicesList.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Differentiators */}
                        <div className="bg-[#0f2c5e] rounded-3xl p-8">
                            <h2 className="text-xl font-black text-white mb-6">ما يميّزنا</h2>
                            <ul className="space-y-3">
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-blue-100">
                                        <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
