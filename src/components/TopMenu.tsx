import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { setFilter } from "@/redux/filterSlice";
import { toogleNav } from "@/redux/navbarSlice";
import SideNavBar from "./SideNavBar";
import { svgMenu, svgPerson, svgSearch } from "@/assets/svgImg";

const TopMenu = () => {
  console.log("render TopMenu");
  const filter = useAppSelector((state) => state.filter.value);
  const showNavbar = useAppSelector((state) => state.navbar.show);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState<string>(filter);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFilter(filterValue));
    setShowFilter(false);
    navigate(`/search/filter?=${filterValue}`);
  };
  useEffect(() => {
    setFilterValue(filter);
  }, [filter]);

  return (
    <div className="absolute left-1/2 top-0 z-50 mx-auto h-0 w-full max-w-[1285px] -translate-x-1/2">
      {showNavbar && <SideNavBar />}
      <div className="absolute left-0 top-2 flex gap-x-2 lg:left-11 lg:top-1">
        <button
          className="flex cursor-pointer items-center justify-between rounded px-5 py-2 text-xl text-black-100 hover:bg-gray-100 lg:p-2"
          onClick={() => dispatch(toogleNav())}
          title="Menu"
        >
          {svgMenu}
        </button>
        <div className="relative hidden lg:block">
          <button
            className=" cursor-pointer rounded text-xl text-black-100 hover:bg-gray-100 lg:p-2"
            title="Search"
            onClick={() => {
              setShowFilter((prev: boolean) => !prev);
            }}
          >
            {svgSearch}
          </button>
          {showFilter && (
            <form
              onSubmit={onFormSubmit}
              className=" absolute  -right-2 top-1/2 flex -translate-y-1/2 translate-x-full items-center gap-x-3"
            >
              <input
                type="text "
                className="flex-auto rounded border border-black-100 px-3 py-1  font-franklin text-base font-normal text-black-100 placeholder:uppercase placeholder:text-gray-300"
                name="search"
                placeholder="search"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <button className=" min-w-9 rounded bg-blue-100 p-2.5 font-franklin text-xs font-bold uppercase text-white shadow-btn">
                go
              </button>
            </form>
          )}
        </div>
      </div>
      <button
        className="absolute right-0 top-2 cursor-pointer px-5 py-2 lg:right-11 lg:top-1 lg:p-0"
        title="Log in"
        onClick={() => {
          console.log("click on sign in");
        }}
      >
        <span className="hidden rounded border border-blue-300 bg-blue-200 px-4 py-2 font-franklin text-xxs font-bold uppercase text-white transition-colors duration-500 hover:bg-blue-300 lg:block">
          Log in
        </span>
        <span className="text-2xl text-black-100 lg:hidden">{svgPerson}</span>
      </button>
    </div>
  );
};

export default TopMenu;
