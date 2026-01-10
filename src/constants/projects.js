export const projects = [
    {
        id: "1",
        title: "Donation Website with Centralized Admin Portal",
        client: "Mahamaya Trust",
        industry: "Non-Profit",
        projectType: "Website",
        category: "Web Application",
        technologies: [
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Headless CMS"
        ],
        tags: ['React', 'Tailwind CSS', "Vite", 'Interactive'],
        image: "/common/Mahamayamanidr.JPG",
        imageAlt: "Donation website dashboard showing campaign management, donor analytics, and payment status",
        description: "A secure and scalable donation platform enabling online contributions, campaign management, and content updates through a centralized CMS portal.",
        results: [
            { metric: "Online Donations", value: "+120%" },
            { metric: "Content Update Time", value: "-70%" },
            { metric: "Admin Efficiency", value: "+60%" },
            { metric: "Donor Retention", value: "+45%" }
        ],
        challenge: "Mahamaya Trust relied on manual processes and static web pages to manage donations and campaigns. Content updates required technical intervention, donation tracking was fragmented, and administrators lacked real-time visibility into donor activity and campaign performance.",
        solution: "We built a modern donation website backed by a centralized CMS portal that allows non-technical administrators to manage campaigns, update content, and track donations in real time. The platform supports secure payment integrations, role-based admin access, automated donation receipts, and responsive design optimized for mobile donors.",
        testimonial: {
            quote: "The new platform simplified how we manage donations and campaigns. Our team can update content independently, track donations in real time, and focus more on our mission rather than operations.",
            author: "Trust Operations Team",
            position: "Program Management",
            companyLogo: "/common/Logo-1-1.png",
            companyLogoAlt: "Mahamaya Trust logo"
        },
        color: '#E6FFFA'
    },
    {
        id: "2",
        title: "Knowledge Networks Platform",
        industry: "Artificial Intelligence",
        projectType: "AI Podcast & Knowledge Platform",
        category: "AI Media Platform",
        technologies: ["WordPress", "Themeify", "CSS", "JavaScript"],
        tags: ["AI", "Podcast", "WordPress", "Content Platform"],
        image: "/common/Knowledge_network.JPG",
        imageAlt: "AI knowledge and podcast platform showcasing expert talks and technology insights",
        description: "A centralized AI knowledge ecosystem offering expert-led podcasts, curated articles, and community insights. The platform features an advanced audio player, topic-wise filtering, speaker profiles, and seamless content discovery for professionals and researchers exploring the latest in artificial intelligence.",
        results: [
            { metric: "User Engagement", value: "+165%" },
            { metric: "Average Session Time", value: "4.2x Increase" },
            { metric: "Podcast Plays", value: "+230%" },
            { metric: "Mobile Traffic", value: "+190%" }
        ],
        challenge: "The platform needed to host large volumes of AI-focused content while ensuring fast load times, smooth audio streaming, and easy navigation across topics, speakers, and categories on both desktop and mobile.",
        solution: "We designed a performance-optimized WordPress architecture with a custom media player, advanced search and filtering, CDN-based delivery, and a mobile-first UI to provide a seamless learning and listening experience.",
        testimonial: {
            quote: "The platform now feels like a true global hub for AI knowledge. Content discovery and user engagement have improved dramatically.",
            author: "Program Director",
            position: "Knowledge Platform Lead",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1724cfa35-1764744579978.png",
            companyLogoAlt: "Knowledge Networks platform logo"
        },
        color: "#F0FFF4"
    },
    {
        id: "3",
        title: "Global AI Awards Platform",
        industry: "Artificial Intelligence",
        projectType: "Awards & Nomination Management System",
        category: "Event & Recognition Platform",
        technologies: ["WordPress", "Themeify", "CSS", "JavaScript"],
        tags: ["Awards", "AI Community", "Nomination System", "Voting"],
        image: "common/Universal_awards.JPG",
        imageAlt: "AI awards website highlighting global nominations and jury evaluation process",
        description: "A dedicated platform to manage global AI awards, enabling online nominations, jury evaluations, public voting, and result announcements with secure workflows and role-based access.",
        results: [
            { metric: "Nomination Submissions", value: "+310%" },
            { metric: "Page Load Speed", value: "1.1s" },
            { metric: "User Participation", value: "+260%" },
            { metric: "Bounce Rate", value: "-45%" }
        ],
        challenge: "Managing high-volume nominations, jury reviews, and public traffic during peak award seasons required a scalable and secure system with smooth workflows.",
        solution: "We implemented a structured nomination pipeline, optimized form handling, caching, and a responsive UI to ensure reliability, data integrity, and high availability during global traffic spikes.",
        testimonial: {
            quote: "The awards process became seamless and highly professional. Everything from nominations to jury reviews worked flawlessly.",
            author: "Awards Committee Head",
            position: "Global Programs",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
            companyLogoAlt: "AI Awards platform logo"
        },
        color: "#EDF2FF"
    },
    {
        id: "4",
        title: "ERAI Community Portal",
        industry: "Artificial Intelligence & Research",
        projectType: "Enterprise AI Research Network",
        category: "Professional Community Platform",
        technologies: ["WordPress", "Themeify", "CSS", "JavaScript"],
        tags: ["Research", "Enterprise AI", "Community", "Knowledge Sharing"],
        image: "common/erai.JPG",
        imageAlt: "Enterprise AI research community portal with articles and expert discussions",
        description: "A professional AI research and enterprise community platform offering whitepapers, expert blogs, webinars, and peer collaboration for CXOs, data scientists, and AI practitioners.",
        results: [
            { metric: "Member Registrations", value: "+185%" },
            { metric: "Content Downloads", value: "+240%" },
            { metric: "Returning Visitors", value: "+170%" },
            { metric: "Lead Conversions", value: "+130%" }
        ],
        challenge: "The platform needed to position itself as a credible enterprise AI knowledge hub while supporting gated content, thought leadership, and community growth.",
        solution: "We built a structured content taxonomy, role-based access, gated downloads, and performance optimization to support enterprise-scale usage and long-form research consumption.",
        testimonial: {
            quote: "The portal has become a trusted destination for enterprise AI leaders and researchers.",
            author: "Research Director",
            position: "Enterprise AI Council",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1724cfa35-1764744579978.png",
            companyLogoAlt: "ERAI community logo"
        },
        color: "#FFF7ED"
    },
    {
        id: "5",
        title: "AISB Conference Platform",
        industry: "Artificial Intelligence",
        projectType: "Conference & Summit Website",
        category: "Event Management Platform",
        technologies: ["WordPress", "Themeify", "CSS", "JavaScript"],
        tags: ["AI Conference", "Events", "Summit", "Registration"],
        image: "common/knowledge.JPG",
        imageAlt: "AI summit website with speaker lineup, agenda, and registration sections",
        description: "A global AI summit platform showcasing speakers, agendas, registrations, sponsors, and session tracks with seamless user experience for attendees and organizers.",
        results: [
            { metric: "Event Registrations", value: "+275%" },
            { metric: "Speaker Page Views", value: "+220%" },
            { metric: "Mobile Signups", value: "+195%" },
            { metric: "Conversion Rate", value: "+160%" }
        ],
        challenge: "Handling large-scale event traffic, multi-track agendas, and global registrations required a highly responsive and reliable digital experience.",
        solution: "We implemented optimized page structures, dynamic schedules, fast-loading assets, and mobile-first registration flows to support thousands of concurrent users.",
        testimonial: {
            quote: "The conference platform delivered a world-class digital experience for our global audience.",
            author: "Event Director",
            position: "Global AI Summit",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
            companyLogoAlt: "AISB conference logo"
        },
        color: "#F0F9FF"
    },
    // {
    //     id: "6",
    //     title: "PropertyPro Real Estate Portal",
    //     client: "Metropolitan Realty Group",
    //     industry: "realestate",
    //     projectType: "website",
    //     category: "Real Estate Portal",
    //     technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Node.js"],
    //     tags: ['Real Estate', 'Next.js', 'Interactive'],
    //     image: "https://img.rocket.new/generatedImages/rocket_gen_img_1961cdf95-1764663826402.png",
    //     imageAlt: "Luxury real estate website showing property listings with high-quality images and interactive map",
    //     description: "Sophisticated real estate platform featuring virtual tours, advanced property search, mortgage calculators, and integrated CRM for lead management.",
    //     results: [
    //         { metric: "Lead Generation", value: "+225%" },
    //         { metric: "Property Views", value: "+180%" },
    //         { metric: "Virtual Tours", value: "15k/month" },
    //         { metric: "Conversion Rate", value: "+95%" }
    //     ],
    //     challenge: "Metropolitan Realty Group's outdated website failed to showcase their premium properties effectively. They lacked virtual tour capabilities, had poor mobile experience, and struggled with lead management and follow-up.",
    //     solution: "We created an immersive property portal with 360° virtual tours, interactive maps, advanced filtering, and integrated CRM. The platform features high-performance image optimization, SEO-friendly architecture, and automated lead nurturing workflows.",
    //     color: '#FFFBEB'
    // },
    // {
    //     id: "7",
    //     title: "HealthHub Patient Portal",
    //     client: "MediCare Solutions",
    //     industry: "healthcare",
    //     projectType: "portal",
    //     category: "Healthcare Portal",
    //     technologies: ["React", "Node.js", "PostgreSQL"],
    //     tags: ['Healthcare', 'Portal', 'React'],
    //     image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1644aff77-1764659451775.png',
    //     imageAlt: "Patient portal dashboard showing health metrics and appointment scheduling",
    //     description: "A comprehensive patient portal providing secure access to medical records, appointment scheduling, and direct communication with healthcare providers.",
    //     results: [
    //         { metric: "Patient Engagement", value: "+185%" },
    //         { metric: "Admin Time", value: "-40%" }
    //     ],
    //     challenge: "MediCare Solutions needed a way to reduce administrative burden and improve patient communication. Their previous manual systems were inefficient and led to high no-show rates.",
    //     solution: "We developed a secure, HIPAA-compliant patient portal that automates appointment scheduling, provides real-time access to lab results, and includes an encrypted messaging system.",
    //     color: '#F0F9FF'
    // },
    // {
    //     id: "8",
    //     title: "Luxe Fashion E-commerce",
    //     client: "Urban Lifestyle Brands",
    //     industry: "ecommerce",
    //     projectType: "ecommerce",
    //     category: "E-commerce Platform",
    //     technologies: ["Next.js", "Shopify", "Framer Motion"],
    //     tags: ['Next.js', 'Shopify', 'Animations'],
    //     image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a0a04008-1764827205574.png',
    //     imageAlt: "Luxury fashion e-commerce storefront with high-end apparel",
    //     description: "Premium shopping experience with geometric layouts and smooth cursor-driven motion designed for high-end fashion retail.",
    //     results: [
    //         { metric: "Average Order Value", value: "+35%" },
    //         { metric: "Mobile Conversion", value: "+90%" }
    //     ],
    //     challenge: "The brand needed a digital experience that matched their physical store's luxury feel. Most e-commerce templates were too generic and failed to convey the premium nature of their products.",
    //     solution: "We created a bespoke e-commerce experience using Next.js and Shopify, featuring unique layout transitions, ultra-fast performance, and high-fidelity product imagery.",
    //     color: '#FDF2F8'
    // }
];
