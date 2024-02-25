import {svgClose} from '@/assets/svgImg';
const Navbar = () => {
	return (
		<nav className="absolute inset-0 bg-white p-6">
			<button
				onClick={() => console.log('close')}
				title="close menu">
				{svgClose}
			</button>
		</nav>
	);
};

export default Navbar;
