import React from 'react';

const ShareHeading = ({heading,colorHeading}) => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-[#162726] w-150'>{heading} <span>{colorHeading}</span></h1>
            </div>
        </div>
    );
};

export default ShareHeading;