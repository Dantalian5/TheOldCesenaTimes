import NewsCard from "@/components/NewsCard";
import PodcastCard from "@/components/PodcastCard";
type dataProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  index: number;
  side: "left" | "right";
};
const NewsBlock = ({ data, index, side }: dataProps) => {
  return (
    <section className="border-t-2 border-black-100 pb-2">
      {data[0].section === "opinion" && (
        <p className="my-2 font-franklin text-sm font-bold text-black-100">
          Opinion
        </p>
      )}
      <div
        className={
          side === "left" ? "grid gap-x-4  sm:grid-cols-5" : "flex flex-wrap"
        }
      >
        {data[0].section === "podcasts" ? (
          <div className="py-4 sm:col-span-5">
            <PodcastCard news={data[0]} />
          </div>
        ) : (
          <div className="py-4 sm:col-span-2">
            <NewsCard
              size={index === 0 ? "xlarge" : "large"}
              news={data[0]}
              setup={side}
            />
          </div>
        )}
        {data[0].section !== "podcasts" && (
          <div
            className={` self-top py-4 sm:col-span-3 sm:col-start-3 sm:row-span-2 sm:row-start-1 ${side === "right" && "lg:hidden"}`}
          >
            <picture>
              <source srcSet={data[0].multimedia[1].url} />
              <img
                className="w-full"
                src={data[0].multimedia[2].url}
                alt={data[0].multimedia[2].caption}
              />
            </picture>
            <p className="ml-auto mt-1 w-fit font-franklin text-10 text-gray-300">
              {data[0].multimedia[0].copyright}
            </p>
          </div>
        )}
        {data.length > 1 && (
          <div className="border-t border-gray-200 py-4 sm:col-span-2">
            <NewsCard size="medium" news={data[1]} />
          </div>
        )}
        {data.length > 2 && (
          <div className="flex flex-col gap-4 border-t border-gray-200 py-4 sm:col-span-5 sm:flex-row">
            <div className="flex-1">
              <NewsCard size="small" news={data[2]} />
            </div>
            {data.length > 3 && (
              <>
                <span className="block h-[1px] w-full bg-gray-200 sm:h-full sm:w-[1px]"></span>
                <div className="flex-1 ">
                  <NewsCard size="small" news={data[3]} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsBlock;
