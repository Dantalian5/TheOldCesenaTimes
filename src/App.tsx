import { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  return (
    <div className="relative min-h-svh w-full min-w-[300px]">
      <Header setNavbar={setNavbarState} />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
