import React from 'react';

const CTASection = ({ title, description, primaryCTA, secondaryCTA }) => {
    return (
        <section className="py-20 bg-[#0A192F]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={primaryCTA.href}
                        className="px-8 py-4 bg-[#00EFB5] text-[#0A192F] font-bold rounded-lg hover:bg-white transition-all hover:scale-105 shadow-lg shadow-[#00EFB5]/20"
                    >
                        {primaryCTA.text}
                    </a>
                    <a
                        href={secondaryCTA.href}
                        className="px-8 py-4 bg-transparent border-2 border-[#00EFB5]/20 text-white font-semibold rounded-lg hover:border-[#00EFB5] hover:text-[#00EFB5] transition-all"
                    >
                        {secondaryCTA.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;



