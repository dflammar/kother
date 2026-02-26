'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

type ContactForm = { name: string; phone: string; message: string; };

const contactCards = [
    { icon: Phone, label: 'الهاتف', value: siteConfig.phone, href: `tel:${siteConfig.phone}`, color: 'bg-blue-50 text-[#0f2c5e]' },
    { icon: MessageCircle, label: 'واتساب', value: siteConfig.whatsappDisplay, href: `https://wa.me/${siteConfig.whatsapp}`, color: 'bg-emerald-50 text-emerald-700' },
    { icon: Mail, label: 'البريد الإلكتروني', value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: 'bg-purple-50 text-purple-700' },
    { icon: MapPin, label: 'العنوان', value: siteConfig.address, href: '#', color: 'bg-orange-50 text-orange-700' },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>();

    const onSubmit = (data: ContactForm) => {
        let message = `مرحباً، لدي استفسار من الموقع الإلكتروني:\n`;
        message += `الاسم: ${data.name}\n`;
        message += `رقم الهاتف: ${data.phone}\n`;
        message += `الرسالة: ${data.message}`;
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encoded}`, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-l from-[#0f2c5e] to-[#1a3f82] py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">تواصل معنا</span>
                    <h1 className="text-4xl font-black text-white mb-3">نحن هنا لمساعدتك</h1>
                    <p className="text-blue-200 max-w-xl mx-auto text-sm">تواصل معنا عبر أي قناة تفضّلها وسيردّ فريقنا في أقرب وقت</p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                        {contactCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <a
                                    key={i}
                                    href={card.href}
                                    target={card.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-card-hover transition-all text-center group"
                                >
                                    <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                                        <Icon size={24} />
                                    </div>
                                    <p className="text-xs text-gray-400 mb-1">{card.label}</p>
                                    <p className="font-bold text-[#0f2c5e] text-sm">{card.value}</p>
                                </a>
                            );
                        })}
                    </div>

                    {/* Quick Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-black text-[#0f2c5e] mb-8 text-center">أرسل رسالة سريعة</h2>

                        {submitted ? (
                            <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 shadow-sm">
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle size={32} className="text-emerald-500" />
                                </div>
                                <h3 className="font-black text-[#0f2c5e] text-xl mb-2">تم الإرسال بنجاح!</h3>
                                <p className="text-gray-500 text-sm">سنتواصل معك قريباً.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">الاسم *</label>
                                    <input
                                        {...register('name', { required: 'الاسم مطلوب' })}
                                        placeholder="اسمك الكامل"
                                        className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#0f2c5e] transition-colors ${errors.name ? 'border-red-300' : 'border-gray-100'}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">رقم الهاتف *</label>
                                    <input
                                        {...register('phone', { required: 'رقم الهاتف مطلوب' })}
                                        placeholder="+964 7XX XXX XXXX"
                                        dir="ltr"
                                        className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#0f2c5e] transition-colors text-right ${errors.phone ? 'border-red-300' : 'border-gray-100'}`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">الرسالة *</label>
                                    <textarea
                                        {...register('message', { required: 'الرسالة مطلوبة' })}
                                        rows={4}
                                        placeholder="اكتب رسالتك أو استفسارك هنا..."
                                        className={`w-full border-2 rounded-2xl px-4 py-3.5 text-sm outline-none bg-gray-50 focus:bg-white focus:border-[#0f2c5e] transition-colors resize-none ${errors.message ? 'border-red-300' : 'border-gray-100'}`}
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#0f2c5e] hover:bg-[#1a3f82] text-white font-black py-4 rounded-2xl transition-colors shadow-md disabled:opacity-70"
                                >
                                    {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
