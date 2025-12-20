import React, { useState, useEffect } from 'react';
import {
    Rocket,
    Globe,
    Terminal,
    ShoppingCart,
    Paintbrush,
    RefreshCcw,
    Wrench,
    MessageCircle,
    ArrowRight,
} from 'lucide-react';

import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import ProcessTimeline from './ProcessTimeline';
import TechnologyStack from './TechnologyStack';
import PricingCalculator from './PricingCalculator';
import CaseStudyShowcase from './CaseStudyShowcase';
import ConsultationModal from './ConsultationModal';

const services = [
    {
        id: 'interactive-websites',
        icon: Globe,
        title: 'Interactive Websites',
        tagline: 'Living Digital Mosaics',
        description:
            'Transform static web presence into dynamic, mouse-responsive experiences that captivate visitors and drive conversions.',
        features: [
            { text: 'Mouse-responsive geometric animations' },
            { text: 'Advanced scroll-triggered interactions' },
            { text: 'Dynamic content loading and transitions' },
            { text: 'Mobile-optimized touch interactions' },
            { text: 'Performance-optimized animations' },
        ],
        deliverables: ['Responsive Design', 'SEO Optimization', 'Analytics Integration', 'CMS Setup'],
        timeline: '6–10 weeks',
        startingPrice: '$8,000',
    },
    {
        id: 'web-applications',
        icon: Terminal,
        title: 'Web Applications',
        tagline: 'Scalable Digital Solutions',
        description:
            'Build powerful, scalable web applications that solve complex business problems.',
        features: [
            { text: 'Custom feature development' },
            { text: 'Real-time data synchronization' },
            { text: 'Advanced user authentication' },
            { text: 'API development and integration' },
            { text: 'Cloud infrastructure setup' },
        ],
        deliverables: ['Full-Stack Development', 'Database Design', 'API Documentation', 'Testing Suite'],
        timeline: '12–20 weeks',
        startingPrice: '$15,000',
    },
    {
        id: 'ecommerce-platforms',
        icon: ShoppingCart,
        title: 'E-Commerce Platforms',
        tagline: 'Conversion-Optimized Shopping',
        description:
            'Create exceptional online shopping experiences that convert browsers into buyers.',
        features: [
            { text: 'Interactive product galleries' },
            { text: 'Advanced filtering and search' },
            { text: 'Secure payment integration' },
            { text: 'Inventory management system' },
            { text: 'Customer account portals' },
        ],
        deliverables: ['Payment Gateway', 'Product Management', 'Order Processing', 'Analytics Dashboard'],
        timeline: '14–24 weeks',
        startingPrice: '$20,000',
    },
    {
        id: 'ui-ux-design',
        icon: Paintbrush,
        title: 'UI / UX Design',
        tagline: 'User-Centered Experiences',
        description:
            'Design intuitive, beautiful interfaces that users love and trust.',
        features: [
            { text: 'User research and personas' },
            { text: 'Interactive prototypes' },
            { text: 'Design system creation' },
            { text: 'Usability testing' },
            { text: 'Accessibility compliance' },
        ],
        deliverables: ['Design System', 'Prototypes', 'User Flows', 'Style Guide'],
        timeline: '4–8 weeks',
        startingPrice: '$5,000',
    },
    {
        id: 'website-redesign',
        icon: RefreshCcw,
        title: 'Website Redesign',
        tagline: 'Transformation & Modernization',
        description:
            'Breathe new life into outdated websites with modern design and performance.',
        features: [
            { text: 'Comprehensive site audit' },
            { text: 'Modern design implementation' },
            { text: 'Content migration' },
            { text: 'SEO preservation' },
            { text: 'Performance optimization' },
        ],
        deliverables: ['Redesigned Site', 'Content Migration', 'SEO Audit', 'Training Materials'],
        timeline: '8–14 weeks',
        startingPrice: '$10,000',
    },
    {
        id: 'maintenance-support',
        icon: Wrench,
        title: 'Maintenance & Support',
        tagline: 'Ongoing Excellence',
        description:
            'Keep your digital presence fast, secure, and always up-to-date.',
        features: [
            { text: 'Regular security updates' },
            { text: 'Performance monitoring' },
            { text: 'Content updates' },
            { text: 'Bug fixes and improvements' },
            { text: 'Priority support' },
        ],
        deliverables: ['Monthly Reports', 'Security Updates', 'Performance Optimization', '24/7 Monitoring'],
        timeline: 'Ongoing',
        startingPrice: '$500 / mo',
    },
];

const ServicesInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20 animate-pulse space-y-8">
                    <div className="h-64 bg-gray-200 rounded-xl" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-96 bg-gray-200 rounded-xl" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const handleLearnMore = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <>
            <ServiceHero onConsultationClick={() => setIsConsultationOpen(true)} />

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
                            <Rocket size={18} className="text-teal-500" />
                            <span className="text-sm font-medium text-teal-600">Our Services</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive <span className="text-teal-500">Digital Solutions</span>
                        </h2>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From concept to launch and beyond, we build experiences that deliver real business value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} id={service.id}>
                                <ServiceCard service={service} onLearnMore={handleLearnMore} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessTimeline />
            <CaseStudyShowcase />
            <TechnologyStack />
            <PricingCalculator />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="bg-white border border-gray-200 rounded-xl p-12">
                        <MessageCircle size={48} className="text-teal-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ready to Manifest Your Vision?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let’s discuss how we can transform your blueprint into a living digital experience.
                        </p>

                        <button
                            onClick={() => setIsConsultationOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
                        >
                            Schedule Free Consultation
                            <ArrowRight size={20} />
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                            30-minute discovery call • No commitment required
                        </p>
                    </div>
                </div>
            </section>

            <ConsultationModal
                isOpen={isConsultationOpen}
                onClose={() => setIsConsultationOpen(false)}
            />
        </>
    );
};

export default ServicesInteractive;
