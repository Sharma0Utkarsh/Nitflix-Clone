import React from "react";
import { MdMonitor } from "react-icons/md";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoTelescope } from "react-icons/io5";
import { TbBrandYoutubeKids } from "react-icons/tb";


function Reasons(){
    const reasons=[
        {
            "tilte":"Enjoy on your TV",
            "detail":"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            "icon":<MdMonitor  />
        },

        {
            "tilte":"Download your shows to watch offline",
            "detail":"Save your favourites easily and always have something to watch.",
            "icon":<MdOutlineDownloadForOffline />
        },
        {
            "tilte":"Watch everywhere",
            "detail":"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
            "icon":<IoTelescope />
        },
        {
            "tilte":"Create profiles for kids",
            "detail":"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
            "icon":<TbBrandYoutubeKids />
        },

    ]
    return(
        <div className="h-screen">
            <div className="font-bold text-2xl mb-5">
                More reasons to join

            </div>
            
            <div className=" flex gap-5" >

                {
                    reasons.map((reasons,index)=>{
                        return(
                        <div className="w-[300px] rounded-xl h-[320px] p-5 bg-gradient-to-b from-blue-950 to grey-900 relative">
                    <div className="font-bold text-2xl">
                     {reasons.tilte}
                </div>
                <div className="py-5 text-gray-400">
                    {reasons.detail}
                </div>
                <div className="text-6xl right-0 absolute mr-5 opacity-60 bottom-0 mb-5">
                    {reasons.icon}
                </div>
                </div>)
                    } )
                }

            </div>
 
        </div>
    )
}

export default Reasons;