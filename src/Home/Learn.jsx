"use client"

import useData from '@/hooks/useData';
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const Learn = () => {
    const { data } = useData()

    return (
        <div className='bg-[#F2F4F7] py-25'>
            <div className='container mx-auto px-5 sm:px-10 lg:px-28'>
                {/* Header */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='flex items-center gap-3 border w-auto sm:w-70 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726] text-sm sm:text-base lg:text-base'>Welcome to Online Education</h1>
                    </div>

                    <div className='pt-6'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                            Select The Industry Where You Want To Learn
                        </h1>
                    </div>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 lg:pt-15'>
                    {
                        data.map((d, inx) => (
                            <div
                                key={inx}
                                className='border flex items-center justify-center sm:justify-start bg-[#FFFFFF] hover:bg-[#07A698] duration-300 border-gray-200 gap-3 p-3 sm:p-4 rounded-full'
                            >
                                <div className='border bg-[#F2F4F7] border-none rounded-full p-2'>
                                    <img className='w-6 sm:w-6 lg:w-6' src={d.icon} alt="" />
                                </div>
                                <div className='text-center sm:text-left'>
                                    <h1 className='text-sm sm:text-base lg:text-base'>{d.title}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Learn;
