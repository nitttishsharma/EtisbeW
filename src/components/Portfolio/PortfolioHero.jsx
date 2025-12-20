import React from 'react';

const PortfolioHero = ({ title, description, stats }) => {
    return (
        <section className="relative pt-32 pb-20 px-6 bg-black text-white overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-200 mb-6 text-balance">
                        {title}
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
                        {description}
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className=" group text-center p-6  rounded-xl border border-gray-200"
                        >
                            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;
