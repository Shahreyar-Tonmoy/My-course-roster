

const Cart = () => {
    return (
        <div>
            <div className="card w-[280px] mx-auto md:mx-0 lg:mx-0  bg-base-100 shadow-2xl ">

                    <div className="card-body px-4">
                        <h1 className="text-[#2F80ED]  text-[18px] font-bold">Credit Hour Remaining 7 hr</h1>
                        <hr className="mt-4 border border-[#0000001e]"></hr>
                        <h1 className="mt-4 text-left text-xl font-bold ">Course Name</h1>
                        <div className="mt-5 list-decimal">
                            <li>Introduction to c programming</li>
                            <li>Introduction to C++ for DSA</li>
                            <li>Software Engineering</li>

                        </div>
                        <hr className="mt-6 border border-[#0000001e]"></hr>
                        <h1 className="mt-4 font-medium">Total Credit Hour : 13</h1>
                        <hr className="mt-4 border border-[#0000001e]"></hr>
                        <h1 className="font-semibold">Total Price : 48000 USD</h1>

                        



                    </div>


                </div>
        </div>
    );
};

export default Cart;