import { memo } from "react";
import { Link } from "react-router-dom";
import { fnSetDate } from "@/utils";

const Header = memo(() => {
  return (
    <header
      className={`mx-auto grid max-w-[1285px] grid-cols-4 py-1 lg:px-11 `}
    >
      <p className="col-span-2 col-start-2 row-start-1 hidden py-3 text-center text-xxs font-medium uppercase lg:block">
        By M.V.
      </p>

      <Link
        to="/"
        className="col-span-2 col-start-2 row-start-1 mt-1.5 block justify-self-center py-1 lg:row-start-2"
      >
        <h1 className=" font-aguafina text-2xl font-normal sm:text-3xl  lg:text-6xl">
          The Old Cesena Times
        </h1>
      </Link>
      <span className="border-grey-200 col-span-1 col-start-1 row-start-2 hidden border-y bg-white sm:block lg:hidden"></span>
      <p className="border-grey-200 sm col-span-2 col-start-1 row-start-2 border-y bg-gray-100 px-5 py-3 font-franklin text-xxs font-bold text-black-100 sm:col-span-2 sm:col-start-2 sm:bg-white sm:text-center lg:col-span-1 lg:col-start-1 lg:self-center lg:border-0 lg:p-0 lg:text-left lg:text-xs">
        {fnSetDate("long", new Date())}
        <br />
        <span className="hidden font-franklin text-xs font-normal text-black-100 lg:inline">
          Today's Paper
        </span>
      </p>
      <a
        href="https://linkedin.com/in/marcos-valenzuela-coding"
        className="border-grey-200 col-span-2 col-start-3 row-start-2 border-y bg-gray-100 px-5 py-3 text-right font-franklin text-xxs font-normal uppercase text-blue-300 sm:col-span-1 sm:col-start-4 sm:bg-white lg:col-span-1 lg:col-start-4 lg:self-center lg:border-0 lg:p-0"
      >
        follow if you like 👍
      </a>
    </header>
  );
});

export default Header;
