import React from 'react'
import { slugs } from '@/data/icon'
import { IconCloud } from './icon-cloud'

export const cloud = () => {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}

export default cloud