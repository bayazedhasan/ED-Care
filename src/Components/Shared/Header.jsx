"use client";
import React, { useState, useEffect } from "react";
import TopHeader from "./TopHeader";
import SecondHeader from "./SecondHeader";
import { BsFillGridFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const carts = useSelector((state)=> state.cart.products);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <TopHeader />
      <SecondHeader />

      {/* NAVBAR */}
      <div
        className={`${sticky ? "fixed top-0 left-0 w-full z-50 shadow-md bg-white" : ""
          } border-b border-gray-200`}
      >
        {/* DESKTOP */}
        <div className="hidden lg:flex items-center justify-between container mx-auto px-28 py-3">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 font-bold py-2 text-[#162726]">
              <BsFillGridFill className="text-[#07A698]" />
              CATEGORIES
            </button>

            <div className="flex items-center gap-10 text-[#162726]">
              <Link href="/"><p className="font-bold">HOME</p></Link>
              <Link href="/courses"><p className="font-bold hover:text-[#07A698]">COURSES</p></Link>
              <Link href="/shop"><p className="font-bold hover:text-[#07A698]">SHOP</p></Link>
              <Link href="/blog"><p className="font-bold hover:text-[#07A698]">BLOG</p></Link>
              <Link href="/contact"><p className="font-bold hover:text-[#07A698]">CONTACT</p></Link>
            </div>
          </div>

<<<<<<< HEAD
          <div>
            <h1 className='border border-gray-200 h-15'></h1>
          </div>

         
          <div className="flex items-center gap-10 text-[#162726]">
            <Link href={"/"}><p className='font-bold'>HOME</p></Link>
            <Link href={"/courses"}><p className='font-bold hover:text-[#07A698] duration-300'>COURSES</p></Link>
            <Link href={"/shop"}><p className='font-bold hover:text-[#07A698] duration-300'>SHOP</p></Link>
            <Link href={"/blog"}><p className='font-bold hover:text-[#07A698] duration-300'>BLOG</p></Link>
            <Link href={"/contact"}><p className='font-bold hover:text-[#07A698] duration-300'>CONTACT</p></Link>
          </div>
        </div>

        
        <div className="lg:hidden  block">
          <div className='flex items-center justify-between px-4 py-3'>
            
            <button className='text-[#07A698] text-2xl'>
              <BsFillGridFill />
            </button>
=======
          {/* RIGHT SIDE → ONLY WHEN STICKY */}
          {sticky && (
            <div  className="relative cursor-pointer">
              <div className='border rounded-full p-2 border-[#6E7271] cursor-pointer'>
                <TiShoppingCart size={25} color='#6E7271' />
              </div>
              <span className="absolute -top-1 -right-1 bg-[#07A698] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            </div>
          )}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden block">
          <div className="flex items-center justify-between px-4 py-3">
            <BsFillGridFill className="text-[#07A698] text-2xl" />
>>>>>>> a1ae2fa (fist commit)

            <div className="flex items-center gap-4">
              {/* MOBILE CART → ONLY WHEN STICKY */}
              {sticky && (
                <div className="relative">
                  <div className='border rounded-full p-2 border-[#6E7271] cursor-pointer'>
                    <TiShoppingCart size={25} color='#6E7271' />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-[#07A698] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {carts.length}
                  </span>
                </div>
              )}

              <button
                className="text-2xl text-[#162726]"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {mobileMenu && (
            <div className="bg-white shadow-md rounded-b-xl p-4 space-y-4">
              <Link href="/"><p className="font-semibold">HOME</p></Link>
              <Link href="/courses"><p className="font-semibold">COURSES</p></Link>
              <Link href="/shop"><p className="font-semibold">SHOP</p></Link>
              <Link href="/blog"><p className="font-semibold">BLOG</p></Link>
              <Link href="/contact"><p className="font-semibold">CONTACT</p></Link>
            </div>
          )}
        </div>
      </div>

      {/* SPACE FOR FIXED HEADER */}
      {sticky && <div className="lg:mt-[66px] mt-[56px]"></div>}
    </div>
  );
};

export default Header;
