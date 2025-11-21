"use client"
import useData from '@/hooks/useData';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const Courses = () => {
    const { btn } = useData()
    const { cards } = useData()
    const [categoryId,setCategoryId] = useState()
    
    const handaleCategory = (name)=>{
        setCategoryId(name)
    }
    const filterProduct = !categoryId || categoryId === "All Categories" 
    ? cards 
    : cards.filter(c => c.category === categoryId);


    return (
        <div className='bg-[#F2F4F7]'>
            <div className='container mx-auto px-28'>
                <div className='flex flex-col justify-center items-center py-25'>
                    <div className='flex items-center gap-3 border w-50 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Top Class Courses</h1>
                    </div>
                    <div className='flex justify-center items-center pt-6'>
                        <h1 className='text-4xl font-bold'>Explore Featured Courses</h1>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-8 gap-3 items-center justify-center'>
                        
                        {
                            btn.map((b, inx) => (
                                <div key={inx}>
                                    
                                    <div onClick={()=>handaleCategory(b.name)}className={`
                        border text-center font-semibold cour p-3 border-none rounded-full duration-700
                        ${categoryId === b.name
                            ? "bg-[#07A698] text-white"     
                            : "bg-[#FFFFFF] hover:bg-[#07A698] hover:text-white"
                        }`}>
                                        <button>{b.name}</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 py-20 items-center justify-center'>
                        {
                            filterProduct.slice(0,3).map(c => (
                                <div key={c.id} className='border rounded-xl border-gray-200 bg-[#FFFFFF] w-100 p-5'>
                                    <div>
                                        <img className='rounded-xl w-100 mb-3' src={c.img} alt="" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='border rounded-full w-13 border-none text-center p-1 bg-[#E6F6F4] text-sm font-bold c'>{c.tag}</p>
                                        <h1 className='text-xl pc font-semibold py-3'>{c.title}</h1>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-[#6C7986] text-sm'>
                                                <CgNotes />
                                                <p>Lesson{c.lesson}</p>
                                            </div>
                                           <div className='flex items-center gap-2 text-[#6C7986] text-sm'>
                                             <FaUser />
                                             <p className=''>Student {c.student}</p>
                                           </div>
                                           <div className='flex items-center gap-2 text-[#6C7986] text-sm'>
                                            <FaEye />
                                            <p>View:{c.view}K</p>
                                           </div>
                                        </div>
                                        <div className='flex justify-between items-center py-4'>
                                            <div className='flex gap-3'>
                                                <div>
                                                <img src={c.image} alt="" />
                                            </div>
                                            <div>
                                                <h2 className='text-md pc font-semibold'>{c.name}</h2>
                                                <p className='c font-medium'>{c.inst}</p>
                                            </div>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                <FaStar color='#07A698'/>
                                                <FaStar color='#07A698'/>
                                                <FaStar color='#07A698'/>
                                                <FaStar color='#07A698'/>
                                                <FaStar color='#07A698'/>
                                                <p className='text-[#6C7986]'>({c.reting})</p>
                                            </div>
                                        </div>
                                        <h1 className='border border-gray-200'></h1>
                                        <div className='flex items-center justify-between pt-6'>
                                            <div>
                                                <h1 className='text-xl font-bold pc'>${c.price}</h1>
                                            </div>
                                            <Link href={`/dateils/${c.id}`}>
                                            <div className='border rounded-full px-4 py-1 cursor-pointer border-gray-300 hover:border-[#07A698] duration-500 font-bold'>
                                                <button className=' cursor-pointer'>{c.btn}</button>
                                            </div></Link>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;