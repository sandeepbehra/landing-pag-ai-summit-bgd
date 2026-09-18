import Link from 'next/link'
import React from 'react'

const ThankyouComponentWithOtp = () => {
  return (
    <div className='flex flex-col items-center gap-4 w-full min-h-[35vw] justify-center text-background mt-24'>
        <div className='flex flex-col gap-6'>
            <img src='/logo.webp' />
        </div>

        <div className='text-6xl font-extrabold font-mono'>
            THANK YOU
        </div>
        <div className='text-lg'>
            Our Team will contact directly
        </div>
        <Link href='/official' className='bg-background p-4 rounded-lg text-white font-semibold mb-8'>
            BACK TO HOME
        </Link>
    </div>
  )
}

export default ThankyouComponentWithOtp