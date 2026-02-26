'use client';
import Link from 'next/link';
import { siteConfig } from '@/data/siteData';
import { MessageCircle } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-[#091d3e] text-white text-sm py-2 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                    <MessageCircle size={15} />
                    <span dir="ltr">{siteConfig.whatsappDisplay}</span>
                </a>
                <p className="text-slate-400 text-xs">
                    شريككم الهندسي الموثوق في جميع محافظات العراق
                </p>
            </div>
        </div>
    );
}
