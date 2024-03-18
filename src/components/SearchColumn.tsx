import { memo } from "react";
import { fnSetDate } from "@/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchColumn: React.FC<any> = memo((data) => {
  return (
    <section className="pb-8">
      <ol className="mx-auto max-w-[840px] px-6">
        {data.data.map(
          (item, index) =>
            item.title !== "" && (
              <li
                key={index}
                className=" flex flex-col justify-end border-t border-gray-200 py-5 align-top sm:flex-row"
              >
                <span className="mb-2 block min-w-32 font-franklin text-xxs font-normal text-gray-300">
                  {fnSetDate("shorter", new Date(item.pub_date))}
                </span>
                <article className="mb-1 flex min-h-32 flex-1 gap-3 sm:gap-10">
                  <div className="flex-1">
                    <p className="mb-2 font-franklin text-xxs font-medium uppercase text-gray-600">
                      {item.subsection_name === null ||
                      item.subsection_name === undefined
                        ? item.section_name
                        : item.subsection_name}
                    </p>
                    <h2
                      className={`mb-2 break-all font-baskerville text-sm font-normal text-black-100 sm:text-xl`}
                    >
                      {item.headline.main}
                    </h2>
                    <p
                      className={`font-pt text-xs font-normal text-gray-700 sm:text-sm`}
                    >
                      {item.abstract}
                    </p>
                    <p
                      className={`my-2 font-baskerville text-xxs font-normal text-black-100`}
                    >
                      {item.byline.original}
                    </p>
                  </div>
                  {item.multimedia.length > 0 && (
                    <img
                      className={`my-6 h-[80px] w-[120px] min-w-[120px] object-cover sm:my-0 lg:h-[136px] lg:w-[205px]`}
                      src={"http://static01.nyt.com/" + item.multimedia[0].url}
                      alt="image"
                    />
                  )}
                </article>
              </li>
            ),
        )}
      </ol>
    </section>
  );
});

export default SearchColumn;
