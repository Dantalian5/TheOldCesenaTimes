import { useState, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setFilter } from "@/redux/filterSlice";
import { svgSearch, svgArrow } from "@/assets/svgImg";
import SearchDisplay from "@/components/SearchDisplay";

const Search = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const filter = useAppSelector((state) => state.filter.value);
  const [sortBy, setSortBy] = useState<string>("relevance");
  const [section, setSection] = useState<string>("any");
  const [typeNews, setTypeNews] = useState<string>("any");
  const [page, setPage] = useState<number>(0);
  const [filterValue, setFilterValue] = useState<string>(filter);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFilter(filterValue));
    navigate(`/search/filter?=${filterValue}`);
  };
  useEffect(() => {
    setFilterValue(filter);
  }, [filter]);

  return (
    <div>
      <header className="flex justify-center border-b border-b-gray-200 ">
        <Link to="/">
          <h1 className="mt-4 cursor-pointer font-aguafina text-2xl font-normal sm:text-3xl">
            The Old Cesena Times
          </h1>
        </Link>
      </header>
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
      <SearchDisplay
        filter={filter}
        sortBy={sortBy}
        sectionFilter={section}
        typeFilter={typeNews}
        pageFilter={page}
      />
      <div className="mx-auto max-w-[1285px]  px-5 lg:px-11">
        <ol className="flex w-full items-center justify-center gap-2 border-t border-t-gray-200 pt-2">
          <li className="mr-4">
            <button
              className={`border-transparent border-b-2 font-franklin text-xs font-bold text-gray-300 hover:border-b-black-100`}
              onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
            >
              Prev
            </button>
          </li>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <li
              key={index}
              className={`px-1 ${index === 0 || index === 9 || index === page ? "block" : "hidden sm:block"}`}
            >
              <button
                className={`border-b-2 font-franklin text-xs font-bold ${index === page ? "border-b-black-100 text-black-100" : "border-b-transparent text-gray-300"}`}
                onClick={() => setPage(index)}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="mr-4">
            <button
              className={`border-transparent border-b-2 font-franklin text-xs font-bold text-gray-300 hover:border-b-black-100`}
              onClick={() => setPage((prev) => (prev < 9 ? prev + 1 : prev))}
            >
              Next
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
});

export default Search;
