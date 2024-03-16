import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { svgLoading } from "@/assets/svgImg";
import { apiSearch } from "@/api/apiFetch";
import { fnSetDate } from "@/utils";

const NewsSearch = (data) => {
  console.log(data.data);
  return (
    <section className="pb-8">
      <ol className="mx-auto px-6 lg:max-w-[840px]">
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
                      className={`mb-2 font-baskerville text-sm font-normal text-black-100 sm:text-xl`}
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
                  {item.multimedia && (
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
};
const NewsDisplay = ({ filter }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [filter],
    queryFn: () => apiSearch(filter),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
  });

  if (isPending)
    return (
      <p className="mx-auto flex max-w-[1285px] flex-col items-center gap-2 px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
        Loading... <span className="text-3xl">{svgLoading}</span>
      </p>
    );

  if (error)
    return (
      <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
        Error retrieving data. Please refresh the page or try again in a few
        minutes.
      </p>
    );
  console.log(data.response);
  return (
    <ErrorBoundary
      fallback={
        <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
          Ups...something went wrong, please try again later
        </p>
      }
    >
      <NewsSearch data={data.response.docs} />
    </ErrorBoundary>
  );
};

const Search = () => {
  console.log("render Search");

  return (
    <div>
      <header className="flex justify-center border-b border-b-gray-200 ">
        <Link to="/">
          <h1 className="mt-4 cursor-pointer font-aguafina text-2xl font-normal sm:text-3xl">
            The Old Cesena Times
          </h1>
        </Link>
      </header>
      <div className="mx-auto mb-4 mt-8 max-w-[1285px] px-5 lg:px-11"></div>
      <NewsDisplay filter={"trump"} />
    </div>
  );
};

export default Search;
