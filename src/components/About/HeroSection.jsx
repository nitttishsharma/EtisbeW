import React from 'react';

const HeroSection = ({ title, subtitle, description }) => {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-[#0A192F]">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 py-2 bg-[#00EFB5]/10 border border-[#00EFB5]/30 rounded-full mb-6">
                    <span className="text-sm font-medium text-[#00EFB5]">{subtitle}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
                    {title}
                </h1>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default HeroSection;



