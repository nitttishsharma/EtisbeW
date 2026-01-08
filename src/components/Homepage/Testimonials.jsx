import React, { useState } from 'react';
import {
    MessageCircle,
    ChevronLeft,
    ChevronRight,
    Star,
    Users,
    Trophy
} from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Shri Vyasnarayan Tiwari',
        role: 'President',
        company: 'Mahamaya Mandir',
        image: "/common/Logo-1-1.png",
        content:
            'The new platform simplified how we manage donations and campaigns. Our team can update content independently, track donations in real time, and focus more on our mission rather than operations..',
        rating: 5,
    },
    {
        id: 2,
        name: 'Marcus Chen',
        role: 'Founder',
        company: 'Luxe Fashion',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_18d217423-1763300796523.png',
        content:
            'They didn’t just build a website — they manifested a living digital experience. Our conversion rate jumped 45% in the first month.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Jennifer Rodriguez',
        role: 'Product Director',
        company: 'FinanceHub',
        image:
            'https://img.rocket.new/generatedImages/rocket_gen_img_13d332376-1763293839087.png',
        content:
            'The attention to detail and technical depth is unmatched. The platform is both beautiful and extremely functional.',
        rating: 5,
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    const prev = () =>
        setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);

    const next = () =>
        setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);

    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                        <MessageCircle size={16} className="text-teal-500" />
                        <span className="text-sm font-medium text-teal-600">
                            Client Success Stories
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Trusted by{' '}
                        <span className="text-teal-500">Industry Leaders</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from clients whose digital visions we’ve transformed into
                        living, high-impact experiences.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 lg:p-12 relative">
                        <MessageCircle
                            size={48}
                            className="absolute top-8 left-8 text-teal-500/20"
                        />

                        {/* Rating */}
                        <div className="flex mb-6">
                            {[...Array(active.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={22}
                                    className="text-yellow-400 fill-yellow-400"
                                />
                            ))}
                        </div>

                        <blockquote className="text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed">
                            “{active.content}”
                        </blockquote>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img
                                    src={active.image}
                                    alt={active.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-500"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        {active.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {active.role} · {active.company}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/10 hover:bg-teal-500/20 transition"
                                >
                                    <ChevronLeft size={20} className="text-teal-500" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/10 hover:bg-teal-500/20 transition"
                                >
                                    <ChevronRight size={20} className="text-teal-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-2 rounded-full transition-all ${i === activeIndex
                                    ? 'w-8 bg-teal-500'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, value: '50+', label: 'Happy Clients' },
                        { icon: Star, value: '4.9 / 5', label: 'Average Rating' },
                        { icon: Trophy, value: '98%', label: 'Satisfaction Rate' },
                    ].map(({ icon: Icon, value, label }) => (
                        <div key={label} className="text-center">
                            <div className="w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Icon size={32} className="text-teal-500" />
                            </div>
                            <div className="text-3xl font-bold text-teal-500 mb-2">
                                {value}
                            </div>
                            <div className="text-gray-600">{label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;



