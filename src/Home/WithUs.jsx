import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";

const WithUs = () => {
    return (
        <div
            className='py-30 relative mt-25'
            style={{ backgroundImage: "url('/assets/request-bg.png')" }}
        >
            <div className='container mx-auto px-28 flex items-center gap-16'>
                <div>
                    <img className='w-145' src="/assets/request-img-1.png" alt="" />
                </div>
                <div>
                    <div className='flex items-center gap-3 border w-55 rounded-full py-1 px-2 bg-white border-gray-300'>
                        <div className='border rounded-full p-1.5 bg-[#DAF2F0] border-none'>
                            <BsFillLightningChargeFill color='#07A698' />
                        </div>
                        <h1 className='text-[#162726]'>Subscribe Newsletter</h1>
                    </div>
                    <div className='pt-3'>
                        <h1 className='text-4xl text-white font-bold leading-13 py-4'>Find Your Best Course With Us</h1>
                    </div>
                    <div>
                        <p className='p'>Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.</p>
                    </div>
                    <div className='flex items-center gap-10 py-6'>
                        <div className='border border-gray-600 rounded-full py-3.5 px-10'>
                            <input type="text" name="text" placeholder='Course Name' className="placeholder-white outline-none" id="" />
                        </div>
                        <div className='border border-gray-600 rounded-full py-3.5 px-10'>
                            <input type="email" name="email" placeholder='Email address' className="placeholder-white outline-none" id="" />
                        </div>

                    </div>
                    <div className='border rounded-full px-8 text-center cursor-pointer w-50 py-3 border-none bg-[#07A698]'>
                        <p className='text-white text-md font-semibold'>Subscribe Now</p>
                    </div>
                </div>
            </div>
            <div className=' absolute top-10 right-10'>
               <img src="/assets/req-shape-1.png" alt="" />
            </div>
        </div>
    );
};

export default WithUs;
