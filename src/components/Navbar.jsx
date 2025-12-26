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


    const isHome = location.pathname === '/';

    const navClasses = isScrolled || !isHome
        ? "fixed top-0 w-full px-8 py-4 z-40 flex justify-between items-center bg-[#0A192F]/95 backdrop-blur-xl border-b border-[#00EFB5]/10 text-white shadow-lg transition-all duration-300"
        : "fixed top-0 w-full px-8 py-4 z-40 flex justify-between items-center bg-transparent text-white transition-all duration-300";

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#00EFB5] origin-left z-50"
                style={{ scaleX }}
            />

            <nav className={navClasses}>
                {/* Logo */}
                <Link to="/" className="text-2xl font-serif font-bold cursor-pointer tracking-wider text-white">
                    Etisbew Interactive
                </Link>

                {/* Links */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
                    <Link to="/" className="hover:text-[#00EFB5] transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-[#00EFB5] transition-colors">About</Link>
                    <Link to="/portfolio" className="hover:text-[#00EFB5] transition-colors">Portfolio</Link>
                    <Link to="/services" className="hover:text-[#00EFB5] transition-colors">Services</Link>
                    <Link to="/contact" className="hover:text-[#00EFB5] transition-colors">Contact</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link to="/contact" className="px-6 py-2 text-sm rounded-full bg-[#00EFB5] text-[#0A192F] font-bold hover:bg-white transition-all duration-300">
                        Start Your Manifestation
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;



