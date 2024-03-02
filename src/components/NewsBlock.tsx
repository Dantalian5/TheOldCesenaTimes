import NewsCard from "@/components/NewsCard";
import PodcastCard from "@/components/PodcastCard";
type dataProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  index: number;
  side: "left" | "right";
};

const headerKicker = (kicker: string, byline: string) => {
  switch (kicker) {
    case "News Analysis":
      return (
        <p className="mb-1.5 font-franklin text-10 font-semibold uppercase text-black-100">
          Analysis
        </p>
      );
    case "Opinion":
      return (
        <p className="mb-1.5 font-baskerville text-10 font-bold uppercase text-gray-300">
          {byline.replace("By", "")}
        </p>
      );
    default:
      return null;
  }
};
const NewsBlock = ({ data, index, side }: dataProps) => {
  return (
    //inicio de seccion
    <section className="border-t-2 border-black-100 pb-2">
      {data[0].section === "opinion" && (
        <p className="my-2 font-franklin text-sm font-bold text-black-100">
          Opinion
        </p>
      )}
      <div
        className={side === "left" ? "grid sm:grid-cols-10" : "flex flex-wrap"}
      >
        {data[0].section === "podcasts" ? (
          <div className="py-4 sm:col-span-10">
            <PodcastCard news={data[0]} />
          </div>
        ) : (
          // news #1
          <div className="py-4 sm:col-span-4 sm:mr-4">
            {headerKicker(data[0].kicker, data[0].byline)}
            <div className="flex gap-x-4">
              <a href={data[0].url} className="mb-2 block">
                <h3
                  className={`font-baskerville font-bold tracking-tight text-black-100 `}
                >
                  {data[0].title}
                </h3>
              </a>
              <img
                className={`hidden h-[90px] w-[90px] ${side === "right" && "lg:block"}`}
                src={data[0].multimedia[2].url}
                alt={data[0].multimedia[2].caption}
              />
            </div>
            <p className={`font-pt text-base font-normal text-gray-400 `}>
              {data[0].abstract}
            </p>
          </div>
        )}
        {data[0].section !== "podcasts" && (
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
            <p className="ml-auto mt-1 w-fit font-franklin text-10 text-gray-300">
              {data[0].multimedia[0].copyright}
            </p>
          </div>
        )}
        {data.length > 1 && (
          // news #2
          <div className="border-t border-gray-200 py-4 sm:col-span-4 sm:mr-4">
            {headerKicker(data[1].kicker, data[1].byline)}
            <a href={data[1].url} className="mb-2 block">
              <h3
                className={`font-baskerville font-bold tracking-tight text-black-100 `}
              >
                {data[1].title}
              </h3>
            </a>
            <p className={`font-pt text-base font-normal text-gray-400 `}>
              {data[1].abstract}
            </p>
          </div>
        )}
        {data.length > 2 && (
          // news #3
          <div className="border-t border-gray-200 py-4 sm:col-span-5">
            {headerKicker(data[2].kicker, data[2].byline)}
            <a href={data[2].url} className="mb-2 block">
              <h3
                className={`font-baskerville font-bold tracking-tight text-black-100 `}
              >
                {data[2].title}
              </h3>
            </a>
          </div>
        )}
        {data.length > 3 && (
          // news #4
          <div className="border-t border-gray-200 py-4 sm:col-span-5 sm:border-l sm:pl-2">
            {headerKicker(data[3].kicker, data[3].byline)}
            <a href={data[3].url} className="mb-2 block">
              <h3
                className={`font-baskerville font-bold tracking-tight text-black-100 `}
              >
                {data[3].title}
              </h3>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsBlock;
// <section className="border-t-2 border-black-100 pb-2">
//   {data[0].section === "opinion" && (
//     <p className="my-2 font-franklin text-sm font-bold text-black-100">
//       Opinion
//     </p>
//   )}
//   <div
//     className={
//       side === "left" ? "grid gap-x-4  sm:grid-cols-5" : "flex flex-wrap"
//     }
//   >
//     {data[0].section === "podcasts" ? (
//       <div className="py-4 sm:col-span-5">
//         <PodcastCard news={data[0]} />
//       </div>
//     ) : (
//       <div className="py-4 sm:col-span-2">
//         <NewsCard
//           size={index === 0 ? "xlarge" : "large"}
//           news={data[0]}
//           setup={side}
//         />
//       </div>
//     )}
//     {data[0].section !== "podcasts" && (
//       <div
//         className={` self-top py-4 sm:col-span-3 sm:col-start-3 sm:row-span-2 sm:row-start-1 ${side === "right" && "lg:hidden"}`}
//       >
//         <picture>
//           <source srcSet={data[0].multimedia[1].url} />
//           <img
//             className="w-full"
//             src={data[0].multimedia[2].url}
//             alt={data[0].multimedia[2].caption}
//           />
//         </picture>
//         <p className="ml-auto mt-1 w-fit font-franklin text-10 text-gray-300">
//           {data[0].multimedia[0].copyright}
//         </p>
//       </div>
//     )}
//     {data.length > 1 && (
//       <div className="border-t border-gray-200 py-4 sm:col-span-2">
//         <NewsCard size="medium" news={data[1]} setup={side} />
//       </div>
//     )}
//     {data.length > 2 && (
//       <div className="flex flex-col gap-4 border-t border-gray-200 py-4 sm:col-span-5 sm:flex-row">
//         <div className="flex-1">
//           <NewsCard size="small" news={data[2]} setup={side} />
//         </div>
//         {data.length > 3 && (
//           <>
//             <span className="block h-[1px] w-full bg-gray-200 sm:h-full sm:w-[1px]"></span>
//             <div className="flex-1 ">
//               <NewsCard size="small" news={data[3]} setup={side} />
//             </div>
//           </>
//         )}
//       </div>
//     )}
//   </div>
// </section>
