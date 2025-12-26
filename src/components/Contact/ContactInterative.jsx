import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    MessageCircle,
    Calendar,
    Clock,
    BadgeCheck,
    Star,
    Users,
} from 'lucide-react';

import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ProjectBriefForm from './ProjectBriefForm';
import TrustSignals from './TrustSignals';
import FAQ from './FAQ';
import ResponseTime from './ResponseTime';

const ContactInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const contactMethods = [
        {
            id: 1,
            icon: Mail,
            title: 'Email Us',
            value: 'hello@etisbew.com',
            description: 'Send us a detailed message',
            link: 'mailto:hello@etisbew.com',
        },
        {
            id: 2,
            icon: Phone,
            title: 'Call Us',
            value: '+1 (555) 123-4567',
            description: 'Speak with our team directly',
            link: 'tel:+15551234567',
        },
        {
            id: 3,
            icon: MessageCircle,
            title: 'Live Chat',
            value: 'Available 9AM–6PM',
            description: 'Get instant answers',
            link: '#',
        },
        {
            id: 4,
            icon: Calendar,
            title: 'Schedule Call',
            value: 'Book a consultation',
            description: 'Choose a convenient time',
            link: '#',
        },
    ];

    const trustStats = [
        {
            id: 1,
            value: '24 hrs',
            label: 'Average Response Time',
            icon: Clock,
        },
        {
            id: 2,
            value: '150+',
            label: 'Projects Completed',
            icon: BadgeCheck,
        },
        {
            id: 3,
            value: '98%',
            label: 'Client Satisfaction',
            icon: Star,
        },
        {
            id: 4,
            value: '50+',
            label: 'Active Clients',
            icon: Users,
        },
    ];

    const faqs = [
        {
            id: 1,
            question: 'What is your typical project timeline?',
            answer:
                'A standard website project usually takes 3–4 months, covering discovery, design, development, and testing. Timelines vary based on scope.',
        },
        {
            id: 2,
            question: 'Do you work with clients remotely?',
            answer:
                'Yes. We work with clients globally using video calls, collaborative tools, and regular updates.',
        },
        {
            id: 3,
            question: 'What information do you need for a quote?',
            answer:
                'We need your goals, target audience, feature requirements, timeline, and budget range. Our project brief form helps capture this.',
        },
        {
            id: 4,
            question: 'Do you offer post-launch support?',
            answer:
                'Absolutely. We provide maintenance, security updates, performance monitoring, and ongoing improvements.',
        },
        {
            id: 5,
            question: 'What makes Etisbew different?',
            answer:
                'We focus on building living digital experiences, not static mockups. Our approach emphasizes real interaction, performance, and measurable results.',
        },
    ];


    return (
        <>
            <ContactHero isHydrated={isHydrated} />

            <TrustSignals stats={trustStats} />

            <ContactMethods methods={contactMethods} />

            <ProjectBriefForm />

            <ResponseTime />

            <FAQ faqs={faqs} />

        </>
    );
};

export default ContactInteractive;



