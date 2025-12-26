import React from 'react';

const ContactHero = ({ isHydrated }) => {
    return (
        <section className={`relative pt-32 pb-20 px-6 transition-opacity duration-1000 ${isHydrated ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00EFB5]/30 bg-[#00EFB5]/10 text-[#00EFB5] text-sm font-medium tracking-wide animate-fade-in-up">
                    Available for new projects
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#00EFB5] mb-8 tracking-tight">
                    Let's Build <br className="hidden md:block" />
                    Something <span className="text-[#00EFB5]">Impossible</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Ready to transform your digital presence? We combine technical excellence with immersive design to create web experiences that captivate and convert.
                </p>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00EFB5]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
};

export default ContactHero;



