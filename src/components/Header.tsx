import { memo } from "react";
import { svgMenu, svgPerson, svgSearch } from "@/assets/svgImg";
import { getDate } from "@/utils/getDate";

const Header = memo(
  ({
    setNavbar,
  }: {
    setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    console.log("render Header");

    return (
      <header
        className={`mx-auto grid max-w-[1285px] grid-cols-4 py-1 lg:px-11 `}
      >
        <div className="col-span-1 col-start-1 flex gap-x-2">
          <button
            className="cursor-pointer rounded px-5 py-2 text-xl text-black-100 hover:bg-gray-100 lg:p-2"
            onClick={() => setNavbar((prev: boolean) => !prev)}
          >
            {svgMenu}
          </button>
          <button
            className=" hidden cursor-pointer rounded text-xl text-black-100 hover:bg-gray-100 lg:block lg:p-2"
            title="Search"
            onClick={() => {
              console.log("click on search");
            }}
          >
            {svgSearch}
          </button>
        </div>
        <button
          className="col-span-1 col-start-4 cursor-pointer justify-self-end  px-5 py-2 lg:p-0"
          title="Log in"
          onClick={() => {
            console.log("click on sign in");
          }}
        >
          <span className="bg-blue-200 text-xxs border-blue-300 hover:bg-blue-300 hidden rounded border px-4 py-2 font-franklin font-bold uppercase text-white transition-colors duration-500 lg:block">
            Log in
          </span>
          <span className="text-2xl text-black-100 lg:hidden">{svgPerson}</span>
        </button>
        <p className="text-xxs col-span-2 col-start-2 row-start-1 hidden text-center font-medium uppercase lg:block">
          By M.V.
        </p>
        <h1 className=" col-span-2 col-start-2 row-start-1 mt-1.5 justify-self-center py-1 font-aguafina text-2xl font-normal sm:text-3xl lg:row-start-2 lg:text-6xl">
          The Old Cesena Times
        </h1>
        <span className="border-grey-200 col-span-1 col-start-1 hidden border-y bg-white sm:block lg:hidden"></span>
        <p className="border-grey-200 sm text-xxs col-span-2 col-start-1 border-y bg-gray-100 px-5 py-3 font-franklin font-bold text-black-100 sm:col-span-2 sm:col-start-2 sm:bg-white sm:text-center lg:col-span-1 lg:col-start-1 lg:self-center lg:border-0 lg:p-0 lg:text-left lg:text-xs">
          {getDate()}
          <br />
          <span className="hidden font-franklin text-xs font-normal text-black-100 lg:inline">
            Today's Paper
          </span>
        </p>
        <p className="border-grey-200 text-xxs text-blue-300 col-span-2 col-start-3 border-y bg-gray-100 px-5 py-3 text-right font-franklin font-normal uppercase sm:col-span-1 sm:col-start-4 sm:bg-white lg:col-span-1 lg:col-start-4 lg:self-center lg:border-0 lg:p-0">
          follow if you like 👍
        </p>
      </header>
    );
  },
);

export default Header;
