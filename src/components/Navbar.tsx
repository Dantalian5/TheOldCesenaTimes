import { memo } from "react";
import { svgArrow } from "@/assets/svgImg";

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
      ["Bussiness", "Tech", "Economy", "Media", "Finance and Markets"],
      ["DealBook", "Personal Tech", "Energy Transition", "Your Money"],
    ],
  },
  Arts: {
    section: [
      ["Todays Arts", "Books", "Best Sellers", "Dance", "Movies", "Music"],
      ["Television", "Theater", "Pop Culture", "T Magazine", "Visual Arts"],
    ],
  },
  Lifestyle: {
    section: [
      ["Lifestyle", "Well", "Travel", "Style", "Real State", "Food"],
      ["Fashion", "Love", "Your Money", "Personal Tech", "T Magazine"],
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
const Navbar = memo(() => {
  console.log("render Navbar");

  return (
    <nav className="sticky top-0 z-10 mx-auto mb-1  hidden max-w-[1285px] bg-white px-5 lg:block lg:px-11">
      <ul className="flex items-center justify-center border-y border-b-black-100 border-t-gray-200">
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
  );
});

export default Navbar;
