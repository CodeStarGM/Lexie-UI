import Image from "next/image";
import React, { useState } from "react";

function Navbar({ cart, addToCart, removeFromCart, subTotal }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="fixed flex px-[2vw] justify-end items-start w-[100vw] h-[8vh]">
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer relative py-[1.50vh] "
        >
          <div className="flex text-[0.90vw] font-semibold text-white justify-center items-center absolute right-0 top-[4%] bg-red-500 h-4 w-4 rounded-full">
            {Object.keys(cart).length}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="hover:text-blue-500 text-blue-600 w-10 h-10"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </div>
      </div>

      <div>
        {show && (
          <div
            className="z-50 w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Your Cart
                  </p>
                  {Object.keys(cart).map((key) => {
                    return (
                      <div
                        key={key}
                        className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                      >
                        <div className="lg:w-1/4">
                          <img
                            src={cart[key].image}
                            className=" lg:w-[200px] lg:h-[140px] rounded-[8px] w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="md:pl-3 md:w-3/4">
                          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                            Lexie UI
                          </p>
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-semibold text-[6vw] lg:text-[2vw] font-black leading-none text-gray-800">
                              {cart[key].name}
                            </p>
                            <p className="text-gray-500 font-semibold text-[3vw] lg:text-[1.20vw]">
                              Quantity:{cart[key].qty}
                            </p>
                            {/* <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                            </select> */}
                          </div>

                          <p className="w-96 text-[3vw] lg:text-[1.20vw] leading-9 text-gray-600"></p>
                          <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex itemms-center">
                              <p
                                onClick={() => {
                                  removeFromCart(
                                    key,
                                    1,
                                    cart[key].price,
                                    cart[key].name,
                                    cart[key].image
                                  );
                                }}
                                className="flex items-center font-semibold text-[4vw] lg:text-[1.10vw] leading-3 underline text-red-500 pl-5 cursor-pointer"
                              >
                                Remove
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6 lg:w-4 lg:h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                                  />
                                </svg>
                              </p>
                            </div>
                            <p className="text-[5vw] lg:text-[1.40vw] font-black leading-none text-gray-800">
                              ${cart[key].price}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="text-4xl font-black leading-9 text-gray-800">
                        Summary
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          ${subTotal}.00
                        </p>
                      </div>
                      <button
                        onClick={() => setShow(!show)}
                        className="text-base leading-none w-full py-5 bg-indigo-500 rounded-[4px] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
}

export default Navbar;
