import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen flex gap-5 bg-zinc-900'>
        <div className='w-1/2 h-full  font-[Neue Montreal] px-20 py-10'>
            <div className='headings'>
            <h1 className='text-[8vw] font-semibold uppercase -mb-20'>Eye-</h1>
            <h1 className='text-[8vw] font-semibold uppercase -mb-20'>Opening</h1>
            </div>
        </div>
        <div className='w-1/2 font-[Neue Montreal] p-10'>
            <h1 className='text-[6vw] font-semibold uppercase -mb-20'>Web-Designs
            </h1>
            <div className='links font-[Neue Montreal] mt-20'>
                    <a className='block font-light text-xl 'href="#">Facebook</a>
                    <a className='block font-light text-xl 'href="#">Instagram</a>
                    <a className='block font-light text-xl 'href="#">Twitter</a>
                </div>
        </div>
    </div>
  )
}

export default Footer