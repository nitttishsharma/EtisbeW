import React from 'react';
import {
    Twitter,
    Linkedin,
    Github,
    Dribbble,
    Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Services', path: '/services' },
            { label: 'Contact', path: '/contact' },
        ],
        resources: [
            { label: 'Technology Playground', path: '/technology-playground' },
            { label: 'Case Studies', path: '/portfolio' },
            { label: 'Blog', path: '#' },
            { label: 'FAQ', path: '#' },
        ],
        legal: [
            { label: 'Privacy Policy', path: '#' },
            { label: 'Terms of Service', path: '#' },
            { label: 'Cookie Policy', path: '#' },
            { label: 'Accessibility', path: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: Twitter, url: '#' },
        { name: 'LinkedIn', icon: Linkedin, url: '#' },
        { name: 'GitHub', icon: Github, url: '#' },
        { name: 'Dribbble', icon: Dribbble, url: '#' },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

                {/* Top */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold">
                                E
                            </div>
                            <span className="text-xl font-bold text-gray-900">
                                Etisbew
                            </span>
                        </Link>

                        <p className="text-gray-600 max-w-sm mb-6">
                            Transforming blueprints into living digital experiences.
                            We don&apos;t mock — we manifest.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map(({ name, icon: Icon, url }) => (
                                <a
                                    key={name}
                                    href={url}
                                    aria-label={name}
                                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/10 transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.path}
                                        className="text-gray-600 hover:text-teal-500 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.path}
                                        className="text-gray-600 hover:text-teal-500 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map(link => (
                                <li key={link.label}>
                                    <a
                                        href={link.path}
                                        className="text-gray-600 hover:text-teal-500 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Etisbew Interactive. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Made with</span>
                        <Heart size={16} className="text-red-500" />
                        <span>in the digital realm</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
