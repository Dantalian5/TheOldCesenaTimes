import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import Section from "@/pages/Section";
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";

const App = () => {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="relative min-h-svh w-full min-w-[300px]">
          <TopMenu showMenu={navbarState} setShowMenu={setNavbarState} />
          <div className={`${navbarState ? "hidden" : "block"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/section/:section" element={<Section />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
