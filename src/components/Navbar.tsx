import { memo } from "react";
import { Link } from "react-router-dom";
import { svgArrow } from "@/assets/svgImg";
import { navbarItems, NavbarItemsType } from "@/utils/menuItems";

const navLineFn = (list: NavbarItemsType) => {
  return Object.entries(list).map(([section, sectionInfo]) => (
    <li
      className="group flex items-center px-3 py-5 font-franklin text-xs font-medium text-black-100"
      key={section}
    >
      <Link
        to={`/section/${sectionInfo.section}`}
        state={{ url: sectionInfo.section, name: section, subsection: "" }}
      >
        <span className="cursor-pointer border-b-2 border-white group-hover:border-black-100">
          {section}
        </span>
      </Link>

      <span className={`ml-1 cursor-pointer text-base text-gray-300`}>
        {svgArrow}
      </span>
      <div
        className={`pointer-events-none absolute left-1/2 top-full min-h-20 w-dvw -translate-x-1/2 gap-x-16 bg-white opacity-0 shadow-menu transition-opacity duration-500 ease-out group-hover:pointer-events-auto group-hover:opacity-100`}
      >
        <div className="mx-auto flex w-full max-w-[1285px] gap-x-20 bg-white px-5 pb-10 pt-6 lg:px-11">
          {Object.entries(sectionInfo.subsection).map(
            ([subsection, subsectionList]) => (
              <div className={``} key={subsection}>
                <p className=" mb-4 font-franklin text-xs font-medium uppercase text-gray-300">
                  {subsection}
                </p>
                <div className="flex gap-x-10">
                  {subsectionList &&
                    subsectionList.map((column, index) => (
                      <ul className=" min-w-24" key={index}>
                        {column.map((item, index) => (
                          <li className="mb-3 w-full" key={index}>
                            <Link
                              to={`/section/${
                                item[1] === ""
                                  ? sectionInfo.section + "-" + item[2]
                                  : item[1]
                              }`}
                              state={{
                                name: item[0],
                                url:
                                  item[1] === ""
                                    ? sectionInfo.section
                                    : item[1],

                                subsection: item[2],
                              }}
                            >
                              <span className="font-franklin text-sm font-medium">
                                {item[0]}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </li>
  ));
};

const Navbar = memo(() => {
  return (
    <nav className="sticky top-0 z-10 mx-auto mb-1  hidden max-w-[1285px] bg-white px-5 lg:block lg:px-11">
      <ul className="flex items-center justify-center border-y border-b-black-100 border-t-gray-200">
        {navLineFn(navbarItems[0])}
        {/* <li className="mx-3 block h-4 w-[1px] bg-gray-200"></li>
        {navLineFn(navbarItems[1])} */}
      </ul>
    </nav>
  );
});

export default Navbar;
