import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceHero = ({ onConsultationClick }) => {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-[#0A192F] overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00EFB5]/10 border border-[#00EFB5]/30 rounded-full mb-6">
                    <Sparkles size={18} className="text-[#00EFB5]" />
                    <span className="text-sm font-medium text-[#00EFB5]">Digital Excellence</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Transform Your Vision Into{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00EFB5] via-white to-[#00EFB5]">
                        Digital Reality
                    </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    We craft exceptional web experiences that blend cutting-edge technology with strategic design to deliver measurable business impact.
                </p>

                <button
                    onClick={onConsultationClick}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#00EFB5] text-[#0A192F] font-bold rounded-lg hover:bg-white transition-all hover:scale-105 shadow-lg shadow-[#00EFB5]/20"
                >
                    Get Started Today
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default ServiceHero;



