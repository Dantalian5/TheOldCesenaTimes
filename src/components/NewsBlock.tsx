import NewsCard from '@/components/NewsCard';
type dataProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
};
const NewsBlock = ({data}: dataProps) => {
	console.log(data);
	return (
		<section className="px-5">
			<div>
				<div>
					<NewsCard
						size="large"
						separator={1}
						news={data[0]}
					/>
				</div>
				<div>
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
				{data.length > 1 && (
					<div>
						<NewsCard
							size="medium"
							separator={2}
							news={data[1]}
						/>
					</div>
				)}
				{data.length > 2 && (
					<div>
						<NewsCard
							size="small"
							separator={2}
							news={data[2]}
						/>
					</div>
				)}
				{data.length > 3 && (
					<div>
						<NewsCard
							size="small"
							separator={2}
							news={data[3]}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default NewsBlock;
