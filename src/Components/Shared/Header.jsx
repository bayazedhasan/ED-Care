"use client";
import React, { useState, useEffect } from 'react';
import TopHeader from './TopHeader';
import SecondHeader from './SecondHeader';
import { BsFillGridFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      if (offset > 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      
      <TopHeader />
      <SecondHeader />

     
      <div className={`${sticky ? 'fixed top-0 left-0 w-full z-50 shadow-md bg-white' : ''} border-b border-gray-200`}>
        
        
        <div className="hidden lg:flex items-center gap-6 container mx-auto px-28 py-3">
          
          <div className="relative inline-block">
            <button className="flex items-center gap-2 font-bold py-2 rounded-lg text-[#162726]">
              <BsFillGridFill color='#07A698' /> CATEGORIES
            </button>
          </div>

          <div>
            <h1 className='border border-gray-200 h-15'></h1>
          </div>

         
          <div className="flex items-center gap-10 text-[#162726]">
            <Link href={"/"}><p className='font-bold'>HOME</p></Link>
            <Link href={"/courses"}><p className='font-bold hover:text-[#07A698] duration-300'>COURSES</p></Link>
            <Link href={"/shop"}><p className='font-bold hover:text-[#07A698] duration-300'>SHOP</p></Link>
            <Link href={"/pages"}><p className='font-bold hover:text-[#07A698] duration-300'>PAGES</p></Link>
            <Link href={"/blog"}><p className='font-bold hover:text-[#07A698] duration-300'>BLOG</p></Link>
            <Link href={"/contact"}><p className='font-bold hover:text-[#07A698] duration-300'>CONTACT</p></Link>
          </div>
        </div>

        
        <div className="lg:hidden block">
          <div className='flex items-center justify-between px-4 py-3'>
            
            <button className='text-[#07A698] text-2xl'>
              <BsFillGridFill />
            </button>

          
            <button
              className='text-2xl text-[#162726]'
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          
          {mobileMenu && (
            <div className='bg-white shadow-md rounded-b-xl p-4 space-y-4'>
              <Link href={"/"}><p className='font-semibold'>HOME</p></Link>
              <Link href={"/courses"}><p className='font-semibold'>COURSES</p></Link>
              <Link href={"/shop"}><p className='font-semibold'>SHOP</p></Link>
              <Link href={"/pages"}><p className='font-semibold'>PAGES</p></Link>
              <Link href={"/blog"}><p className='font-semibold'>BLOG</p></Link>
              <Link href={"/contact"}><p className='font-semibold'>CONTACT</p></Link>
            </div>
          )}
        </div>
      </div>

    
      {sticky && <div className="lg:mt-[66px] mt-[56px]"></div>}
    </div>
  );
};

export default Header;
