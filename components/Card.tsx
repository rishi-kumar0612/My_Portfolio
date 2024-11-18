import React from 'react'
import { WobbleCard } from './ui/wobble-card'
//import Image from 'next/image'
//import { cloud } from './ui/cloud'
import { IconCloud } from './ui/icon-cloud'
import { slugs } from '@/data/icon'

const Card = () => {
  return (
    <section id = "about">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-spotlight min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Gippity AI powers the entire universe
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 bg-spotlight min-h-[300px]">
            {/*
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>*/}
            <h2 className="max-w-80  text-left text-balance  overflow-hidden text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <div className='z-100'>
              <IconCloud iconSlugs={slugs} />
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-spotlight min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg overflow-hidden text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Signup for blazing-fast cutting-edge state of the art Gippity AI
                wrapper today!
              </h2>
              <p className="mt-4 max-w-[26rem] overflow-hidden text-left  text-base/6 text-neutral-200">
                With over 100,000 mothly active bot users, Gippity AI is the most
                popular AI platform for developers.
              </p>
            </div>
          </WobbleCard>
        </div>
    </section>
  )
}

export default Card