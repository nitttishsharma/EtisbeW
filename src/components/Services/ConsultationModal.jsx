import React, { useState, useEffect } from 'react';
import { X, Calendar, Mail, Phone, User } from 'lucide-react';

const ConsultationModal = ({ isOpen, onClose }) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isHydrated]);

    if (!isHydrated || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#112240] rounded-xl shadow-2xl overflow-hidden border border-[#00EFB5]/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#0A192F] transition-all"
                >
                    <X size={24} className="text-slate-400" />
                </button>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <Calendar size={48} className="text-[#00EFB5] mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Schedule Your Free Consultation
                        </h2>
                        <p className="text-slate-400">
                            Let's discuss your project and explore how we can help you succeed
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                <User size={16} className="inline mr-2 text-[#00EFB5]" />
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-[#0A192F] border border-[#00EFB5]/20 rounded-lg text-white focus:outline-none focus:border-[#00EFB5] transition"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                <Mail size={16} className="inline mr-2 text-[#00EFB5]" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-[#0A192F] border border-[#00EFB5]/20 rounded-lg text-white focus:outline-none focus:border-[#00EFB5] transition"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2">
                                <Phone size={16} className="inline mr-2 text-[#00EFB5]" />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 bg-[#0A192F] border border-[#00EFB5]/20 rounded-lg text-white focus:outline-none focus:border-[#00EFB5] transition"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2 text-[#00EFB5]">
                                Project Details
                            </label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 bg-[#0A192F] border border-[#00EFB5]/20 rounded-lg text-white focus:outline-none focus:border-[#00EFB5] transition resize-none"
                                placeholder="Tell us about your project goals, timeline, and budget..."
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full px-6 py-4 bg-[#00EFB5] text-[#0A192F] font-bold rounded-lg hover:bg-white transition-all shadow-lg shadow-[#00EFB5]/20"
                        >
                            Schedule Consultation
                        </button>

                        <p className="text-sm text-slate-500 text-center">
                            We'll get back to you within 24 hours to schedule your free 30-minute consultation
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;



