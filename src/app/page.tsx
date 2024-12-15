import FlashSale from "@/components/flashSale";
import Hero from "@/components/hero"
import Category from "@/components/category";
import Month from "@/components/month";
import OurProducts from "@/components/ourProducts";
import Feature from "@/components/feature";
import ProductShow from "@/components/foot";

export default function Home() {
  return (
    <div  className="px-[135px] overflow-hidden">    {/*  isko hamne padding isliye di hai ke iske andar any waly har component pe wo padding apply ho jaye*/}

       <Hero/>
       <FlashSale/>
       <Category/>
       <Month/>
       <OurProducts/>
       <Feature/>

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


line-through

ye property text ko delete ki tarhn dikhati hai beech mein line dey kar


.ts
export interface FLashCard {...}

isme hamne data type bnai ts ki file mein or tsx card ke compoentn mein export ki.

.ts
export const flashCard_data: FLashCard[] = [{...}]

isme hamne sara data bnaya or rxport kiyya

.tsx
<ProductCard loop={flashCard_data}/>  

card ke component mein props ke zariye ts mein rakha data bhej rhy hain taky card mein loop chala saken ispe.

{loop}: {loop: FLashCard[]}

phir card ke compoent mein is props ko destructure kar ke iski dataype define kar rhy hain taky bad mein koi error na aye
props mein destructure karo ({loop}) ko or ye props {loop: FLashCard[]} aik array of object hai (FLashCard[]) ye data type
interface wali hai jise hamne yahn import kar is props mein pass kiyya.


{item.Icon == true && paste code here }  =>  {item.Icon && paste code here }  =< ye bhi same work karega without true conditon. 

array of object mein se jo details aa rhi hai card ki usme hamne icons ko true false ki value di hai kiyun ke ham apne card
mein kabhi icons dikhana chahty hain or kabhi nahi isliye hamne yahn par ye condition likhi hai taky jab hmari value true aye
to ye icon show ho jayw warna agr value false aye to ye icon show na ho.


Cards ka scrollable section kese bnaye

for Parent section => overflow-x-auto
for child card => grow-0 and shrink-0

parent section ki width ziyada rakh ke usy ye oarent property dey kar phir child cards ko bolenge ziyada (grow-0) grow bhi mat ho
matlab jitna card ka size hai utna hi rhy or (shrink-0) aik dosry mein shrink bhi mat ho jiski wajah se hamen aik scrollble section mil jaega.


${item.isActive ? 'bg-red-500' : 'bg-white'}

hamne array mein boolean value rakhi true false har aik object mein or card mein aa kar ham condition laga rhy hain ke jis 
object ki value true ho uska background color change kar do or agr false ho to white kardo.


${item.isActive ? 'text-white' : 'text-black'}

usi card mein same yahi cheez kar rhy hain agr value true to text white warna black rhy.



{item.oldPrice && "$"} {item.oldPrice}

hamne ye conditional redering ki ke agr old price aye to doller sign iske sath laga dena warna nhai. 




*/