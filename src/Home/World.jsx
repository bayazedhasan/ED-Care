import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
const World = () => {
    return (
        <div style={{
            backgroundImage: "url('/assets/footer-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className=' relative h-190'>
            <div className='container mx-auto px-28'>
                <div className='flex flex-col justify-around items-center py-26'>
                    <div className='flex items-center gap-3 border w-45 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Why Choose Us</h1>
                    </div>
                    <div className='flex justify-center items-center pt-6'>
                        <h1 className='text-4xl text-[#FFFFFF] font-bold'>Explore Yourself All Over The World</h1>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div className='flex flex-col items-center'>

                        <div className=' relative'>
                            <img src="/assets/promo-img-1.png" alt="" />
                            <div className=' absolute top-[-28] left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-4.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-white text-2xl py-4'>Book Free Consultation</h2>
                            <p className='text-[#F8F8F8] text-sm w-70 text-center'>Standards in leadership skills synergize
                                optimal expertise rather than innovative
                                leadership skills.</p>
                        </div>
                    </div>
                    <h1 className='border-r border-dashed border-gray-600'></h1>
                    <div className='flex flex-col items-center'>

                        <div className=' relative'>
                            <img src="/assets/promo-img-2.png" alt="" />
                            <div className=' absolute top-[-28] left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-5.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-white text-2xl py-4'>Make Easy Payment</h2>
                            <p className='text-[#F8F8F8] text-sm w-70 text-center'>Standards in leadership skills synergize
                                optimal expertise rather than innovative
                                leadership skills.</p>
                        </div>
                    </div>
                    <h1 className='border-r border-dashed border-gray-600'></h1>
                    <div className='flex flex-col items-center'>

                        <div className=' relative'>
                            <img src="/assets/promo-img-3.png" alt="" />
                            <div className=' absolute top-[-28] left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-6.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center text-white text-2xl py-4'>Schedule First Lesson</h2>
                            <p className='text-[#F8F8F8] text-sm w-70 text-center'>Standards in leadership skills synergize
                                optimal expertise rather than innovative
                                leadership skills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute top-20 left-25'>
                    <img src="/assets/promo-shape-1.png" alt="" />
            </div>
            <div className=' absolute top-10 right-0'>
                    <img src="/assets/promo-shape-2.png" alt="" />
            </div>
        </div>
    );
};

export default World;