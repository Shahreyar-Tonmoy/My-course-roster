import { useState } from "react";
import { useEffect } from "react";


const Card = () => {
    const [card,setCard]= useState([])
    useEffect(()=>{
        fetch("course.json")
        .then((res)=> res.json())
        .then((data)=>setCard(data))
        
    },[])
    // console.log(card)
    return (
        
        <>
           <div className="max-w-screen-xl mx-auto flex">
           <div className="grid mx-auto mb-24 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {card.map((card,idx)=>(
                <div key={idx} className="card mx-auto w-[350px] h-[470px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={card.cover} alt="" />
                </figure>
                <div className="card-body items-start px-8">
                    <h2 className="text-[18px] font-semibold">{card.title}</h2>
                    <p className="text-[14px] mt-3">{card.description}</p>

                    <div className="flex gap-10 mt-3 ">
                        <div className="flex gap-[3px]">
                            <img src="../src/assets/dollar-sign 1.png" alt="" />
                            <h2>Price : {card.price}</h2>
                        </div>
                        <div className="flex gap-[3px]">
                            <img src="../src/assets/Frame.png" alt="" />
                            <h2>Credit : {card.Credit}</h2>
                        </div>
                        
                        </div>
                    <div className="mx-auto mt-6">
                        <button className="btn text-white bg-[#2F80ED] hover:bg-[#006eff] px-[120px] rounded-lg">Select</button>

                    </div>

                </div>
            </div> 
            ))}

           </div>

            </div> 
            
            
        </>
    );
};

export default Card;