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
                                className="group relative p-8 rounded-2xl bg-[#112240] border border-[#00EFB5]/10 hover:border-[#00EFB5]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00EFB5]/0 via-[#00EFB5]/0 to-[#00EFB5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#00EFB5]/20 flex items-center justify-center text-[#00EFB5] mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                                    <p className="text-[#00EFB5] font-medium mb-2">{method.value}</p>
                                    <p className="text-sm text-slate-400 mb-6">{method.description}</p>

                                    <div className="flex items-center text-sm font-semibold text-white group-hover:text-[#00EFB5] transition-colors">
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



