import {svgMenu, svgPerson} from '@/assets/svgImg';
import {getDate} from '@/utils/getDate';

const Header = ({setNavbar}: {setNavbar: (arg: boolean) => void}) => {
	return (
		<header>
			<section className="w-full flex items-center justify-between px-3 pt-2 pb-1">
				<button
					className="p-2 cursor-pointer"
					onClick={() => setNavbar(true)}>
					{svgMenu}
				</button>
				<div>
					<h1 className=" font-aguafina text-24 font-normal mt-1.5">
						The Old Cesena Times
					</h1>
				</div>
				<button
					className="p-2 cursor-pointer"
					onClick={() => {
						console.log('click on sign in');
					}}>
					{svgPerson}
				</button>
			</section>
			<section className="w-full flex items-center justify-between px-5 py-3 border-y border-grey-200 bg-gray-100">
				<p className="font-franklin font-bold text-10 text-black-100">
					{getDate()}
				</p>
				<p className="font-franklin font-normal text-10 text-blue uppercase">
					follow if you like 👍
				</p>
			</section>
		</header>
	);
};

export default Header;
