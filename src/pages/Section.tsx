import { useState, useEffect, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NewsColumn from "@/components/NewsColumn";
import { svgLoading } from "@/assets/svgImg";
import { apiFetch } from "@/api/apiFetch";

const DisplayNews = ({ filter, section }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["nytdata"],
    queryFn: () => apiFetch(section),
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
  const news =
    filter === ""
      ? data.results
      : data.results.filter((item) => item.subsection === filter);
  return (
    <ErrorBoundary
      fallback={
        <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
          Ups...something went wrong, please try again later
        </p>
      }
    >
      <NewsColumn data={news.length > 0 ? news : data.results} />
    </ErrorBoundary>
  );
};
const Section = memo(() => {
  console.log("render Sections");
  const { state } = useLocation();
  const [section, setSection] = useState<string>(state.url);
  useEffect(() => {
    setSection(state.url);
  }, [state]);

  return (
    <div>
      <header className="flex justify-center border-b border-b-gray-200 ">
        <Link to="/">
          <h1 className="mt-4 cursor-pointer font-aguafina text-2xl font-normal sm:text-3xl">
            The Old Cesena Times
          </h1>
        </Link>
      </header>
      <div className="mx-auto mb-4 mt-8 max-w-[1285px] px-5 lg:px-11">
        {state.subsection !== "" && (
          <span className=" mb-2 font-baskerville text-base font-bold text-black-100">
            {state.parent}
          </span>
        )}
        <p className=" font-baskerville text-3xl font-bold text-black-100">
          {state.section}
        </p>
      </div>
      <DisplayNews filter={state.subsection} section={section} />
    </div>
  );
});

export default Section;
