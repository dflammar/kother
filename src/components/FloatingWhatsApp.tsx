import { siteConfig } from '@/data/siteData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أود الاستفسار عن خدماتكم الهندسية`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="تواصل عبر واتساب"
        >
            <MessageCircle size={28} fill="white" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                تواصل عبر واتساب
            </span>
        </a>
    );
}
