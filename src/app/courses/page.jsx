'use client'
import Link from 'next/link';
import React from 'react';
import { FaStar } from "react-icons/fa6";
import { FaUser, FaEye } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import useData from '@/hooks/useData';
import { BsFillLightningChargeFill } from "react-icons/bs";

const page = () => {
    const { cards } = useData()
    return (
        <div>
             <div className="relative w-full h-96">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/e863d329-ee0c-4997-88c3-589bc27af2e8.png')",
                        maskImage: " ",
                        WebkitMaskImage: " linear-gradient(to right,  rgba(255,255,255,0) 5%,rgba(255,255,255,1)  70%)"
                    }}
                ></div>


                <div className="relative z-10 left-30  h-full container mx-auto px-28 flex items-center">
                    <div className="text-black">
                        <h1 className="text-5xl font-bold py-2">Course Details</h1>
                        <p>
                            Home / <span className="c">Course Details</span>
                        </p>
                    </div>
                    <div className=' absolute -left-30 bottom-14'>
                        <img
                            src="/assets/fb5b29ce-07e3-452b-ae8b-108c1e3126af.png"
                            alt=""
                            className=" h-45 object-contain"
                        />
                    </div>
                    <div className=' absolute bottom-0 left-100'>
                        <img src="/assets/5ca8596c-ef68-48f9-96e0-a00b4cbc15b6.png" alt="" />
                    </div>
                    <div className=' absolute top-0 right-30'>
                        <img src="/assets/52c53c99-451e-4dec-8618-246ccc997984.png" alt="" />
                    </div>
                </div>
            </div>
       
        <div className='container mx-auto px-20'>
            <div className='flex flex-col justify-center items-center py-10 lg:py-25 text-center'>
                <div className='flex items-center gap-3 border w-auto sm:w-50 rounded-full py-1 px-2 bg-white border-gray-300'>
                    <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                        <BsFillLightningChargeFill color='#07A698' />
                    </div>
                    <h1 className='text-[#162726] text-sm sm:text-base lg:text-base'>Top Class Courses</h1>
                </div>
                <div className='pt-6'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Explore Featured Courses</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-25'>
                {cards.slice(0,9).map(c => (
                    <div key={c.id} className='border rounded-xl border-gray-200 bg-[#FFFFFF] w-full p-5'>
                        <div>
                            <img className='rounded-xl w-full mb-3' src={c.img} alt="" />
                        </div>
                        <div className='p-3'>
                            <p className='border rounded-full w-20 sm:w-24 text-center p-1 bg-[#E6F6F4] text-sm font-bold c'>{c.tag}</p>
                            <h1 className='text-xl pc font-semibold py-3 text-center sm:text-left'>{c.title}</h1>

                            <div className='flex flex-col sm:flex-row sm:justify-between gap-2 text-[#6C7986] text-sm'>
                                <div className='flex items-center gap-2'>
                                    <CgNotes />
                                    <p>Lesson {c.lesson}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaUser />
                                    <p>Student {c.student}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaEye />
                                    <p>View: {c.view}K</p>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between items-center py-4 gap-4'>
                                <div className='flex gap-3 items-center'>
                                    <img src={c.image} alt="" className='w-10 h-10 rounded-full' />
                                    <div>
                                        <h2 className='text-md pc font-semibold'>{c.name}</h2>
                                        <p className='c font-medium'>{c.inst}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color='#07A698' />
                                    ))}
                                    <p className='text-[#6C7986]'>({c.reting})</p>
                                </div>
                            </div>

                            <h1 className='border border-gray-200 my-2'></h1>

                            <div className='flex flex-col sm:flex-row items-center justify-between pt-4 gap-3'>
                                <h1 className='text-xl font-bold pc'>${c.price}</h1>
                                <Link href={`/dateils/${c.id}`}>
                                    <div className='border rounded-full px-4 py-1 cursor-pointer border-gray-300 hover:border-[#07A698] duration-500 font-bold'>
                                        <button className='cursor-pointer'>{c.btn}</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default page;