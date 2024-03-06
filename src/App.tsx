import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { TypeArticle } from "@/utils/types";
import localdata from "@/metadata.json";

const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  const [apiData, setApiData] = useState<TypeArticle[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    setApiData(localdata);
  }, []);

  console.log("render App");
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
        <Main data={apiData} filter={filter} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
