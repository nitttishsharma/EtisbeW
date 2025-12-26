import React from 'react';
import { Rocket, Trophy, BarChart } from 'lucide-react';

const iconMap = {
    'RocketLaunchIcon': Rocket,
    'TrophyIcon': Trophy,
    'ChartBarIcon': BarChart,
};

const TimelineSection = ({ title, subtitle, events }) => {
    return (
        <section className="py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00EFB5]/10 -translate-x-1/2" />

                    <div className="space-y-12">
                        {events.map((event, index) => {
                            const Icon = iconMap[event.icon] || Rocket;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-col gap-8`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                                        <div className="inline-block bg-[#112240] border border-[#00EFB5]/10 rounded-xl p-6 hover:border-[#00EFB5]/30 transition-all">
                                            <div className="text-[#00EFB5] font-bold text-sm mb-2">
                                                {event.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-slate-400 mb-3">
                                                {event.description}
                                            </p>
                                            <div className="inline-block px-3 py-1 bg-[#00EFB5]/10 text-[#00EFB5] text-sm font-medium rounded-full">
                                                {event.achievement}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative z-10 w-16 h-16 bg-[#00EFB5] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,239,181,0.3)]">
                                        <Icon size={28} className="text-[#0A192F]" />
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;



