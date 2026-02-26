'use client';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import { CheckCircle, Upload, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

type FormData = {
    name: string;
    projectType: string;
    city: string;
    serviceScope: string;
    phone: string;
};

const projectTypes = ['مبنى سكني', 'مبنى تجاري', 'مستشفى أو عيادة', 'مصنع أو منشأة صناعية', 'فندق', 'مدرسة أو جامعة', 'أخرى'];
const cities = ['بغداد', 'البصرة', 'الموصل', 'أربيل', 'النجف', 'كربلاء', 'كركوك', 'الأنبار', 'ذي قار', 'ديالى', 'بابل', 'واسط', 'ميسان', 'المثنى', 'القادسية', 'صلاح الدين', 'دهوك', 'السليمانية', 'حلبجة'];
const scopes = ['أنظمة HVAC فقط', 'إطفاء الحريق فقط', 'سباكة وصرف', 'مشروع طبي متكامل', 'أعمال مدنية وتشطيبات', 'مشروع Turn Key متكامل', 'متعدد التخصصات'];

export default function ConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const hasFiles = fileInputRef.current?.files && fileInputRef.current.files.length > 0;

        let message = `مرحباً، أود طلب استشارة هندسية:\n`;
        message += `الاسم: ${data.name}\n`;
        message += `نوع المشروع: ${data.projectType}\n`;
        message += `المدينة: ${data.city}\n`;
        message += `الخدمة المطلوبة: ${data.serviceScope}\n`;
        message += `رقم التواصل: ${data.phone}`;

        if (hasFiles) {
            message += `\n(ملاحظة: لدي مخططات/وثائق سأقوم بإرسالها لكم هنا في المحادثة).`;
        }

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, '_blank');
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
                <div className="bg-white rounded-3xl p-10 text-center max-w-md shadow-card border border-gray-100">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-black text-[#0f2c5e] mb-3">تم استلام طلبك!</h2>
                    <p className="text-gray-500 text-sm">سيتواصل معك فريقنا الهندسي خلال 24 ساعة لمناقشة تفاصيل مشروعك.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-16">
            {/* Header */}
            <div className="max-w-3xl mx-auto px-4 mb-10 text-center">
                <span className="inline-block bg-blue-50 text-[#0f2c5e] text-xs font-bold px-4 py-1.5 rounded-full mb-3 border border-blue-100">استشارة هندسية</span>
                <h1 className="text-3xl font-black text-[#0f2c5e] mb-3">اطلب استشارة هندسية</h1>
                <p className="text-gray-500 text-sm">أخبرنا عن مشروعك وسنتواصل معك بحل هندسي مناسب مجاناً</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto px-4 space-y-5">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">الاسم الكامل *</label>
                        <input
                            {...register('name', { required: 'الاسم مطلوب' })}
                            placeholder="أدخل اسمك الكامل"
                            className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#0f2c5e] ${errors.name ? 'border-red-300' : 'border-gray-100'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Project Type */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">نوع المشروع *</label>
                        <select
                            {...register('projectType', { required: 'يرجى اختيار نوع المشروع' })}
                            className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#0f2c5e] ${errors.projectType ? 'border-red-300' : 'border-gray-100'}`}
                        >
                            <option value="">اختر نوع المشروع</option>
                            {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">المدينة / المحافظة *</label>
                        <select
                            {...register('city', { required: 'يرجى اختيار المدينة' })}
                            className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#0f2c5e] ${errors.city ? 'border-red-300' : 'border-gray-100'}`}
                        >
                            <option value="">اختر المحافظة</option>
                            {cities.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                    </div>

                    {/* Service Scope */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">نطاق الخدمة المطلوبة *</label>
                        <select
                            {...register('serviceScope', { required: 'يرجى تحديد نطاق الخدمة' })}
                            className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#0f2c5e] ${errors.serviceScope ? 'border-red-300' : 'border-gray-100'}`}
                        >
                            <option value="">اختر نطاق الخدمة</option>
                            {scopes.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.serviceScope && <p className="text-red-500 text-xs mt-1">{errors.serviceScope.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">رقم الهاتف *</label>
                        <input
                            {...register('phone', {
                                required: 'رقم الهاتف مطلوب',
                                pattern: { value: /^[0-9+\s]{10,15}$/, message: 'رقم هاتف غير صحيح' }
                            })}
                            placeholder="+964 7XX XXX XXXX"
                            dir="ltr"
                            className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#0f2c5e] text-right ${errors.phone ? 'border-red-300' : 'border-gray-100'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    {/* File Upload Zone */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">رفع المخططات أو الوثائق (اختياري)</label>
                        <label className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#0f2c5e] transition-colors cursor-pointer bg-gray-50 block">
                            <Upload size={28} className="text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">اسحب الملفات هنا أو <span className="text-[#0f2c5e] font-semibold">انقر للاختيار</span></p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DWG, JPG — بحد أقصى 10MB</p>
                            <input ref={fileInputRef} type="file" className="hidden" multiple accept=".pdf,.dwg,.jpg,.jpeg,.png" />
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-colors shadow-md text-base disabled:opacity-70 flex items-center justify-center gap-2"
                >
                    <MessageCircle size={20} />
                    {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال عبر واتساب'}
                </button>
            </form>
        </div>
    );
}
