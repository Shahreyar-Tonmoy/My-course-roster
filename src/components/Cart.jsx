/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const Cart = ({ selectInfo,totalRemainng,totalCredit,totalPrice }) => {
    // eslint-disable-next-line react/prop-types
    console.log(selectInfo)
    return (
        <div className="lg:-mr-14"> 
            <div className="card w-[280px] mx-auto md:mx-0 lg:mx-0  bg-base-100 shadow-2xl ">

                <div className="card-body px-4">
                    <h1 className="text-[#2F80ED]  text-[18px] font-bold">Credit Hour Remaining {totalRemainng} hr</h1>
                    <hr className="mt-4 border border-[#0000001e]"></hr>
                    <h1 className="mt-4 text-left text-xl font-bold ">Course Name</h1>
                    <div className="mt-5 list-decimal">
                        {selectInfo.map((cardInfo,idx)=>(
                            <li key={idx}>{cardInfo.title}</li>
                        ))}
                        

                    </div>
                    <hr className="mt-6 border border-[#0000001e]"></hr>
                    <h1 className="mt-4 font-medium">Total Credit Hour : {totalCredit}</h1>
                    <hr className="mt-4 border border-[#0000001e]"></hr>
                    <h1 className="font-semibold">Total Price : {totalPrice} USD</h1>
                </div>


            </div>
        </div>
    );
};

export default Cart;