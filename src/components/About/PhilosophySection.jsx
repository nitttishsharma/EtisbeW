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
        <section className="py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {philosophies.map((philosophy, index) => {
                        const Icon = iconMap[philosophy.icon] || Sparkles;
                        return (
                            <div
                                key={index}
                                className="group bg-[#112240] border border-[#00EFB5]/10 rounded-xl p-8 hover:border-[#00EFB5]/50 hover:shadow-[0_0_30px_rgba(0,239,181,0.1)] transition-all"
                            >
                                <div className="w-12 h-12 bg-[#00EFB5]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00EFB5] transition-colors">
                                    <Icon size={24} className="text-[#00EFB5] group-hover:text-[#0A192F] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {philosophy.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
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



