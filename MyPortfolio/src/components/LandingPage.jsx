import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        <div className='masker'>
          <h1 className='uppercase text-[8.5vw] leading-[7vw] tracking-tighter  font-["Founders Grotesk"] font-semibold'>Think</h1>
        </div>
        <div className='masker w-fit flex items-center'>
          <motion.div 
          initial={{width:0}}
          animate={{width:"9vw"}}
          transition={{ease : [0.76, 0, 0.24, 1], duration:1}} 
          className='w-[9vw] h-[5vw] relative'> <img src="https://plus.unsplash.com/premium_photo-1669648870565-829ea58d7a05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXxlbnwwfHwwfHx8MA%3D%3D" alt="" /></motion.div>
          <h1 className='uppercase text-[8.5vw] leading-[7.3vw] tracking-tighter  font-["Founders Grotesk"] font-semibold'>Innovate</h1>
        </div>
        <div className='masker'>
          <h1 className='uppercase text-[8.5vw] leading-[7vw] tracking-tighter  font-["Founders Grotesk"] font-semibold'>Create.</h1>
        </div>
      </div>
      <div className='border-t-[1px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20'>
        {["For Public & Private Companies","For Freelancing",].map((item, index) => ( 
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>View My Projects</div>
          <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'> <span className='rotate-[45deg]'>  <FaArrowUpLong /> </span></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage