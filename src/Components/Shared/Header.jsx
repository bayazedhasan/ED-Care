"use client";
import React, { useState } from 'react';
import TopHeader from './TopHeader';
import SecondHeader from './SecondHeader';
import { FaAngleDown } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Link from 'next/link';



const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <TopHeader />
            <SecondHeader />
            <div>
                <div className='flex items-center gap-6 container mx-auto px-28'>

                    <div
                        className="relative inline-block"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >

                        <button
                            className="flex items-center gap-2 font-bold py-2 rounded-lg text-[#162726]"
                        >
                            <BsFillGridFill color='#07A698' />

                            CATEGORIES
                        </button>


                        <div
                            className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-700 z-10 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="flex flex-col">
                                <li className="p-3 hover:bg-gray-100 cursor-pointer">Development</li>
                                <li className="p-3 hover:bg-gray-100 cursor-pointer">Marketing</li>
                                <li className="p-3 hover:bg-gray-100 cursor-pointer">Music</li>
                                <li className="p-3 hover:bg-gray-100 cursor-pointer">Accounting</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className='border border-gray-200 h-15'></h1>
                    </div>
                    <div>
                        <div className='flex items-center gap-10  text-[#162726]'>
                            <Link href={"/"}><p className='c font-bold'>HOME</p></Link>
                            <Link href={"/courses"}><p className='font-bold hover:text-[#07A698] duration-300'>COURSES</p></Link>
                            <Link href={"/shop"}><p className='font-bold hover:text-[#07A698] duration-300'>SHOP</p></Link>
                            <Link href={"/pages"}><p className='font-bold hover:text-[#07A698] duration-300'>PSGES</p></Link>
                            <Link href={"/blog"}><p className='font-bold hover:text-[#07A698] duration-300'>BLOG</p></Link>
                            <Link href={"/contact"}><p className='font-bold hover:text-[#07A698] duration-300'>CONTACT</p></Link>
                        </div>

                    </div>
                </div>
                <div className='border-b border-gray-200'>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;