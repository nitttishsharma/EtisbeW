import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#0A192F]">
            <div className="absolute inset-0 bg-[#00EFB5]/5" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    Ready to build your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00EFB5] via-white to-[#00EFB5]">
                        Success Story?
                    </span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                    Let's collaborate to create a digital experience that sets you apart from the competition.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center px-10 py-5 bg-[#00EFB5] text-[#0A192F] rounded-xl font-bold text-lg hover:bg-white transition-all hover:scale-105 shadow-xl shadow-[#00EFB5]/20"
                >
                    Start Your Project
                    <ArrowRight className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default CTASection;



