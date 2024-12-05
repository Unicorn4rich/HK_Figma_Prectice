import React from 'react'
import { sideBar_list } from './constant/barData'
import { ChevronRight } from 'lucide-react';
import Image from "next/image"


function Hero() {
  return (
    <>

        <section className='w-full flex mb-[140px]'>

            {/* Side bar */}
            <nav className='w-[217px] flex flex-col gap-4 mt-[40px]'>

                {sideBar_list.map((item, index)=>{
                    return(
                        
                        <button key={index} className='flex items-center justify-between text-left hover:text-primary transition-colors'>
                            <span className='text-[16px] leading-[24px]'>{item.name}</span>
                          {item.icon == true && <ChevronRight size={24}/>}       {/*  icon kisi pe dikhana hai or kisi pe nahi to ye condition denge */}
                        </button>
                    )
                })}

            </nav>



            {/* line */}
            <div className='w-[1px] bg-black h-[384px] ml-[16px] mr-[45px]'></div>



            {/* Picture */}
            <div className='w-[892px] h-[344px] mt-[40px] relative'>
                <Image src={"/main.png"} alt="Picture" layout='fill' objectFit='cover' />
            </div>

        </section>

    </>
  )
}

export default Hero