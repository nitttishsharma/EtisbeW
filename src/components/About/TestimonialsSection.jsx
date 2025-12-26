import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ title, subtitle, testimonials }) => {
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
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#112240] border border-[#00EFB5]/10 rounded-xl p-8 hover:border-[#00EFB5]/30 transition-all"
                        >
                            <Quote size={32} className="text-[#00EFB5] mb-4" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-300 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-[#00EFB5]/10">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                <div>
                                    <div className="font-bold text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
