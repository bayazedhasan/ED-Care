import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaFolderClosed } from "react-icons/fa6";

const Updates = () => {
    return (
        <div className='container mx-auto px-28 py-25'>
            <div className=' flex flex-col items-center'>
                <div className='flex gap-3 items-center border w-45 rounded-full py-1 px-2 bg-white border-gray-300'>
                    <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                        <BsFillLightningChargeFill color='#07A698' />
                    </div>
                    <h1 className='text-[#162726] c'>News & Blogs</h1>
                </div>

                <h1 className='text-4xl font-bold leading-13 text-center py-4'>
                    Latest News Updates
                </h1>
            </div>

            <div className='flex justify-between gap-5 pt-10'>
                
                
                <div className='relative w-158 transform transition-transform duration-500 ease-in-out hover:scale-102'>
                    <img className='rounded-xl w-full' src="/assets/post-1.jpg" alt="" />

                   
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    <div className='absolute top-55 left-15 z-10'>
                        <p className='font-bold rounded-full px-2 py-1 w-25 text-center bg-white border-none c'>
                            Learning
                        </p>

                        <h1 className='text-xl font-bold text-white py-5'>
                            post Learning Repurpose mission critical action life items rather total linkage suds
                        </h1>

                        <div className='flex gap-5 items-center text-white'>
                            <div className='flex gap-1 items-center'>
                                <CiClock2 />
                                <p>August 15, 2025</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FaFolderClosed />
                                Marketing
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='relative w-158 transform transition-transform duration-500 ease-in-out hover:scale-102'>
                    <img className='rounded-xl hover:scale-98 duration-300 w-full' src="/assets/post-2.png" alt="" />

                    
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    <div className='absolute top-55 left-25 z-10'>
                        <p className='font-bold rounded-full px-2 py-1 c w-25 text-center bg-white border-none'>
                            Learning
                        </p>

                        <h1 className='text-xl font-bold text-white py-5'>
                            Strategies for Managing Stress and Preventing Burnout in Education
                        </h1>

                        <div className='flex items-center gap-5 text-white'>
                            <div className='flex gap-1 items-center'>
                                <CiClock2 />
                                <p>August 15, 2025</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FaFolderClosed />
                                Marketing
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Updates;
