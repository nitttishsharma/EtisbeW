import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceHero = ({ onConsultationClick }) => {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                    <Sparkles size={18} className="text-teal-500" />
                    <span className="text-sm font-medium text-teal-600">Digital Excellence</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Transform Your Vision Into{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-500">
                        Digital Reality
                    </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                    We craft exceptional web experiences that blend cutting-edge technology with strategic design to deliver measurable business impact.
                </p>

                <button
                    onClick={onConsultationClick}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all hover:scale-105 shadow-lg shadow-teal-500/20"
                >
                    Get Started Today
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default ServiceHero;
