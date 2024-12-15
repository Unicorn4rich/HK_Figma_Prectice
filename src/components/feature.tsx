import React from 'react'
import Redbox from './redbox'
import Link from "next/link"
import Image from "next/image"

function Feature() {
  return (
    <>

    <section className='w-full mt-[140px]  mb-[400px]'>

       {/* heading */}
       <Redbox text={"Featured"} textColor={"red"}/>

        {/* main text */}
       <div className='mt-[20px] flex items-center justify-between'>
            <h1 className='text-[36px] leading-[48px] font-semibold inline-block '>New Arrival</h1>
       </div>


       {/* Pictures divs start */}

       <div className="w-full max-w-[1170px] mx-auto p-4 mt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


        {/* PlayStation 5 Section */}
        <div className="relative bg-black rounded-lg overflow-hidden h-[600px]">

          <Image
            src="/arr1.png"
            alt="PlayStation 5"
            width={511}
            height={511}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3"
          />

         <div className="absolute bottom-8 left-8 text-white">
            <div className="space-y-4">

              <h2 className="text-2xl font-semibold tracking-wide font-inter">PlayStation 5</h2>
              <p className="text-sm font-normal text-gray-200 max-w-[242px] font-poppins">
                Black and White version of the PS5 coming out on sale.
              </p>

              <Link 
                href="#" 
                className="inline-block text-white hover:opacity-80 transition-opacity font-poppins">
                <span className="text-base">Shop Now</span>
                <div className="h-px bg-white/50 mt-1" />
              </Link>

            </div>
          </div>

        </div>


        {/* Right Column */}
        <div className="space-y-8">

          {/* Womens Collections */}
          <div className="relative bg-[#0D0D0D] rounded-lg overflow-hidden h-[284px]">

            <Image
              src="/arr2.png"
              alt="Women's Collections"
              width={432}
              height={286}
              className="absolute right-0 top-0 object-cover"
            />

            <div className="absolute top-[200px] -translate-y-1/2 left-6 text-white">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-wide font-inter">Women's Collections</h2>
                <p className="text-sm font-normal text-gray-200 max-w-[255px] font-poppins">
                  Featured woman collections that give you another vibe.
                </p>
                <Link 
                  href="#" 
                  className="inline-block text-white hover:opacity-80 transition-opacity font-poppins"
                >
                  <span className="text-base">Shop Now</span>
                  <div className="h-px bg-white/50 mt-1" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Speakers */}
            <div className="relative bg-black rounded-lg overflow-hidden h-[284px]">
              <div className="absolute inset-0 bg-[#D9D9D9] opacity-90 blur-[150px]" />
              <Image
                src="/arr3.png"
                alt="Speakers"
                width={190}
                height={221}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-wide font-inter">Speakers</h2>
                  <p className="text-sm font-normal text-gray-200 font-poppins">
                    Amazon wireless speakers
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block text-white hover:opacity-80 transition-opacity font-poppins"
                  >
                    <span className="text-base">Shop Now</span>
                    <div className="h-px bg-white/50 mt-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-lg overflow-hidden h-[284px]">
              <div className="absolute inset-0 bg-[#D9D9D9] opacity-90 blur-[150px]" />
              <Image
                src="/arr4.png"
                alt="Perfume"
                width={201}
                height={203}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-wide font-inter">Perfume</h2>
                  <p className="text-sm font-normal text-gray-200 font-poppins">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Link 
                    href="#" 
                    className="inline-block text-white hover:opacity-80 transition-opacity font-poppins"
                  >
                    <span className="text-base">Shop Now</span>
                    <div className="h-px bg-white/50 mt-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        

    </section>

    </>
  )
}

export default Feature