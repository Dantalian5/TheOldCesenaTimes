import { svgMenu, svgPerson, svgSearch, svgArrow } from "@/assets/svgImg";
import { getDate } from "@/utils/getDate";

const navbarItems_top = {
  "U.S.": {
    sections: [
      [
        "U.S.",
        "Politics",
        "New York",
        "California",
        "Education",
        "Health",
        "Obituaries",
        "Science",
      ],
      ["Climate", "Sports", "Business", "Tech", "The Upshot", "The Magazine"],
    ],
    ["U.S. Politics"]: [
      ["2024 Elections", "Supreme Court", "Congress", "Biden Administration"],
    ],
  },
  World: {
    sections: [
      ["World", "Africa", "Americas", "Asia", "Australia", "Canada"],
      ["Europe", "Middle East", "Science", "Climate", "Health", "Obituaries"],
    ],
  },
  Bussiness: {
    sections: [
      [
        "Bussiness",
        "Tech",
        "Economy",
        "Media",
        "Finance and Markets",
        "DealBook",
        "Personal Tech",
        "Energy Transition",
        "Your Money",
      ],
    ],
  },
  Arts: {
    section: [
      [
        "Todays Arts",
        "Books",
        "Best Sellers",
        "Dance",
        "Movies",
        "Music",
        "Television",
        "Theater",
        "Pop Culture",
        "T Magazine",
        "Visual Arts",
      ],
    ],
  },
  Lifestyle: {
    section: [
      [
        "Lifestyle",
        "Well",
        "Travel",
        "Style",
        "Real State",
        "Food",
        "Fashion",
        "Love",
        "Your Money",
        "Personal Tech",
        "T Magazine",
      ],
    ],
    columns: [["Modern Love", "The Hunt", "Social Qs", "The Ethicist"]],
    well: [["Eat", "Move", "Mind", "Family", "Live", "Ask Well"]],
  },
  Opinion: {
    section: [
      ["Opinion", "Guest Essays", "Editorials", "Op-Docs", "Videos", "Letters"],
    ],
    topics: [
      ["Politics", "World", "Business", "Tech", "Climate", "Health", "Culture"],
    ],
  },
};
const navbarItems_bottom = {
  Audio: {
    listen: [
      [
        "The Headlines",
        "The Daily",
        "Hard Fork",
        "The Ezra Klein Show",
        "Matter of Opinion",
      ],
      [
        "Serial Productions",
        "The Book Review Podcast",
        "Modern Love",
        "The Run-Up",
        "Popcast",
        "Reporter Reads",
        "The Sunday Read",
      ],
    ],
  },
  Cooking: {
    recipes: [
      ["Easy", "Dinner", "Quick", "Healthy", "Breakfast"],
      ["Vegetarian", "Vegan", "Chicken", "Pasta", "Dessert"],
    ],
    ["editor's pick"]: [
      [
        "Soups and Stews",
        "Easy Weeknight",
        "Newest Recipes",
        "One-Pot Meals",
        "Slow Cooker Recipes",
        "Comfort Food",
        "Party Recipes",
      ],
    ],
  },
  Wirecutter: {
    reviews: [
      ["Kitchen", "Tech", "Sleep", "Appliances", "Home and Garden", "Moving"],
      ["Travel", "Gifts", "Deals", "Baby and Kid", "Health and Fitness"],
    ],
    ["the best..."]: [
      [
        "Air Purifier",
        "Electric Toothbrush",
        "Pressure Washer",
        "Cordless Stick Vacuum",
        "Office Chair",
        "Robot Vacuum",
      ],
    ],
  },
  ["The Athletico"]: {
    leagues: [
      ["NFL", "MLB", "NBA", "Premier League", "NCAAF", "NCAAM"],
      ["NHL", "NCAAW", "MLS", "Formula 1", "NWSL", "Golf"],
    ],
    ["top stories"]: [
      [
        "Must-Read Stories",
        "Today's News",
        "2024 NFL Draft",
        "MLB Free Agency",
      ],
    ],
  },
};
const Header = ({ setNavbar }: { setNavbar: (arg: boolean) => void }) => {
  console.log("render Header");

  return (
    <header
      className={`mx-auto grid max-w-[1285px] grid-cols-4 py-1 sm:pt-4 lg:px-11 `}
    >
      <div className="col-span-1 col-start-1 flex gap-x-2">
        <button
          className="cursor-pointer px-5 py-2 text-xl text-black-100 lg:p-2"
          onClick={() => setNavbar(true)}
        >
          {svgMenu}
        </button>
        <button
          className=" hidden cursor-pointer text-xl text-black-100 lg:block lg:p-2"
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
        <span className="bg-blue-200 text-xxs border-blue-300 hidden rounded border px-4 py-2 font-franklin font-bold uppercase text-white lg:block">
          Log in
        </span>
        <span className="lg:hidden">{svgPerson}</span>
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
      <nav className="relative col-span-4 row-start-3 hidden border-y border-b-black-100 border-t-gray-200 lg:block">
        <ul className="flex items-center justify-center">
          {Object.entries(navbarItems_top).map(([key, value]) => (
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
                        {subsection.map((column, index) => (
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
          <span className="mx-3 block h-4 w-[1px] bg-gray-200"></span>
          {Object.entries(navbarItems_bottom).map(([key, value]) => (
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
                        {subsection.map((column, index) => (
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
    </header>
  );
};

export default Header;
