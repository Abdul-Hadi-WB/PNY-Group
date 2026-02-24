import React from 'react'
import Gallery from './Gallery'

// Static meta title and description
export const metadata = {
  title: 'Gallery - PNY Group',
  description: 'This is a static meta description for my website homepage. Explore our services and features.',
}
const page = () => {
  return (
    <div>
 <Gallery/>
    </div>
  )
}

export default page
