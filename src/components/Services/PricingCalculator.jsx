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
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                        <Calculator size={18} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">Estimate Your Project</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Quick <span className="text-teal-500">Pricing Calculator</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Get an instant estimate for your project
                    </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Project Type</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['website', 'webapp', 'ecommerce'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setSelections({ ...selections, projectType: type })}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all ${selections.projectType === type
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-teal-400'
                                            }`}
                                    >
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Complexity</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['low', 'medium', 'high'].map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setSelections({ ...selections, complexity: level })}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all ${selections.complexity === level
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-teal-400'
                                            }`}
                                    >
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Timeline</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['standard', 'rush'].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelections({ ...selections, timeline: time })}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all ${selections.timeline === time
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:border-teal-400'
                                            }`}
                                    >
                                        {time.charAt(0).toUpperCase() + time.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                        <div className="text-sm text-gray-600 mb-2">Estimated Investment</div>
                        <div className="text-5xl font-bold text-teal-500">
                            ${getEstimate().toLocaleString()}
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            *This is a rough estimate. Final pricing depends on specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCalculator;
