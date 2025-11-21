"use client";
import useData from '@/hooks/useData';
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";

const BestCourses = () => {
    const { best } = useData();

    return (
       <div className='bg-[#F2FDFF] py-28'>
         <div className='container mx-auto px-5 sm:px-10 lg:px-28'>
           
            <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-3 border  w-45 text-center rounded-full py-1 px-2 bg-white border-gray-300'>
                    <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                        <BsFillLightningChargeFill color='#07A698' />
                    </div>
                    <h1 className='text-[#162726]'>Our Instructors</h1>
                </div>
                <div className='flex justify-center items-center pt-6'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Explore Our World Best Courses</h1>
                </div>
            </div>

            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
                {best.map((b, inx) => (
                    <div key={inx} className="border border-none rounded-lg bg-white overflow-hidden">
                        
                        
                        <div className="relative group">
                            <img 
                                className="w-full h-56 sm:h-64 lg:h-68 rounded-t-lg object-cover transition-all duration-300" 
                                src={b.image} 
                                alt={b.name} 
                            />

                            
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                                <div className="text-xl p-3 hover:bg-[#07A698] bg-white rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 cursor-pointer text-[#07A698] hover:text-white">
                                    <FaFacebookF/>
                                </div>

                                <div className="text-xl p-3 hover:bg-[#07A698] bg-white rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer text-[#07A698] hover:text-white">
                                    <FaInstagram />
                                </div>

                                <div className="text-xl p-3 hover:bg-[#07A698] bg-white rounded-full opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 cursor-pointer text-[#07A698] hover:text-white">
                                    <FaBehance />
                                </div>
                            </div>
                        </div>

                        
                        <div className="p-4 text-center lg:text-left">
                            <h1 className="text-lg font-bold">{b.name}</h1>
                            <p className="text-gray-600 font-medium">{b.tag}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};

export default BestCourses;
