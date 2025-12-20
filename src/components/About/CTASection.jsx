import React from 'react';

const CTASection = ({ title, description, primaryCTA, secondaryCTA }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={primaryCTA.href}
                        className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all hover:scale-105 shadow-lg shadow-teal-500/20"
                    >
                        {primaryCTA.text}
                    </a>
                    <a
                        href={secondaryCTA.href}
                        className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-semibold rounded-lg hover:border-teal-500 hover:text-teal-500 transition-all"
                    >
                        {secondaryCTA.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
