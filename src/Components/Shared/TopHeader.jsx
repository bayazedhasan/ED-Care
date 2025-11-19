import React from 'react';
import { FaPhone} from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdWatchLater } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div className='bg-[#1F2C30]'>
            <div className='flex justify-between container  mx-auto px-28'>
                <div className='flex items-center gap-3 '>
                <div className='flex gap-1 items-center  text-[#FFFFFF]'>
                    <FaPhone />
                    <p className="hover:text-[#39B8AD] duration-300 cursor-pointer">+880 1791971760</p>
                </div>
                <h1 className='border border-gray-700 h-13'></h1>
                <div  className='flex gap-1 items-center text-[#FFFFFF]'>
                    <CiLocationOn />
                    <p>258 Helano Street, New York</p>
                </div>
                <h1 className='border border-gray-700 h-13'></h1>
                <div  className='flex gap-1 items-center text-[#FFFFFF]'>
                    <MdWatchLater />
                    <p>Mon - Sat: 8:00 - 15:00</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1 text-[#FFFFFF] '>
                    <FaRegUser />
                    <h1 className='hover:text-[#39B8AD] duration-300 cursor-pointer'>Login/Register</h1>
                </div>
                <h1 className='border h-13 border-gray-700'></h1>
                <div className='flex gap-3 items-center text-[#FFFFDE]'>
                    <p className='text-md '>Follow Us</p>
                    <div className='hover:text-[#39B8AD] duration-300 cursor-pointer'>
                        <FaFacebookF />
                    </div>
                    <div className='hover:text-[#39B8AD] duration-300 cursor-pointer'>
                        <FaInstagram />
                    </div>
                    <div className='hover:text-[#39B8AD] duration-300 cursor-pointer'>
                        <FaBehance />
                    </div>
                    <div className='hover:text-[#39B8AD] duration-300 cursor-pointer'>
                        <FaSkype />
                    </div>
                    <div className='hover:text-[#39B8AD] duration-300 cursor-pointer'>
                        <FaYoutube />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TopHeader;