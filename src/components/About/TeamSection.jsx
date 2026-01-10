import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const TeamSection = ({ title, subtitle, members }) => {
    return (
        <section className="py-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-400">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#112240] border border-[#00EFB5]/10 rounded-xl overflow-hidden hover:border-[#00EFB5]/30 hover:shadow-[0_0_30px_rgba(0,239,181,0.05)] transition-all group"
                        >
                            {/* <div className="aspect-square overflow-hidden bg-[#0A192F]">
                                {/* <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                /> 
                        </div> */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#00EFB5] font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {member.bio}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.expertise.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[#0A192F] text-slate-300 text-xs rounded-full border border-[#00EFB5]/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-[#00EFB5]/10">
                                    {member.social.email && (
                                        <a
                                            href={member.social.email}
                                            className="text-slate-400 hover:text-[#00EFB5] transition-colors"
                                        >
                                            <Mail size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default TeamSection;
