import { useState } from "react";
import { svgMenu, svgPerson, svgSearch } from "@/assets/svgImg";
const TopMenu = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  //   useEffect(() => {
  //     setFilterValue(filter);
  //   }, [filter]);
  return (
    <div className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1285px] items-center justify-between py-2 lg:px-11 lg:py-1 ">
        <div className="flex gap-x-2">
          <button
            className="flex cursor-pointer items-center justify-between rounded px-5 py-2 text-xl text-black-100 hover:bg-gray-100 lg:p-2"
            onClick={() => console.log("click on menu")}
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
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(filterValue);
                }}
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
                <button className=" bg-blue-100 min-w-9 rounded p-2.5 font-franklin text-xs font-bold uppercase text-white shadow-btn">
                  go
                </button>
              </form>
            )}
          </div>
        </div>
        <button
          className="cursor-pointer px-5 py-2 lg:p-0"
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
      </div>
    </div>
  );
};

export default TopMenu;
