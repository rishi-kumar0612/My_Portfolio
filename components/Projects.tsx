import React, { useState } from 'react';
import { ExpandableCardDemo } from './ui/ExpandableCard';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTop6, setShowTop6] = useState(true); // Default to show top 6 projects

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleShowTop6 = () => {
    setShowTop6(true);
  };

  const handleShowAll = () => {
    setShowTop6(false);
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
          <p className="mt-2 text-sm md:text-lg text-white dark:text-white">
          Discover the projects that bring my ideas to life! Use the search bar below to explore specific skills, technologies, or topics—or simply scroll through and dive into everything I’ve built. 🌟✨
          </p>

          {/* Search bar and buttons */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Search bar */}
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

            {/* Filter buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleShowTop6}
                className={`px-4 py-2 rounded-full font-bold transition ${
                  showTop6
                    ? 'bg-spotlight text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-textco dark:text-white'
                }`}
              >
                Top 6 Projects
              </button>
              <button
                onClick={handleShowAll}
                className={`px-4 py-2 rounded-full font-bold transition ${
                  !showTop6
                    ? 'bg-spotlight text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-textco dark:text-white'
                }`}
              >
                See All Projects
              </button>
            </div>
          </div>
        </div>

        {/* Projects display */}
        <div className="max-w-7xl mx-auto mt-8 px-5 lg:px-6">
          <ExpandableCardDemo searchTerm={searchTerm} showTop6={showTop6} />
        </div>

        {/* Add bottom space for uniformity */}
        <div className="h-28"></div>
      </div>
    </section>
  );
};

export default Projects;
