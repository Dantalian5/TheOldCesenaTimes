import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import NewsColumn from "@/components/NewsColumn";
import NewsGrid from "@/components/NewsGrid";
import { svgLoading } from "@/assets/svgImg";
import { apiFetch } from "@/api/apiFetch";

type Props = {
  type: "grid" | "list";
  filter: string;
  section: string;
};
const NewsDisplay = ({ type, section, filter }: Props) => {
  const { isPending, error, data } = useQuery({
    queryKey: [section],
    queryFn: () => apiFetch(section),
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
      {type === "grid" ? (
        <NewsGrid data={data.results} />
      ) : (
        <NewsColumn data={news.length > 0 ? news : data.results} />
      )}
    </ErrorBoundary>
  );
};

export default NewsDisplay;
