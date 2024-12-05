import FlashSale from "@/components/flashSale";
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div  className="px-[135px]">    {/*  isko hamne padding isliye di hai ke iske andar any waly har component pe wo padding apply ho jaye*/}

       <Hero/>
       <FlashSale/>

   </div>
  );
}



/* Notes 


<div className='w-[892px] h-[344px] relative'>  => relative
    <Image src={"/main.png"} alt="Picture" layout='fill' objectFit='cover' />
</div>

yahn par hamne apne image tag ko uske parent div ki height width ke opar dipend kar diyya Imge tage mein se hamne uski height width
ki property hata kar usme 2 property di extra or parent div mein jaa kar (relative) likh diyya.


inline-flex

ye property jis div mein lgaenge wo div apne andar ke items ki dsiplay flex kar lega or khud ko inline-block kar lega matlab
usko jitni jagah chahiye hogi utni lega ye apna block wala behaver chor dega.



<Button size={"icon"} variant={"outline"} className='rounded-full '>
                <ChevronLeft size={24}/>
</Button>

button ko hamne props dey kar gol icon bana diyya







*/