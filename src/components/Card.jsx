import { useState } from "react";
import { useEffect } from "react";


const Card = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch("course.json")
            .then((res) => res.json())
            .then((data) => setCard(data))

    }, [])
    // console.log(card)

    const hendleSelect = () => {
        console.log("okkkkk")
    }


    return (

        <>
            <div className="grid mb-24 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {card.map((card, idx) => (
                    <div key={idx} className="card mx-auto w-80 bg-base-100 shadow-xl">
                        <figure className=" pt-10">
                            <img src={card.cover} alt="" />
                        </figure>
                        <div className="card-body items-start ">
                            <h2 className="text-[18px] font-semibold">{card.title}</h2>
                            <p className="text-[14px] text-[#00000086] mt-3">{card.description}</p>

                            <div className="flex gap-2 mt-3 ">
                                <div className="flex gap-[3px]">
                                    <img src="../src/assets/dollar-sign 1.png" alt="" />
                                    <h2 className="font-medium text-[#00000086]">Price : {card.price}</h2>
                                </div>
                                <div className="flex gap-[3px]">
                                    <img src="../src/assets/Frame.png" alt="" />
                                    <h2 className="font-medium text-[#00000086]">Credit : {card.Credit}</h2>
                                </div>

                            </div>
                            <div className="-ml-2 mt-6">
                                <button onClick={hendleSelect} className="btn text-white bg-[#2F80ED] hover:bg-[#006eff] px-[110px] rounded-lg">Select</button>

                            </div>

                        </div>
                    </div>
                ))}

            </div>


        </>
    );
};

export default Card;