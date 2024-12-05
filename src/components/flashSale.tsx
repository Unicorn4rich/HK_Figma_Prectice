import React from 'react'
import Redbox from './redbox'
import { ChevronLeft, ChevronRight, icons } from 'lucide-react'
import { Button } from './ui/button'

function FlashSale() {
  return (
    <>

    <section className='mb-[500px]'>

         {/* todays div component */}
         <Redbox text={"Today`s"} textColor={"red"} />

        <div className='flex items-end justify-between'>
         

         {/* Flash Slaes */}
         <div className='mt-[24px] flex items-center'>
            <h1 className='text-[36px] leading-[48px] font-semibold inline-block '>Flash Sales</h1>


            {/* time div */}
            <div className='inline-flex items-center gap-8 ml-[87px]'>

                <div className='flex items-center gap-6'>
                    <div>
                    <div className='text-[12px] leading-[18px]'>Days</div>
                    <div className='text-[32px] leading-[30px] font-bold'>03</div>
                    </div>

                    <div className='flex flex-col justify-center gap-1 mt-[18px]'>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                    </div>


                    <div>
                    <div className='text-[12px] leading-[18px]'>Hours</div>
                    <div className='text-[32px] leading-[30px] font-bold'>23</div>
                    </div>

                    <div className='flex flex-col justify-center gap-1 mt-[18px]'>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                    </div>


                    <div>
                    <div className='text-[12px] leading-[18px]'>Minutes</div>
                    <div className='text-[32px] leading-[30px] font-bold'>19</div>
                    </div>

                    <div className='flex flex-col justify-center gap-1 mt-[18px]'>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                        <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                    </div>


                    <div>
                    <div className='text-[12px] leading-[18px]'>Seconds</div>
                    <div className='text-[32px] leading-[30px] font-bold'>56</div>
                    </div>

                </div>
                
            </div>
         </div>


         {/* arrows divs */}
         <div className='flex gap-2'>
            <Button size={"icon"} variant={"outline"} className='rounded-full '>
                <ChevronLeft size={24}/>
            </Button>

            <Button size={"icon"} variant={"outline"} className='rounded-full '>
                <ChevronRight size={24}/>
            </Button>
         </div>

         </div>

    </section>

    </>
  )
}

export default FlashSale