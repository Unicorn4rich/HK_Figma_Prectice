import React from 'react'
import Redbox from './redbox'
import { Button } from './ui/button'
import { Badge, ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react'
import { Card } from './ui/card'
import { ourProducts_data } from './constant/ourProductsData'
import Image from "next/image"

function OurProducts() {
  return (
    <>

       <section className='w-full mt-[71px]'>

        {/* Red heading */}
        <Redbox text={"Our Products"} textColor={"red"}/>


         {/* our product */}
         <div className='mt-[20px] flex items-center justify-between'>
            <h1 className='text-[36px] leading-[48px] font-semibold inline-block '>Explore Our Products</h1>

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


        {/* Card divs grid */}
        <div className='w-full h-[732px] grid gap-[30px] grid-cols-4 mt-[60px]'>

          {ourProducts_data.map((item, index)=>{
            return(
                <Card className='w-[270px] h-full overflow-hidden grow-0 shrink-0' key={index}>

                {/* Top image div */}
                <div className='w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center relative '>
                    <Image src={item.src} alt="product" width={172} height={152} />
                    

                    {/* Badge */}
                    {item.discountBadge == true && 
                    <Badge className='bg-green-400 py-[4px] px-3 absolute top-3 left-3 '>
                        {item.discountPrice}
                    </Badge>}
    


                     {/* Icons div */}
                    <div className='absolute top-3 right-3 flex flex-col gap-2 '>

                        {/* trash */}
                        {item.trashIcon == true && 
                        <Button size={"icon"} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
                            <Trash2 size={24}/>
                        </Button>
                        }
    
                         {/* Heart */}
                        {item.heartIcon == true && 
                         <Button size={"icon"} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
                         <Heart size={24}/>
                        </Button>
                        }
    
                         {/* Eye */}
                        {item.eyeIcon &&  
                        <Button size={"icon"} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
                            <Eye size={24}/>
                        </Button>
                        }

                    </div>

                </div>
    
    
                {/* Bottom text div */}
                <div className='w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]'>
    
                     {/* 1 */}
                    <p className='mt-[16px]'>{item.heading}</p>
    
                    {/* 2 */}
                    <div className='flex gap-[8px]'>
                        <span className='text-red-500'>${item.newPrice}</span> 

                        {/* 3 */}
                    <div className='flex gap-1 items-center'>
                        {[...Array(item.star)].map(() =>{ 
                            return(
                                <Star size={20} fill='#FFAD33' color='#FFAD33' />
                            )
                        })}
    
                        <p className='font-semibold text-gray-500 '>({item.revews})</p>
                    </div>

                    </div>
                     
                </div>

                {/* last 3 */}
                {/** inko mujhe float dena hai ye jagah capture kar ke opar waly div ke size ko khrab kar rhy hain */}

                {item.colorDiv == true &&                           
                <div className='flex items-center gap-2 mt-1'>
                <div className={`w-[20px] h-[20px] rounded-full border-[1px] border-black ${item.color1}`}></div>

                <div className={`w-[20px] h-[20px] rounded-full border-[1px] border-black bg-${item.color2}-500`}></div>
                </div>
                }


               </Card>
            )
          })}

        </div>


        <div className='text-center mt-[60px]'>
          <button className='py-[16px] px-[48px] text-white bg-[#DB4444] rounded-[4px] hover:bg-red-600'>View All Products</button>
        </div>

       </section>

    </>
  )
}

export default OurProducts