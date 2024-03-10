import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "@/components/Navbar";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { svgLoading } from "@/assets/svgImg";
import { TypeArticle } from "@/utils/types";

const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  const [apiData, setApiData] = useState<TypeArticle[] | "error">([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const nytUrl = new URL(
        "/svc/topstories/v2/home.json?api-key=" +
          String(import.meta.env.VITE_API_KEY),
        "https://api.nytimes.com",
      );
      axios
        .get(nytUrl.href)
        .then((response) => {
          if (response.data && response.data.status === "OK") {
            setApiData(response.data.results);
          } else {
            throw new Error("Error loading data");
          }
        })
        .catch((error) => {
          setApiData("error");
          console.error("Error loading data: ", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    loadData();
  }, []);
  return (
    <div className="relative min-h-svh w-full min-w-[300px]">
      <Header
        setNavbar={setNavbarState}
        setFilter={setFilter}
        filter={filter}
      />
      {navbarState && (
        <SideNavBar
          setNavbar={setNavbarState}
          setFilter={setFilter}
          filter={filter}
        />
      )}
      <Navbar />
      <div className={` ${navbarState ? "hidden" : "block"} lg:block`}>
        {loading ? (
          <p className="mx-auto flex max-w-[1285px] flex-col items-center gap-2 px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
            Loading... <span className="text-3xl">{svgLoading}</span>
          </p>
        ) : apiData === "error" ? (
          <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
            Error retrieving data. Please refresh the page or try again in a few
            minutes.
          </p>
        ) : (
          <ErrorBoundary
            fallback={
              <p className="mx-auto max-w-[1285px] px-5 py-10 text-center font-franklin font-bold text-black-100 lg:px-11">
                Ups...something went wrong, please try again later
              </p>
            }
          >
            <Main data={apiData} filter={filter} />
          </ErrorBoundary>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
