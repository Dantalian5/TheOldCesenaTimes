import {useState} from 'react';
import {svgClose, svgArrow} from '@/assets/svgImg';
const Navbar = ({
	state,
	setNavbar,
}: {
	state: boolean;
	setNavbar: (arg: boolean) => void;
}) => {
	console.log('render Navbar');
	const [activeKey, setActiveKey] = useState<string | null>(null);
	const handleClick = (key: string | null) => {
		setActiveKey(activeKey === key ? null : key);
	};
	const navbarItems = {
		'U.S.': {
			sections: [
				[
					'U.S.',
					'Politics',
					'New York',
					'California',
					'Education',
					'Health',
					'Obituaries',
					'Science',
				],
				['Climate', 'Sports', 'Business', 'Tech', 'The Upshot', 'The Magazine'],
			],
			['U.S. Politics']: [
				['2024 Elections', 'Supreme Court', 'Congress', 'Biden Administration'],
			],
		},
		World: {
			sections: [
				['World', 'Africa', 'Americas', 'Asia', 'Australia', 'Canada'],
				['Europe', 'Middle East', 'Science', 'Climate', 'Health', 'Obituaries'],
			],
		},
		Bussiness: {
			sections: [
				[
					'Bussiness',
					'Tech',
					'Economy',
					'Media',
					'Finance and Markets',
					'DealBook',
					'Personal Tech',
					'Energy Transition',
					'Your Money',
				],
			],
		},
		Arts: {
			section: [
				[
					'Todays Arts',
					'Books',
					'Best Sellers',
					'Dance',
					'Movies',
					'Music',
					'Television',
					'Theater',
					'Pop Culture',
					'T Magazine',
					'Visual Arts',
				],
			],
		},
		Lifestyle: {
			section: [
				[
					'Lifestyle',
					'Well',
					'Travel',
					'Style',
					'Real State',
					'Food',
					'Fashion',
					'Love',
					'Your Money',
					'Personal Tech',
					'T Magazine',
				],
			],
			columns: [['Modern Love', 'The Hunt', 'Social Qs', 'The Ethicist']],
			well: [['Eat', 'Move', 'Mind', 'Family', 'Live', 'Ask Well']],
		},
		Opinion: {
			section: [
				[
					'Opinion',
					'Guest Essays',
					'Editorials',
					'Op-Docs',
					'Videos',
					'Letters',
				],
			],
			topics: [
				[
					'Politics',
					'World',
					'Business',
					'Tech',
					'Climate',
					'Health',
					'Culture',
				],
			],
		},
	};

	const navList = Object.entries(navbarItems).map(([key, value]) => (
		<li
			className="w-full border-b border-gray-200 last:border-0"
			key={key}>
			<button
				className="flex items-center justify-between w-full py-6 font-franklin font-semibold text-18 tracking-tight"
				onClick={() => handleClick(key)}>
				{key} {svgArrow}
			</button>
			{Object.entries(value).map(([section, subsection]) => (
				<ul
					className={`${
						activeKey === key ? 'block' : 'hidden'
					} flex flex-wrap gap-x-8 gap-y-4 py-3`}
					key={section}>
					<li className="w-full">
						<h4 className=" font-franklin font-medium text-sm text-gray-300 uppercase">
							{section}
						</h4>
					</li>
					{subsection.map((column, index) => (
						<ul
							className="flex-auto"
							key={index}>
							{column.map((item, index) => (
								<li
									className="mb-4"
									key={index}>
									<a
										className="font-franklin font-medium text-18"
										href="">
										{item}
									</a>
								</li>
							))}
						</ul>
					))}
				</ul>
			))}
		</li>
	));

	return (
		<nav
			className={`${
				state ? 'block' : 'hidden'
			} absolute w-full min-h-full bg-white px-6 pt-0 pb-6`}>
			<div className=" sticky top-0 py-6 bg-white">
				<button
					className="cursor-pointer mb-9"
					onClick={() => setNavbar(false)}
					title="close menu">
					{svgClose}
				</button>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex items-stretch gap-x-3">
					<input
						type="text "
						className="flex-auto border border-gray-300 rounded px-3 py-2  text-base font-franklin font-normal text-black-100 placeholder:uppercase placeholder:text-gray-300"
						name="search"
						placeholder="search"
					/>
					<button className=" min-w-9 bg-blubtn p-2.5 rounded font-franklin font-bold text-white text-xs uppercase shadow-btn">
						go
					</button>
				</form>
			</div>
			<ul>{navList}</ul>
		</nav>
	);
};

export default Navbar;
