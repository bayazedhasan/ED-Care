"use client"

import useData from '@/hooks/useData';
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const Learn = () => {
    const { data } = useData()

    

    return (
        <div className='bg-[#F2F4F7] h-150 py-25'>
            <div className='container mx-auto px-28'>
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex items-center gap-3 border w-70 rounded-full py-1 px-2 bg-white border-gray-300'>
                            <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                                <BsFillLightningChargeFill color='#07A698' />
                            </div>
                            <h1 className='text-[#162726]'>Welcome to Online Education</h1>
                        </div>
                        <div className='flex justify-center items-center pt-6'>
                            <h1 className='text-4xl font-bold'>Select The Industry Where You Want To Learn</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-6 pt-15 '>
                        {
                            data.map((d, inx) => (
                                <div key={inx} className='border flex items-center bg-[#FFFFFF] hover:bg-[#07A698] duration-800 border-gray-200 gap-3 p-3 rounded-full'>
                                    <div className='border bg-[#F2F4F7] border-none rounded-full p-2'>
                                        <img className='w-6' src={d.icon} alt="" />
                                    </div>
                                    <div>
                                        <h1>{d.title}</h1>
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

export default Learn;