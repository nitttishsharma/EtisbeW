import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ title, subtitle, testimonials }) => {
    return (
        <section className="py-20 bg-white">
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
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
                        >
                            <Quote size={32} className="text-teal-500 mb-4" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-bold text-gray-900">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-gray-600">
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
