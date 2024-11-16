import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/magicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { LampContainer } from './ui/lamp';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative pt-8 pb-4">
      <div className="min-h-screen w-full dark:bg-bground bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex flex-col items-center justify-center">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-bground bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <LampContainer className="w-full flex justify-center items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14">

          <div className='flex justify-center relative z-10 px-4 w-full'>
            <div className='w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center'>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <TextGenerateEffect
                  className="text-center text-[18px] sm:text-[22px] md:text-2xl lg:text-3xl xl:text-4xl md:text-left"
                  words="Hey, I’m Rishi Kumar"
                />
                <Image
                  src="/ReadyPlayerMe-Avatar.png"
                  alt="Profile Picture"
                  width={120}
                  height={120}
                  className="rounded-full sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
                  priority
                />
              </div>
              <TextGenerateEffect
                className="text-center text-[12px] sm:text-[14px] md:text-lg lg:text-xl mt-3 md:mt-4 lg:mt-5"
                words="A passionate Python Developer and Data Engineer driven by innovation at the intersection of AI and technology."
              />
              <a href="#about" className="mt-5 md:mt-6 lg:mt-7">
                <MagicButton
                  title="About Me"
                  icon={<FaLocationArrow />}
                  position='right'
                />
              </a>
            </div>
          </div>
        </LampContainer>
      </div>
    </div>
  );
};

export default Hero;
