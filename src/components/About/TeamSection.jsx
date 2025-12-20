import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const TeamSection = ({ title, subtitle, members }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
                        >
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-teal-600 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {member.bio}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.expertise.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    {member.social.linkedin && (
                                        <a
                                            href={member.social.linkedin}
                                            className="text-gray-400 hover:text-teal-500 transition"
                                        >
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {member.social.twitter && (
                                        <a
                                            href={member.social.twitter}
                                            className="text-gray-400 hover:text-teal-500 transition"
                                        >
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    {member.social.github && (
                                        <a
                                            href={member.social.github}
                                            className="text-gray-400 hover:text-teal-500 transition"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
