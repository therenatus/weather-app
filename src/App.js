import { useState } from 'react'
import Image from './2808.webp'
import {IoMapOutline, IoSearch} from 'react-icons/io5'
import DetailCard from './components/DetailCard'
import Summatycard from './components/Summatycard'
function App() { 
	const images = [
		'https://w0.peakpx.com/wallpaper/157/742/HD-wallpaper-material-arts-drawing-mountain.jpg',
		'https://w0.peakpx.com/wallpaper/67/682/HD-wallpaper-sky-drawing-epic-galaxy-lights-mountain-mountains-night-star-stars.jpg',
		'https://w0.peakpx.com/wallpaper/241/411/HD-wallpaper-mountains-drawing.jpg',
		'https://w0.peakpx.com/wallpaper/630/235/HD-wallpaper-minimalist-sunset-blue-drawing-mountain-mountains-pretty-star-sun-sunrise.jpg',

	]

	const [city, setCity] = useState('Unkniwn city')

	const randomImg = Math.floor(Math.random() * images.length)+1
	const a = { url : images[randomImg-1]}
	return (
		<div className="bg-gray-800 flex items-center justify-center w-screen h-screen p-10">
			<div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto bg-gray-100">


				{/* Form container */}
				<div style={{backgroundImage: `url(${a.url})`}} className="w-2/4 rounded-2xl z-10 a">
					<div className='mx-auto flex justify-between items-center pt-10 px-7'>
						<h2 className='text-xl text-white bg-slate-400 shadow-md font bold rounded-md bg-opacity-50 px-4 py-2'>
							Weather
						</h2>
						
						<h2 className='text-xl text-white bg-slate-400 shadow-md font bold rounded-md bg-opacity-40 px-4 py-2 flex items-center'>
							<IoMapOutline style={{marginRight: '10px'}}/> {city}
						</h2>
					</div>
					<div className='flex flex-col justify-center items-center h-full'>
					<	h1 className="text-white text-2xl">Whether For Everyday</h1>
						<hr className="h-1 bg-white w-1/4 rounded-full my-5" />
						<form className='flex justify-center w-full'>
							<input type="text"
								placeholder="Enter location"
								className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200"
								required />
							<button type="submit" className="z-10 p-3">
									<IoSearch className="text-white -ml-[50px] border-l my-auto z-10 cursor-pointer pl-1"
									aria-hidden="true" type="submit" size={22} />
							</button>
							
						</form>
					</div>
				</div>

				{/* Card section */}
				<div className='flex flex-col p-4'>
					<DetailCard />
					<Summatycard />
				</div>

			</div>
		</div>
	);
}

export default App;
