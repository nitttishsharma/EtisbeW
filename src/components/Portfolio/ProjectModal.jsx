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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]">

                {/* Close */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition"
                >
                    <X size={24} className="text-gray-800" />
                </button>

                <div className="overflow-y-auto max-h-[90vh]">

                    {/* Hero Image */}
                    <div className="relative aspect-video">
                        <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">

                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="px-3 py-1 bg-teal-500/20 text-teal-600 text-sm font-medium rounded-full">
                                    {project.industry}
                                </span>
                                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-600 text-sm font-medium rounded-full">
                                    {project.projectType}
                                </span>
                            </div>

                            <h2 className="text-4xl font-bold text-gray-900 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-xl text-gray-600">
                                {project.client}
                            </p>
                        </div>

                        {/* Results */}
                        {project.results?.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 bg-gray-100 rounded-xl">
                                {project.results.map((result, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold text-teal-500 mb-1">
                                            {result.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {result.metric}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Narrative */}
                        <div className="space-y-10 mb-12">

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <AlertTriangle size={24} className="text-yellow-500" />
                                    The Challenge
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Lightbulb size={24} className="text-teal-500" />
                                    Our Solution
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Code2 size={24} className="text-indigo-500" />
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-teal-500/20 text-teal-600 font-medium rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Testimonial */}
                        {project.testimonial && (
                            <div className="bg-gray-100 rounded-xl p-8 border-l-4 border-teal-500 mb-12">
                                <MessageCircle size={32} className="text-teal-500 mb-4" />
                                <blockquote className="text-lg text-gray-800 italic mb-6">
                                    “{project.testimonial.quote}”
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={project.testimonial.companyLogo}
                                        alt={project.testimonial.companyLogoAlt}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {project.testimonial.author}
                                        </div>
                                        <div className="text-sm text-gray-600">
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
                                className="flex-1 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
                            >
                                View More Projects
                            </button>

                            <a
                                href="/contact"
                                className="flex-1 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition text-center"
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
