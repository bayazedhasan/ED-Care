"use client"
import useData from '@/hooks/useData';
import { addToCart } from '@/redux/features/cart/cartSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaUser, FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

const Courses = () => {
    const { btn } = useData()
    const { cardss } = useData()
    const [categoryId, setCategoryId] = useState()

    const dispatch = useDispatch();

    const handleAddToCart = (card) => {
        dispatch(addToCart(card));
    }

    const handaleCategory = (name) => {
        setCategoryId(name)
    }
    const filterProduct = !categoryId || categoryId === "All Categories"
        ? cardss
        : cardss.filter(c => c.category === categoryId);

    return (
        <div className='bg-[#F2F4F7]'>
            <div className='container mx-auto px-5 sm:px-10 lg:px-28'>

                {/* Header */}
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

                {/* Category Buttons */}
                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center justify-center mb-10'>
                    {btn.map((b, inx) => (
                        <div key={inx} className='flex justify-center'>
                            <div
                                onClick={() => handaleCategory(b.name)}
                                className={`border text-center font-semibold cour p-4 w-50 border-none rounded-full duration-700
                                    ${categoryId === b.name
                                        ? "bg-[#07A698] text-white"
                                        : "bg-[#FFFFFF] hover:bg-[#07A698] hover:text-white"
                                    }`}
                            >
                                <button>{b.name}</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                    {filterProduct.slice(0, 3).map(c => (
                        <div key={c.id} className='border rounded-xl relative border-gray-200 bg-[#FFFFFF] w-full p-5'>
                            <div>
                                <img className=' rounded-xl w-full mb-3' src={c.img} alt="" />
                                <div
                                onClick={() => handleAddToCart(c)}
                                className=' absolute top-8 right-8 cursor-pointer'>
                                    <TiShoppingCart size={30} color='#FFFFFF' />
                                </div>
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

export default Courses;
