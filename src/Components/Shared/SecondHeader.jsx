"use client";
import React, { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import Link from 'next/link';

const SecondHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>

            
            <div className='flex items-center justify-between container mx-auto px-5 lg:px-28 p-4'>

                
                <Link href={"/"}>
                    <div>
                        <img src="/assets/logo-1.png" alt="" className="w-28 lg:w-auto" />
                    </div>
                </Link>

                
                <div className="hidden lg:block">
                    <div className="w-150">
                        <div className="flex items-center border border-[#BCE3C9] bg-[#F2F4F7] rounded-full p-1">

                            <div
                                className="relative inline-block"
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                            >
                                <button
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#162726]"
                                >
                                    <CiGrid41 color='#162726' />
                                    Categories
                                    <FaAngleDown className={`${open ? "rotate-180" : ""} transition-all`} />
                                </button>

                                <div
                                    className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-700 z-10 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <ul className="flex flex-col">
                                        <li className="p-3 hover:bg-gray-100 cursor-pointer">Categories</li>
                                        <li className="p-3 hover:bg-gray-100 cursor-pointer">Fashion</li>
                                        <li className="p-3 hover:bg-gray-100 cursor-pointer">Organic</li>
                                        <li className="p-3 hover:bg-gray-100 cursor-pointer">Furniture</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-px bg-gray-300 h-6 mx-2"></div>

                            <div className="relative flex-1">
                                <input
                                    type="search"
                                    required
                                    placeholder="Search here..."
                                    className="w-full p-2 pl-3 pr-10 focus:outline-none rounded-none"
                                />
                                <svg
                                    className="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                
                <div>
                    <div className='flex items-center gap-3'>

                        
                        <div className='text-[#6E7271] border rounded-full p-1 cursor-pointer'>
                            <img
                                className='w-8'
                                src="/assets/pngtree-love-interface-line-vector-single-icon-image_319675-removebg-preview.png"
                                alt=""
                            />
                        </div>

                        
                        <div className='border rounded-full p-2 border-[#6E7271] cursor-pointer'>
                            <TiShoppingCart size={25} color='#6E7271' />
                        </div>

                        
                        <div className='hidden lg:block border rounded-full px-8 border-none cursor-pointer py-3 bg-[#07A698]'>
                            <p className='text-white text-md font-semibold'>Start Free Trial</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='border-b border-gray-200'></div>
        </div>
    );
};

export default SecondHeader;
