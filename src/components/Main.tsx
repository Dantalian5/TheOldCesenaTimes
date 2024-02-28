import NewsBlock from '@/components/NewsBlock';
import data from '@/metadata.json';

const Main = () => {
	console.log('render Main');
	let blockCount: number = 0;
	let section: string = '';
	let subsection: string = '';
	const newsMap = [];
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
			newsBlock.push(item);
		} else {
			section = item.section;
			subsection = item.subsection;

			newsMap.push(newsBlock.slice(0));
			newsBlock.length = 0;
			blockCount = 0;
			newsBlock.push(item);
		}

		if (blockCount < 4) {
			blockCount++;
		} else {
			blockCount = 0;
			newsMap.push(newsBlock.slice(0));
			newsBlock.length = 0;
		}
	}
	return (
		<main className="pt-4">
			{newsMap.map((dataBlock, index) => (
				<NewsBlock
					key={dataBlock[0].uri}
					data={dataBlock}
					index={index}
				/>
			))}
		</main>
	);
};

export default Main;
