import moment from 'moment';
import React from 'react';

function DetailCard({icon, data}) {
    const {clouds, main, weather} = data.list[0]
    return (
        <div className='p-4 flex justify-center items-center shadow-lg rounded-lg bg-white h-1/3 mb-auto'>
            <div className='my-auto'>
                <p className='text bold text-gray-500 text-5xl mb-2'>{Math.round(main.temp)} &deg;C</p>
                <p className='text-4xl text-gray-800 tracking-widest'>{weather[0].main}
                    <img src={icon} className="w-1/4 inline" alt='imag'/>
                </p>
                <p>{moment().format('dddd MMM YYYY ')}</p>
            </div>
            <div className='my-2 border-l-2 border-gray-100 p-2'>
                <p className='text-gray-400 text-lg'>Real feel: {Math.round(main.feels_like)}</p>
                <p className='text-gray-400 text-lg'>Humidity: {main.humidity}%</p>
                <p className='text-gray-400 text-lg'>Cloid cover: {clouds.all}%</p>
                <p className='text-gray-400 text-lg'>Min temp: {Math.round(main.temp_min)}</p>
                <p className='text-gray-400 text-lg'>Bax temp: {Math.round(main.temp_max)}</p>
            </div>
        </div>
    );
}

export default DetailCard; 