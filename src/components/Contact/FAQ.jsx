import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-20 px-6 bg-black/20">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-12 space-x-3">
                    <HelpCircle className="text-purple-500" size={32} />
                    <h2 className="text-4xl font-bold text-white">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === index
                                    ? 'bg-purple-900/20 border-purple-500/30'
                                    : 'bg-white/5 border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'
                                    }`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-purple-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
