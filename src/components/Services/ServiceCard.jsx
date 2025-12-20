import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, onLearnMore }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;

    return (
        <div
            className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-teal-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500 transition-colors">
                    <Icon size={28} className="text-teal-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-500">{service.timeline}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-teal-600 font-medium mb-4">{service.tagline}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

            <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-teal-500 mt-0.5 shrink-0" />
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-sm text-gray-500">Starting at</span>
                        <div className="text-2xl font-bold text-gray-900">{service.startingPrice}</div>
                    </div>
                    <button
                        onClick={() => onLearnMore(service.id)}
                        className="flex items-center gap-1 text-teal-600 font-semibold hover:gap-2 transition-all"
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
