import { memo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { svgLoading } from "@/assets/svgImg";
import { apiSearch } from "@/api/apiFetch";
import SearchColumn from "@/components/SearchColumn";

type NewsDisplayProps = {
  filter: string;
  sortBy: string;
  sectionFilter: string;
  typeFilter: string;
  pageFilter: number;
};
const SearchDisplay: React.FC<NewsDisplayProps> = memo(
  ({ filter, sortBy, sectionFilter, typeFilter, pageFilter }) => {
    const { isPending, error, data } = useQuery({
      queryKey: [filter, sortBy, sectionFilter, typeFilter, pageFilter],
      queryFn: () =>
        apiSearch(filter, sortBy, sectionFilter, typeFilter, pageFilter),
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
          <SearchColumn data={data.response.docs} />
        ) : (
          <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
            No results found
          </p>
        )}
      </ErrorBoundary>
    );
  },
);

export default SearchDisplay;
