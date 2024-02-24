const Footer = () => {
	return (
		<footer className="mt-6">
			<div className="px-5">
				<hr className="w-full h-0.5 bg-gray-200 mb-[1px]" />
				<span className="w-full h-[1px] bg-gray-200 mb-[1px] block"></span>
				<h1 className=" font-aguafina text-24 font-normal mt-1.5 py-2.5">
					The Old Cesena Times
				</h1>
				{[
					['news', '#'],
					['opinion', '#'],
					['arts', '#'],
					['living', '#'],
					['listings & more', '#'],
				].map((item) => (
					<div key={item[0]}>
						<span className="w-full h-[1px] bg-gray-200 mb-[1px] block"></span>
						<a
							href={item[1]}
							className="font-franklin font-bold uppercase text-13 text-gray-600 py-4 block">
							{item[0]}
						</a>
					</div>
				))}
			</div>
			<hr className="w-full h-[1px] bg-gray-200 mb-[1px]" />
			<div className="px-5 py-3">
				<p className="font-franklin font-normal text-10 text-gray-500 text-center mb-6">
					© 2024 The Old Cesena Times | by MV
				</p>
				<div className="flex flex-wrap gap-x-16 gap-y-2.5 items-center justify-center">
					{[
						['MV', '#'],
						['Work with me', '#'],
						['Advertise', '#'],
						['Contact Me', '#'],
						['Accesibility', '#'],
						['Privacy Policy', '#'],
						['start2impact University', '#'],
					].map((item) => (
						<a
							key={item[0]}
							href={item[1]}
							className="font-franklin font-normal text-10 text-gray-600">
							{item[0]}
						</a>
					))}
				</div>
			</div>
			<hr className="w-full h-[1px] bg-gray-200 mb-[1px]" />
			<div className="px-5 py-3">
				<a
					href="https://developer.nytimes.com/"
					className="font-franklin font-normal text-10 text-gray-500 text-center mb-6 block">
					Data provided by The New York Times
				</a>
				<a
					href="https://developer.nytimes.com/"
					title="nyt atribution">
					<img
						src="assets/images/poweredby_nytimes_200a.png"
						width="200"
						alt="nyt-atribution-logo"
						className="mx-auto"
					/>
				</a>

				<p className="font-franklin font-normal text-10 text-gray-500 text-center mb-6 py-2">
					We extend our gratitude to the nyt-api and start2impact University.
					This project is an academic endeavor, designed solely for educational
					purposes within the realm of web development. We appreciate your
					attention.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
