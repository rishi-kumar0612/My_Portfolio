import React, { useState } from 'react';
import { ExpandableCardDemo } from './ui/ExpandableCard';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section id="projects">
      <div className="w-full bg-bground dark:bg-bground font-sans">
        {/* Align container with Card and Timeline */}
        <div className="max-w-7xl mx-auto px-5 lg:px-6 py-10">
          {/* Left-aligned heading */}
          <h2 className="text-xl md:text-4xl font-bold text-textco dark:text-textco">
            Projects:
          </h2>

          {/* Search bar */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-2 border border-spotlight dark:border-spotlight bg-white dark:bg-gray-800 text-textco dark:text-textco placeholder-gray-500 dark:placeholder-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-spotlight"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-spotlight" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects display */}
        <div className="max-w-7xl mx-auto mt-8 px-5 lg:px-6">
          <ExpandableCardDemo searchTerm={searchTerm} />
        </div>

        {/* Add bottom space for uniformity */}
        <div className="h-28"></div>
      </div>
    </section>
  );
};

export default Projects;
