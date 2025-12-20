import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

const ProjectBriefForm = () => {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start a Project</h2>
                    <p className="text-xl text-gray-400">Tell us about your vision. We'll help you build it.</p>
                </div>

                <form className="space-y-8 backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-medium"
                                placeholder="John Doe"
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                            <input
                                type="email"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-medium"
                                placeholder="john@example.com"
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Project Type</label>
                        <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-medium appearance-none">
                            <option className="bg-gray-900">Web Development</option>
                            <option className="bg-gray-900">UI/UX Design</option>
                            <option className="bg-gray-900">Mobile App</option>
                            <option className="bg-gray-900">Brand Identity</option>
                            <option className="bg-gray-900">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Project Details</label>
                        <textarea
                            rows="4"
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all font-medium resize-none"
                            placeholder="Tell us about your goals, budget, and timeline..."
                            onFocus={() => setFocusedField('details')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>

                    <div className="pt-4 flex justify-center">
                        <button
                            type="button"
                            className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center shadow-lg shadow-purple-900/20"
                        >
                            <span className="mr-2">Send Proposal</span>
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                            <div className="absolute inset-0 rounded-xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProjectBriefForm;
