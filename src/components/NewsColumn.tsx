import { memo, useEffect, useState } from "react";
import { TypeArticle } from "@/utils/types";
import { svgSearch, svgClose } from "@/assets/svgImg";

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
const filterFn = (data: TypeArticle[], filter: string) => {
  if (filter === "") {
    return data;
  } else {
    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.abstract.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredData;
  }
};
const NewsColumn = memo(({ data }: { data: TypeArticle[] }) => {
  const [activeTab, setActiveTab] = useState<"search" | "latest">("latest");
  const [filterValue, setFilterValue] = useState<string>("");
  const [opinionatedData, setOpinionatedData] = useState<TypeArticle[]>(data);

  useEffect(() => {
    setOpinionatedData(filterFn(data, filterValue));
  }, [data, filterValue]);

  return (
    <main className="mx-auto max-w-[1285px] px-5 lg:px-11">
      <div className="overflow-hidden pb-[0.5px] pt-2">
        <ul className="relative flex items-center border-b border-t-2 border-b-gray-200 border-t-black-100 px-4">
          <li
            className={` relative px-11 py-2 text-gray-300 ${activeTab === "latest" && "text-gray-700 before:absolute before:-inset-2 before:z-10 before:rounded before:border-x before:border-y before:border-x-gray-200 before:border-b-white before:border-t-gray-200 before:bg-white before:content-['']"}`}
            onClick={() => setActiveTab("latest")}
          >
            <p className=" relative z-20 flex items-center font-franklin text-base font-bold">
              Latest
            </p>
          </li>
          <li
            className={` relative px-11 py-2 text-gray-300 ${activeTab === "search" && " text-gray-700 is-active group before:absolute before:-inset-2 before:z-10 before:rounded before:border-x before:border-y before:border-x-gray-200 before:border-b-white before:border-t-gray-200 before:bg-white before:content-['']"} `}
            onClick={() => setActiveTab("search")}
          >
            <form
              className="relative z-20 flex items-center gap-x-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <span className="text-base">{svgSearch}</span>
              <input
                type="text"
                placeholder="Search"
                className="block min-w-fit font-franklin text-base font-bold text-gray-300 outline-none placeholder:text-gray-300 group-[.is-active]:placeholder:text-gray-200"
                value={activeTab === "search" ? filterValue : ""}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              {filterValue !== "" && (
                <span
                  className="cursor-pointer text-base"
                  onClick={() => setFilterValue("")}
                >
                  {svgClose}
                </span>
              )}
            </form>
          </li>
        </ul>
      </div>

      <section className="py-8">
        <ol className="lg:max-w-[70%]">
          {opinionatedData.map((item, index) => (
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
