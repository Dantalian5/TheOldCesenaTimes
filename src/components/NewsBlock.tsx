import NewsCard from '@/components/NewsCard';
type dataProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	index: number;
};
const NewsBlock = ({data, index}: dataProps) => {
	return (
		<section className="px-5">
			<div className="grid">
				<div className=" sm:col-span-1">
					<NewsCard
						size={index === 0 ? 'xlarge' : 'large'}
						separator={index === 0 ? 0 : 1}
						news={data[0]}
					/>
				</div>
				{data[0].section !== 'podcasts' && (
					<div className=" sm:col-start-2 sm:col-span-2 sm:row-start-1 sm:row-span-2 self-top">
						<div className=" mt-3 py-4">
							<picture>
								<source srcSet={data[0].multimedia[1].url} />
								<img
									className="w-full"
									src={data[0].multimedia[2].url}
									alt={data[0].multimedia[2].caption}
								/>
							</picture>
							<p className="font-franklin text-10 text-gray-300 mt-1 ml-auto w-fit">
								{data[0].multimedia[0].copyright}
							</p>
						</div>
					</div>
				)}

				{data.length > 1 && (
					<div className="sm:col-span-1">
						<NewsCard
							size="medium"
							separator={2}
							news={data[1]}
						/>
					</div>
				)}
				<div className="flex sm:col-span-3">
					{data.length > 2 && (
						<div className="">
							<NewsCard
								size="small"
								separator={2}
								news={data[2]}
							/>
						</div>
					)}
					{data.length > 3 && (
						<div className="">
							<NewsCard
								size="small"
								separator={2}
								news={data[3]}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default NewsBlock;
