import {svgPlay} from '@/assets/svgImg';
type cardProps = {
	size: 'xlarge' | 'large' | 'medium' | 'small';
	separator: 0 | 1 | 2;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	news: any;
};

const separatorFn = (separator: 0 | 1 | 2) => {
	switch (separator) {
		case 0:
			return 'border-0';
		case 1:
			return 'border-t-2 border-black-100';
		case 2:
			return 'border-t border-gray-200';
	}
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

	if (news.section === 'podcasts') {
		console.log(news);
		return (
			<div className={` py-4  ${separatorFn(separator)}`}>
				<div className="flex gap-x-3.5 mb-2">
					<img
						className=" w-[90px] h-[90px]"
						src={news.multimedia[2].url}
						alt={news.multimedia[2].caption}
					/>
					<div>
						<div className="flex gap-x-2 mb-1.5">
							<p className="font-franklin font-semibold uppercase text-10 text-black-100">
								the headlines
							</p>
							<p className="font-franklin font-semibold uppercase text-10 text-gray-300">
								audio
							</p>
						</div>
						<a
							href={url}
							className="mb-2 block">
							<h3 className="font-baskerville font-bold tracking-tight text-black-100 text-18">
								{title}
							</h3>
						</a>
					</div>
				</div>
				<a
					href={url}
					className="flex gap-x-2 items-center font-franklin font-normal uppercase text-10 text-gray-300">
					{svgPlay}Listen to podcast
				</a>
			</div>
		);
	} else {
		return (
			<div className={`py-4  ${separatorFn(separator)}`}>
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
	}
};

export default NewsCard;

// separator === 1
// 					? 'border-t-2 border-black-100'
// 					: 'border-t border-gray-200'
