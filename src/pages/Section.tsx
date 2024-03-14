import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NewsColumn from "@/components/NewsColumn";
import { svgLoading } from "@/assets/svgImg";
import { memo } from "react";

const DisplayNews = ({ filter, url }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["nytdata"],
    queryFn: () => axios.get(url.href).then((res) => res.data),
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
  const { state } = useLocation();
  const nytUrl = new URL(
    `/svc/topstories/v2/${state.url}.json?api-key=${String(import.meta.env.VITE_API_KEY)}`,
    "https://api.nytimes.com",
  );
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
        <p className=" font-baskerville text-3xl font-bold  text-black-100">
          {state.name}
        </p>
      </div>
      <DisplayNews filter={state.subsection} url={nytUrl} />
    </div>
  );
});

export default Section;
