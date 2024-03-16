import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NewsDisplay from "@/components/NewsDisplay";
const Section = memo(() => {
  console.log("render Sections");
  const { state } = useLocation();
  const [sectionState, setSectionState] = useState(state);
  useEffect(() => {
    setSectionState(state);
    console.log(state);
  }, [state]);

  return (
    <div>
      <header className="flex justify-center border-b border-b-gray-200 ">
        <Link to="/">
          <h1 className="mt-4 cursor-pointer font-aguafina text-2xl font-normal sm:text-3xl">
            The Old Cesena Times
          </h1>
        </Link>
      </header>
      <div className="mx-auto mb-4 mt-8 max-w-[1285px] px-5 lg:px-11">
        {sectionState.filter !== "" && (
          <span className=" mb-2 font-baskerville text-base font-bold text-black-100">
            {state.subtitle}
          </span>
        )}
        <p className=" font-baskerville text-3xl font-bold text-black-100">
          {sectionState.title}
        </p>
      </div>
      <NewsDisplay
        type="list"
        filter={sectionState.filter}
        section={sectionState.section}
      />
    </div>
  );
});

export default Section;
