import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function Questions(){
    const [activeIndex,setActiveIndex]= useState(null)
    const handleTogle =(index) =>{
        setActiveIndex((prevIndex)=>(prevIndex===index?null:index))
    }

    const questions =[
        {
            question:"What is Netflix",
            answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want whenever you want, without a single ad – all for one low monthly price There's always something new to discover, and new TV shows and movies are added every week!"
        },

        {
            question:"How much does Netflix cost?",
            answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
        }, 

        {
            question:"Where can I watch?",
            answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },

        {
            question:"How do I cancle?",
            answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },

        {
            question:"What can I watch on Netflix?",
            answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },

        {
            question:"Is Netflix good for kids?",
            answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        },
    ]
    return(
        <div className="py-10 h-screen">
            <div className="2xl font-bold ">
                Frequently Asked Questions 
            </div>
            {questions.map((item,index)=>{
                return(                   
            <div>
                <div onClick={()=>handleTogle(index)} className="cursor-pointer text-2xl bg-gray-500 p-5  items-center flex justify-between px-10 mt-3">
                        <div className="">
                            {item.question}
                        </div>
                        <div className="text-2xl font-bold">
                            {activeIndex === index ? <RxCross1 />: "+"}
                        </div>
                    </div><div className={`text-2xl bg-gray-500 overflow-hidden  ${activeIndex=== index ? "max-h-[500px]":"max-h-0"} px-5 mt-0.5`}>
                            {item.answer}
                        </div>
            </div>
                )
            })}
        </div>
    )
}

export default Questions