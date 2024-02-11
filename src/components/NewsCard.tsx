// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NewsCard = ({news}: any) => {
	const {title, abstract} = news;

	return (
		<div className="px-5">
			<h1 className=" font-baskerville font-bold text-30 tracking-tight text-black">
				{title}
			</h1>
			<p className=" font-pt font-normal text-base text-gray-300">{abstract}</p>
		</div>
	);
};

export default NewsCard;
