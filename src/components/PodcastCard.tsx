import {svgPlay} from '@/assets/svgImg';
type cardProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	news: any;
};
const PodcastCard = ({news}: cardProps) => {
	const {title, url} = news;
	return (
		<div className="">
			<div className="flex gap-x-3.5 mb-2">
				<img
					className=" w-[90px] h-[90px]"
					src={news.multimedia[2].url}
					alt={news.multimedia[2].caption}
				/>
				<div>
					<div className="flex gap-x-2 mb-1.5">
						<p className="font-franklin font-semibold uppercase text-10 text-black-100">
							{news.subsection === '' ? 'the headlines' : news.subsection}
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
};

export default PodcastCard;
