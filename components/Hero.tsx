import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/magicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { LampContainer } from './ui/lamp';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative pt-8 pb-4">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-bground bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <LampContainer className="w-full flex justify-center items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">
        <div className="flex justify-center relative z-10  pt-8 px-4 w-full">
          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-row items-center gap-6">
            {/* Left Side: Text Blocks */}
            <div className="flex flex-col items-start justify-center gap-4 w-2/3">
            <TextGenerateEffect
              className="text-left text-[18px] sm:text-[22px] md:text-2xl lg:text-3xl xl:text-4xl mb-2"
              words="Hey, I'm Rishi Kumar 👋🏻"
              highlightPhrases={[
                "Rishi Kumar",
              ]}
            />
            <TextGenerateEffect
              className="text-left text-[12px] sm:text-[14px] md:text-lg lg:text-xl mt-2 leading-relaxed"
              words="As a Python Developer and AI/ML Engineer, I conjure AI magic to turn raw data into brilliant solutions. My mission? To arm organizations with tech so clever, it makes their decisions for them &quot;No crystal ball required!!🔮😝&quot;"
              highlightPhrases={[
                "Python Developer and AI/ML Engineer",
                "My mission?",
                "No crystal ball required!!🔮😝",
              ]}
            />


              <a href="#about" className="mt-5 md:mt-6 lg:mt-7">
                <MagicButton
                  title="About Me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>

            {/* Right Side: Profile Picture */}
            <div
              className="rounded-full border-4 border-white overflow-hidden flex-shrink-0"
              style={{
                width: '15vw', // Responsive width as a percentage of viewport width
                height: '15vw', // Match height to width for circular shape
                maxWidth: '480px', // Limit the size on smaller screens
                maxHeight: '480px', // Limit the size on smaller screens
                minWidth: '180px', // Ensure it doesn't get too small
                minHeight: '180px',
              }}
            >
              <Image
                src="/me2.jpg"
                alt="Profile Picture"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </LampContainer>
    </div>
  );
};

export default Hero;