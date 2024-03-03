import { svgPlay } from "@/assets/svgImg";
type cardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  news: any;
};
const PodcastCard = ({ news }: cardProps) => {
  const { title, url } = news;
  return (
    <div className="">
      <div className="mb-2 flex gap-x-3.5">
        <img
          className=" h-[90px] w-[90px]"
          src={news.multimedia[2].url}
          alt={news.multimedia[2].caption}
        />
        <div>
          <div className="mb-1.5 flex gap-x-2">
            <p className="text-xxs font-franklin font-semibold uppercase text-black-100">
              {news.subsection === "" ? "the headlines" : news.subsection}
            </p>
            <p className="text-xxs font-franklin font-semibold uppercase text-gray-300">
              audio
            </p>
          </div>
          <a href={url} className="mb-2 block">
            <h3 className="font-baskerville text-lg font-bold tracking-tight text-black-100">
              {title}
            </h3>
          </a>
        </div>
      </div>
      <a
        href={url}
        className="text-xxs flex items-center gap-x-2 font-franklin font-normal uppercase text-gray-300"
      >
        {svgPlay}Listen to podcast
      </a>
    </div>
  );
};

export default PodcastCard;
