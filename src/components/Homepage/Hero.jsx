import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricBackground from '../GeometricBackground';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
            {/* Premium 3D Background */}
            <GeometricBackground />

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
                {/* No overlays needed */}
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            >
                <div className="flex flex-col items-center mb-6">
                    <div className="relative inline-block">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-serif text-gray-500 mr-4 align-middle"
                        >
                            Website
                        </motion.span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            className="absolute top-1/2 left-0 h-1 md:h-2 bg-red-500 -translate-y-1/2"
                        />
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-6xl md:text-9xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200"
                    >
                        EtisbeW
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        We Don&apos;t Mock <span className="text-[#01bea6]">We Manifest</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-snug">
                        Experience the future of web development, where every interaction tells a story.
                        We craft interactive digital experiences that engage, convert, and leave lasting impressions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link to="/contact" className="btn btn-primary group">
                        Start Your Manifestation
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="ml-2"
                        >
                            <ArrowRight size={20} />
                        </motion.span>
                    </Link>
                    <Link to="/portfolio" className="btn btn-outline group flex items-center justify-center gap-2">
                        Explore Our Work
                        <Sparkles size={20} className="group-hover:text-purple-400 transition-colors" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;



