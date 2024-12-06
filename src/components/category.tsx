import React from 'react'
import Redbox from './redbox'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from './ui/card'
import Image from 'next/image'
import { catergoryCard_data } from './constant/categoryCard'

function Category() {
  return (
    <>

      <section className='mt-[80px] pb-[70px] border-b-[1px] border-gray-300'>

        {/* red heading component */}
        <Redbox text={"Categories"} textColor={"red"}/>

         {/* flash sales */}
        <div className='mt-[20px] flex items-center justify-between'>
            <h1 className='text-[36px] leading-[48px] font-semibold inline-block '>Browse By Category</h1>

              {/* heading and arrows divs */}
         <div className='flex gap-2'>
            <Button size={"icon"} variant={"outline"} className='rounded-full '>
                <ChevronLeft size={24}/>
            </Button>

            <Button size={"icon"} variant={"outline"} className='rounded-full '>
                <ChevronRight size={24}/>
            </Button>
         </div>

        </div>


        {/* Card divs main */}
        <div className='w-full flex gap-[30px] mt-[60px]'>

           {catergoryCard_data.map((item, index)=>{
            return(
            <Card className={`w-[170px] h-[145px] flex flex-col items-center justify-center gap-[16px] hover:bg-red-500
                 ${item.isActive ? 'bg-red-500' : 'bg-white'}
                 ${item.isActive ? 'text-white' : 'text-black'}`} key={index}>

                <Image src={item.src} alt="cell phone" width={56} height={56} />
                <p className='text-[16px] leading-[24px]'>{item.heading}</p>

            </Card>
            )
           })}

        </div>
                
           
      </section>

    </>
  )
}

export default Category