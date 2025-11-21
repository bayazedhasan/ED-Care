import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const World = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/assets/footer-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='relative h-auto lg:h-190 py-20 lg:py-26'
        >
            <div className='container mx-auto px-5 sm:px-10 lg:px-28'>

                {/* Header */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='flex items-center gap-3 border w-auto sm:w-45 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726] text-sm sm:text-base lg:text-base'>Why Choose Us</h1>
                    </div>
                    <div className='pt-6'>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-white font-bold'>
                            Explore Yourself All Over The World
                        </h1>
                    </div>
                </div>

                {/* Cards */}
                <div className='flex flex-col lg:flex-row justify-around gap-12 lg:gap-0 mt-12'>

                    {/* Card 1 */}
                    <div className='flex flex-col items-center text-center'>
                        <div className='relative'>
                            <img src="/assets/promo-img-1.png" alt="" />
                            <div className='absolute top-[-28px] left-18 lg:left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-4.png" alt="" />
                            </div>
                        </div>
                        <h2 className='text-2xl text-white py-4'>Book Free Consultation</h2>
                        <p className='text-[#F8F8F8] text-sm w-full sm:w-70 text-center'>
                            Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className='flex flex-col items-center text-center lg:border-l lg:border-r lg:border-dashed lg:border-gray-600 lg:px-6'>
                        <div className='relative'>
                            <img src="/assets/promo-img-2.png" alt="" />
                            <div className='absolute top-[-28px] left-18 lg:left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-5.png" alt="" />
                            </div>
                        </div>
                        <h2 className='text-2xl text-white py-4'>Make Easy Payment</h2>
                        <p className='text-[#F8F8F8] text-sm w-full sm:w-70 text-center'>
                            Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className='flex flex-col items-center text-center'>
                        <div className='relative'>
                            <img src="/assets/promo-img-3.png" alt="" />
                            <div className='absolute top-[-28px] left-18 lg:left-18'>
                                <img className='border rounded-full p-2 border-3 border-gray-800 bc' src="/assets/promo-6.png" alt="" />
                            </div>
                        </div>
                        <h2 className='text-2xl text-white py-4'>Schedule First Lesson</h2>
                        <p className='text-[#F8F8F8] text-sm w-full sm:w-70 text-center'>
                            Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.
                        </p>
                    </div>

                </div>

            </div>

            {/* Shapes */}
            <div className='absolute top-20 left-5 lg:left-25'>
                <img src="/assets/promo-shape-1.png" alt="" />
            </div>
            <div className='absolute top-10 right-5 lg:right-0'>
                <img src="/assets/promo-shape-2.png" alt="" />
            </div>
        </div>
    );
};

export default World;
