type cardProps = {
	size: 'xlarge' | 'large' | 'medium' | 'small' | 'audio';
	separator: 1 | 2;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	news: any;
};
const NewsCard = ({size, separator, news}: cardProps) => {
	const {title, abstract, url} = news;
	let titleClass: string =
		' font-baskerville font-bold tracking-tight text-black-100';
	let showAbstract: boolean = true;

	switch (size) {
		case 'xlarge':
			titleClass = titleClass + ' text-30';
			showAbstract = true;
			break;
		case 'large':
			titleClass = titleClass + ' text-28';
			showAbstract = true;
			break;
		case 'medium':
			titleClass = titleClass + ' text-18';
			showAbstract = true;
			break;
		case 'small':
			titleClass = titleClass + ' text-18';
			showAbstract = false;
			break;
	}

	return (
		<div
			className={`py-4  ${
				separator === 1
					? 'border-t-2 border-black-100'
					: 'border-t border-gray-200'
			}`}>
			<a
				href={url}
				className="mb-2 block">
				<h3 className={titleClass}>{title}</h3>
			</a>
			{showAbstract && (
				<p className="font-pt font-normal text-gray-400 text-base">
					{abstract}
				</p>
			)}
		</div>
	);
};

export default NewsCard;
