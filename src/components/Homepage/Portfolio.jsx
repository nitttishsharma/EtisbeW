import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'TechFlow Analytics Dashboard',
        category: 'Web Application',
        description:
            'Interactive data visualization platform with mouse-responsive charts and dynamic filtering.',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1638d3f29-1764645307453.png',
        tags: ['React', 'D3.js', 'Interactive'],
    },
    {
        id: 2,
        title: 'Luxe Fashion E-commerce',
        category: 'E-commerce Platform',
        description:
            'Premium shopping experience with geometric layouts and smooth cursor-driven motion.',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1a0a04008-1764827205574.png',
        tags: ['Next.js', 'Shopify', 'Animations'],
    },
    {
        id: 3,
        title: 'FinanceHub Portfolio Tracker',
        category: 'Financial Platform',
        description:
            'Investment tracking platform with floating UI elements and real-time market visuals.',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_1204183d1-1764678372565.png',
        tags: ['TypeScript', 'WebSocket', 'Real-time'],
    },
];

const Portfolio = () => {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                        <Briefcase size={16} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">
                            Featured Work
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Projects That{' '}
                        <span className="text-teal-500">Came to Life</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From blueprint to manifestation — explore how we transform ideas
                        into living digital experiences that deliver real results.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-14">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-400 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,191,165,0.15)]"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-sm font-medium text-teal-600 mb-2">
                                    {project.category}
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-500 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-teal-500/10 text-teal-600 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to="/portfolio"
                                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors"
                                >
                                    View Case Study
                                    <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                        View Full Portfolio
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;



