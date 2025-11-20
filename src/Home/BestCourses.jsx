"use client";
import { usePresenceData } from 'framer-motion';
import useData from '@/hooks/useData';
import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const BestCourses = () => {
    const {best} = useData()
    return (
       <div className='bg-[#F2FDFF] h-[110vh] py-28'>
         <div className='container mx-auto px-28'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center gap-3 border w-45 text-center rounded-full py-1 px-2 bg-white border-gray-300'>
                    <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                        <BsFillLightningChargeFill color='#07A698' />
                    </div>
                    <h1 className='text-[#162726]'>Our Instructors</h1>
                </div>
                <div className='flex justify-center items-center pt-6'>
                    <h1 className='text-4xl font-bold'>Explore Our World Best Courses</h1>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-6 py-17'>
  {best.map((b, inx) => (
    <div 
      key={inx} 
      className="border rounded-lg bg-white border-none overflow-hidden"
    >
      
      <div className="relative group">
        <img 
          className="w-77 h-68 rounded-t-lg object-cover transition-all duration-300 " 
          src={b.image} 
          alt="" 
        />

        
        <div className="
            absolute inset-0 bg-black/50 
            opacity-0 group-hover:opacity-100 
            flex items-center justify-center gap-4
            transition-all duration-300
          "
        >
          <div className=" text-xl p-3 hover:bg-[#07A698] bg-white rounded-full 
              opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-300 cursor-pointer text-[#07A698] hover:text-white">
            <FaFacebookF/>
          </div>

          <div className="text-[#07A698] hover:text-white text-xl p-3 bg-white hover:bg-[#07A698] rounded-full 
              opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500 cursor-pointer">
           <FaInstagram />
          </div>

          <div className="text-[#07A698] hover:text-white text-xl p-3 bg-white hover:bg-[#07A698] rounded-full 
              opacity-0 translate-y-3 group-hover:opacity-100  group-hover:translate-y-0 
              transition-all duration-700 cursor-pointer">
            <FaBehance />
          </div>
        </div>
      </div>

      
      <div className="p-4">
        <h1 className="text-lg pc font-bold">{b.name}</h1>
        <p className="c font-medium">{b.tag}</p>
      </div>
    </div>
  ))}
</div>

        </div>
       </div>
    );
};

export default BestCourses;