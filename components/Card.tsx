import React from 'react'
import { WobbleCard } from './ui/wobble-card'
//import Image from 'next/image'
//import { cloud } from './ui/cloud'
import { IconCloud } from './ui/icon-cloud'
import { slugs } from '@/data/icon'
import MagicButton from './ui/magicButton'
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

const Card = () => {
  return (
    <section id = "about">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-bground via-bground to-spotlight p-6 rounded-xl shadow-xl hover:scale-105 transform transition-transform duration-300"
          className="flex items-center justify-center"
        >
          <div className="max-w-xs lg:max-w-lg text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
              About Me
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed">
              Hi, I’m <span className="font-bold text-yellow-300">Rishi Kumar</span>, a curious mind who loves diving into the art of coding. For me, writing clean, efficient code isn’t just work—it’s a way to create, solve problems, and bring ideas to life. Whether it’s brainstorming new solutions or sharpening my skills, I find joy in the process of learning and building.
              <br /><br />
              Outside of coding, I’m a passionate soccer fan and love exploring new places to unwind and find inspiration. I believe life is about balance—between focus and exploration, work and play, and pushing boundaries while staying grounded. Let’s connect and share our passions!
            </p>
          </div>
        </WobbleCard>


          {/*<WobbleCard containerClassName="col-span-1 bg-bground min-h-[300px]">
            
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
            <h2 className="max-w-80  text-left text-balance  overflow-hidden text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              My skills 
            </h2>
            <div className='z-100'>
              <IconCloud iconSlugs={slugs} />
            </div>
          </WobbleCard>*/}
          
          <div className="col-span-1 bg-bground min-h-[300px] rounded-lg p-6 shadow-md">
            <h2 className="max-w-80 text-left text-balance overflow-hidden text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              My Skills:
            </h2>
            <div className="mt-4">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>


          {/* Three horizontal Wobble Cards */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Resume Download */}
        <div className="bg-gradient-to-r from-bground via-bground to-bground p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between items-center text-center min-h-[250px]">
            <h3 className="text-2xl font-bold text-white">Grab My Resume</h3>
            <p className="mt-3 text-sm text-gray-200">
              Discover my journey, skills, and accomplishments. Download my resume and explore how I can contribute to your team.
            </p>
            <div className="mt-5">
            <MagicButton
                title="Download Now"
                icon={<FaLocationArrow />}
                position="right"
                handleClick={() => {
                  const link = document.createElement('a');
                  link.href = '/RISHI_KUMAR_RESUME.pdf'; // Ensure this path is correct and accessible
                  link.download = 'Rishi_Kumar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              />
            </div>
          </div>
              
          {/* Card 2: Location, Email, and LinkedIn */}
          <div className="bg-gradient-to-r from-bground to-bground p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between items-center text-center min-h-[250px]">
            <h3 className="text-2xl font-bold text-white">Contact Me</h3>
            <p className="mt-3 text-sm text-gray-200">
              Based in the bustling city of <span className="text-spotlight font-bold">New York, NY</span>, I’m always open to new connections and opportunities.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <FaEnvelope className="text-spotlight" />
                <a
                  href="mailto:rishi.k.st24@gmail.com"
                  className="text-spotlight font-bold hover:underline"
                >
                  rishi.k.st24@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FaLinkedin className="text-spotlight" />
                <a
                  href="https://www.linkedin.com/in/rishi-kumar-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spotlight font-bold hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
              
          {/* Card 3: Work Links */}
          <div className="bg-gradient-to-r from-bground via-bground to-bground p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between items-center text-center min-h-[250px]">
            <h3 className="text-2xl font-bold text-white">Explore My Work</h3>
            <p className="mt-3 text-sm text-gray-200">
              Dive into my projects, experiments, and creative endeavors. Check out my profiles for detailed insights.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <FaGithub className="text-spotlight" />
                <a
                  href="https://github.com/rishi-kumar0612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spotlight font-bold hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img src="/tableau-icon.svg" alt="Tableau" className="h-5 w-5" />
                <a
                  href="https://public.tableau.com/profile/rishi.kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spotlight font-bold hover:underline"
                >
                  Tableau Public
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Card