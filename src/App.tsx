import { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  return (
    <div className="min-h-svh w-full min-w-[300px]">
      {!navbarState && <Header setNavbar={setNavbarState} />}
      <Navbar state={navbarState} setNavbar={setNavbarState} />
      {!navbarState && <Main />}
      {!navbarState && <Footer />}
      {/* <Header
        className={navbarState ? "hidden" : "block"}
        setNavbar={setNavbarState}
      />
      <Navbar state={navbarState} setNavbar={setNavbarState} />
      <Main className={navbarState ? "hidden" : "block"} />
      <Footer className={navbarState ? "hidden" : "block"} /> */}
    </div>
  );
};

export default App;
