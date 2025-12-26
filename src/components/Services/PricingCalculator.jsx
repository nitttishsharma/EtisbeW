import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const PricingCalculator = () => {
    const [selections, setSelections] = useState({
        projectType: 'website',
        complexity: 'medium',
        timeline: 'standard',
    });

    const pricing = {
        website: { low: 5000, medium: 8000, high: 12000 },
        webapp: { low: 12000, medium: 18000, high: 25000 },
        ecommerce: { low: 15000, medium: 22000, high: 30000 },
    };

    const getEstimate = () => {
        const base = pricing[selections.projectType][selections.complexity];
        const multiplier = selections.timeline === 'rush' ? 1.3 : 1;
        return Math.round(base * multiplier);
    };

    return (
        <section className="py-20 bg-[#0A192F]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00EFB5]/10 border border-[#00EFB5]/30 rounded-full mb-6">
                        <Calculator size={18} className="text-[#00EFB5]" />
                        <span className="text-sm font-medium text-[#00EFB5]">Estimate Your Project</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Quick <span className="text-[#00EFB5]">Pricing Calculator</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Get an instant estimate for your project
                    </p>
                </div>

                <div className="bg-[#112240] border border-[#00EFB5]/10 rounded-xl p-8 shadow-xl">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">Project Type</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['website', 'webapp', 'ecommerce'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelections({ ...selections, projectType: type })}
                                        className={`px-4 py-3 rounded-lg font-bold transition-all ${selections.projectType === type
                                            ? 'bg-[#00EFB5] text-[#0A192F]'
                                            : 'bg-[#0A192F] border border-[#00EFB5]/20 text-slate-300 hover:border-[#00EFB5]'
                                            }`}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">Complexity</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['low', 'medium', 'high'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSelections({ ...selections, complexity: level })}
                                        className={`px-4 py-3 rounded-lg font-bold transition-all ${selections.complexity === level
                                            ? 'bg-[#00EFB5] text-[#0A192F]'
                                            : 'bg-[#0A192F] border border-[#00EFB5]/20 text-slate-300 hover:border-[#00EFB5]'
                                            }`}
                                    >
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">Timeline</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['standard', 'rush'].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelections({ ...selections, timeline: time })}
                                        className={`px-4 py-3 rounded-lg font-bold transition-all ${selections.timeline === time
                                            ? 'bg-[#00EFB5] text-[#0A192F]'
                                            : 'bg-[#0A192F] border border-[#00EFB5]/20 text-slate-300 hover:border-[#00EFB5]'
                                            }`}
                                    >
                                        {time.charAt(0).toUpperCase() + time.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[#00EFB5]/10 text-center">
                        <div className="text-sm text-slate-400 mb-2">Estimated Investment</div>
                        <div className="text-5xl font-bold text-[#00EFB5] drop-shadow-[0_0_15px_rgba(0,239,181,0.3)]">
                            ${getEstimate().toLocaleString()}
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                            *This is a rough estimate. Final pricing depends on specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCalculator;
