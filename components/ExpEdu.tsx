import React from 'react'
import { Timeline } from './ui/timeline'
import { data } from '@/data/timeline'
export const ExpEdu = () => {
  return (
    <section id = "expedu">
         <div className="w-full">
            <Timeline data={data} />
          </div>

    </section>
   
  )
}