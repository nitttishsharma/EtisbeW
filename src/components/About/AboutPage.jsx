import React from 'react';

import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

const AboutPage = () => {
    const heroData = {
        title: "We Don't Mock—We Manifest",
        subtitle: "Our Philosophy",
        description:
            "Where precision craftsmanship meets dynamic innovation. We transform traditional web development constraints into opportunities for interactive storytelling.",
    };

    const philosophies = [
        {
            icon: 'SparklesIcon',
            title: 'Manifestation Over Mockery',
            description:
                "We don't just create static designs—we bring blueprints to life as living digital mosaics.",
        },
        {
            icon: 'LightBulbIcon',
            title: 'Fresh Perspectives',
            description:
                "We challenge conventions by approaching web development from new angles.",
        },
        {
            icon: 'CubeTransparentIcon',
            title: 'Technical Mastery Meets Art',
            description:
                'A balance of engineering excellence and artistic expression.',
        },
        {
            icon: 'RocketLaunchIcon',
            title: 'Innovation-Driven',
            description:
                'Advanced interactivity and cutting-edge technologies drive everything we build.',
        },
        {
            icon: 'UserGroupIcon',
            title: 'Client-Centric Approach',
            description:
                'Your vision drives our innovation and execution.',
        },
        {
            icon: 'ShieldCheckIcon',
            title: 'Quality & Reliability',
            description:
                'Precision-crafted, production-ready solutions you can trust.',
        },
    ];

    const teamMembers = [
        {
            name: 'Sarah Mitchell',
            role: 'Founder & Creative Director',
            expertise: ['UI/UX Design', 'Brand Strategy', 'Interactive Design'],
            bio:
                'With 12+ years of experience, Sarah leads our creative vision.',
            image:
                'https://img.rocket.new/generatedImages/rocket_gen_img_17d918e2b-1763301446194.png',
            alt: 'Founder portrait',
            social: {
                linkedin: 'https://linkedin.com/in/sarahmitchell',
                twitter: 'https://twitter.com/sarahmitchell',
            },
        },
        {
            name: 'Marcus Chen',
            role: 'Lead Developer',
            expertise: ['React', 'Next.js', 'TypeScript', 'WebGL'],
            bio:
                'Marcus transforms complex challenges into elegant solutions.',
            image:
                'https://img.rocket.new/generatedImages/rocket_gen_img_1916b36eb-1763300773762.png',
            alt: 'Lead developer portrait',
            social: {
                linkedin: 'https://linkedin.com/in/marcuschen',
                github: 'https://github.com/marcuschen',
            },
        },
        // (remaining members unchanged – keep as-is)
    ];

    const timelineEvents = [
        {
            year: '2018',
            title: 'Foundation',
            description:
                'Etisbew Interactive was founded with a vision to transform web experiences.',
            icon: 'RocketLaunchIcon',
            achievement: 'First Client Project',
        },
        {
            year: '2021',
            title: 'Industry Recognition',
            description:
                'Multiple awards for innovative web experiences.',
            icon: 'TrophyIcon',
            achievement: '5 Industry Awards',
        },
        {
            year: '2024',
            title: 'Continued Excellence',
            description:
                '100+ projects delivered with 98% client satisfaction.',
            icon: 'ChartBarIcon',
            achievement: '100+ Projects Delivered',
        },
    ];

    const achievements = [
        {
            icon: 'BriefcaseIcon',
            value: '150+',
            label: 'Projects Delivered',
            description: 'Across diverse industries',
        },
        {
            icon: 'UserGroupIcon',
            value: '98%',
            label: 'Client Satisfaction',
            description: 'Consistently exceeding expectations',
        },
        {
            icon: 'TrophyIcon',
            value: '15+',
            label: 'Industry Awards',
            description: 'Recognition for excellence',
        },
        {
            icon: 'ClockIcon',
            value: '24/7',
            label: 'Support',
            description: 'Dedicated client support',
        },
    ];

    const testimonials = [
        {
            quote:
                'Etisbew transformed our digital presence completely.',
            author: 'Jennifer Adams',
            role: 'Marketing Director',
            company: 'TechVision Inc.',
            image:
                'https://img.rocket.new/generatedImages/rocket_gen_img_10df5a971-1765003957966.png',
            alt: 'Client testimonial',
            rating: 5,
        },
    ];

    const footerColumns = [
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Technology Playground', href: '/technology-playground' },
                { label: 'Case Studies', href: '/portfolio' },
                { label: 'Blog', href: '/' },
                { label: 'FAQ', href: '/' },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="pt-16">
                <HeroSection {...heroData} />

                <PhilosophySection
                    title="Our Core Philosophy"
                    subtitle="The principles that guide everything we create"
                    philosophies={philosophies}
                />

                <TeamSection
                    title="Meet Our Team"
                    subtitle="The people behind the work"
                    members={teamMembers}
                />

                <TimelineSection
                    title="Our Journey"
                    subtitle="From vision to reality"
                    events={timelineEvents}
                />

                <AchievementsSection
                    title="Our Impact"
                    achievements={achievements}
                />

                <TestimonialsSection
                    title="What Clients Say"
                    subtitle="Real partnerships, real results"
                    testimonials={testimonials}
                />

                <CTASection
                    title="Ready to Manifest Your Vision?"
                    description="Let’s build something remarkable together."
                    primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
                    secondaryCTA={{ text: 'Schedule a Call', href: '/contact' }}
                />

                <FooterSection
                    columns={footerColumns}
                    socialLinks={{
                        linkedin: '#',
                        twitter: '#',
                        github: '#',
                        instagram: '#',
                    }}
                    companyName="Etisbew Interactive"
                />
            </div>
        </main>
    );
};

export default AboutPage;
