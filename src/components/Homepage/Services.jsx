import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Smartphone,
    Layout,
    Globe,
    CheckCircle,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        icon: Code2,
        title: 'Interactive Web Development',
        description:
            'Transform static designs into dynamic, mouse-responsive experiences that captivate and convert.',
        features: ['Advanced Animations', 'Mouse Tracking', 'Performance Optimized'],
    },
    {
        id: 2,
        icon: Layout,
        title: 'Responsive Design Systems',
        description:
            'Pixel-perfect interfaces that adapt seamlessly across all devices and screen sizes.',
        features: ['Mobile-First', 'Touch Optimized', 'Cross-Browser'],
    },
    {
        id: 3,
        icon: Smartphone,
        title: 'Mobile App Development',
        description:
            'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
        features: ['Cross-Platform Apps', 'Native Performance', 'App Store Optimization'],
    },
    {
        id: 4,
        icon: Globe,
        title: 'WordPress Development',
        description:
            'Custom WordPress solutions with powerful themes, plugins, and seamless content management.',
        features: ['Custom Themes', 'Plugin Development', 'WooCommerce Integration'],
    },
];

const ServiceCard = ({ icon: Icon, title, description, features }) => (
    <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-teal-400 hover:shadow-[0_20px_40px_rgba(0,191,165,0.15)] transition-all duration-300"
    >
        <div className="w-14 h-14 rounded-lg bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
            <Icon size={28} className="text-teal-500" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
        </p>

        <ul className="space-y-3">
            {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-800">
                    <CheckCircle size={18} className="text-teal-500 mr-3 flex-shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Services = () => {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/10 mb-6">
                        <Sparkles size={16} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">
                            Our Expertise
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Services That{' '}
                        <span className="text-teal-500">Manifest Results</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We don&apos;t just build websites we create living digital
                        experiences that drive engagement, conversions, and growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-14">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link to="/services" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 border-2 border-teal-500 rounded-lg hover:bg-teal-500/10 transition-all duration-300">
                        Explore All Services
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;



