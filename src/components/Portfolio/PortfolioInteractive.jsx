import React, { useState, useCallback, useEffect } from 'react';

import PortfolioHero from './PortfolioHero';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import CTASection from './CTASection';

const PortfolioInteractive = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const heroData = {
        title: 'Our Portfolio of Digital Masterpieces',
        description:
            'Explore our collection of transformative web experiences that blend cutting-edge technology with strategic design to deliver measurable business impact.',
        stats: [
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '2.5x', label: 'Average ROI Increase' },
        ],
    };

    const industries = [
        { id: 'ecommerce', label: 'E-Commerce' },
        { id: 'healthcare', label: 'Healthcare' },
        { id: 'fintech', label: 'FinTech' },
        { id: 'education', label: 'Education' },
        { id: 'saas', label: 'SaaS' },
        { id: 'realestate', label: 'Real Estate' },
    ];

    const projectTypes = [
        { id: 'webapp', label: 'Web Application' },
        { id: 'website', label: 'Corporate Website' },
        { id: 'ecommerce', label: 'E-Commerce Platform' },
        { id: 'portal', label: 'Customer Portal' },
        { id: 'dashboard', label: 'Analytics Dashboard' },
        { id: 'landing', label: 'Landing Page' },
    ];

    const technologies = [
        { id: 'react', label: 'React' },
        { id: 'nextjs', label: 'Next.js' },
        { id: 'typescript', label: 'TypeScript' },
        { id: 'tailwind', label: 'Tailwind CSS' },
        { id: 'nodejs', label: 'Node.js' },
        { id: 'graphql', label: 'GraphQL' },
    ];

    const allProjects = [
        {
            id: "1",
            title: "HealthHub Patient Portal",
            client: "MediCare Solutions",
            industry: "healthcare",
            projectType: "portal",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1644aff77-1764659451775.png",
            imageAlt: "Modern healthcare dashboard interface showing patient data visualization with blue and white color scheme",
            description: "A comprehensive patient portal enabling secure health record access, appointment scheduling, and telemedicine consultations with real-time notifications.",
            results: [
                { metric: "Patient Engagement", value: "+185%" },
                { metric: "Admin Time Saved", value: "40hrs/week" },
                { metric: "Appointment No-Shows", value: "-65%" },
                { metric: "User Satisfaction", value: "4.8/5" }],

            challenge: "MediCare Solutions struggled with fragmented patient communication systems, leading to missed appointments, delayed care, and administrative bottlenecks. Patients had no centralized way to access their health records or communicate with providers, resulting in poor engagement and satisfaction scores.",
            solution: "We developed an intuitive patient portal with secure authentication, real-time appointment scheduling, integrated telemedicine capabilities, and automated reminder systems. The platform features responsive design for mobile access, HIPAA-compliant data handling, and seamless integration with existing EMR systems.",
            testimonial: {
                quote: "Etisbew transformed our patient experience completely. The portal reduced our administrative workload by 40% while dramatically improving patient satisfaction. It's exactly what we needed.",
                author: "Dr. Sarah Mitchell",
                position: "Chief Medical Officer",
                companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_132d6be92-1764663829380.png",
                companyLogoAlt: "MediCare Solutions company logo featuring medical cross symbol in blue"
            }
        },
        {
            id: "2",
            title: "ShopSphere E-Commerce Platform",
            client: "Urban Lifestyle Brands",
            industry: "ecommerce",
            projectType: "ecommerce",
            technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
            imageAlt: "Elegant e-commerce website showing modern product grid layout with lifestyle fashion items",
            description: "A high-performance e-commerce platform featuring advanced product filtering, personalized recommendations, and seamless checkout experience with multiple payment integrations.",
            results: [
                { metric: "Conversion Rate", value: "+142%" },
                { metric: "Page Load Time", value: "0.8s" },
                { metric: "Cart Abandonment", value: "-58%" },
                { metric: "Mobile Sales", value: "+210%" }],

            challenge: "Urban Lifestyle Brands faced declining online sales due to a slow, outdated e-commerce platform with poor mobile experience and limited personalization. High cart abandonment rates and slow page loads were costing them significant revenue.",
            solution: "We built a lightning-fast e-commerce platform using Next.js with server-side rendering, implemented AI-powered product recommendations, optimized checkout flow, and created a mobile-first responsive design. The platform includes real-time inventory management and advanced analytics.",
            testimonial: {
                quote: "Our online revenue doubled within three months of launching the new platform. The speed and user experience are exceptional. Etisbew delivered beyond our expectations.",
                author: "Marcus Chen",
                position: "E-Commerce Director",
                companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1724cfa35-1764744579978.png",
                companyLogoAlt: "Urban Lifestyle Brands logo with minimalist shopping bag icon"
            }
        },
        {
            id: "3",
            title: "FinanceFlow Analytics Dashboard",
            client: "Quantum Capital Partners",
            industry: "fintech",
            projectType: "dashboard",
            technologies: ["React", "TypeScript", "Recharts", "Node.js"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0a26062-1765030360899.png",
            imageAlt: "Professional financial analytics dashboard displaying real-time charts and market data with dark theme",
            description: "Real-time financial analytics dashboard providing comprehensive market insights, portfolio tracking, and automated reporting with advanced data visualization.",
            results: [
                { metric: "Data Processing", value: "10x Faster" },
                { metric: "Report Generation", value: "Automated" },
                { metric: "Decision Speed", value: "+75%" },
                { metric: "User Adoption", value: "100%" }],

            challenge: "Quantum Capital Partners relied on multiple disconnected tools for financial analysis, leading to delayed decision-making and manual report compilation. Their team needed a unified platform for real-time market monitoring and portfolio management.",
            solution: "We created a comprehensive analytics dashboard with real-time data feeds, customizable widgets, automated reporting, and advanced charting capabilities. The platform features role-based access control, export functionality, and mobile responsiveness for on-the-go monitoring."
        },
        {
            id: "4",
            title: "EduConnect Learning Platform",
            client: "Global Education Institute",
            industry: "education",
            projectType: "webapp",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_146254e45-1764672099813.png",
            imageAlt: "Interactive online learning platform interface showing course modules and student progress tracking",
            description: "Interactive learning management system with video streaming, progress tracking, collaborative tools, and gamification elements to enhance student engagement.",
            results: [
                { metric: "Student Engagement", value: "+165%" },
                { metric: "Course Completion", value: "+89%" },
                { metric: "Teacher Efficiency", value: "+120%" },
                { metric: "Platform Uptime", value: "99.9%" }],

            challenge: "Global Education Institute needed to transition from traditional classroom learning to a hybrid model but lacked a robust digital platform. Their existing system couldn't handle video streaming, had poor user experience, and limited collaboration features.",
            solution: "We developed a comprehensive learning platform with HD video streaming, interactive quizzes, discussion forums, progress tracking, and gamification. The system includes automated grading, attendance tracking, and parent portals for complete transparency."
        },
        {
            id: "5",
            title: "CloudSync SaaS Platform",
            client: "TechFlow Solutions",
            industry: "saas",
            projectType: "webapp",
            technologies: ["React", "Next.js", "TypeScript", "Node.js"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_116b17f40-1764672098874.png",
            imageAlt: "Modern SaaS application dashboard with clean interface showing project management tools",
            description: "Enterprise-grade SaaS platform for team collaboration and project management with real-time synchronization, advanced permissions, and integration capabilities.",
            results: [
                { metric: "User Growth", value: "+340%" },
                { metric: "Churn Rate", value: "-72%" },
                { metric: "Feature Adoption", value: "85%" },
                { metric: "Support Tickets", value: "-60%" }],

            challenge: "TechFlow Solutions needed to scale their MVP into a full-featured enterprise platform. Their existing architecture couldn't handle growing user base, lacked essential features, and had performance issues during peak usage.",
            solution: "We rebuilt the platform from ground up with scalable architecture, implemented real-time collaboration features, created comprehensive API for integrations, and designed intuitive UI/UX. The platform now supports multi-tenancy, advanced analytics, and white-labeling."
        },
        {
            id: "6",
            title: "PropertyPro Real Estate Portal",
            client: "Metropolitan Realty Group",
            industry: "realestate",
            projectType: "website",
            technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Node.js"],
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1961cdf95-1764663826402.png",
            imageAlt: "Luxury real estate website showing property listings with high-quality images and interactive map",
            description: "Sophisticated real estate platform featuring virtual tours, advanced property search, mortgage calculators, and integrated CRM for lead management.",
            results: [
                { metric: "Lead Generation", value: "+225%" },
                { metric: "Property Views", value: "+180%" },
                { metric: "Virtual Tours", value: "15k/month" },
                { metric: "Conversion Rate", value: "+95%" }],

            challenge: "Metropolitan Realty Group's outdated website failed to showcase their premium properties effectively. They lacked virtual tour capabilities, had poor mobile experience, and struggled with lead management and follow-up.",
            solution: "We created an immersive property portal with 360° virtual tours, interactive maps, advanced filtering, and integrated CRM. The platform features high-performance image optimization, SEO-friendly architecture, and automated lead nurturing workflows."
        }
    ];


    useEffect(() => {
        setFilteredProjects(allProjects);
    }, []);

    const handleFilterChange = useCallback((filters) => {
        let filtered = allProjects;

        if (filters.industry !== 'all') {
            filtered = filtered.filter(p => p.industry === filters.industry);
        }

        if (filters.projectType !== 'all') {
            filtered = filtered.filter(p => p.projectType === filters.projectType);
        }

        if (filters.technology !== 'all') {
            filtered = filtered.filter(p =>
                p.technologies.some(tech =>
                    tech.toLowerCase().includes(filters.technology.toLowerCase())
                )
            );
        }

        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.client.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
        }

        setFilteredProjects(filtered);
    }, []);

    const handleViewDetails = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A192F]">
            <PortfolioHero {...heroData} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <FilterBar
                    industries={industries}
                    projectTypes={projectTypes}
                    technologies={technologies}
                    onFilterChange={handleFilterChange}
                />

                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                            No Projects Found
                        </h3>
                        <p className="text-muted-foreground">
                            Try adjusting your filters to see more results
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {filteredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewDetails={handleViewDetails}
                            />
                        ))}
                    </div>
                )}
            </div>

            <CTASection />

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default PortfolioInteractive;



