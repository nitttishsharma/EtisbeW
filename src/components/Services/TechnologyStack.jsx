import React from 'react';

const TechnologyStack = () => {
    const technologies = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'GraphQL', category: 'API' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'AWS', category: 'Cloud' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Powered by <span className="text-teal-500">Modern Technology</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We leverage industry-leading tools and frameworks to build fast, secure, and scalable solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-teal-400 hover:shadow-lg transition-all group"
                        >
                            <div className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors">
                                {tech.name}
                            </div>
                            <div className="text-sm text-gray-500">{tech.category}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;
