import React from 'react';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const FooterSection = ({ columns, socialLinks, companyName }) => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">{companyName}</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            We don't mock—we manifest. Transforming digital visions into living, interactive experiences.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
                                >
                                    <Linkedin size={20} />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
                                >
                                    <Twitter size={20} />
                                </a>
                            )}
                            {socialLinks.github && (
                                <a
                                    href={socialLinks.github}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
                                >
                                    <Instagram size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    {columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{column.title}</h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} {companyName}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
