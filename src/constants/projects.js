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
        title: "ShopSphere E-Commerce Platform",
        client: "Urban Lifestyle Brands",
        industry: "ecommerce",
        projectType: "ecommerce",
        category: "E-commerce Platform",
        technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
        tags: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
        imageAlt: "Elegant e-commerce website showing modern product grid layout with lifestyle fashion items",
        description: "A high-performance e-commerce platform featuring advanced product filtering, personalized recommendations, and seamless checkout experience with multiple payment integrations.",
        results: [
            { metric: "Conversion Rate", value: "+142%" },
            { metric: "Page Load Time", value: "0.8s" },
            { metric: "Cart Abandonment", value: "-58%" },
            { metric: "Mobile Sales", value: "+210%" }
        ],
        challenge: "Urban Lifestyle Brands faced declining online sales due to a slow, outdated e-commerce platform with poor mobile experience and limited personalization. High cart abandonment rates and slow page loads were costing them significant revenue.",
        solution: "We built a lightning-fast e-commerce platform using Next.js with server-side rendering, implemented AI-powered product recommendations, optimized checkout flow, and created a mobile-first responsive design. The platform includes real-time inventory management and advanced analytics.",
        testimonial: {
            quote: "Our online revenue doubled within three months of launching the new platform. The speed and user experience are exceptional. Etisbew delivered beyond our expectations.",
            author: "Marcus Chen",
            position: "E-Commerce Director",
            companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1724cfa35-1764744579978.png",
            companyLogoAlt: "Urban Lifestyle Brands logo with minimalist shopping bag icon"
        },
        color: '#F0FFF4'
    },
    {
        id: "3",
        title: "FinanceFlow Analytics Dashboard",
        client: "Quantum Capital Partners",
        industry: "fintech",
        projectType: "dashboard",
        category: "Financial Platform",
        technologies: ["React", "TypeScript", "Recharts", "Node.js"],
        tags: ['TypeScript', 'WebSocket', 'Real-time'],
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f0a26062-1765030360899.png",
        imageAlt: "Professional financial analytics dashboard displaying real-time charts and market data with dark theme",
        description: "Real-time financial analytics dashboard providing comprehensive market insights, portfolio tracking, and automated reporting with advanced data visualization.",
        results: [
            { metric: "Data Processing", value: "10x Faster" },
            { metric: "Report Generation", value: "Automated" },
            { metric: "Decision Speed", value: "+75%" },
            { metric: "User Adoption", value: "100%" }
        ],
        challenge: "Quantum Capital Partners relied on multiple disconnected tools for financial analysis, leading to delayed decision-making and manual report compilation. Their team needed a unified platform for real-time market monitoring and portfolio management.",
        solution: "We created a comprehensive analytics dashboard with real-time data feeds, customizable widgets, automated reporting, and advanced charting capabilities. The platform features role-based access control, export functionality, and mobile responsiveness for on-the-go monitoring.",
        color: '#EBF8FF'
    },
    {
        id: "4",
        title: "EduConnect Learning Platform",
        client: "Global Education Institute",
        industry: "education",
        projectType: "webapp",
        category: "Web Application",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
        tags: ['Next.js', 'TypeScript', 'LMS'],
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_146254e45-1764672099813.png",
        imageAlt: "Interactive online learning platform interface showing course modules and student progress tracking",
        description: "Interactive learning management system with video streaming, progress tracking, collaborative tools, and gamification elements to enhance student engagement.",
        results: [
            { metric: "Student Engagement", value: "+165%" },
            { metric: "Course Completion", value: "+89%" },
            { metric: "Teacher Efficiency", value: "+120%" },
            { metric: "Platform Uptime", value: "99.9%" }
        ],
        challenge: "Global Education Institute needed to transition from traditional classroom learning to a hybrid model but lacked a robust digital platform. Their existing system couldn't handle video streaming, had poor user experience, and limited collaboration features.",
        solution: "We developed a comprehensive learning platform with HD video streaming, interactive quizzes, discussion forums, progress tracking, and gamification. The system includes automated grading, attendance tracking, and parent portals for complete transparency.",
        color: '#FFF5F7'
    },
    {
        id: "5",
        title: "CloudSync SaaS Platform",
        client: "TechFlow Solutions",
        industry: "saas",
        projectType: "webapp",
        category: "SaaS Platform",
        technologies: ["React", "Next.js", "TypeScript", "Node.js"],
        tags: ['SaaS', 'Cloud', 'React'],
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_116b17f40-1764672098874.png",
        imageAlt: "Modern SaaS application dashboard with clean interface showing project management tools",
        description: "Enterprise-grade SaaS platform for team collaboration and project management with real-time synchronization, advanced permissions, and integration capabilities.",
        results: [
            { metric: "User Growth", value: "+340%" },
            { metric: "Churn Rate", value: "-72%" },
            { metric: "Feature Adoption", value: "85%" },
            { metric: "Support Tickets", value: "-60%" }
        ],
        challenge: "TechFlow Solutions needed to scale their MVP into a full-featured enterprise platform. Their architecture couldn't handle growing user base, lacked essential features, and had performance issues during peak usage.",
        solution: "We rebuilt the platform from ground up with scalable architecture, implemented real-time collaboration features, created comprehensive API for integrations, and designed intuitive UI/UX. The platform now supports multi-tenancy, advanced analytics, and white-labeling.",
        color: '#F5F3FF'
    },
    {
        id: "6",
        title: "PropertyPro Real Estate Portal",
        client: "Metropolitan Realty Group",
        industry: "realestate",
        projectType: "website",
        category: "Real Estate Portal",
        technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Node.js"],
        tags: ['Real Estate', 'Next.js', 'Interactive'],
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1961cdf95-1764663826402.png",
        imageAlt: "Luxury real estate website showing property listings with high-quality images and interactive map",
        description: "Sophisticated real estate platform featuring virtual tours, advanced property search, mortgage calculators, and integrated CRM for lead management.",
        results: [
            { metric: "Lead Generation", value: "+225%" },
            { metric: "Property Views", value: "+180%" },
            { metric: "Virtual Tours", value: "15k/month" },
            { metric: "Conversion Rate", value: "+95%" }
        ],
        challenge: "Metropolitan Realty Group's outdated website failed to showcase their premium properties effectively. They lacked virtual tour capabilities, had poor mobile experience, and struggled with lead management and follow-up.",
        solution: "We created an immersive property portal with 360° virtual tours, interactive maps, advanced filtering, and integrated CRM. The platform features high-performance image optimization, SEO-friendly architecture, and automated lead nurturing workflows.",
        color: '#FFFBEB'
    },
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
