"use client"
import useData from '@/hooks/useData';
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
const Courses = () => {
    const {btn} = useData()
    console.log(btn);
    
    return (
        <div className='bg-[#F2F4F7]'>
            <div className='container mx-auto px-28'>
                <div className='flex flex-col justify-center items-center py-25'>
                    <div className='flex items-center gap-3 border w-50 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Top Class Courses</h1>
                    </div>
                    <div className='flex justify-center items-center pt-6'>
                        <h1 className='text-4xl font-bold'>Explore Featured Courses</h1>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-8 gap-3 items-center justify-center'>
                        {
                           btn.map((b,inx)=>(
                            <div key={inx}>
                                    <div className='border text-center font-semibold bg-[#FFFFFF] hover:bg-[#07A698] duration-700 border-none p-3 hover:text-white text- rounded-full '>
                                        <button>{b.name}</button>
                                    </div>
                            </div>
                           )) 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;