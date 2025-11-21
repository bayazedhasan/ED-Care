import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const WithUs = () => {
    return (
        <div
            className='py-20 sm:py-30 relative mt-10 sm:mt-25 bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/request-bg.png')" }}
        >
            <div className='container mx-auto px-5 sm:px-10 lg:px-28 flex flex-col lg:flex-row items-center lg:items-start gap-10'>
                
                {/* Image Left */}
                <div className='w-full lg:w-auto flex justify-center lg:block'>
                    <img className='w-64 sm:w-145' src="/assets/request-img-1.png" alt="" />
                </div>

                {/* Right Content */}
                <div className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4'>
                    {/* Heading */}
                    <div className='flex items-center gap-3 border w-55 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726] text-center lg:text-left'>Subscribe Newsletter</h1>
                    </div>

                    <h1 className='text-3xl sm:text-4xl lg:text-4xl text-white font-bold leading-10 sm:leading-13 py-4'>
                        Find Your Best Course With Us
                    </h1>

                    <p className='text-white max-w-md sm:max-w-lg text-center lg:text-left'>
                        Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.
                    </p>

                    {/* Inputs */}
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-10 py-6 w-full lg:w-auto'>
                        <input 
                            type="text" 
                            name="text" 
                            placeholder='Course Name' 
                            className="placeholder-white outline-none border border-gray-600 rounded-full py-3 px-6 w-full sm:w-auto" 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email address' 
                            className="placeholder-white outline-none border border-gray-600 rounded-full py-3 px-6 w-full sm:w-auto" 
                        />
                    </div>

                    {/* Subscribe Button */}
                    <div className='border rounded-full px-8 text-center cursor-pointer w-full sm:w-50 py-3 border-none bg-[#07A698]'>
                        <p className='text-white text-md font-semibold'>Subscribe Now</p>
                    </div>
                </div>

            </div>

            {/* Decorative Shape */}
            <div className='absolute top-10 right-10 hidden sm:block'>
               <img src="/assets/req-shape-1.png" alt="" />
            </div>
        </div>
    );
};

export default WithUs;
