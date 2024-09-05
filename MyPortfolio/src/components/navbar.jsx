import React from 'react'

function navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
        <div className="logo">
        <img src="https://anuragsinghbam.netlify.app/images/name-logo-white.svg" alt="logo"></img> 
        </div>
        <div className="links flex gap-10">
            {["Services", "My Work", "About", "Contact me"].map((item, index) => (
                <a key={index} className={`text-lg capitalize font-light ${index === 3 && "ml-48"}`}>{item}</a>))}
        </div>
    </div>
  )
}

export default navbar