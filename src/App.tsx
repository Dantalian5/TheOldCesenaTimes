import {useState} from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
const App = () => {
	const [navbarState, setNavbarState] = useState<boolean>(false);
	return (
		<div className="w-full min-w-[300px] min-h-svh">
			{!navbarState && <Header setNavbar={setNavbarState} />}
			<Navbar
				state={navbarState}
				setNavbar={setNavbarState}
			/>
			{!navbarState && <Main />}
			{!navbarState && <Footer />}
		</div>
	);
};

export default App;
