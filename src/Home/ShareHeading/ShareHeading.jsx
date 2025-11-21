import React from 'react';

const ShareHeading = ({ heading, colorHeading }) => {
    return (
        <div>
            <h1
                className="
                    font-bold text-[#162726] text-2xl  sm:text-3xl md:text-4xl lg:text-4xl w-full lg:w-150  text-center lg:text-left  
                "
            >
                {heading} <span>{colorHeading}</span>
            </h1>
        </div>
    );
};

export default ShareHeading;
