import { useState, useEffect } from 'react';
import { IoMdPin } from 'react-icons/io';
import { IoMapOutline, IoSearch } from 'react-icons/io5';
import DetailCard from './components/DetailCard';
import SummaryCard from './components/SummaryCard';
function App() { 
	const images = [
		'https://w0.peakpx.com/wallpaper/157/742/HD-wallpaper-material-arts-drawing-mountain.jpg',
		'https://w0.peakpx.com/wallpaper/67/682/HD-wallpaper-sky-drawing-epic-galaxy-lights-mountain-mountains-night-star-stars.jpg',
		'https://w0.peakpx.com/wallpaper/241/411/HD-wallpaper-mountains-drawing.jpg',
		'https://w0.peakpx.com/wallpaper/630/235/HD-wallpaper-minimalist-sunset-blue-drawing-mountain-mountains-pretty-star-sun-sunrise.jpg',
	];

	const [city, setCity] = useState('Unkniwn city');;
	const [weatherData, setWeatherData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [backgroundImage, setBackgroundImage] = useState('')
	const [noData, setNoData] = useState('Not Data Yet')
	const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2xpng`);

	const randomImg = Math.floor(Math.random() * images.length)+1;
	const image = { url : images[randomImg-1]};

	useEffect(() => {
		setBackgroundImage(image.url)
	},[weatherData])

	const getIpAdress = (location) => {
		const {latitude, longitude} = location.coords;
		getWeather([latitude, longitude])
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { value } = e.target;
		setSearchTerm(value)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getWeather(searchTerm)
	};

	const getWeather = async(location) => {
		setWeatherData([]);
		
		let howToSerach = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`;

		try {
			let res = await fetch(`${process.env.REACT_APP_URL+howToSerach}&appid=${process.env.REACT_APP_API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`);
			let data = await res.json();

			if(data.cod != 200){
				setNoData = ('location Not Found')
			}
			setWeatherData(data);
			setCity(`${data.city.name}, ${data.city.country}`);
			setWeatherIcon(`${process.env.REACT_APP_ICON_URL + data.list[0].weather[0]['icon']}@4x.png`)
			console.log(data)
		}catch (error) {
			console.log('Error encounterd: '+error);
		}
	}


	return (
		<div className="bg-gray-800 flex items-center justify-center w-screen h-screen py-10">
			<div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto ">


				{/* Form container */}
				<div style={{backgroundImage: `url(${backgroundImage})`}} className="w-2/4 rounded-l-3xl z-10 a text-white">
					<div className='mx-auto flex justify-between items-center pt-10 px-7'>
						<h2 className='text-xl bg-slate-400 shadow-md font bold rounded-md bg-opacity-50 px-4 py-2'>
							Weather
						</h2>
						
						<h2 className='text-xl bg-slate-400 shadow-md font bold rounded-md bg-opacity-40 px-4 py-2 flex items-center'>
							<IoMapOutline style={{marginRight: '10px'}}/> {city}
						</h2>
					</div>
					<div className='flex flex-col justify-center items-center h-full'>
						<h1 className=" text-2xl">Weather For Everyday</h1>
						<hr className="h-1 bg-white w-1/4 rounded-full my-5" />
						<form className='flex justify-center w-full' onSubmit={handleSubmit}>
							<input type="text"
								placeholder="Enter location"
								className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 placeholder-gray-200"
								onChange={handleChange}
								required />
							<button type="submit" className="z-10 p-3 -ml-[50px]">
								<IoSearch className=" border-l my-auto z-10 cursor-pointer pl-1"
								aria-hidden="true" type="submit" size={22} />
							</button>
							<i className="my-auto cursor-pointer p-3" aria-hidden="true" onClick={() => {
								navigator.geolocation.getCurrentPosition(getIpAdress)
							}}>
								<IoMdPin size={22} />
							</i>
						</form>
					</div>
				</div>

				{/* Info section */}
				<div className='p-4 w-2/4 bg-gray-200 rounded-r-3xl'>
					<div className="flex flex-col my-10">
						{
							weatherData.length === 0 ? (
								<div className="container p-4 flex items-center justify-center h-1/3 mb-auto bg-white">
									<h1 className="text-gray-300 text-4xl font-bold uppercase">{noData}</h1>
								</div>
							):(
								<>
									<DetailCard icon={weatherIcon} data={weatherData}/>
									<ul className='grid grid-cols-2 gap-2 mt-5'>
										{weatherData.list.map( (days, index) => {
											if(index > 0){
												return (
													<SummaryCard key={index} day={days} />
												)
											}
										})}
									</ul>
								</>
							)
						}
					</div>
				</div>

			</div>
		</div>
	);
}

export default App;
