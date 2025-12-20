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
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 animate-pulse rounded" />
                    <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
                </div>
            </div>
        );
    }

    return (
        <div
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-teal-400 hover:shadow-[0_20px_40px_rgba(0,191,165,0.15)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onViewDetails(project)}
        >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tech badges */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-teal-500/20 text-teal-600 text-xs font-medium rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-teal-500/20 text-teal-600 text-xs font-medium rounded-full">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-teal-500 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {project.client}
                        </p>
                    </div>

                    <ArrowUpRight
                        size={20}
                        className={`text-teal-500 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''
                            }`}
                    />
                </div>

                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {project.industry}
                    </span>
                    <span className="flex items-center gap-1">
                        <Rocket size={14} />
                        {project.projectType}
                    </span>
                </div>

                {project.results && project.results.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-3">
                            {project.results.slice(0, 2).map((result, index) => (
                                <div key={index}>
                                    <div className="text-lg font-bold text-teal-500">
                                        {result.value}
                                    </div>
                                    <div className="text-xs text-gray-500">
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
