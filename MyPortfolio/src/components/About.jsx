import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] tracking-tight'>Hello! I'm Armaanpreet Singh, a current B.E. student at Chitkara University with a strong foundation in web development and programming. My passion for technology drives me to continually learn and explore new ways to solve problems and improve processes.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
          <div className='w-1/2'>
          <h1 className='text-7xl'>Technologies:</h1>
          <button className='uppercase flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
           <div className='w-2 h-2 bg-zinc-100 rounded-full'></div> 
          </button> 
          </div>
          <div className='w-1/2 h-[70vh] rounded-3xl bg-[#a0b74f]'></div>
        </div>
    </div>
  )
}

export default About