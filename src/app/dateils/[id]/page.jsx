'use client'
import useData from '@/hooks/useData';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaTags, FaRegBookmark } from "react-icons/fa6";
import { FaCalendar, FaRegUser, FaHome, FaSquarespace } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { IoShareSocial } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart/cartSlice';

const page = () => {
    const { id } = useParams();
    const { cardss } = useData();
    const dispatch = useDispatch();

    const handleAddToCart = (card) => {
        dispatch(addToCart(card));
    }

    const findCards = cardss.find(c => c.id == id);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-96 sm:h-72 md:h-80 lg:h-96">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/e863d329-ee0c-4997-88c3-589bc27af2e8.png')",
                        WebkitMaskImage: "linear-gradient(to right, rgba(255,255,255,0) 5%, rgba(255,255,255,1) 70%)"
                    }}
                />
                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-16 lg:px-28 flex items-center h-full">
                    <div className="text-black">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2">Course Details</h1>
                        <p className="text-sm sm:text-base">
                            Home / <span className="c">Course Details</span>
                        </p>
                    </div>
                    {/* Decorative Images */}
                    <img src="/assets/fb5b29ce-07e3-452b-ae8b-108c1e3126af.png" alt="" className="hidden sm:block absolute -left-10 bottom-14 h-24 sm:h-36 md:h-40 lg:h-45 object-contain" />
                    <img src="/assets/5ca8596c-ef68-48f9-96e0-a00b4cbc15b6.png" alt="" className="hidden sm:block absolute bottom-0 left-24 sm:left-32 md:left-48 lg:left-100" />
                    <img src="/assets/52c53c99-451e-4dec-8618-246ccc997984.png" alt="" className="hidden sm:block absolute top-0 right-10 sm:right-16 md:right-20 lg:right-30" />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-28 py-8 md:py-12 lg:py-25">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column */}
                    <div className="col-span-1 lg:col-span-9 border rounded-xl border-gray-300">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <img className="rounded-xl w-full md:w-250 mx-auto" src={findCards?.img} alt="" />
                        </div>
                        <div className="px-4 sm:px-6 lg:px-8 pb-6">
                            <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                                <p className="bg-[#07A698] p-1 text-white text-xs sm:text-sm border w-20 sm:w-22 text-center rounded-full">Best Seller</p>
                                <p className="bg-[#07A698] p-1 text-white text-xs sm:text-sm border w-16 text-center rounded-full">Latest</p>
                            </div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-4 sm:py-6">{findCards?.title}</h1>
                            <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-sm sm:text-base">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <img src={findCards?.image} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <p className="c">Instructor: <span className='pc'>{findCards?.name}</span></p>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaTags color='#07A698' />
                                    <p>{findCards?.category}</p>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaCalendar color='#07A698' />
                                    <p>04 April, 2022</p>
                                </div>
                                <div className="flex gap-1 items-center text-[#07A698]">
                                    {[...Array(5)].map((_, i) => <CiStar key={i} size={i === 0 ? 22 : 20} />)}
                                    <p className='text-gray-600'>({findCards?.reting})</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-between border-t border-gray-400 border-b bg-[#F2F4F7]">
                            {['Overview', 'Curriculam', 'Instructor', 'Reviews'].map((tab, i) => (
                                <div key={i} className="flex-1 flex gap-1 sm:gap-2 items-center justify-center py-2 sm:py-3 text-sm sm:text-base text-gray-600 hover:text-[#07A698] cursor-pointer">
                                    {i === 0 && <FaRegBookmark />}
                                    {i === 1 && <LuBookText />}
                                    {i === 2 && <FaRegUser />}
                                    {i === 3 && <CiStar size={20} />}
                                    <p>{tab}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="p-4 sm:p-6 lg:p-8">
                            <h1 className='text-3xl py-4 pc font-bold'>Description</h1>
                            <p className=' text-gray-600'>Rapidiously develop parallel e-markets via worldwide paradigms. Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or organic sources. Energistically reinvent distinctive value via parallel services. Phosfluorescently deploy extensive paradigms vis-a-vis cross-unit manufactured products. Uniquely coordinate impactful services whereas team building e-services. Globally grow multimedia based benefits vis-a-vis client-based niches.</p>
                            <p className=' text-gray-600 py-4'>Professionally expedite synergistic technology without out-of-the-box human capital. Enthusiastically coordinate state of the art leadership after professional manufactured products. Distinctively enhance future-proof e-services whereas functionalized partnerships. Quickly streamline focused paradigms via orthogonal outside the box thinking. Rapidiously administrate 2.0 total linkage for cross-platform channels.</p>
                            <h1 className='text-3xl py-4 pc font-bold'>What Will You Learn?</h1>
                            <p className=' text-gray-600 pt-4'>Quickly synergize cutting-edge scenarios and professional results. Assertively deliver cross-media results before client-centric results. Uniquely initiate intuitive communities through process-centric internal or organic sources. Energistically reinvent distinctive value via parallel services extensive paradigms cross-unit manufactured products.</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{findCards?.learn}</p>

                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
                        <div className="border p-4 sm:p-6 lg:p-8 rounded-xl border-gray-300">
                            <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-6">
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold pc">${findCards?.price}</p>
                                <p className="bg-[#07A698] py-0.5 text-white text-xs sm:text-sm text-center rounded-full px-2 sm:px-4">25% off</p>
                            </div>
                            <div
                                onClick={() => handleAddToCart(findCards)}
                                className="mt-4 text-center rounded-lg px-8 cursor-pointer py-4 bg-[#07A698] border-none block lg:block sm:w-full"
                            >
                                <p className="text-white text-md font-semibold">ADD TO CART</p>
                            </div>
                            <div className="mt-2 text-center rounded-lg px-8 cursor-pointer py-4 border border-[#07A698] hover:bg-[#07A698] block lg:block sm:w-full">
                                <p className="text-gray-900 hover:text-white text-md font-semibold">BUY NOW</p>
                            </div>
                        </div>

                        {/* Course Information */}
                        <div className="border p-4 sm:p-6 lg:p-8 rounded-xl border-gray-300">
                            <h1 className="text-2xl font-bold text-center">Course Information</h1>
                            <div className="border-dashed border-gray-400 my-2" />
                            <InfoRow icon={<FaHome color="#07A698" />} label="Instructor" value={findCards?.name} />
                            <InfoRow icon={<LuBookText color='#07A698' />} label="Lessons" value={findCards?.lesson} />
                            <InfoRow icon={<IoMdTime color='#07A698' />} label="Duration" value="15h 30m 36s" />
                            <InfoRow icon={<GoTag color='#07A698' />} label="Course level" value="Beginners" />
                            <InfoRow icon={<TbWorld color='#07A698' />} label="Language" value="English" />
                            <InfoRow icon={<FaSquarespace color='#07A698' />} label="Quizzes" value="04" />
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

// Info Row Helper
const InfoRow = ({ icon, label, value }) => (
    <div className="flex gap-2 items-center py-1 sm:py-2">
        {icon}
        <p className='font-semibold'>{label}: <span className='font-normal'>{value}</span></p>
    </div>
);

export default page;
