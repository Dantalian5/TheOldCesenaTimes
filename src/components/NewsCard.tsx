type cardProps = {
	size: 'xlarge' | 'large' | 'medium' | 'small' | 'audio';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	news: any;
};
const NewsCard = ({size, news}: cardProps) => {
	const {title, abstract, url, multimedia} = news;
	let titleClass: string =
		' font-baskerville font-bold tracking-tight text-black-100';
	let showAbstract: boolean = true;
	let showImage: boolean = true;

	switch (size) {
		case 'xlarge':
			titleClass = titleClass + ' text-30';
			showAbstract = true;
			showImage = true;
			break;
		case 'large':
			titleClass = titleClass + ' text-28';
			showAbstract = true;
			showImage = true;
			break;
		case 'medium':
			titleClass = titleClass + ' text-18';
			showAbstract = true;
			showImage = false;
			break;
		case 'small':
			titleClass = titleClass + ' text-18';
			showAbstract = false;
			showImage = false;
			break;
	}

	return (
		<div className="px-5">
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
			{showImage && (
				<div className=" mt-3">
					<picture>
						<source srcSet={multimedia[1].url} />
						<img
							className="w-full"
							src={multimedia[2].url}
							alt={multimedia[2].caption}
						/>
					</picture>
					<p className="font-franklin text-10 text-gray-300 mt-1 ml-auto w-fit">
						{multimedia[0].copyright}
					</p>
				</div>
			)}
		</div>
	);
};

export default NewsCard;
