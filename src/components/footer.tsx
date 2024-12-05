import React from 'react'
import { Input } from './ui/input'
import Image from "next/image"
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react';
import { Copyright } from 'lucide-react';

function Footer() {
  return (
    <>

      <section className='w-full h-[440px] pt-[80px] pb-[76px] bg-black text-white'>

        <div className='w-full flex justify-between px-[135px] '>

       <div className='flex flex-col'>
       <div className="flex flex-col gap-[24px]">
          <h1 className='text-[24px] leading-[24px] font-bold'>Exclusive</h1>
          <h2 className='text-[20px] leading-[28px] font-medium'>Subscribe</h2>
          <p className='text-[16px] leading-[24px]'>Get 10% off your first order</p>
       </div>


       <div className='w-[217px] mt-[16px] relative pr-[45px]'>

        <Input className='w-[217px] h-[48px] py-[12px] pl-[16px] text-[16px] leading-[24px] pr-[45px]' placeholder='Enter your email'/>
        <Image src={"/fArrow.png"} alt="right arrow" width={24} height={24} 
        className='absolute top-1/2 -translate-y-1/2 right-[15px]'/>

       </div>
       </div>



       <div className=''>
        <h1 className='text-[20px] leading-[28px] font-medium mb-[24px]'>Support</h1>

        <div className='flex flex-col gap-[16px] '>
            <p>111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
       </div>


       <div className=''>
        <h1 className='text-[20px] leading-[28px] font-medium mb-[24px]'>Account</h1>

        <div className='flex flex-col gap-[16px] '>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>shop</p>
        </div>
       </div>


       <div className=''>
        <h1 className='text-[20px] leading-[28px] font-medium mb-[24px]'>Quick Link</h1>

        <div className='flex flex-col gap-[16px]'>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
       </div>


       {/* web div */}
       <div>
        <h1 className='text-[20px] leading-[28px] font-medium mb-[24px]'>Download App</h1>
        <p className='text-[12px] leadig-[18px] font-medium'>Save $3 with App New User Only</p>

        <div className='flex gap-2 mt-[10px]'>
            <div>
                <Image src={"/QrCode.png"} alt="SCane" width={80} height={80}/>
            </div>

            <div className='flex flex-col gap-[9px]'>
                <div>
                   <Image src={"/playstore.png"} alt="playstore" width={104} height={30}/>
                </div>
                <div>
                   <Image src={"/apple.png"} alt="playstore" width={104} height={30}/>
                </div>
            </div>
        </div>


         {/* web div */}
         <div className='flex gap-[24px] mt-[24px]'>
            <Facebook/>
            <Twitter/>
            <Instagram/>
            <Linkedin/>
         </div>

       </div>


       </div>


       {/* last line */}
       <div className='w-full flex justify-center items-center mt-[60px] pt-[16px] border-t-[1px] border-gray-600'>

          <div className='flex gap-[6px] text-gray-600 '>
          <Copyright size={24}/>
          <p>Copyright SHOAIB 2024. All right reserved</p>
          </div>

       </div>
      

      </section>

    </>
  )
}

export default Footer