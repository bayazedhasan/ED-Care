import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaBehance, FaSkype, FaYoutube } from "react-icons/fa";
import { FaArrowRight, FaCalendar } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url('/assets/footer-bg.png')" }} className='pt-10 lg:pt-25'>

                {/* MAIN CONTAINER */}
                <div className='container mx-auto px-5 lg:px-28'>

                    {/* NEWSLETTER BOX */}
                    <div className='flex flex-col lg:flex-row items-start lg:items-center border bg-transparent border-gray-700 rounded-xl justify-between gap-6 lg:gap-10 p-6 lg:p-20'>
                        
                        <div>
                            <h1 className='text-2xl lg:text-4xl text-white font-bold'>
                                Subscribe Our Newsletter For Latest Updates
                            </h1>
                        </div>

                        {/* Form */}
                        <div className='w-full lg:w-auto'>
                            <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3'>
                                
                                <label className="flex items-center gap-2 border p-3 bg-transparent text-white border-gray-300 w-full lg:w-100 rounded-full">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input type="email" placeholder="Enter your E-mail" className='placeholder:text-white bg-transparent outline-none text-sm lg:text-base' />
                                </label>

                                <div className='border rounded-full px-6 lg:px-8 cursor-pointer py-3 border-none bg-[#07A698] w-full lg:w-40 text-center'>
                                    <p className='text-white text-md font-semibold'>Get Started</p>
                                </div>

                            </div>
                        </div>
                    </div>

                   
                    <div>
                        <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 items-start py-12 lg:py-25'>

                            
                            <div>
                                <h1 className='text-xl lg:text-2xl font-bold'>Get in touch!</h1>
                                <p className='border-b border-2 w-12 lg:w-18 mt-1'></p>

                                <p className='text-[#CBD0CF] w-full lg:w-70 py-8 text-sm lg:text-base'>
                                    Fusce varius, dolor tempor interdum tristiquei bibendum.
                                </p>

                                <div className='flex items-center gap-2'>
                                    <IoCallOutline size={20} className='lg:size-[25]' />
                                    <h2 className='text-xl lg:text-2xl font-bold hover:text-[#07A698] duration-300 cursor-pointer'>
                                        (702) 123-1478
                                    </h2>
                                </div>

                                <p className='font-semibold py-1 hover:text-[#07A698] duration-300 cursor-pointer text-sm lg:text-base'>
                                    info@company.com
                                </p>

                                <div className='flex items-center gap-4 py-3 text-lg lg:text-xl'>
                                    <FaFacebookF className='hover:text-[#39B8AD] cursor-pointer' />
                                    <FaInstagram className='hover:text-[#39B8AD] cursor-pointer' />
                                    <FaBehance className='hover:text-[#39B8AD] cursor-pointer' />
                                    <FaSkype className='hover:text-[#39B8AD] cursor-pointer' />
                                    <FaYoutube className='hover:text-[#39B8AD] cursor-pointer' />
                                </div>
                            </div>

                            
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl lg:text-2xl font-bold'>Company Info</h1>
                                <p className='border-b border-2 w-12 lg:w-18 mt-1'></p>

                                {["About Us", "Resource Center", "Careers", "Instructor", "Become A Teacher"].map((item) => (
                                    <div key={item} className='flex items-center gap-2 hover:text-[#07A698] duration-300'>
                                        <FaArrowRight />
                                        <p className='font-semibold text-sm lg:text-base'>{item}</p>
                                    </div>
                                ))}
                            </div>

                            
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl lg:text-2xl font-bold'>Useful Links</h1>
                                <p className='border-b border-2 w-12 lg:w-18 mt-1'></p>

                                {["All Courses", "Digital Marketing", "Design & Branding", "Storytelling & Voice Over", "News & Blogs"].map((item) => (
                                    <div key={item} className='flex items-center gap-2 hover:text-[#07A698] duration-300'>
                                        <FaArrowRight />
                                        <p className='font-semibold text-sm lg:text-base'>{item}</p>
                                    </div>
                                ))}
                            </div>

                            
                            <div className='flex flex-col gap-4'>
                                <h1 className='text-xl lg:text-2xl font-bold'>Recent Post</h1>
                                <p className='border-b border-2 w-12 lg:w-18 mt-1'></p>

                                <div className='flex flex-col gap-4'>
                                    {[1, 2].map((n) => (
                                        <div key={n} className='flex items-center gap-2'>
                                            <img src={`/assets/footer-post-${n}.png`} className='w-20 lg:w-auto' />
                                            <div>
                                                <h2 className='font-semibold pb-1 text-sm lg:text-base'>Where Dreams Find a Home</h2>
                                                <div className='flex items-center gap-2 text-xs lg:text-base'>
                                                    <FaCalendar />
                                                    <p className='text-gray-200'>20 April, 2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                
                <div className='border-t flex justify-center items-center py-5 lg:py-8 border-gray-600'>
                    <p className='font-semibold text-sm lg:text-lg text-[#C4C9C8] text-center'>
                        Copyright © 2025 EdCare. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;
