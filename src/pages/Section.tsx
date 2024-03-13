import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import axios from "axios";
import NewsColumn from "@/components/NewsColumn";
import { svgLoading } from "@/assets/svgImg";

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
  return (
    <ErrorBoundary
      fallback={
        <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
          Ups...something went wrong, please try again later
        </p>
      }
    >
      <NewsColumn data={data.results} />
    </ErrorBoundary>
  );
};
const Section = () => {
  // let { state } = useLocation();
  const state = "us";
  const nytUrl = new URL(
    `/svc/topstories/v2/${state}.json?api-key=${String(import.meta.env.VITE_API_KEY)}`,
    "https://api.nytimes.com",
  );
  console.log();
  const filter = "";
  return (
    <div>
      <header className="flex justify-center border-b border-b-gray-200 ">
        <NavLink to="/">
          <h1 className="mt-4 cursor-pointer font-aguafina text-2xl font-normal sm:text-3xl">
            The Old Cesena Times
          </h1>
        </NavLink>
      </header>
      <div className="mx-auto mb-4 mt-8 max-w-[1285px] px-5 lg:px-11">
        <p className=" font-franklin text-3xl font-bold uppercase text-black-100">
          {state}
        </p>
      </div>
      <DisplayNews filter={filter} url={nytUrl} />
    </div>
  );
};

export default Section;
