import React from 'react';

const ResponseTime = () => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                        <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                    </div>
                    <p className="text-purple-200 text-center md:text-left font-medium">
                        <span className="font-bold text-white">Current Status:</span> We're currently accepting new projects. Typical response time is under 2 hours.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ResponseTime;
