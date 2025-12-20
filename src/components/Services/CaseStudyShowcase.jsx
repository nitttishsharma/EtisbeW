import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudyShowcase = () => {
    const caseStudies = [
        {
            title: 'HealthHub Patient Portal',
            client: 'MediCare Solutions',
            result: '+185% Patient Engagement',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1644aff77-1764659451775.png',
        },
        {
            title: 'ShopSphere E-Commerce',
            client: 'Urban Lifestyle Brands',
            result: '+142% Conversion Rate',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png',
        },
        {
            title: 'FinanceFlow Dashboard',
            client: 'Quantum Capital',
            result: '10x Faster Processing',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f0a26062-1765030360899.png',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Real Results from <span className="text-teal-500">Real Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how we've helped businesses transform their digital presence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-teal-500">{study.result}</span>
                                    <ArrowRight className="text-teal-500 group-hover:translate-x-1 transition-transform" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
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
