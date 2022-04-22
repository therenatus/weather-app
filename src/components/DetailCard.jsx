import moment from 'moment';
import React from 'react';

function DetailCard() {
    return (
        <div className='p-4 flex justify-center items-center shadow-lg rounded-lg bg-white h-1/3 mb-auto'>
            <div className='my-auto'>
                <p className='text bold text-gray-500 text-5xl mb-2'>15 &deg;C</p>
                <p className='text-4xl text-gray-800 tracking-widest'>Clouds</p>
                <p className='text-gray-400 text-xs uppercase tracking-widest'></p>
                <p>{moment().format('dddd MMM YYYY ')}</p>
            </div>
            <div className='my-2 border-l-2 border-gray-100 p-2'>
                <p className='text-gray-400 text-lg'>Real feel: </p>
                <p className='text-gray-400 text-lg'>Humidity: </p>
                <p className='text-gray-400 text-lg'>Cloid cover:</p>
                <p className='text-gray-400 text-lg'>Min temp:</p>
                <p className='text-gray-400 text-lg'>Bax temp:</p>
            </div>
        </div>
    );
}

export default DetailCard; 