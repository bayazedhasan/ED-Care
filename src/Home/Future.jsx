import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const Future = () => {
    return (
        <div className='container mx-auto px-28 flex items-center gap-10'>
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
                        <p className='p'>This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.</p>
                    </div>
                    <div>
                        <div className='border rounded-full p-6  hover:bg-[#07A698] bg-[#E1F2FF]'>
                            <img src="/assets/content-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;