import React from 'react';

const TrustSignals = ({ stats }) => {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.id} className="text-center group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-slate-400 mb-4 group-hover:bg-[#00EFB5]/20 group-hover:text-[#00EFB5] transition-colors duration-300">
                                    <Icon size={20} />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;



