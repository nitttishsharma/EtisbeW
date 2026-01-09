import React, { useState, useCallback, useEffect } from 'react';

import PortfolioHero from './PortfolioHero';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import CTASection from './CTASection';
import { projects as allProjects } from '../../constants/projects';

const PortfolioInteractive = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const heroData = {
        title: 'Our Portfolio of Digital Masterpieces',
        description:
            'Explore our collection of transformative web experiences that blend cutting-edge technology with strategic design to deliver measurable business impact.',
        stats: [
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '2.5x', label: 'Average ROI Increase' },
        ],
    };

    const industries = [
        { id: 'ecommerce', label: 'E-Commerce' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'fintech', label: 'FinTech' },
        { id: 'education', label: 'Education' },
        { id: 'saas', label: 'SaaS' },
        { id: 'realestate', label: 'Real Estate' },
    ];

    const projectTypes = [
        { id: 'webapp', label: 'Web Application' },
        { id: 'website', label: 'Corporate Website' },
        { id: 'ecommerce', label: 'E-Commerce Platform' },
        { id: 'portal', label: 'Customer Portal' },
        { id: 'dashboard', label: 'Analytics Dashboard' },
        { id: 'landing', label: 'Landing Page' },
    ];

    const technologies = [
        { id: 'react', label: 'React' },
        { id: 'nextjs', label: 'Next.js' },
        { id: 'typescript', label: 'TypeScript' },
        { id: 'tailwind', label: 'Tailwind CSS' },
        { id: 'nodejs', label: 'Node.js' },
        { id: 'graphql', label: 'GraphQL' },
    ];


    useEffect(() => {
        setFilteredProjects(allProjects);
    }, []);

    const handleFilterChange = useCallback((filters) => {
        let filtered = allProjects;

        if (filters.industry !== 'all') {
            filtered = filtered.filter(p => p.industry === filters.industry);
        }

        if (filters.projectType !== 'all') {
            filtered = filtered.filter(p => p.projectType === filters.projectType);
        }

        if (filters.technology !== 'all') {
            filtered = filtered.filter(p =>
                p.technologies.some(tech =>
                    tech.toLowerCase().includes(filters.technology.toLowerCase())
                )
            );
        }

        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.client.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        setFilteredProjects(filtered);
    }, []);

    const handleViewDetails = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A192F]">
            <div className="bg-black/95">
                <PortfolioHero {...heroData} />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <FilterBar
                    industries={industries}
                    projectTypes={projectTypes}
                    technologies={technologies}
                    onFilterChange={handleFilterChange}
                />

                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            No Projects Found
                        </h3>
                        <p className="text-muted-foreground">
                            Try adjusting your filters to see more results
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {filteredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewDetails={handleViewDetails}
                            />
                        ))}
                    </div>
                )}
            </div>

            <CTASection />

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default PortfolioInteractive;



