import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";

const Future = () => {
    return (
        <div className='container mx-auto px-5 sm:px-10 lg:px-28 flex flex-col lg:flex-row items-start lg:items-center lg:py-25 gap-10'>
            
            
            <div className='flex flex-col sm:flex-row lg:items-center gap-6 w-full lg:w-auto'>
                <div className='flex-1'>
                    <img className='rounded-tl-[70px] rounded-br-[70px] w-full object-cover' src="/assets/content-img-1.png" alt="" />
                </div>
                <div className='flex flex-col gap-6 flex-1'>
                    <img className='rounded-tr-[70px] rounded-bl-[70px] w-full object-cover' src="/assets/content-img-2.png" alt="" />
                    <img className='rounded-tl-[70px] rounded-br-[70px] w-full object-cover' src="/assets/content-img-3.png" alt="" />
                </div>
            </div>

            
            <div className='flex-1 flex flex-col'>
               
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3 border w-60 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726] text-center lg:text-left'>How We Start Journey</h1>
                    </div>

                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 sm:leading-10 lg:leading-13 py-4 text-center lg:text-left'>
                        We Care About Your Life For <br />
                        Better Future
                    </h1>

                    <p className='text-center lg:text-left text-[#757978]'>
                        This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.
                    </p>
                </div>

               
                <div className='flex flex-col gap-4 mt-6'>
                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-xl p-5 border-gray-100 mb-6 hover:shadow-2xl hover:scale-101 duration-300 shadow'>
                        <div className='border rounded-full p-6 text-[#07A698] hover:text-white hover:bg-[#07A698] duration-500 bg-[#E1F2FF] flex-shrink-0'>
                            <RiVerifiedBadgeFill size={42} />
                        </div>
                        <div>
                            <h2 className='py-2 text-lg font-bold text-center sm:text-left'>Master Certified Trainer</h2>
                            <p className='text-[#757978] text-center sm:text-left'>
                                This includes offering personalized feedback, fostering a sense of community through discussion.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 border rounded-xl p-5 border-gray-100 mb-6 hover:shadow-2xl hover:scale-101 duration-300 shadow'>
                        <div className='border rounded-full p-6 text-[#07A698] hover:text-white hover:bg-[#07A698] duration-500 bg-[#E1F2FF] flex-shrink-0'>
                            <HiOutlineLightBulb size={42} />
                        </div>
                        <div>
                            <h2 className='py-2 text-lg font-bold text-center sm:text-left'>Innovative Learning Approach</h2>
                            <p className='text-[#757978] text-center sm:text-left'>
                                This includes offering personalized feedback, fostering a sense of community through discussion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Future;
