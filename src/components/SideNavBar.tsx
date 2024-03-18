import { useState, memo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setFilter } from "@/redux/filterSlice";
import { hideNav } from "@/redux/navbarSlice";
import { svgArrow, svgClose } from "@/assets/svgImg";
import { navbarItems } from "@/assets/menuItems";

const SideNavBar = memo(() => {
  const navigate = useNavigate();
  const showNavbar = useAppSelector((state) => state.navbar.show);
  const filter = useAppSelector((state) => state.filter.value);
  const dispatch = useAppDispatch();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<string>(filter);
  const handleClick = (key: string | null) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFilter(filterValue));
    dispatch(hideNav());
    navigate(`/search/filter?=${filterValue}`);
  };
  const onCLickHandle = () => {
    dispatch(hideNav());
  };
  useEffect(() => {
    setFilterValue(filter);
  }, [filter]);

  return (
    <nav
      className={`fixed bottom-0 left-0 top-0 z-50 w-full bg-white pb-6 pt-0 lg:left-11 lg:w-80 lg:shadow-sidemenu ${showNavbar ? "block" : "hidden"} overflow-y-auto`}
    >
      <div className=" sticky top-0 z-10 bg-white p-6">
        <button
          className="mb-9 cursor-pointer text-3xl text-black-100"
          onClick={() => dispatch(hideNav())}
          title="close menu"
        >
          {svgClose}
        </button>
        <form
          onSubmit={onFormSubmit}
          className="flex items-stretch gap-x-3 lg:hidden"
        >
          <input
            type="text "
            className="flex-auto rounded border border-gray-300 px-3 py-2  font-franklin text-base font-normal text-black-100 placeholder:uppercase placeholder:text-gray-300"
            name="search"
            placeholder="search"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <button className=" min-w-9 rounded bg-blue-100 p-2.5 font-franklin text-xs font-bold uppercase text-white shadow-btn">
            go
          </button>
        </form>
      </div>
      <ul className="px-6">
        {Object.entries(navbarItems).map(([section, sectionInfo]) => (
          <li
            className="w-full border-b border-gray-200 last:border-0"
            key={section}
          >
            <div className="flex w-full items-center justify-between py-6  ">
              <Link
                to={`/section/${sectionInfo.section}`}
                state={{
                  title: section,
                  section: sectionInfo.section,
                }}
                onClick={onCLickHandle}
              >
                <span className="font-franklin text-lg font-semibold tracking-tight">
                  {section}
                </span>
              </Link>
              <button
                className={`${activeKey === section && "rotate"} group flex w-full flex-grow items-center justify-end`}
                onClick={() => handleClick(section)}
              >
                <span className=" w-fit text-2xl group-[.rotate]:rotate-180">
                  {svgArrow}
                </span>
              </button>
            </div>
            {Object.entries(sectionInfo.subsection).map(
              ([subsection, subsectionList], index) => (
                <ul
                  className={`${activeKey === section ? "block" : "hidden"}
                        flex flex-wrap gap-x-8 gap-y-4 py-3`}
                  key={index}
                >
                  <li className="w-full">
                    <p className=" font-franklin text-sm font-medium uppercase text-gray-300">
                      {subsection}
                    </p>
                  </li>
                  {subsectionList &&
                    subsectionList.map((column, index) => (
                      <ul className="flex-auto" key={index}>
                        {column.map((item, index) => (
                          <li className="mb-4" key={index}>
                            <Link
                              to={`/section/${
                                item[1] === ""
                                  ? sectionInfo.section + "-" + item[2]
                                  : item[1]
                              }`}
                              state={{
                                title: item[0],
                                subtitle: section,
                                section:
                                  item[1] === ""
                                    ? sectionInfo.section
                                    : item[1],
                                filter: item[2],
                              }}
                              onClick={onCLickHandle}
                            >
                              <span className="font-franklin text-base font-medium">
                                {item[0]}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                </ul>
              ),
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default SideNavBar;
