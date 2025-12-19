import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (!formState.name) tempErrors.name = "Name is required";
        if (!formState.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formState.email)) tempErrors.email = "Email is invalid";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (validate()) {
            // Simulate API
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
            }, 1500);
        } else {
            setIsSubmitting(false);
            // Shake effect handled by Framer Motion on input
        }
    };

    return (
        <section id="contact" className="py-24 bg-navy text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900/10 skew-x-12" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-5xl font-serif mb-6">Let's Flip The Script.</h2>
                    <p className="text-teal-200 text-lg mb-12">Ready to transform your digital presence? Reach out and let's manifest your vision.</p>

                    <div className="space-y-8">
                        <div className="bg-white/5 p-6 rounded-lg border-l-4 border-teal-500">
                            <p className="text-xl italic mb-4">"Etisbew didn't just build a site; they built a legacy key for us. The traffic spike was immediate."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                <div>
                                    <div className="font-bold">Sarah Jenkins</div>
                                    <div className="text-sm text-gray-400">CTO, FinEdge</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-navy p-8 md:p-12 rounded-2xl shadow-2xl">
                    <AnimatePresence mode="wait">
                        {!isSuccess ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="block text-sm font-bold mb-2">Name</label>
                                    <motion.input
                                        animate={errors.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                                        type="text"
                                        className={`w-full p-4 bg-gray-50 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-teal-500 focus:outline-none transition-colors`}
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <div className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} /> {errors.name}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">Email</label>
                                    <motion.input
                                        animate={errors.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                                        type="email"
                                        className={`w-full p-4 bg-gray-50 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-teal-500 focus:outline-none transition-colors`}
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <div className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} /> {errors.email}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">Message</label>
                                    <textarea
                                        className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-teal-500 focus:outline-none transition-colors h-32 resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        placeholder="Tell us about your flip..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn btn-primary flex items-center justify-center gap-2 group disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Processing...' : 'Initiate Flip'}
                                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1, rotate: 360 }}
                                    className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle size={40} />
                                </motion.div>
                                <h3 className="text-3xl font-serif text-navy mb-4">Flip Initiated!</h3>
                                <p className="text-gray-600 mb-8">We've received your signal. Expect a response within 24 hours.</p>
                                <button onClick={() => { setIsSuccess(false); setFormState({ name: '', email: '', message: '' }) }} className="text-teal-500 hover:text-teal-700 font-medium">
                                    Send another message
                                </button>

                                {/* Simple CSS Particles/Confetti */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random()}s`,
                                            opacity: 0.5
                                        }} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Contact;
