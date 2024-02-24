import NewsCard from '@/components/NewsCard';
import data from '@/metadata.json';

const newsType = (val: number) => {
	switch (val) {
		case 0:
			return 'large';
			break;
		case 1:
			return 'medium';
			break;
		default:
			return 'small';
			break;
	}
};
const Main = () => {
	let blockCount: number = 0;
	let section: string = '';
	let subsection: string = '';
	const newsMap = [];
	const newsMap12 = [];
	const newsBlock = [];

	for (const item of data) {
		if (blockCount === 0) {
			section = item.section;
			subsection = item.subsection;
		}
		if (
			(section === item.section && subsection === item.subsection) ||
			item.section === 'briefing'
		) {
			newsMap.push(
				<NewsCard
					size={item === data[0] ? 'xlarge' : newsType(blockCount)}
					news={item}
					key={item.uri}
				/>
			);

			newsBlock.push(item);
		} else {
			section = item.section;
			subsection = item.subsection;
			newsMap.push(
				<NewsCard
					size={newsType(0)}
					news={item}
					key={item.uri}
				/>
			);

			newsMap12.push(newsBlock.slice());
			newsBlock.length = 0;
			blockCount = 0;
			newsBlock.push(item);
		}

		blockCount < 4 ? blockCount++ : (blockCount = 0);

		if (blockCount === 0) {
			newsMap12.push(newsBlock.slice());
			newsBlock.length = 0;
		}
		console.log(newsBlock);
	}
	//console.log(newsBlock);

	return <main className="pt-4">{newsMap}</main>;
};

export default Main;
// todo : divide news on blocks of 4 or less related components
// todo : add spaciators
