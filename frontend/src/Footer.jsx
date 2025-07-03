import React from "react";

function Footer(){
    return(
        <div className="pb-20 text-[16px] text-gray-500">
            <div className="  underline">
            <div className="mb-10" >Questions? Call 000-800-919-1743</div>
            <div className="flex justify-between">
               <div className="w-[200px] list-none">
                <li>FAQ</li>
                <li>Investor</li>
                <li>Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
               </div>

               <div className="w-[200px] list-none">
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
               </div>

               <div className="w-[200px] list-none">
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Only on Netflix</li>
               </div>

               <div className="w-[200px] list-none">
                <li>Media Centre</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
               </div>
               </div>
               
               <div>
                <select className="text-white border-gray-500 pr-20 py-1 my-5 rounded" name="" id="">
                    <option className="text-black" value="English">English</option>
                    <option className="text-black" value="हिन्दी">हिन्दी</option>
                </select>
               </div>
            
        </div>
        <div className="mt-10">
                <div>
                Netflix India
                </div>
        <div className="text[14px]">
    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
        <span className="text-blue-500 underline">Learn more.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer