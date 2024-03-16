import { memo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsGrid from "@/components/NewsGrid";
import { svgLoading } from "@/assets/svgImg";
import { apiFetch } from "@/api/apiFetch";

const DisplayNews = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["nytdata"],
    queryFn: () => apiFetch("home"),
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
      <NewsGrid data={data.results} />
    </ErrorBoundary>
  );
};
const Home = memo(() => {
  console.log("render Home");
  return (
    <div>
      <Header />
      <Navbar />
      <DisplayNews />
    </div>
  );
});

export default Home;
