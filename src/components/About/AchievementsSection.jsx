import React from 'react';
import { Briefcase, Users, Trophy, Clock } from 'lucide-react';

const iconMap = {
    'BriefcaseIcon': Briefcase,
    'UserGroupIcon': Users,
    'TrophyIcon': Trophy,
    'ClockIcon': Clock,
};

const AchievementsSection = ({ title, achievements }) => {
    return (
        <section className="py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon] || Briefcase;
                        return (
                            <div
                                key={index}
                                className="text-center p-8 bg-[#112240] border border-[#00EFB5]/10 rounded-xl hover:border-[#00EFB5]/50 hover:shadow-[0_0_30px_rgba(0,239,181,0.05)] transition-all group"
                            >
                                <div className="w-16 h-16 bg-[#00EFB5]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00EFB5] transition-colors">
                                    <Icon size={32} className="text-[#00EFB5] group-hover:text-[#0A192F] transition-colors" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">
                                    {achievement.value}
                                </div>
                                <div className="text-lg font-semibold text-white mb-2">
                                    {achievement.label}
                                </div>
                                <div className="text-sm text-slate-400">
                                    {achievement.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;



