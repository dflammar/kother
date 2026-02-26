'use client';
import { useState } from 'react';
import { X, MapPin, Clock, Wrench, Lightbulb, AlertTriangle, ArrowLeft, Play } from 'lucide-react';
import { projects, type Project } from '@/data/siteData';

/* ─── Project Card ─── */
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_8px_40px_rgba(15,44,94,0.16)] hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c5e]/70 via-[#0f2c5e]/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="font-black text-white text-lg mb-1">{project.title}</h3>
                    <p className="text-blue-200 text-xs flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                    </p>
                </div>
            </div>
            <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{project.scope}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> {project.duration}
                    </span>
                    <span className="text-[#0f2c5e] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        عرض التفاصيل <ArrowLeft size={14} />
                    </span>
                </div>
            </div>
        </div>
    );
}

/* ─── Detail Row ─── */
function DetailRow({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
    return (
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <h4 className="font-bold text-[#0f2c5e] text-sm">{label}</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
        </div>
    );
}

/* ─── Project Modal ─── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl my-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.mainImage} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c5e]/80 via-[#0f2c5e]/30 to-transparent" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute bottom-5 right-5 left-5">
                        <h2 className="text-white font-black text-2xl mb-2">{project.title}</h2>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <span className="text-blue-200 flex items-center gap-1"><MapPin size={13} /> {project.location}</span>
                            <span className="text-emerald-300 flex items-center gap-1"><Clock size={13} /> {project.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-6">
                    {/* Detail Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DetailRow
                            icon={<Wrench size={16} className="text-[#0f2c5e]" />}
                            label="نطاق العمل"
                            text={project.scope}
                        />
                        <DetailRow
                            icon={<Lightbulb size={16} className="text-emerald-600" />}
                            label="الحل الهندسي"
                            text={project.solution}
                        />
                        <div className="md:col-span-2">
                            <DetailRow
                                icon={<AlertTriangle size={16} className="text-amber-500" />}
                                label="التحديات"
                                text={project.challenges}
                            />
                        </div>
                    </div>

                    {/* Video (if exists) */}
                    {project.videoPath && (
                        <div>
                            <h3 className="font-black text-[#0f2c5e] text-lg mb-4 flex items-center gap-2">
                                <Play size={18} className="text-emerald-500" /> فيديو المشروع
                            </h3>
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                <video
                                    src={project.videoPath}
                                    controls
                                    className="w-full max-h-96 object-cover bg-black"
                                    poster={project.mainImage}
                                />
                            </div>
                        </div>
                    )}

                    {/* Gallery */}
                    {project.galleryImages.length > 0 && (
                        <div>
                            <h3 className="font-black text-[#0f2c5e] text-lg mb-4">📸 صور حقيقية للمشروع</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.galleryImages.map((img, i) => (
                                    <div key={i} className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm group/img aspect-[4/3]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={img}
                                            alt={`${project.title} — صورة ${i + 1}`}
                                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Projects Page ─── */
export default function ProjectsPage() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-l from-[#0f2c5e] to-[#1a3f82] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">أعمالنا</span>
                    <h1 className="text-4xl font-black text-white mb-4">مشاريعنا المنجزة</h1>
                    <p className="text-blue-200 max-w-2xl mx-auto">نماذج من مشاريعنا التي تشهد على جودة تنفيذنا والتزامنا في مختلف المحافظات العراقية</p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </div>
    );
}
