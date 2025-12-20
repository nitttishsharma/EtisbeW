import React from 'react';
import { Sparkles, Lightbulb, Box, Rocket, Users, Shield } from 'lucide-react';

const iconMap = {
    'SparklesIcon': Sparkles,
    'LightBulbIcon': Lightbulb,
    'CubeTransparentIcon': Box,
    'RocketLaunchIcon': Rocket,
    'UserGroupIcon': Users,
    'ShieldCheckIcon': Shield,
};

const PhilosophySection = ({ title, subtitle, philosophies }) => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {philosophies.map((philosophy, index) => {
                        const Icon = iconMap[philosophy.icon] || Sparkles;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-teal-400 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                                    <Icon size={24} className="text-teal-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {philosophy.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {philosophy.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
