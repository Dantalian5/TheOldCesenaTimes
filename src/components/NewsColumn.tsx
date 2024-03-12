import { memo } from "react";
import { TypeArticle } from "@/utils/types";

const dateFn = (date) => {
  const objectDate = new Date(date);
  const formatedDate = objectDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatedDate;
};
const byFn = (byline) => {
  const parts = byline.split(" ");
  const transformedParts = parts.map((part) => {
    return part.toLowerCase() === "and" || part.toLowerCase() === "by"
      ? part
      : part.toUpperCase();
  });
  const transformedText = transformedParts.join(" ");
  return transformedText;
};
const NewsColumn = memo(({ data }: { data: TypeArticle[] }) => {
  console.log(data);
  data.map((item, index) => console.log(index, " -> ", item.multimedia));
  return (
    <main className="mx-auto max-w-[1285px] px-5 lg:px-11">
      <ul className="flex items-center border-b border-t-2 border-b-gray-200 border-t-black-100 px-4">
        <li className="">
          <p>Latest</p>
        </li>
        <li>
          <p>Search</p>
        </li>
      </ul>
      <section className="py-8">
        <ol className="lg:max-w-[70%]">
          {data.map((item, index) => (
            <li
              key={index}
              className=" flex flex-col justify-end border-t border-gray-200 py-5 align-top sm:flex-row-reverse"
            >
              <article className="mb-1 min-h-32 flex-1">
                {item.multimedia && (
                  <div className={`float-right mb-5 ml-3 w-[150px] sm:ml-10`}>
                    <img
                      className={` w-full`}
                      src={item.multimedia[1].url}
                      alt={item.multimedia[1].caption}
                    />
                  </div>
                )}
                <h2
                  className={`mb-2 font-baskerville text-sm font-normal text-black-100 sm:text-xl`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-gray-700 font-pt text-xs font-normal sm:text-sm`}
                >
                  {item.abstract}
                </p>
                <p
                  className={`text-xxs hidden pb-1 pt-3 font-franklin font-normal text-gray-300 sm:block `}
                >
                  {byFn(item.byline)}
                </p>
              </article>
              <span className="text-xxs block min-w-32 font-franklin font-normal text-gray-300 sm:py-2">
                {dateFn(item.updated_date)}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
});

export default NewsColumn;
