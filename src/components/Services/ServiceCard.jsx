import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, onLearnMore }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            className="group bg-[#112240] border border-[#00EFB5]/10 rounded-xl p-8 hover:border-[#00EFB5]/50 hover:shadow-[0_0_30px_rgba(0,239,181,0.05)] transition-all duration-300 h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-[#00EFB5]/10 rounded-lg group-hover:bg-[#00EFB5] transition-colors">
                    <Icon size={28} className="text-[#00EFB5] group-hover:text-[#0A192F] transition-colors" />
                </div>
                <span className="text-sm font-semibold text-slate-400">{service.timeline}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-[#00EFB5] font-medium mb-4">{service.tagline}</p>
            <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

            <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-400">
                            <Check size={16} className="text-[#00EFB5] mt-0.5 shrink-0" />
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-6 border-t border-[#00EFB5]/10 mt-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm text-slate-500">Starting at</span>
                        <div className="text-2xl font-bold text-white">{service.startingPrice}</div>
                    </div>
                    <button
                        onClick={() => onLearnMore(service.id)}
                        className="flex items-center gap-1 text-[#00EFB5] font-semibold hover:gap-2 transition-all"
                    >
                        Learn More
                        <ArrowRight size={16} className={isHovered ? 'translate-x-1' : ''} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;



