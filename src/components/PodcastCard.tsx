import { svgPlayIcon } from "@/assets/svgImg";
type cardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  news: any;
};
const PodcastCard = ({ news }: cardProps) => {
  const { title, url } = news;
  return (
    <a href={url} className="group block cursor-pointer">
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
          <h2 className="mb-2 font-baskerville text-lg font-bold tracking-tight text-black-100 group-hover:text-gray-300">
            {title}
          </h2>
        </div>
      </div>
      <div className="text-xxs flex items-center gap-x-2 font-franklin font-normal uppercase text-gray-300">
        <span className="flex items-center justify-center rounded-full border border-gray-200 py-1 pl-[5px] pr-[3px] text-sm text-black-100 group-hover:bg-gray-200">
          {svgPlayIcon}
        </span>
        Listen to podcast
      </div>
    </a>
  );
};

export default PodcastCard;
