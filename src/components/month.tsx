import React from 'react'
import Redbox from './redbox'
import ProductCard from './productCard'
import { bestSellingCard_Data } from './constant/bestSelling'
import Image from "next/image"

function Month() {
  return (
    <>

       <section className='mt-[70px]'>

        {/* red heading box */}
        <Redbox text={"This Month"} textColor={"red"}/>


         {/* Product month */}
        <div className='mt-[20px] flex items-center justify-between'>

            <h1 className='text-[36px] leading-[48px] font-semibold inline-block '>Best Selling Products</h1>
            <button className='py-[16px] px-[48px] text-white bg-[#DB4444] rounded-[4px] hover:bg-red-600'>
            View All</button>

        </div>

        
        {/* cards main div */}
        <div className='w-full h-[350px] flex gap-[30px] mt-[60px]'>
           <ProductCard loop={bestSellingCard_Data}/>
        </div>


        {/* picture div */}
        <div className='w-[1170px] h-[500px] relative mt-[140px]'>
            <Image src={"/center.png"} alt="Image" layout="fill" objectFit='cover' />
        </div>

       </section>
    
    </>
  )
}

export default Month