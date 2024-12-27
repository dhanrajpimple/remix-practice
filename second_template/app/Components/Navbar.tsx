import React from "react";
import logo from '../Assets/Logo.svg'
import twitter from '../Assets/Icon Path.svg'
import discord from '../Assets/Discord.svg'

const Navbar =()=>{
    return(
        <div className="flex w-screen h-20 bg-[#111437] px-7 justify-between items-center">
        <div className="w-1/3 p-8">
        <img src={logo} className="h-12 "/>
        </div>
       <div className="flex text-white w-2/3 justify-between h-full items-center">
      <div>Home</div>
      <div>About</div>
      <div>Get Wassified</div>
      <div>Rewards</div>
      <div>Roadmap</div>
      <div>Teams</div>
      <div className="flex gap-3">
        <img src={twitter}/>
        <img src={discord}/>
      </div>
       </div>

        </div>
    )
}


export default Navbar