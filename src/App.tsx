import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
import Home from "@/pages/Home";
import Section from "@/pages/Section";
import Search from "@/pages/Search";
import TopMenu from "@/components/TopMenu";
import Footer from "@/components/Footer";

const App = () => {
  console.log("render App");
  const showNavbar = useAppSelector((state) => state.navbar.show);
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="relative min-h-svh w-full min-w-[300px]">
          <TopMenu />
          <div className={`${showNavbar ? "hidden" : "block"} lg:block`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/section/:section" element={<Section />} />
              <Route path="/search/:filter" element={<Search />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
