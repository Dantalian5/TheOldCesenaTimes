import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
const App = () => {
	return (
		<div className="w-full min-w-[300px] min-h-svh">
			<Navbar />
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
