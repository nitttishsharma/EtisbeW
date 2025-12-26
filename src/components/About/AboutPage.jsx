import React from 'react';

import HeroSection from './HeroSection';
import PhilosophySection from './PhilosophySection';
import TeamSection from './TeamSection';
import TimelineSection from './TimelineSection';
import AchievementsSection from './AchievementsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

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
        {
            name: "Elena Rodriguez",
            role: "Senior UX Designer",
            expertise: ["User Research", "Interaction Design", "Prototyping"],
            bio: "Elena's user-centered approach ensures every interaction is intuitive and delightful. She bridges the gap between user needs and technical possibilities.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_122df528a-1763295042340.png",
            alt: "Hispanic woman with curly dark hair in professional attire smiling warmly",
            social: {
                linkedin: "https://linkedin.com/in/elenarodriguez",
                twitter: "https://twitter.com/elenarodriguez"
            }
        },
        {
            name: "David Park",
            role: "Full Stack Engineer",
            expertise: ["Node.js", "API Design", "Cloud Architecture"],
            bio: "David builds robust backend systems that power our interactive experiences. His expertise ensures scalability and performance at every level.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_114bd845f-1763298899395.png",
            alt: "Young Asian man with short hair in casual business attire in modern workspace",
            social: {
                linkedin: "https://linkedin.com/in/davidpark",
                github: "https://github.com/davidpark"
            }
        },
        {
            name: "Olivia Thompson",
            role: "Motion Designer",
            expertise: ["Animation", "3D Graphics", "Interactive Media"],
            bio: "Olivia brings our designs to life with stunning animations and interactive elements that captivate users and enhance storytelling.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_102d8e706-1763296029710.png",
            alt: "Young woman with blonde hair in creative workspace with colorful background",
            social: {
                linkedin: "https://linkedin.com/in/oliviathompson",
                twitter: "https://twitter.com/oliviathompson"
            }
        },
        {
            name: "James Wilson",
            role: "Project Manager",
            expertise: ["Agile", "Client Relations", "Strategic Planning"],
            bio: "James ensures seamless project execution from concept to launch. His strategic approach keeps teams aligned and clients delighted.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c925a7f-1763294244184.png",
            alt: "Professional man with beard in business casual attire in office environment",
            social: {
                linkedin: "https://linkedin.com/in/jameswilson"
            }
        }
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
        {
            quote: "Working with Etisbew was a game-changer. They didn't just build a website—they manifested our vision into a living, breathing digital experience that our customers love.",
            author: "Michael Chen",
            role: "CEO",
            company: "InnovateLabs",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e93fa9c2-1765407874602.png",
            alt: "Asian businessman in suit smiling confidently",
            rating: 5
        },
        {
            quote: "The team's technical expertise and creative vision exceeded all expectations. Our new platform is not just functional—it's a work of art that drives real business results.",
            author: "Sarah Martinez",
            role: "Product Manager",
            company: "Digital Dynamics",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d11c76b3-1763294269112.png",
            alt: "Hispanic woman with long dark hair in professional setting",
            rating: 5
        }
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
        <main className="min-h-screen bg-[#0A192F] text-white">
            <div className="pt-20">
                <HeroSection {...heroData} />

                <div className="section-padding">
                    <PhilosophySection
                        title="Our Core Philosophy"
                        subtitle="The principles that guide everything we create"
                        philosophies={philosophies}
                    />
                </div>

                <div className="section-padding bg-[#112240]/50">
                    <TeamSection
                        title="Meet Our Team"
                        subtitle="The people behind the work"
                        members={teamMembers}
                    />
                </div>

                <div className="section-padding">
                    <TimelineSection
                        title="Our Journey"
                        subtitle="From vision to reality"
                        events={timelineEvents}
                    />
                </div>

                <div className="section-padding bg-[#112240]/50">
                    <AchievementsSection
                        title="Our Impact"
                        achievements={achievements}
                    />
                </div>

                <div className="section-padding">
                    <TestimonialsSection
                        title="What Clients Say"
                        subtitle="Real partnerships, real results"
                        testimonials={testimonials}
                    />
                </div>

                <div className="section-padding bg-[#112240]/50">
                    <CTASection
                        title="Ready to Manifest Your Vision?"
                        description="Let’s build something remarkable together."
                        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
                        secondaryCTA={{ text: 'Schedule a Call', href: '/contact' }}
                    />
                </div>
            </div>
        </main>
    );
};

export default AboutPage;



