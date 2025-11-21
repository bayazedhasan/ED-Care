import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import ShareHeading from './ShareHeading/ShareHeading';
import { LuClipboardPenLine } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";

const SkillDevelopment = () => {
    return (
        <div>
            <div className='grid grid-cols-12 container mx-auto px-28 py-25'>

                {/* LEFT IMAGE (only lg) */}
                <div className='col-span-3 hidden lg:block'>
                    <div>
                        <img
                            className='rounded-tr-[70px] border-2 p-1 border-gray-300 rounded-bl-[70px]'
                            src="/assets/about-img-1.jpg"
                            alt=""
                        />
                    </div>

                    <div className='flex items-center gap-3 bc w-73 h-25 text-center p-10 rounded-tr-[60px] rounded-bl-[60px] mt-5'>
                        <div className='border rounded-full p-3 bg-white border-none'>
                            <FiPhoneCall color='#39B8AD' size={24} />
                        </div>
                        <div>
                            <p className='text-white font-semibold'>Online Support</p>
                            <p className='text-white text-xl font-bold'>+2581523659</p>
                        </div>
                    </div>
                </div>

                {/* CENTER IMAGE - only small */}
                <div className='col-span-12 lg:hidden flex justify-center mt-6'>
                    <img
                        className='rounded-tl-[70px] rounded-br-[70px] w-64'
                        src="/assets/about-img-2.jpg"
                        alt=""
                    />
                </div>

                {/* CENTER IMAGE - only lg */}
                <div className='col-span-3 pt-33 hidden lg:block'>
                    <img
                        className='rounded-tl-[70px] rounded-br-[70px]'
                        src="/assets/about-img-2.jpg"
                        alt=""
                    />
                </div>

                {/* TEXT SECTION */}
                <div className='col-span-12 lg:col-span-6 mt-6 lg:mt-0 text-center lg:text-left'>

                    <div className='flex items-center gap-3 border w-50 rounded-full py-1 px-2 bg-white border-gray-200 mx-auto lg:mx-0'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Get More About Us</h1>
                    </div>

                    <div className='pt-6'>
                        <ShareHeading heading={"Over 10 Years in Distant learning for Skill Development"} />

                        <p className='p py-6'>
                            Compellingly procrastinate equity invested markets with efficient process improvements.
                            actualize mission-critical partnerships with integrated portals.
                            Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.
                        </p>

                        <div className='flex flex-col lg:flex-row items-center gap-10'>

                            {/* Left counter */}
                            <div className='flex items-center gap-6'>
                                <div className='border p-5 rounded-full w-20 bg-[#FFFFFF] border-gray-300'>
                                    <LuClipboardPenLine color='#07A698' size={40} />
                                </div>
                                <div>
                                    <p className='text-5xl font-bold text-[#07A698] pb-2'>9.5k+</p>
                                    <p className='text-sm text-[#757978]'>
                                        Total active students taking <br /> gifted courses
                                    </p>
                                </div>
                            </div>

                            {/* Right counter */}
                            <div className='flex items-center gap-6'>
                                <div className='border p-5 rounded-full w-20 bg-[#FFFFFF] border-gray-300'>
                                    <FaUserGraduate color='#07A698' size={40} />
                                </div>
                                <div>
                                    <p className='text-5xl font-bold text-[#07A698] pb-2'>6.7k+</p>
                                    <p className='text-sm text-[#757978]'>
                                        Total active students taking <br /> gifted courses
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='border rounded-full px-8 cursor-pointer w-45 mt-10 py-3 border-none bg-[#07A698] mx-auto lg:mx-0'>
                            <p className='text-[#FFFFFF] text-md font-semibold'>Start Free Trial</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillDevelopment;
