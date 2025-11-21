"use client";
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="bg-[#E2EDF4] lg:h-185 h-auto pt-10 lg:pt-25">
            <div className='container mx-auto px-5 lg:px-28'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-50'>


                    <div className='relative w-full lg:w-auto'>


                        <div className='flex items-center gap-3 border  w-70 rounded-full py-1 px-3 bg-white border-none'>
                            <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                                <BsFillLightningChargeFill color='#07A698' />
                            </div>
                            <h1 className='text-[#162726] text-sm lg:text-base'>
                                Welcome to Online Education
                            </h1>
                        </div>


                        <div className='py-6'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#162726] w-full lg:w-160 leading-snug'>
                                Start learning from <br />
                                the world’s <span className='c font-semibold'>best institutions</span>
                            </h1>
                        </div>


                        <div className='flex items-center gap-6 py-3'>
                            <div className='border rounded-full px-6 lg:px-8 cursor-pointer w-auto lg:w-40 py-3 border-none bg-[#07A698]'>
                                <p className='text-white text-md font-semibold'>Get Started</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='border rounded-full cursor-pointer p-3 lg:p-4 w-10 lg:w-12 bg-white border-none'>
                                   
                                    <IoPlay color='#07A698' />
                                </div>
                                <p className='pc text-sm lg:text-base'>Watch the video</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-10 lg:gap-22 py-6'>
                            <div className='flex relative items-center'>
                                <img className='w-10 lg:w-auto' src="/assets/hero-author-1.png" alt="" />
                                <img className='absolute left-6 w-10 lg:w-auto' src="/assets/hero-author-2.png" alt="" />
                                <img className='absolute left-12 w-10 lg:w-auto' src="/assets/hero-author-3.png" alt="" />
                                <img className='absolute left-18 w-10 lg:w-auto' src="/assets/hero-author-4.png" alt="" />
                            </div>
                            <p className='pc text-sm lg:text-base'>
                                <span className='c'>10K</span> Enrolment
                            </p>
                        </div>


                        <h1 className='pc text-lg lg:text-xl font-semibold'>
                            Explore <span className='c'>1350+</span> Courses within Subject
                        </h1>


                        <motion.div
                            className="absolute py-6 mb-10 hidden  lg:block"
                            animate={{ x: [0, 25, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img src="/assets/hero-shape-2.png" alt="" />
                        </motion.div>
                    </div>


                    <div className='relative w-full flex justify-center lg:block'>
                        <img className='rounded-[40px] lg:rounded-[90px] w-72 md:w-96 lg:w-auto' src="/assets/hero-img-1.png" alt="" />

                        <motion.div
                            className='absolute top-50 lg:top-75 -right-1 md:right-20 lg:right-90 border p-4 lg:p-6 rounded-xl w-40 md:w-48 lg:w-50 bg-white border-none'
                            animate={{ x: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <h1 className='c text-2xl lg:text-3xl font-bold'>256+</h1>
                            <p className='pc text-xs md:text-sm font-medium'>CRASHED COURSES</p>
                        </motion.div>

                        <motion.div
                            className='absolute left-10 md:left-40 lg:left-90 top-8 md:top-12 lg:top-20 w-24 md:w-32 lg:w-50 hidden md:block'
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img src="/assets/hero-shape-1.png" alt="" />
                        </motion.div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
