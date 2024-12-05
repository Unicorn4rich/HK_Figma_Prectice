import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import Link  from 'next/link'
import React from 'react'
import { ChevronDown, Pointer } from 'lucide-react';
import { DropdownMenuContent } from './ui/dropdown-menu';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

function Header() {
  return (
    <>

      <div>

        {/* Top div1 */}
        <div className='w-full h-[48px] bg-black px-[135px] text-white flex justify-between items-center '>

            <div className='flex items-center gap-2 text-center ml-[309]'>
                <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                <Link href={"/"} className='font-semibold hover:underline '>ShopNow</Link>
            </div>


{/* drop down */}
            <div>
                <DropdownMenu>

                    <DropdownMenuTrigger className=' flex items-center gap-1 focus:outline-none hover:cursor-pointer '>
                    English
                    <ChevronDown size={24} />
                    </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Spanish</DropdownMenuItem>
                    <DropdownMenuItem>Russian</DropdownMenuItem>
                    <DropdownMenuItem>Urdu</DropdownMenuItem>
                </DropdownMenuContent>

                </DropdownMenu>
            </div>

        </div>






        {/* bottom header*/}
        <div className='w-full border-b-[1px] border-black px-[135px] pt-[40px] pb-[16px] '>

            <div className=' container  mx-auto px-4 pt-6'>
              <div className="flex items-center justify-between gap-8">

                {/* Logo */}
                <Link href={"/"} className='text-[24px] leading-[24px] font-bold'>Exclusive</Link>


                {/* Navigation */}
                <nav className='hidden md:flex items-center gap-[48px]'>
                  <Link href={"/"} className='text-[16x] leading-[24px] relative after:absolute after:bottom-0 after:left-0 
                  after:h-0.5 after:w-full after:bg-black
                  '>Home</Link>

                  <Link href={"/"} className='text-[16x] leading-[24px] hover:text-gray-600'>Contact</Link>
                  <Link href={"/"} className='text-[16x] leading-[24px] hover:text-gray-600'>About</Link>
                  <Link href={"/"} className='text-[16x] leading-[24px] hover:text-gray-600'>Sign Up</Link>
                  
                </nav>


                {/* input icons */}
                <div className='flex items-center gap-4'>

                  <div className='relative hidden md:block '>
                  <Input className='w-[243px] pl-[20px] pr-[40px] bg-gray-50' placeholder='What are you looking for?' type='search'/>
                  <Search className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 '/>
                  </div>

                    <Heart size={30}  className=' hover:text-gray-600'cursor="Pointer"/>
                    
                    <ShoppingCart size={30}  className=' hover:text-gray-600' cursor="pointer" />

                </div>


              </div>
            </div>

        </div>



      </div>

    </>
  )
}

export default Header