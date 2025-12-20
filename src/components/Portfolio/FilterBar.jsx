import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const FilterBar = ({ industries, projectTypes, technologies, onFilterChange }) => {
    const [filters, setFilters] = useState({
        industry: 'all',
        projectType: 'all',
        technology: 'all',
        searchQuery: ''
    });

    const handleChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="sticky top-4 z-30 mb-12">
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl shadow-purple-900/10">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                    {/* Search */}
                    <div className="relative w-full lg:w-96">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all font-medium"
                            value={filters.searchQuery}
                            onChange={(e) => handleChange('searchQuery', e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 w-full lg:w-auto flex-1 justify-end">
                        <select
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer hover:bg-white/10 transition-colors"
                            value={filters.industry}
                            onChange={(e) => handleChange('industry', e.target.value)}
                        >
                            <option value="all">All Industries</option>
                            {industries.map(ind => (
                                <option key={ind.id} value={ind.id}>{ind.label}</option>
                            ))}
                        </select>

                        <select
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer hover:bg-white/10 transition-colors"
                            value={filters.projectType}
                            onChange={(e) => handleChange('projectType', e.target.value)}
                        >
                            <option value="all">All Types</option>
                            {projectTypes.map(type => (
                                <option key={type.id} value={type.id}>{type.label}</option>
                            ))}
                        </select>

                        <select
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-500/50 cursor-pointer hover:bg-white/10 transition-colors"
                            value={filters.technology}
                            onChange={(e) => handleChange('technology', e.target.value)}
                        >
                            <option value="all">All Tech</option>
                            {technologies.map(tech => (
                                <option key={tech.id} value={tech.id}>{tech.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
