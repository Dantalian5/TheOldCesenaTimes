import { memo } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsDisplay from "@/components/NewsDisplay";

const Home = memo(() => {
  console.log("render Home");
  return (
    <div>
      <Header />
      <Navbar />
      <NewsDisplay type="grid" filter={""} section={"home"} />
    </div>
  );
});

export default Home;
