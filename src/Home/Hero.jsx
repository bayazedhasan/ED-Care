"use client";
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="bg-[#E2EDF4] h-200 pt-30">
            <div className='container mx-auto px-28'>
                <div className='flex items-center justify-between'>


                    <div className='relative'>


                        <div className='flex items-center gap-3 border w-70 rounded-full py-1 px-2 bg-white border-none'>
                            <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                                <BsFillLightningChargeFill color='#07A698' />
                            </div>
                            <h1 className='text-[#162726]'>Welcome to Online Education</h1>
                        </div>


                        <div className='py-6'>
                            <h1 className='text-5xl font-bold text-[#162726] w-160'>
                                Start learning from <br />
                                the world’s <span className='c font-semibold'>best institutions</span>
                            </h1>
                        </div>


                        <div className='flex items-center gap-6 py-3'>
                            <div className='border rounded-full px-8 cursor-pointer w-40 py-3 border-none bg-[#07A698]'>
                                <p className='text-white text-md font-semibold'>Get Started</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='border rounded-full p-4 w-12 bg-white border-none'>
                                    <IoPlay color='#07A698' />
                                </div>
                                <p className='pc'>Watch the video</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-22 py-6'>
                            <div className='flex relative items-center'>
                                <img src="/assets/hero-author-1.png" alt="" />
                                <img className='absolute left-6' src="/assets/hero-author-2.png" alt="" />
                                <img className='absolute left-12' src="/assets/hero-author-3.png" alt="" />
                                <img className='absolute left-18' src="/assets/hero-author-4.png" alt="" />
                            </div>
                            <p className='pc'><span className='c'>10K</span> Enrolment</p>
                        </div>


                        <h1 className='pc text-xl font-semibold'>
                            Explore <span className='c'>1350+</span> Courses within Subject
                        </h1>


                        <motion.div
                            className="absolute py-6 mb-10"
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


                    <div className='relative' style={{
                        backgroundImage: "url('/assets/hero-shape-3.png')",
                    }}>
                        <img className='rounded-[90px]' src="/assets/hero-img-1.png" alt="" />


                        <motion.div
                            className='absolute top-75 right-90 border p-6 rounded-xl w-50 bg-white border-none'
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <h1 className='c text-3xl font-bold'>256+</h1>
                            <p className='pc text-sm font-medium'>CRASHED COURSES</p>
                        </motion.div>
                        <motion.div
                            className='absolute left-90 top-40 w-50 '
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
