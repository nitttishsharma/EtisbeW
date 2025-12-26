import React from 'react';
import {
    Cpu,
    Code2,
    Command,
    FileText,
    Paintbrush,
    Server,
    Box,
    Zap,
    Sparkles,
    ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
    { id: 1, name: 'React', category: 'Frontend', icon: Code2 },
    { id: 2, name: 'Next.js', category: 'Framework', icon: Command },
    { id: 3, name: 'TypeScript', category: 'Language', icon: FileText },
    { id: 4, name: 'Tailwind CSS', category: 'Styling', icon: Paintbrush },
    { id: 5, name: 'Node.js', category: 'Backend', icon: Server },
    { id: 6, name: 'Three.js', category: '3D Graphics', icon: Box },
    { id: 7, name: 'WordPress', category: 'Animation', icon: Zap },
    { id: 8, name: 'Shopify', category: 'Graphics', icon: Sparkles },
];

const categories = [...new Set(technologies.map(t => t.category))];

const Technology = () => {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                        <Cpu size={16} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">
                            Technology Stack
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Powered by{' '}
                        <span className="text-teal-500">Cutting-Edge Tech</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We leverage modern frameworks and battle-tested tools to build fast,
                        scalable, and interactive digital experiences.
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {technologies.map(({ id, name, category, icon: Icon }) => (
                        <div
                            key={id}
                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,191,165,0.15)]"
                        >
                            <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                                <Icon size={24} className="text-teal-500" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {category}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;



