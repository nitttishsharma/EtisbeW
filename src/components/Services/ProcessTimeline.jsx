import React from 'react';
import { Lightbulb, Pencil, Code, Rocket, CheckCircle } from 'lucide-react';

const ProcessTimeline = () => {
    const steps = [
        {
            icon: Lightbulb,
            title: 'Discovery',
            description: 'We dive deep into your goals, audience, and requirements to craft the perfect strategy.',
        },
        {
            icon: Pencil,
            title: 'Design',
            description: 'Our designers create stunning, user-centered interfaces that align with your brand.',
        },
        {
            icon: Code,
            title: 'Development',
            description: 'We build your solution using cutting-edge technologies and best practices.',
        },
        {
            icon: CheckCircle,
            title: 'Testing',
            description: 'Rigorous quality assurance ensures everything works flawlessly across all devices.',
        },
        {
            icon: Rocket,
            title: 'Launch',
            description: 'We deploy your project and provide ongoing support to ensure continued success.',
        },
    ];

    return (
        <section className="py-20 bg-[#112240]/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our <span className="text-[#00EFB5]">Proven Process</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        A streamlined approach that delivers exceptional results, every time.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-[#00EFB5]/10" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="relative z-10 w-24 h-24 bg-[#0A192F] border-4 border-[#00EFB5] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,239,181,0.2)]">
                                            <Icon size={32} className="text-[#00EFB5]" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;



