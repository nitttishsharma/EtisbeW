import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Always dark background if not on home? Or consistent style?
    // User requested "basic layout usage", let's keep the scroll logic but maybe always have a bg on inner pages?
    // For now, keeping original logic which is transparent at top on home.
    const isHome = location.pathname === '/';

    const navClasses = isScrolled || !isHome
        ? "fixed top-0 w-full px-8 py-4 z-40 flex justify-between items-center bg-[#0A192F]/95 backdrop-blur-xl border-b border-teal-500/10 text-white shadow-lg transition-all duration-300"
        : "fixed top-0 w-full px-8 py-4 z-40 flex justify-between items-center bg-transparent text-white transition-all duration-300";

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-50"
                style={{ scaleX }}
            />

            <nav className={navClasses}>
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif font-bold cursor-pointer tracking-wider">
                    Etisbew
                </Link>

                {/* Links */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
                    <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
                    <Link to="/portfolio" className="hover:text-teal-400 transition-colors">Portfolio</Link>
                    <Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link>
                    <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact" className="btn btn-primary px-6 py-2 text-sm rounded-full">
                        Start Your Manifestation
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
