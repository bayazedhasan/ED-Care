"use client"
import useData from '@/hooks/useData';
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const page = () => {
    const { books } = useData()
    return (
        <div>
            <div className="relative w-full h-96">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/e863d329-ee0c-4997-88c3-589bc27af2e8.png')",
                        maskImage: " ",
                        WebkitMaskImage: " linear-gradient(to right,  rgba(255,255,255,0) 5%,rgba(255,255,255,1)  70%)"
                    }}
                ></div>


                <div className="relative z-10 left-30  h-full container mx-auto px-28 flex items-center">
                    <div className="text-black">
                        <h1 className="text-5xl font-bold py-2">Course Details</h1>
                        <p>
                            Home / <span className="c">Course Details</span>
                        </p>
                    </div>
                    <div className=' absolute -left-30 bottom-14'>
                        <img
                            src="/assets/fb5b29ce-07e3-452b-ae8b-108c1e3126af.png"
                            alt=""
                            className=" h-45 object-contain"
                        />
                    </div>
                    <div className=' absolute bottom-0 left-100'>
                        <img src="/assets/5ca8596c-ef68-48f9-96e0-a00b4cbc15b6.png" alt="" />
                    </div>
                    <div className=' absolute top-0 right-30'>
                        <img src="/assets/52c53c99-451e-4dec-8618-246ccc997984.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='container mx-auto px-28'>
                <div className='flex items-center justify-between pt-25'>
                    <p className='text-gray-600 text-md font'>Showing 1-12 of 88 results</p>
                    <div className='btn'>
                        <p className='text-gray-600'>Default Sharting</p>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-6'>
                    {
                        books.map((b, inx) => (
                            <div key={inx} className='border bg-[#F2F4F7] rounded-lg border-gray-300'>
                                <div className='flex relative flex-col items-center  justify-center pt-15 pb-8'>
                                    <img className='' src={b.image} alt="" />
                                    <div className=' absolute top-4 left-3'>
                                        <h1 className='text-[#07A698] border rounded-full px-4 py-0.5 bg-white border-gray-200'>{b.name}</h1>
                                    </div>
                                </div>
                                <div className='p-6 bg-white'>
                                    <h1 className='pc text-xl font-bold'>{b.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex gap-1 text-[#FFC92E] py-3 items-center'>
                                            <FaStar size={20}/>
                                            <FaStar size={20}/>
                                            <FaStar size={20}/>
                                            <FaStar size={20}/>
                                            <FaStar size={20}/>
                                        </div>
                                        <p className='text-[#797D7C]'>({b.reviews} Reviews)</p>
                                    </div>
                                   <div className='flex items-center gap-3'>
                                     <p  className=' text-[#797D7C] line-through'>${b.mainPrice}</p>
                                     <p className='text-[#07A698] text-lg font-semibold'>${b.price}</p>
                                   </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-3 items-center justify-center py-18'>
                    <p className='border font-bold hover:bg-[#07A698] cursor-pointer duration-300 hover:text-white rounded-full px-4 py-3 bg-white border-gray-200'>01</p>
                    <p className='border text-white cursor-pointer font-bold rounded-full px-4 py-3 bg-[#07A698] border-gray-200'>02</p>
                    <p className='border font-bold cursor-pointer hover:bg-[#07A698] duration-300 hover:text-white rounded-full px-4 py-3 bg-white border-gray-200'>03</p>
                    <div className='border font-bold cursor-pointer hover:bg-[#07A698] duration-300 hover:text-white rounded-full px-4 py-4 bg-white border-gray-200'>
                        <FaArrowRightLong />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default page;