import {useState} from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
const App = () => {
	const [navbarState, setNavbarState] = useState<boolean>(false);
	return (
		<div className="w-full min-w-[300px] min-h-svh">
			<Navbar
				state={navbarState}
				setNavbar={setNavbarState}
			/>
			<Header setNavbar={setNavbarState} />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
