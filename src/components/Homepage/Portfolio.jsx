import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as allProjects } from '../../constants/projects';

// Featured projects for the homepage
const projects = allProjects.filter(p => ['1', '2', '3'].includes(p.id));

const ProjectCard = ({ project, index, progress, total }) => {
    // Each card has a specific activation point based on total projects
    const start = index / total;
    const end = (index + 1) / total;

    // Movement: Slide in from the bottom
    // Card 0 doesn't slide, others slide in as scroll reaches their 'start'
    const y = useTransform(progress, [start - 0.2, start], [1000, 0]);

    // As the NEXT card comes in, this card should scale down and fade slightly
    const nextStart = (index + 1) / total;
    const scale = useTransform(progress, [nextStart, nextStart + 0.1], [1, 0.95]);
    const opacity = useTransform(progress, [nextStart, nextStart + 0.1], [1, 0.8]);

    return (
        <motion.div
            style={{
                y: index === 0 ? 0 : y,
                scale,
                opacity,
                zIndex: index,
                // Offset slightly based on index for a stacked deck look
                marginTop: `${index * 20}px`
            }}
            className="absolute inset-0 flex items-center justify-center p-6"
        >
            <div
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-5xl h-[500px] md:h-[450px]"
                style={{ backgroundColor: project.color }}
            >
                {/* Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <div className="text-sm font-bold text-teal-600 mb-2 md:mb-4 tracking-widest uppercase text-left">
                            {project.category}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-left">
                            {project.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed line-clamp-2 md:line-clamp-3 text-left">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs md:text-sm font-medium bg-white/50 border border-gray-200 text-teal-700 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="text-left">
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center text-base md:text-lg font-bold text-teal-600 hover:text-teal-500 transition-colors"
                        >
                            Explore Case Study
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 relative overflow-hidden h-48 md:h-auto">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-gray-50">
            <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
                {/* Header Container */}
                <div className="relative z-50 w-full pt-16 md:pt-24 px-6">
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0.4]),
                            scale: useTransform(scrollYProgress, [0, 0.05], [1, 0.9])
                        }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-4">
                            <Briefcase size={16} className="text-teal-500" />
                            <span className="text-sm font-medium text-teal-600">
                                Featured Work
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Projects That <span className="text-teal-500">Came to Life</span>
                        </h2>

                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Scroll to explore our latest digital manifestations.
                        </p>
                    </motion.div>
                </div>

                {/* Deck Container */}
                <div className="flex-1 relative w-full h-full overflow-hidden">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            progress={scrollYProgress}
                            total={projects.length}
                        />
                    ))}
                </div>

                {/* Final CTA Reveal */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0.9, 0.98], [0, 1]),
                        y: useTransform(scrollYProgress, [0.9, 0.98], [50, 0]),
                        pointerEvents: useTransform(scrollYProgress, p => p > 0.9 ? 'auto' : 'none')
                    }}
                    className="absolute bottom-12 left-0 right-0 text-center z-[100] px-6"
                >
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-teal-500 rounded-xl hover:bg-teal-600 transition-all duration-300 shadow-2xl hover:scale-105"
                    >
                        View Full Portfolio
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;



