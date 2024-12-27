import React from "react";
import click from '../assets/clickup logo 1.svg'
import dropbox from '../assets/dropbox_blue 1.png'
import paychex from '../assets/Group (1).png'
import elastic from '../assets/Group (2).png'
import stripe from '../assets/Group.png'
const Footer = ()=>{
    return(
  <div className="w-[80%] h-36 flex flex-col justify-center items-start">
  <div className="text-xl">work with </div>
  <div className="flex  w-full items-center justify-evenly p-5">
    <div className="border-2 border-blue-950 p-2 rounded-xl "><img src={click} className="bg-cover h-7 "/></div>
    <div className="border-2 border-blue-950 p-2 rounded-xl "><img src={dropbox} className="bg-cover h-7 "/></div>
    <div className="border-2 border-blue-950 p-2 rounded-xl "><img src={paychex} className="bg-cover h-7 "/></div>
    <div className="border-2 border-blue-950 p-2 rounded-xl "><img src={elastic} className="bg-cover h-7 "/></div>
    <div className="border-2 border-blue-950 p-2 rounded-xl "><img src={stripe} className="bg-cover h-7 "/></div>
  </div>
  </div>
    )
}

export default Footer;