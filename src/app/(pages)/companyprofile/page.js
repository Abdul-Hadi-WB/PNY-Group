import React from 'react'
import CompanyProfile from './CompanyProfile'

// Static meta title and description
export const metadata = {
  title: 'Comapany Profile - PNY Group',
  description: 'This is a static meta description for my website homepage. Explore our services and features.',
}
const page = () => {
  return (
    <div>
 <CompanyProfile/>
    </div>
  )
}

export default page
