// components/Projects.tsx
import React, { useState } from 'react';
import { ExpandableCardDemo } from './ui/ExpandableCard';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section id="projects">
      <div className="w-full bg-bground dark:bg-bground font-sans md:px-10">
        <div className="max-w-7xl mx-auto ml-5 py-10 px-4 md:px-8 lg:px-10">
          {/* Centered the heading */}
          <h2 className="hidden md:block text-xl md:text-5xl font-bold text-textco dark:text-textco text-center">
            Projects:
          </h2>
          <div style={{ height: '2rem' }}></div>
          {/* Centered and styled the input */}
          <div className="mt-4">
            <div className="flex justify-center">
              <div className="relative w-full md:max-w-md">
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
        </div>
        {/* Added top margin to create space between the input and projects */}
        <div className="w-full mt-8">
          <ExpandableCardDemo searchTerm={searchTerm} />
        </div>
        <div style={{ height: '7rem' }}></div>
      </div>
    </section>
  );
};

export default Projects;
