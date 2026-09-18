'use client'
import React, { useRef } from 'react'
import TextureOutlinedIcon from '@mui/icons-material/TextureOutlined'
import { Syne } from 'next/font/google'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const syne = Syne({ subsets: ["latin"]})

const Map = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  
  useGSAP(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(ref.current, { x: -1000, duration: 1.5 }, { x: 0, duration: 1.5 });
          gsap.fromTo(imgRef.current, {y: 1000, duration: 1.5}, {y: 0, duration: 1.5})
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [ref, imgRef]);

  return (
    <div className={`p-4 pt-8 pb-8 flex md:flex-row flex-col-reverse items-center justify-center gap-12 h[600px] bg-white`} id='map'>
        <div className='md:w-auto w-[95vw] ' ref={imgRef}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.438499124915!2d76.95929657553329!3d28.37582087580596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d93c195b211%3A0x5322138c6f42755b!2sConscient%20Sector%2080!5e0!3m2!1sen!2sin!4v1712062266894!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      <div ref={ref} className="md:ml-16 ml-8 md:w-1/2 flex flex-col gap-12">
        <h1
          className={`flex items-start text-primary text-3xl font-bold`}
        >
          Location
          <TextureOutlinedIcon className="text-2xl ml-2" />{" "}
        </h1>

        <h2 className={`${syne.className} md:text-4xl text-2xl font-bold text-left`}>
          Situated In The Center Of Gurugram
        </h2>

        <div className="flex md:text-2xl text-lg">
          Experience the ideal fusion of luxury living and prime location as you explore our real estate project.
        </div>
      </div>
    </div>
  )
}

export default Map