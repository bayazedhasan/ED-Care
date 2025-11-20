import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";


const Future = () => {
    return (
        <div className='container mx-auto px-28 flex items-center gap-10 rele'>
            
            <div className='flex items-center gap-6'>
                <div>
                    <img className='rounded-tl-[70px] rounded-br-[70px]' src="/assets/content-img-1.png" alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <img className='rounded-tr-[70px] rounded-bl-[70px]' src="/assets/content-img-2.png" alt="" />
                    <img className='rounded-tl-[70px] rounded-br-[70px]' src="/assets/content-img-3.png" alt="" />
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-3 border w-60 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>How We Start Journey</h1>
                    </div>
                    <div className='pt-6'>
                        <h1 className='text-4xl font-bold leading-13 py-4'>We Care About Your Life For <br />
                            Better Future</h1>
                    </div>
                    <div>
                        <p className='p pb-4'>This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
                    </div>
                    <div className=''
                    >
                        <div className='flex items-center gap-4 border rounded-xl p-5 border-gray-100 mb-6 hover:shadow-2xl hover:scale-101 duration-300 shadow '>
                            <div className='border rounded-full px-6 py-6 text-[#07A698] hover:text-white hover:bg-[#07A698] duration-500 bg-[#E1F2FF]'>
                                <RiVerifiedBadgeFill size={42} />
                            </div>
                            <div>
                                <h2 className='pc py-2 text-lg font-bold'>Master Certified Trainer</h2>
                                <p className=' w-100 text-[#757978]'>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 border rounded-xl p-5 border-gray-100 mb-6 hover:shadow-2xl hover:scale-101 duration-300 shadow'>
                            <div className='border rounded-full px-6 py-6 text-[#07A698] hover:text-white hover:bg-[#07A698] duration-500 bg-[#E1F2FF]'>
                                <HiOutlineLightBulb size={42} />
                            </div>
                            <div>
                                <h2 className='pc py-2 text-lg font-bold'>Master Certified Trainer</h2>
                                <p className=' w-100 text-[#757978]'>This includes offering personalized feedback, fostering a sense of community through discussion.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;