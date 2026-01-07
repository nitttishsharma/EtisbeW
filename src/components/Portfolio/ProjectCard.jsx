import React, { useState, useEffect } from 'react';
import {
    ArrowUpRight,
    Briefcase,
    Rocket
} from 'lucide-react';

const ProjectCard = ({ project, onViewDetails }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return (
            <div className="bg-[#112240] border border-[#00EFB5]/10 rounded-xl overflow-hidden">
                <div className="aspect-video bg-[#0A192F] animate-pulse" />
                <div className="p-6 space-y-4">
                    <div className="h-6 bg-[#0A192F] animate-pulse rounded" />
                    <div className="h-4 bg-[#0A192F] animate-pulse rounded w-3/4" />
                </div>
            </div>
        );
    }

    return (
        <div
            className="group bg-[#112240] border border-[#00EFB5]/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#00EFB5]/50 hover:shadow-[0_20px_40px_rgba(0,239,181,0.05)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onViewDetails(project)}
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tech badges */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[#00EFB5]/10 border border-[#00EFB5]/20 text-[#00EFB5] text-xs font-medium rounded-full backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00EFB5] transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                            {project.client}
                        </p>
                    </div>

                    <ArrowUpRight
                        size={20}
                        className={`text-[#00EFB5] transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''
                            }`}
                    />
                </div>

                <p className="text-sm text-slate-300 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-[#00EFB5]" />
                        {project.industry}
                    </span>
                    <span className="flex items-center gap-1">
                        <Rocket size={14} className="text-[#00EFB5]" />
                        {project.projectType}
                    </span>
                </div>

                {project.results && project.results.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-[#00EFB5]/10">
                        <div className="grid grid-cols-2 gap-4">
                            {project.results.slice(0, 2).map((result, index) => (
                                <div key={index}>
                                    <div className="text-xl font-bold text-[#00EFB5]">
                                        {result.value}
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                                        {result.metric}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;



