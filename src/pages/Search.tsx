import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setFilter } from "@/redux/filterSlice";
import { svgLoading, svgSearch, svgArrow } from "@/assets/svgImg";
import { apiSearch } from "@/api/apiFetch";
import { fnSetDate } from "@/utils";

const NewsSearch = (data) => {
  console.log("render NewsSearch");
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
};
type NewsDisplayProps = {
  filter: string;
  sortBy: string;
  sectionFilter: string;
  typeFilter: string;
};
const NewsDisplay = memo(
  ({ filter, sortBy, sectionFilter, typeFilter }: NewsDisplayProps) => {
    console.log("render NewsDisplay");
    const { isPending, error, data } = useQuery({
      queryKey: [filter, sortBy, sectionFilter, typeFilter],
      queryFn: () => apiSearch(filter, sortBy, sectionFilter, typeFilter),
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
    return (
      <ErrorBoundary
        fallback={
          <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
            Ups...something went wrong, please try again later
          </p>
        }
      >
        {data.response.docs.length > 0 ? (
          <NewsSearch data={data.response.docs} />
        ) : (
          <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
            No results found
          </p>
        )}
      </ErrorBoundary>
    );
  },
);

const Search = () => {
  console.log("render Search");
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.value);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [section, setSection] = useState<string>("any");
  const [typeNews, setTypeNews] = useState<string>("any");
  const [filterValue, setFilterValue] = useState<string>(filter);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFilter(filterValue));
  };
  useEffect(() => {
    setFilterValue(filter);
  }, [filter]);

  console.log(sortBy);
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
      <section className=" bg-gray-100 py-7">
        <div className="mx-auto px-6 lg:max-w-[840px]">
          <p className="mb-1 font-franklin text-xs font-normal text-gray-500">
            Showing results for:
          </p>
          <form
            id="searchSearchForm"
            name="searchSearchForm"
            onSubmit={onFormSubmit}
            className="mb-5 flex w-full flex-col gap-x-8 gap-y-1 sm:flex-row sm:items-center"
          >
            <div className="border-b-transparent flex w-full items-center border-b hover:border-b-gray-200 ">
              <input
                type="text "
                className="bg-transparent w-full flex-auto font-franklin text-2xl font-bold text-black-100 outline-none placeholder:uppercase placeholder:text-gray-200 sm:text-3xl"
                name="searchonsection"
                id="searchonsection"
                placeholder="search"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <button className="text-3xl text-gray-300">{svgSearch}</button>
            </div>

            <div className="relative w-fit p-1">
              <select
                className="bg-transparent relative z-10 appearance-none py-1 pl-2 pr-8 font-franklin text-sm font-normal text-gray-500"
                name="section"
                id="section"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="newest">Sort by Newest</option>
                <option value="oldest">Sort by Oldest</option>
              </select>
              <span className="absolute right-0 top-1/2 z-0 -translate-y-1/2 text-2xl text-gray-500">
                {svgArrow}
              </span>
            </div>
          </form>
          <div className=" flex flex-wrap gap-x-16 gap-y-2">
            <div className="relative w-fit p-1">
              <select
                className="bg-transparent relative z-10 appearance-none py-1 pl-2 pr-8 font-franklin text-xs font-bold text-gray-500"
                name="filterSectionSearch"
                id="filterSectionSearch"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="any">Any Section</option>
                <option value="arts">Arts</option>
                <option value="books">Books</option>
                <option value="business">Business</option>
                <option value="new york">New York</option>
                <option value="opinion">Opinion</option>
                <option value="sports">Sports</option>
                <option value="us">U.S.</option>
                <option value="world">World</option>
              </select>
              <span className="absolute right-0 top-1/2 z-0 -translate-y-1/2 text-2xl text-gray-500">
                {svgArrow}
              </span>
            </div>
            <div className="relative w-fit p-1">
              <select
                className="bg-transparent relative z-10 appearance-none py-1 pl-2 pr-8 font-franklin text-xs font-bold text-gray-500"
                name="filterTypeSearch"
                id="filterTypeSearch"
                value={typeNews}
                onChange={(e) => setTypeNews(e.target.value)}
              >
                <option value="any">Any Type</option>
                <option value="article">Article</option>
                <option value="multimedia">Multimedia</option>
              </select>
              <span className="absolute right-0 top-1/2 z-0 -translate-y-1/2 text-2xl text-gray-500">
                {svgArrow}
              </span>
            </div>
          </div>
        </div>
      </section>
      <NewsDisplay
        filter={filter}
        sortBy={sortBy}
        sectionFilter={section}
        typeFilter={typeNews}
      />
    </div>
  );
};

export default Search;
