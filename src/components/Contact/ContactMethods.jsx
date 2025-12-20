import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactMethods = ({ methods }) => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {methods.map((method) => {
                        const Icon = method.icon;
                        return (
                            <a
                                key={method.id}
                                href={method.link}
                                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                    <p className="text-purple-300 font-medium mb-2">{method.value}</p>
                                    <p className="text-sm text-gray-400 mb-6">{method.description}</p>

                                    <div className="flex items-center text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                                        Connect
                                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactMethods;
