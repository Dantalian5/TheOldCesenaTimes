import PodcastCard from "@/components/PodcastCard";
import type { TypeArticle } from "@/utils/types";
type dataProps = {
  data: TypeArticle[];
  index?: number;
  side: "left" | "right";
};

const headerKicker = (kicker: string, byline: string, section: string = "") => {
  switch (true) {
    case kicker === "News Analysis":
      return (
        <p className="mb-1.5 font-franklin text-xxs font-semibold uppercase text-black-100">
          Analysis
        </p>
      );
    case kicker === "Guest Essay" || section === "opinion":
      return (
        <p className="mb-1.5 font-baskerville text-xxs font-bold uppercase text-gray-300">
          {byline.replace("By", "")}
        </p>
      );
    default:
      return null;
  }
};
const NewsBlock = ({ data, index = 1, side }: dataProps) => {
  console.log(data);
  return (
    //inicio de seccion
    <section className="border-t-2 border-black-100 py-2">
      {data[0].section === "opinion" && (
        <p className="my-2 font-franklin text-sm font-bold text-black-100">
          Opinion
        </p>
      )}
      <div
        className={`sm:grid sm:grid-cols-10 ${
          side === "right" && "lg:grid-cols-1"
        }`}
      >
        {data[0].section === "podcasts" ? (
          <div className="py-4 sm:col-span-10">
            <PodcastCard news={data[0]} />
          </div>
        ) : (
          // news #1
          <div
            className={`py-4 sm:col-span-4 sm:mr-5 ${side === "right" && "lg:mr-0"}`}
          >
            <a href={data[0].url} className=" group block cursor-pointer">
              <div className="flex gap-x-4">
                <div className="w-full">
                  {headerKicker(
                    data[0].kicker,
                    data[0].byline,
                    data[0].section,
                  )}
                  <h2
                    className={`mb-2 font-baskerville font-bold tracking-tight text-black-100 group-hover:text-gray-300 ${index === 0 ? "text-3xl sm:text-lg" : "text-xxl sm:text-lg"} ${side === "right" && "lg:text-base"}`}
                  >
                    {data[0].title}
                  </h2>
                </div>
                {data[0].multimedia !== null &&
                  data[0].multimedia !== undefined && (
                    <img
                      className={`hidden h-[90px] w-[90px] ${side === "right" && "lg:block"}`}
                      src={data[0].multimedia[2].url}
                      alt={data[0].multimedia[2].caption}
                    />
                  )}
              </div>
              <p
                className={`font-pt text-base font-normal text-gray-400 ${side === "right" && "lg:hidden"}`}
              >
                {data[0].abstract}
              </p>
            </a>
          </div>
        )}
        {data[0].section !== "podcasts" &&
          data[0].multimedia !== null &&
          data[0].multimedia !== undefined && (
            // block image
            <div
              className={` self-top py-4 sm:col-span-6 sm:col-start-5 sm:row-span-2 sm:row-start-1 ${side === "right" && "lg:hidden"}`}
            >
              <picture>
                <source srcSet={data[0].multimedia[1].url} />
                <img
                  className="w-full"
                  src={data[0].multimedia[2].url}
                  alt={data[0].multimedia[2].caption}
                />
              </picture>
              <p className="ml-auto mt-1 w-fit font-franklin text-xxs text-gray-300">
                {data[0].multimedia[0].copyright}
              </p>
            </div>
          )}
        {data.length > 1 && (
          // news #2
          <div
            className={`border-t border-gray-200 py-4 sm:col-span-4 sm:mr-5 ${side === "right" && "lg:mr-0"}`}
          >
            <a href={data[1].url} className=" group block cursor-pointer">
              {headerKicker(data[1].kicker, data[1].byline, data[1].section)}
              <h2
                className={`mb-2 font-baskerville text-lg font-bold tracking-tight text-black-100 group-hover:text-gray-300 sm:text-base`}
              >
                {data[1].title}
              </h2>
              <p
                className={`${side === "right" && "lg:hidden"} font-pt text-base font-normal text-gray-400`}
              >
                {data[1].abstract}
              </p>
            </a>
          </div>
        )}
        {data.length > 2 && (
          // news #3
          <div
            className={`border-t border-gray-200 py-4 sm:col-span-5 sm:pr-3 ${side === "left" && "sm:pr-4"}`}
          >
            <a href={data[2].url} className=" group block cursor-pointer">
              {headerKicker(data[2].kicker, data[2].byline, data[2].section)}
              <h2
                className={`mb-2 font-baskerville text-lg font-bold tracking-tight text-black-100 group-hover:text-gray-300 sm:text-base`}
              >
                {data[2].title}
              </h2>
            </a>
          </div>
        )}
        {data.length > 3 && (
          // news #4
          <div className={`border-t border-gray-200 py-4 sm:col-span-5`}>
            <div
              className={`h-full sm:border-l sm:pl-4 ${side === "right" && "lg:border-l-0 lg:pl-0"}`}
            >
              <a href={data[2].url} className=" group block cursor-pointer">
                {headerKicker(data[3].kicker, data[3].byline, data[3].section)}
                <h2
                  className={`mb-2 font-baskerville text-lg font-bold tracking-tight text-black-100 group-hover:text-gray-300 sm:text-base`}
                >
                  {data[3].title}
                </h2>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsBlock;
