import React from "react";
import heroimage from '../Assets/image 16.svg'
import hero from '../Assets/image 17.svg'
const Herosection =()=>{
    return(
<div className="w-screen h-[80%] flex justify-between">
<div className="w-1/2 h-full pl-20">
  <div className="w-4/5 flex justify-center items-start h-full flex-col gap-9">
  <h1 className="text-white text-left text-6xl w-[95%] font-bold">Build Your Next <span className="text-red-500 underline">Product</span> With Degens.</h1>
  <div className="w-full flex justify-center items-start">
    <p className="w-full text-left text-white text-xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Delectus rem veritatis, non nihil numquam adipisci alias
    exercitationem quo libero provident?
     </p> 
  </div>
  <div className="flex gap-10 justify-center items-center">
    <button className="bg-red-400 h-11 w-40 rounded-lg font-bold text-lg text-white">Find out more</button>
    <div>
    <p className="text-white">Learn More</p>
    </div>
  </div>
  </div>
</div>
<div className="w-1/2 h-full relative">
<div className="relative mt-14 z-0">
<div className="h-8 w-8 rounded-full bg-[#8300EA] absolute top-4"></div>
<div className="h-96 w-96 rounded-full bg-[#FFB74A] absolute top-14 left-24 z-0"></div>
<div className="h-4 w-4 rounded-full bg-[#8300EA] absolute top-96"></div>
<div className="h-16 w-16 rounded-full bg-[#FBFF3F] absolute top-10 left-2/3"></div>
<div className="h-20 w-20 rounded-full bg-[#FBFF3F] absolute top-96 left-2/3"></div>
</div>
<div className="absolute top-28  flex justify-center">
  <img src={heroimage} alt="heroimage"  className="z-50 h-[400px] "/>
  <img src={hero} alt="heroimage"  className="z-50 h-[400px] "/>
</div>
</div>


</div>
    )
}

export default Herosection;