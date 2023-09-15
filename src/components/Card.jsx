/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {
    const [allcard, setCard] = useState([])
    const [selectInfo, setSelectInfo] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [totalRemainng, setRemainng] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        fetch("course.json")
            .then((res) => res.json())
            .then((data) => setCard(data))

    }, [])
    // console.log(card)

    const hendleSelect = (Cardinfo) => {
        const isExist = selectInfo.find((info) => info.id == Cardinfo.id)


        let count = Cardinfo.Credit
        if (isExist) {
            // eslint-disable-next-line no-undef
            toast("Already Exist")
        }
        else {

            selectInfo.forEach((info) => {
                count = count + info.Credit

            })



            let totalPrice = Cardinfo.price
            selectInfo.forEach((totalCost) => {
                totalPrice += totalCost.price
            })

            



            const Remainng = 20 - count
            if (count > 20) {
                toast("Credit Time Over")
            }
            else {
                setTotalPrice(totalPrice)
                setTotalCredit(count)
                setRemainng(Remainng)
                setSelectInfo([...selectInfo, Cardinfo])
            }

        }
        console.log(totalCredit)


    }
    // console.log(selectInfo)


    return (

        <>
            <div className="grid mb-24 gap-6 md:flex md:flex-wrap  md:px-10 lg:grid-cols-3 lg:grid lg:gap-6 lg:px-0">
                {allcard.map((allcard, idx) => (
                    <div key={idx} className="card mx-auto w-[330px] bg-base-100 shadow-xl">
                        <figure className=" pt-10">
                            <img src={allcard.cover} alt="" />
                        </figure>
                        <div className="card-body items-start ">
                            <h2 className="text-[18px] font-semibold">{allcard.title}</h2>
                            <p className="text-[14px] text-[#00000086] mt-3">{allcard.description}</p>

                            <div className="flex gap-2 mt-3 ">
                                <div className="flex gap-[3px]">
                                    <img src="../src/assets/dollar-sign 1.png" alt="" />
                                    <h2 className="font-medium text-[#00000086]">Price : {allcard.price}</h2>
                                </div>
                                <div className="flex gap-[3px]">
                                    <img src="../src/assets/Frame.png" alt="" />
                                    <h2 className="font-medium text-[#00000086]">Credit : {allcard.Credit}hr</h2>
                                </div>

                            </div>
                            <div className="-ml-2 mt-6">
                                <button onClick={() => hendleSelect(allcard)} className="btn text-white bg-[#2F80ED] hover:bg-[#006eff] px-[110px] rounded-lg">Select</button>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
            <Cart selectInfo={selectInfo} totalRemainng={totalRemainng} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
            <ToastContainer></ToastContainer>


        </>
    );
};

export default Card;