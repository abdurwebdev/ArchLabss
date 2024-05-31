"use client"
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { AiFillPlayCircle } from "react-icons/ai";
const Hero = () => {
    const container = useRef();
    useGSAP(()=>{
        gsap.from('.animate',{
            y:200});
        },
    {scope:container});
  return (
    <div className='w-full  h-[800px] md:bg-black  sm:h-screen md:h-[750px] xl:h-[800px] '>
        <div>
            <img className='h-[800px] w-full   bg-cover' src="https://preview.colorlib.com/theme/archlab/images/bg_1.jpg.webp"/>
        </div>
        <div ref={container} id="main">
        <div className='animate absolute text-black space-y-3 xl:p-14 w-[90%] xl:w-[45%] sm:w-[55%] h-[80vh] left-8 top-40 flex flex-col '>
            <div>
                <h1 className='text-[#96BB54] text-4xl'> — </h1>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-5xl '>Modern</h1>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-5xl '>Innovative</h1>
            </div>
            <div>
                <h1 className='font-semibold font-sans text-5xl '>Architecture</h1>
            </div>
            <div className='py-10 space-y-3'>
                <p className='text-[#898B8A] font-sans text-xl'>From as low as $20 A small river named Duden flows <br /> by their place and supplies it with the necessary <br /> regelialia.</p>
            </div>
            <div className='flex xl:gap-5 gap-2 md:gap-5 sm:gap-5 items-center justify-start'>
                <div>
                    <button className='py-3 px-5  bg-[#96BB7C] rounded-md'>Explore Now</button>
                </div>
                <div>
                    <button className='px-3 py-3 rounded-full bg-[#96BB7C]'><AiFillPlayCircle className='text-2xl'/></button>
                </div>
                <div>
                    <Link href="#" className='text-white text-xl font-sans no-underline'>Watch Our Video</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero