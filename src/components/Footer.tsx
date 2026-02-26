import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ArrowLeft, Facebook, Instagram } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteData';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-[#091d3e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white">
                                <Image src="/images/logo.jpg" alt="الكوثر كروب" fill className="object-contain p-1" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">{siteConfig.name}</p>
                                <p className="text-slate-400 text-xs">للمقاولات العامة</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            شريككم الهندسي الموثوق في تصميم وتنفيذ الأنظمة الميكانيكية والأعمال المدنية في جميع محافظات العراق.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-base mb-4 text-white/90">روابط سريعة</h4>
                        <ul className="space-y-2">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors">
                                        <ArrowLeft size={14} />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-base mb-4 text-white/90">تواصل معنا</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-emerald-400" />
                                <a href={`tel:${siteConfig.phone}`} className="hover:text-emerald-400 transition-colors" dir="ltr">{siteConfig.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle size={16} className="text-emerald-400" />
                                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" dir="ltr">{siteConfig.whatsappDisplay}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-emerald-400" />
                                <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-400 transition-colors">{siteConfig.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-emerald-400" />
                                <span>{siteConfig.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                    <p>© {year} {siteConfig.name}. جميع الحقوق محفوظة.</p>
                    <a
                        href={siteConfig.developerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                    >
                        تم التنفيذ بواسطة {siteConfig.developerName}
                    </a>
                </div>
            </div>
        </footer>
    );
}
