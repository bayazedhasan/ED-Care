'use client'
import useData from '@/hooks/useData';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaTags } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { LuBookText } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { FaSquarespace } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart/cartSlice';
const page = () => {
    const { id } = useParams();
    const { cardss } = useData();
    const dispatch = useDispatch();

    const handleAddToCarts = (cardss)=>{
        dispatch(addToCart(cardss))
    }
    const findCards = cardss.find(c => c.id == id)
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


            <div>
                <div className='grid grid-cols-12 gap-6 container mx-auto px-28 py-25'>
                    <div className='col-span-9 border rounded-xl border-gray-300'>
                        <div>
                            <div className='p-8'>
                                <img className='rounded-xl w-250' src={findCards?.img} alt="" />
                            </div>
                            <div className='px-8 pb-6'>
                                <div className='flex items-center gap-3'>
                                    <p className='bg-[#07A698] p-1 text-white text-sm border w-22 border-none text-center rounded-full'>Best Seller</p>
                                    <p className='bg-[#07A698] p-1 text-white text-sm border w-16 border-none text-center rounded-full'>Latest</p>
                                </div>
                                <h1 className='text-3xl font-bold pc py-6'>{findCards?.title}</h1>
                                <div className='flex  gap-6 items-center'>
                                    <div className='flex items-center gap-3'>
                                        <img src={findCards?.image} alt="" />
                                        <p className='c text-sm'>Instructor: <span className='pc'>{findCards?.name}</span></p>
                                    </div>
                                    <h1 className='border border-gray-300 h-5'></h1>
                                    <div className='flex gap-2 items-center'>
                                        <FaTags color='#07A698' />
                                        <p className='text-sm pc'>{findCards?.category}</p>
                                    </div>
                                    <h1 className='border border-gray-300 h-5'></h1>
                                    <div className='flex gap-2 items-center'>
                                        <FaCalendar color='#07A698' />
                                        <p className='pc text-sm'>04 April, 2022</p>
                                    </div>
                                    <h1 className='border border-gray-300 h-5'></h1>
                                    <div className='flex gap-2 items-center'>
                                        <div className='flex gap-1 text-[#07A698] items-center'>
                                            <CiStar size={22} />
                                            <CiStar size={20} />
                                            <CiStar size={20} />
                                            <CiStar size={20} />
                                            <CiStar size={20} />
                                        </div>
                                        <p className='text-gray-600'>({findCards?.reting})</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex border-t border-b justify-center gap-20 bg-[#F2F4F7] border-gray-300'>
                                <div className='flex gap-2 items-center duration-300 text-sm text-gray-600 hover:text-[#07A698]'>
                                    <FaRegBookmark />
                                    <p>OverView</p>
                                </div>
                                <h1 className='border border-gray-300 h-15'></h1>
                                <div className='flex gap-2 items-center duration-300 text-sm text-gray-600 hover:text-[#07A698]'>
                                    <LuBookText />
                                    <p>Curriculam</p>
                                </div>
                                <h1 className='border border-gray-300 h-15'></h1>
                                <div className='flex gap-2 items-center duration-300 text-sm text-gray-600 hover:text-[#07A698]'>
                                    <FaRegUser />
                                    <p>Instructor</p>
                                </div>
                                <h1 className='border border-gray-300 h-15'></h1>
                                <div className='flex gap-2 items-center duration-300 text-sm text-gray-600 hover:text-[#07A698]'>
                                    <CiStar size={20} />
                                    <p>Reviews</p>
                                </div>
                            </div>
                            <div>
                                <div className='p-8'>
                                    <h1 className='text-3xl py-4 pc font-bold'>Description</h1>
                                    <p className=' text-gray-600'>Rapidiously develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or organic sources. Energistically reinvent distinctive value via parallel services. Phosfluorescently deploy extensive paradigms vis-a-vis cross-unit manufactured products. Uniquely coordinate impactful services whereas team building e-services. Globally grow multimedia based benefits vis-a-vis client-based niches.</p>
                                    <p className=' text-gray-600 py-4'>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal outside the box thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p>
                                    <h1 className='text-3xl py-4 pc font-bold'>What Will You Learn?</h1>
                                    <p className=' text-gray-600 pt-4'>Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or organic sources. Energistically reinvent distinctive value via parallel services extensive paradigms cross-unit manufactured products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='border p-8 rounded-xl border-gray-300'>
                            <div className='flex items-center gap-6'>
                                <p className='text-4xl font-bold pc'>${findCards?.price}</p>
                                <p className='bg-[#07A698] py-0.5 text-white text-sm border w-18 border-none text-center rounded-full'>25% off</p>
                            </div>
                            <div onClick={(e)=>{
                                e.stopPropagation();
                                handleAddToCarts(findCards)}} className='hidden lg:block border mt-4 text-center rounded-lg px-8 border-none cursor-pointer py-4 bg-[#07A698]'>
                                <p className='text-white text-md font-semibold'>ADD TO CART</p>
                            </div>
                            <div className='hidden lg:block border mt-2 text-center rounded-lg px-8  cursor-pointer py-4 border-[#07A698] hover:bg-[#07A698]'>
                                <p className='text-gray-900 hover:text-white text-md font-semibold'>BUY NOW</p>
                            </div>
                        </div>
                        <div className='border p-8 rounded-xl my-8 border-gray-300'>
                            <div>
                                <h1 className='text-2xl font-bold pc text-center'>Course Information</h1>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>
                                <FaHome color='#07A698' />
                                <p className='pc font-semibold'>Instructor: <span className='p'>{findCards?.name}</span></p>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>

                                <LuBookText color='#07A698' />
                                <p className='pc font-semibold'>Lessons: <span className='p'>{findCards?.lesson}</span></p>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>

                                <IoMdTime color='#07A698' />
                                <p className='pc font-semibold'>Duration: <span className='p'>15h 30m 36s</span></p>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>

                                <GoTag color='#07A698' />
                                <p className='pc font-semibold'>Course level: <span className='p'>Beginners</span></p>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>

                                <TbWorld color='#07A698' />
                                <p className='pc font-semibold'>Language: <span className='p'>English</span></p>
                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 items-center'>
                                <FaSquarespace color='#07A698' />
                                <p className='pc font-semibold'>Quizzes: <span className='p'>04</span></p>

                            </div>
                            <h1 className='border border-dashed border-gray-400 my-2'></h1>
                            <div className='flex gap-2 cursor-pointer justify-center items-center mt-6 border p-3 rounded-lg border-none bg-[#F5F6F9]'>

                                <IoShareSocial color='#07A698' />
                                <p className='c cursor-pointer'>Share This Course</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default page;