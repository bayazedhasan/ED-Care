import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaFolderClosed } from "react-icons/fa6";

const Updates = () => {
    return (
        <div className='container mx-auto px-5 sm:px-10 lg:px-28 py-10 sm:py-25'>
            <div className='flex flex-col items-center'>
                <div className='flex gap-3 items-center border w-45 rounded-full py-1 px-2 bg-white border-gray-300'>
                    <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                        <BsFillLightningChargeFill color='#07A698' />
                    </div>
                    <h1 className='text-[#162726] c'>News & Blogs</h1>
                </div>

                <h1 className='text-3xl sm:text-4xl font-bold leading-10 sm:leading-13 text-center py-4'>
                    Latest News Updates
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-6 pt-10'>
                
                
                <div className='relative w-full lg:w-158 transform transition-transform duration-500 ease-in-out hover:scale-102'>
                    <img className='rounded-xl w-full' src="/assets/post-1.jpg" alt="" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    <div className='absolute top-3/5 left-5 lg:left-15 transform -translate-y-1/2 z-10 w-[90%] lg:w-auto text-center lg:text-left'>
                        <p className='font-bold rounded-full px-2 py-1 w-32 lg:w-30 text-center mx-auto lg:mx-0 bg-white border-none c'>
                            Learning
                        </p>

                        <h1 className='text-lg sm:text-xl font-bold text-white py-3 sm:py-5'>
                            Post Learning Repurpose mission critical action life items rather total linkage suds
                        </h1>

                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5 items-center text-white'>
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

                {/* Card 2 */}
                <div className='relative w-full lg:w-158 transform transition-transform duration-500 ease-in-out hover:scale-102'>
                    <img className='rounded-xl w-full' src="/assets/post-2.png" alt="" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/100 to-transparent"></div>

                    <div className='absolute top-3/5 left-5 lg:left-25 transform -translate-y-1/2 z-10 w-[90%] lg:w-auto text-center lg:text-left'>
                        <p className='font-bold rounded-full px-2 py-1 w-32 lg:w-30 text-center mx-auto lg:mx-0 bg-white border-none c'>
                            Learning
                        </p>

                        <h1 className='text-lg sm:text-xl font-bold text-white py-3 sm:py-5'>
                            Strategies for Managing Stress and Preventing Burnout in Education
                        </h1>

                        <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5 items-center text-white'>
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
