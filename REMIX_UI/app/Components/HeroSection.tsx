import React  from "react";
import cover from '../assets/Photo here.svg'
const HeroSection = ()=>{
    return(
        <div className="w-screen min-h-[70%] flex items-center justify-center">
    
         <div className="w-1/2 flex flex-col items-end justify-center h-full">
             <div className="w-[80%] p-5 flex flex-col gap-2">
             <h1 className="text-4xl font-bold">My Name Is Dhanraj</h1>
             <p className="leading-6 text-[#9C9C9C] text-lg"> this is me dhanraj pimple the all achiver i can do any thing that i want with in my life Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
             <div>
                <button className="bg-green-500 h-10 w-56 rounded-xl hover:bg-red-500">Let's Connect</button>
             </div>
         </div>
         </div>
     <div className="w-1/2 flex justify-start items-center p-10 h-full ">
        <img src={cover} className="bg-cover"/>
     </div>
        </div>
    )
}

export default HeroSection