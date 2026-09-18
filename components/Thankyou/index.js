import Link from 'next/link'
import React from 'react'
import DownloadBrochure from '../DownloadBrochureComponent'

const ThankyouComponent = () => {
  return (
    <div className='flex flex-col items-center gap-4 w-full min-h-screen justify-center text-slate-900 bg-[#141625]'>
        <div className='flex flex-col gap-6'>
            <img src='/footer-logo.webp' />
        </div>

        <div className='text-6xl font-extrabold font-mono'>
            THANK YOU
        </div>
        <div className='text-lg'>
            Our Team will contact directly
        </div>
        <DownloadBrochure />
        <Link href='/' className='bg-background p-4 rounded-lg text-white font-semibold mb-8 border-2 border-white'>
            BACK TO HOME
        </Link>
    </div>
  )
}

export default ThankyouComponent