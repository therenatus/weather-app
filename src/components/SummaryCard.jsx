import React from 'react'

const Summarycard = () => {
    return (
        <li className='p-4 flex items-center justify-center bg-gray-100 rounded-xl my-auto mr-1'>
            <div className='my-auto'>
                <p className='font-bold text-3xl text-gray-400 mb-2'>13 &deg;C</p>
                <p className='text-2xl text-gray-800 tracking-widest'>Sun</p>
                <p className='text-gray-400 text-xs uppercase '></p>
            </div>
        </li>
    );
}

export default Summarycard;