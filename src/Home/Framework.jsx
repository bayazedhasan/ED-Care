import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const Framework = () => {
    return (
        <div className='container mx-auto px-5 sm:px-10 lg:px-42 flex flex-col lg:flex-row items-center gap-10 py-10 lg:py-25'>
            
            
            <div className='relative w-full lg:w-auto'>
                <img className='rounded-2xl w-full lg:w-auto' src="/assets/faq-img.png" alt="" />
                
               
                <div className='hidden md:block flex absolute top-0 lg:top-65 right-0 lg:right-75 px-32  py-5 lg:py-18 bg-white rounded-lg justify-center items-center w-full sm:w-auto'>
                    <p className='text-lg font-bold absolute top-5 left-5 lg:left-11 text-center lg:text-left'>Total Students</p>
                    <img className='absolute left-10 bottom-10 w-8 h-8 rounded-full border-4 border-white lg:w-auto lg:h-auto' src="/assets/faq-thumb-1.png" alt="" />
                    <img className='absolute left-16 bottom-10 w-8 h-8 rounded-full border-4 border-white lg:w-auto lg:h-auto' src="/assets/faq-thumb-2.png" alt="" />
                    <img className='absolute left-24 bottom-10 w-8 h-8 rounded-full border-4 border-white lg:w-auto lg:h-auto' src="/assets/faq-thumb-3.png" alt="" />
                    <img className='absolute left-32 bottom-10 w-8 h-8 rounded-full border-4 border-white lg:w-auto lg:h-auto' src="/assets/faq-thumb-4.png" alt="" />
                    <div className='bc absolute left-40 bottom-10 rounded-full p-2.5 lg:p-3.5 text-center border-4 border-white'>
                        <p className='font-bold text-sm text-white'>25+</p>
                    </div>
                </div>
            </div>

            
            <div className='flex flex-col w-full lg:w-auto'>
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <div className='flex items-center gap-3 border w-60 rounded-full py-1 px-2 bg-white border-gray-300 mb-4'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726] text-sm sm:text-base lg:text-base'>Most Asked Question</h1>
                    </div>
                    <div>
                        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 sm:leading-10 lg:leading-13 py-4'>
                            Powerful Dashboard And High <br className='hidden lg:block' /> Performance Framework
                        </h1>
                    </div>
                </div>

               
                <div className='mt-6 w-full lg:w-150 flex flex-col gap-4'>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-full lg:w-150">
                        <div className="collapse-title font-bold"><span className='text-gray-500'>01.</span> What courses do you offer?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678]">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-full lg:w-150">
                        <div className="collapse-title font-bold"><span className='text-gray-500'>02.</span> How Can Teachers Effectively Manage a Diverse Classroom?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678]">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow bg-base-100 w-full lg:w-150">
                        <div className="collapse-title font-bold"><span className='text-gray-500'>03.</span> How Is Special Education Delivered in Inclusive Classrooms?</div>
                        <div className="collapse-content text-sm pt-2 text-[#737678]">
                            We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences. Our courses are designed for different education levels, from primary school to university.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Framework;
