import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";


const Framework = () => {
    return (
        <div className='container mx-auto px-42 flex items-center gap-10 py-25'>
            <div className=' relative '>
                <img className='rounded-2xl' src="/assets/faq-img.png" alt="" />
                <div className='flex absolute border right-75 top-65 px-28 bg-[#FFFFFF] border-none py-18 rounded-lg justify-center items-center top-0'>
                    <p className='pc  absolute top-5 text-lg left-11  font-bold'>Total Students</p>
                    <img className=' absolute left-10 bottom-10 rounded-full border-4 border-white' src="/assets/faq-thumb-1.png" alt="" />
                    <img className=' absolute left-15 bottom-10 rounded-full border-4 border-white' src="/assets/faq-thumb-2.png" alt="" />
                    <img className=' absolute left-20 bottom-10 rounded-full border-4 border-white' src="/assets/faq-thumb-3.png" alt="" />
                    <img className=' absolute left-25 bottom-10 rounded-full border-4 border-white' src="/assets/faq-thumb-4.png" alt="" />
                    <div className='bc absolute left-30 bottom-10 rounded-full p-3.5 text-center border-4 border-white'>
                        <p className='font-bold text-sm text-white'>25+</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-3 border w-60 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Most Asked Question</h1>
                    </div>
                    <div className='pt-6'>
                        <h1 className='text-4xl font-bold leading-13 py-4'>Powerful Dashboard And High <br /> Performance Framework</h1>
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-150">
                        <div className="collapse-title font-bold  "><span className='text-gray-500'>01.</span> What courses do you offer?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678] ">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-150">
                        <div className="collapse-title font-bold  "><span className='text-gray-500'>02.</span> How Can Teachers Effectively Manage a Diverse Classroom?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678] ">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-150">
                        <div className="collapse-title font-bold  "><span className='text-gray-500'>03.</span>How Is Special Education Delivered in Inclusive Classrooms?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678] ">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Framework;