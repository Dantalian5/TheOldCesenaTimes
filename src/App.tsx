import { useState } from "react";
import Navbar from "@/components/Navbar";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import data from "@/metadata.json";

const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(true);
  console.log("render App");
  return (
    <div className="relative min-h-svh w-full min-w-[300px]">
      <Header setNavbar={setNavbarState} />
      {navbarState && <SideNavBar setNavbar={setNavbarState} />}
      <Navbar />
      <div className={` ${navbarState ? "hidden" : "block"}`}>
        <Main data={data} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
