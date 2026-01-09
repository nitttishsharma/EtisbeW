import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects as allProjects } from '../../constants/projects';

const CaseStudyShowcase = () => {
    // Selection for Case Study Showcase
    const caseStudies = allProjects.filter(p => ['1', '2', '3'].includes(p.id));

    return (
        <section className="py-20 bg-[#0A192F]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Real Results from <span className="text-[#00EFB5]">Real Projects</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        See how we've helped businesses transform their digital presence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="group bg-[#112240] border border-[#00EFB5]/10 rounded-xl overflow-hidden hover:border-[#00EFB5]/50 hover:shadow-[0_0_30px_rgba(0,239,181,0.05)] transition-all cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                                <p className="text-sm text-slate-400 mb-4">{study.client}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-[#00EFB5]">
                                        {study.results?.[0]?.value} {study.results?.[0]?.metric}
                                    </span>
                                    <ArrowRight className="text-[#00EFB5] group-hover:translate-x-1 transition-transform" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#00EFB5] text-[#0A192F] font-bold rounded-lg hover:bg-white transition-all hover:scale-105"
                    >
                        View All Case Studies
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyShowcase;



