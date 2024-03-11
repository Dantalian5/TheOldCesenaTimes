import { memo } from "react";
import { Link } from "react-router-dom";
import { svgArrow } from "@/assets/svgImg";
import { navbarItems } from "@/utils/menuItems";

const Navbar = memo(() => {
  return (
    <nav className="sticky top-0 z-10 mx-auto mb-1  hidden max-w-[1285px] bg-white px-5 lg:block lg:px-11">
      <ul className="flex items-center justify-center border-y border-b-black-100 border-t-gray-200">
        {Object.entries(navbarItems[0]).map(([key, value]) => (
          <li
            className="group flex items-center px-3 py-5 font-franklin text-xs font-medium text-black-100"
            key={key}
          >
            <span className="mr-1 cursor-pointer border-b-2 border-white group-hover:border-black-100">
              {key}
            </span>

            <span className={`cursor-pointer text-base text-gray-300`}>
              {svgArrow}
            </span>
            <div
              className={`shadow-menu pointer-events-none absolute left-1/2 top-full min-h-20 w-dvw -translate-x-1/2 gap-x-16 bg-white opacity-0 transition-opacity duration-500 ease-out group-hover:pointer-events-auto group-hover:opacity-100`}
            >
              <div className="mx-auto flex w-full max-w-[1285px] gap-x-20 bg-white px-5 pb-10 pt-6 lg:px-11">
                {Object.entries(value).map(([section, subsection]) => (
                  <div className={``} key={section}>
                    <p className=" mb-4 font-franklin text-xs font-medium uppercase text-gray-300">
                      {section}
                    </p>
                    <div className="flex gap-x-10">
                      {subsection &&
                        subsection.map((column, index) => (
                          <ul className=" min-w-24" key={index}>
                            {column.map((item, index) => (
                              <li className="mb-3 w-full" key={index}>
                                <Link to={`/section`} state={item[1]}>
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
                ))}
              </div>
            </div>
          </li>
        ))}
        <li className="mx-3 block h-4 w-[1px] bg-gray-200"></li>
        {Object.entries(navbarItems[1]).map(([key, value]) => (
          <li
            className="group flex items-center px-3 py-5 font-franklin text-xs font-medium text-black-100"
            key={key}
          >
            <span className="mr-1 cursor-pointer border-b-2 border-white group-hover:border-black-100">
              {key}
            </span>

            <span className={`cursor-pointer text-base text-gray-300`}>
              {svgArrow}
            </span>
            <div
              className={`shadow-menu pointer-events-none absolute left-1/2 top-full min-h-20 w-dvw -translate-x-1/2 gap-x-16 bg-white opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100 `}
            >
              <div className="mx-auto flex w-full max-w-[1285px] gap-x-20 bg-white px-5 pb-10 pt-6 lg:px-11">
                {Object.entries(value).map(([section, subsection]) => (
                  <div className={``} key={section}>
                    <p className=" mb-4 font-franklin text-xs font-medium uppercase text-gray-300">
                      {section}
                    </p>
                    <div className="flex gap-x-10">
                      {subsection &&
                        subsection.map((column, index) => (
                          <ul className=" min-w-24" key={index}>
                            {column.map((item, index) => (
                              <li className="mb-3 w-full" key={index}>
                                <a
                                  className="font-franklin text-sm font-medium"
                                  href=""
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
