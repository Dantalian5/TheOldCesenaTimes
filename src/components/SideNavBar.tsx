import { useState } from "react";
import { svgArrow, svgClose } from "@/assets/svgImg";
import { navbarItems } from "@/utils/menuItems";

const SideNavBar = ({
  setNavbar,
  setFilter,
  filter,
}: {
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}) => {
  console.log("render SideNavBar");
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<string>(filter);
  const handleClick = (key: string | null) => {
    setActiveKey(activeKey === key ? null : key);
  };
  return (
    <nav className=" lg:shadow-sidemenu absolute left-0 top-0 z-20 min-h-full w-full bg-white pb-6 pt-0 lg:min-h-0 lg:w-80">
      <div className=" sticky top-0 z-10 bg-white p-6">
        <button
          className="mb-9 cursor-pointer text-3xl text-black-100"
          onClick={() => setNavbar(false)}
          title="close menu"
        >
          {svgClose}
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFilter(filterValue);
            setNavbar(false);
          }}
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
          <button className=" bg-blue-100 min-w-9 rounded p-2.5 font-franklin text-xs font-bold uppercase text-white shadow-btn">
            go
          </button>
        </form>
      </div>
      <ul className="px-6">
        {Object.entries(navbarItems[0]).map(([key, value]) => (
          <li
            className="w-full border-b border-gray-200 last:border-0"
            key={key}
          >
            <button
              className="flex w-full items-center justify-between py-6 font-franklin text-lg font-semibold tracking-tight"
              onClick={() => handleClick(key)}
            >
              {key}
              <span
                className={`${activeKey === key ? "rotate-180" : "rotate-0"} text-2xl`}
              >
                {svgArrow}
              </span>
            </button>
            {Object.entries(value).map(([section, subsection]) => (
              <ul
                className={`${activeKey === key ? "block" : "hidden"}
                        flex flex-wrap gap-x-8 gap-y-4 py-3`}
                key={section}
              >
                <li className="w-full">
                  <h4 className=" font-franklin text-sm font-medium uppercase text-gray-300">
                    {section}
                  </h4>
                </li>
                {subsection.map((column, index) => (
                  <ul className="flex-auto" key={index}>
                    {column.map((item, index) => (
                      <li className="mb-4" key={index}>
                        <a
                          className="font-franklin text-lg font-medium"
                          href=""
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </ul>
            ))}
          </li>
        ))}
        <hr className="w-full border border-black-100" />
        {Object.entries(navbarItems[1]).map(([key, value]) => (
          <li
            className="w-full border-b border-gray-200 last:border-0"
            key={key}
          >
            <button
              className="flex w-full items-center justify-between py-6 font-franklin text-lg font-semibold tracking-tight"
              onClick={() => handleClick(key)}
            >
              {key}
              <span
                className={`${activeKey === key ? "rotate-180" : "rotate-0"} text-2xl`}
              >
                {svgArrow}
              </span>
            </button>
            {Object.entries(value).map(([section, subsection]) => (
              <ul
                className={`${activeKey === key ? "block" : "hidden"}
                        flex flex-wrap gap-x-8 gap-y-4 py-3`}
                key={section}
              >
                <li className="w-full">
                  <h4 className=" font-franklin text-sm font-medium uppercase text-gray-300">
                    {section}
                  </h4>
                </li>
                {subsection.map((column, index) => (
                  <ul className="flex-auto" key={index}>
                    {column.map((item, index) => (
                      <li className="mb-4" key={index}>
                        <a
                          className="font-franklin text-lg font-medium"
                          href=""
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavBar;

{
  /* <nav
        className={`${
          state ? "block" : "hidden"
        } absolute min-h-full w-full bg-white px-6 pb-6 pt-0`}
      >
        <div className=" sticky top-0 bg-white py-6">
          <button
            className="mb-9 cursor-pointer"
            onClick={() => setNavbar(false)}
            title="close menu"
          >
            {svgClose}
          </button>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-stretch gap-x-3"
          >
            <input
              type="text "
              className="flex-auto rounded border border-gray-300 px-3 py-2  font-franklin text-base font-normal text-black-100 placeholder:uppercase placeholder:text-gray-300"
              name="search"
              placeholder="search"
            />
            <button className=" min-w-9 rounded bg-blubtn p-2.5 font-franklin text-xs font-bold uppercase text-white shadow-btn">
              go
            </button>
          </form>
        </div>
        <ul>{navList}</ul>
      </nav> */
}

// const navList = Object.entries(navbarItems).map(([key, value]) => (
//   <li className="w-full border-b border-gray-200 last:border-0" key={key}>
//     <button
//       className="flex w-full items-center justify-between py-6 font-franklin text-lg font-semibold tracking-tight"
//       onClick={() => handleClick(key)}
//     >
//       {key} {svgArrow}
//     </button>
//     {Object.entries(value).map(([section, subsection]) => (
//       <ul
//         className={`${
//           activeKey === key ? "block" : "hidden"
//         } flex flex-wrap gap-x-8 gap-y-4 py-3`}
//         key={section}
//       >
//         <li className="w-full">
//           <h4 className=" font-franklin text-sm font-medium uppercase text-gray-300">
//             {section}
//           </h4>
//         </li>
//         {subsection.map((column, index) => (
//           <ul className="flex-auto" key={index}>
//             {column.map((item, index) => (
//               <li className="mb-4" key={index}>
//                 <a className="font-franklin text-lg font-medium" href="">
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </ul>
//     ))}
//   </li>
// ));
