import React from "react"

import linked from '../assets/LinkedIn.svg'
import be from '../assets/Behance.svg'
import twiter from '../assets/Twitter.svg'


const Navbar = ()=>{
    return (
        <div className="w-[95%] h-16 bg-[#1B1B1B]  rounded-b-2xl">
        <div className="flex justify-evenly items-center h-full w-full text-[#9C9C9C] text-lg  rounded-br-4xl">
         <div className="hover:text-white hover:underline">
            Home
         </div>
         <div className="hover:text-white hover:underline">
            Case Studies 
         </div>
         <div className="hover:text-white hover:underline">
            Testimonials
         </div>
         <div className="hover:text-white hover:underline">
            Recent work
         </div>
         <div className="hover:text-white hover:underline">
            Get In Touch 
         </div>
         <div className="flex justify-between gap-4 items-center align-middle h-full">
            <div className="flex justify-center align-middle items-center"><img src={linked} className="bg-cover"/> </div>
            <div className="flex justify-center align-middle items-center mt-1"><img src={be}  className="bg-cover"/> </div>
            <div className="flex justify-center align-middle items-center mt-1"><img src={twiter}  className="bg-cover"/> </div>
         </div>
  
        </div>
        </div>
    )
}

export default Navbar