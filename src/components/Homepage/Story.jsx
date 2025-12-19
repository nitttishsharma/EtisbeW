import React from 'react';
import { motion } from 'framer-motion';
import {
    Lightbulb,
    Pencil,
    Code2,
    Rocket,
    Cog,
    ArrowRight,
    Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        id: 1,
        number: '01',
        icon: Lightbulb,
        title: 'Discovery & Vision',
        description:
            'We dive deep into your goals, audience, and brand identity to uncover what truly differentiates your vision.',
    },
    {
        id: 2,
        number: '02',
        icon: Pencil,
        title: 'Design & Blueprint',
        description:
            'Structured wireframes and interactive prototypes shape intuitive, conversion-focused experiences.',
    },
    {
        id: 3,
        number: '03',
        icon: Code2,
        title: 'Manifest & Engineer',
        description:
            'Clean, performant code transforms designs into smooth, scalable, 60fps digital experiences.',
    },
    {
        id: 4,
        number: '04',
        icon: Rocket,
        title: 'Launch & Optimize',
        description:
            'Rigorous testing, performance tuning, and SEO readiness ensure a confident, high-impact launch.',
    },
];

const Story = () => {
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                        <Cog size={16} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        From Blueprint to{' '}
                        <span className="text-teal-500">Living Reality</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A proven four-step methodology that transforms ideas into high-performing,
                        conversion-driven digital products.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-400/50 to-transparent" />
                                )}

                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,191,165,0.15)] group">
                                    <div className="text-6xl font-bold text-teal-500/20 mb-4">
                                        {step.number}
                                    </div>

                                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                                        <Icon size={24} className="text-teal-500" />
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-20 bg-white border border-gray-200 rounded-xl p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Ready to Manifest Your Vision?
                            </h3>
                            <p className="text-gray-600 text-lg max-w-2xl">
                                Let’s turn your blueprint into a living digital experience that
                                engages users and delivers measurable business results.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-105"
                            >
                                Schedule Consultation
                                <Calendar size={20} className="ml-2" />
                            </Link>

                            <Link
                                to="/portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 border-2 border-teal-500 rounded-lg hover:bg-teal-500/10 transition-all duration-300"
                            >
                                View Our Work
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Story;
