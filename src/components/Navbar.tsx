'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteData';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo — Right (RTL) */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 relative rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                            <Image src="/images/logo.jpg" alt="الكوثر كروب" fill className="object-cover" />
                        </div>
                        <div className="leading-tight">
                            <p className="text-[#0f2c5e] font-bold text-base">{siteConfig.name}</p>
                            <p className="text-gray-400 text-[10px]">للمقاولات العامة</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                                    ? 'text-[#0f2c5e] bg-blue-50'
                                    : 'text-slate-600 hover:text-[#0f2c5e] hover:bg-gray-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <button className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                            <Globe size={14} />
                            <span>EN / عربي</span>
                        </button>
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
                        >
                            واتساب
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-gray-100"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${pathname === link.href
                                    ? 'text-[#0f2c5e] bg-blue-50'
                                    : 'text-slate-700 hover:bg-gray-50'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-emerald-500 text-white text-center font-semibold px-4 py-3 rounded-xl mt-2"
                        >
                            تواصل عبر واتساب
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
