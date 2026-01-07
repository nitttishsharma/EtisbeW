import React, { useState, useEffect } from 'react';
import {
    X,
    AlertTriangle,
    Lightbulb,
    Code2,
    MessageCircle,
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isHydrated]);

    if (!isHydrated || !isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#112240] border border-[#00EFB5]/20 rounded-2xl overflow-hidden shadow-2xl">

                {/* Close */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0A192F]/80 text-[#00EFB5] hover:bg-[#00EFB5] hover:text-[#0A192F] transition-all duration-300"
                >
                    <X size={24} />
                </button>

                <div className="overflow-y-auto max-h-[90vh]">

                    {/* Hero Image */}
                    <div className="relative aspect-video">
                        <img
                            src={project.image}
                            alt={project.imageAlt}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="px-3 py-1 bg-[#00EFB5]/10 border border-[#00EFB5]/20 text-[#00EFB5] text-sm font-medium rounded-full">
                                    {project.industry}
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                                    {project.projectType}
                                </span>
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-xl text-slate-400">
                                {project.client}
                            </p>
                        </div>

                        {/* Results */}
                        {project.results?.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-[#0A192F] rounded-2xl border border-[#00EFB5]/10">
                                {project.results.map((result, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold text-[#00EFB5] mb-1">
                                            {result.value}
                                        </div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                                            {result.metric}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Narrative */}
                        <div className="space-y-12 mb-12">

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <AlertTriangle size={24} className="text-[#00EFB5]" />
                                    The Challenge
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {project.challenge}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Lightbulb size={24} className="text-[#00EFB5]" />
                                    Our Solution
                                </h3>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Code2 size={24} className="text-[#00EFB5]" />
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-[#0A192F] border border-[#00EFB5]/20 text-[#00EFB5] font-semibold rounded-xl"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Testimonial */}
                        {project.testimonial && (
                            <div className="bg-[#0A192F] rounded-2xl p-8 border-l-4 border-[#00EFB5] mb-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <MessageCircle size={120} className="text-[#00EFB5]" />
                                </div>
                                <MessageCircle size={32} className="text-[#00EFB5] mb-4" />
                                <blockquote className="text-xl text-slate-200 italic mb-8 leading-relaxed">
                                    “{project.testimonial.quote}”
                                </blockquote>

                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-xl bg-white/5 p-2 backdrop-blur-sm">
                                        <img
                                            src={project.testimonial.companyLogo}
                                            alt={project.testimonial.companyLogoAlt}
                                            className="w-full h-full object-contain filter grayscale invert brightness-0"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-lg">
                                            {project.testimonial.author}
                                        </div>
                                        <div className="text-sm text-[#00EFB5] font-medium uppercase tracking-wider">
                                            {project.testimonial.position}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={onClose}
                                className="flex-1 px-8 py-4 bg-[#0A192F] border border-[#00EFB5]/20 text-white font-bold rounded-xl hover:border-[#00EFB5] transition-all duration-300"
                            >
                                View More Projects
                            </button>

                            <a
                                href="/contact"
                                className="flex-1 px-8 py-4 bg-[#00EFB5] text-[#0A192F] font-bold rounded-xl hover:bg-white transition-all duration-300 text-center shadow-lg shadow-[#00EFB5]/20"
                            >
                                Start Your Project
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;



