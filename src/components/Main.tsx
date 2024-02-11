import NewsCard from '@/components/NewsCard';
import data from '@/metadata.json';

const Main = () => {
	const news = data[0];

	return (
		<main className="pt-4">
			<NewsCard news={news} />
		</main>
	);
};

export default Main;
