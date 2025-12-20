import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-900/10" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
                    Ready to build your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Success Story?
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Let's collaborate to create a digital experience that sets you apart from the competition.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105"
                >
                    Start a Project
                    <ArrowRight className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default CTASection;
