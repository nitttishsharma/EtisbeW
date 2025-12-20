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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
                    {title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon] || Briefcase;
                        return (
                            <div
                                key={index}
                                className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:border-teal-400 hover:shadow-lg transition-all group"
                            >
                                <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                                    <Icon size={32} className="text-teal-500 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    {achievement.value}
                                </div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">
                                    {achievement.label}
                                </div>
                                <div className="text-sm text-gray-600">
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
