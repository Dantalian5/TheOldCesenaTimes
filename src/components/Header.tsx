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
const Header = ({ setNavbar }: { setNavbar: (arg: boolean) => void }) => {
  console.log("render Header");

  return (
    <header
      className={`mx-auto grid max-w-[1285px] grid-cols-4 py-1 sm:pt-4 lg:px-11 `}
    >
      <div className="col-span-1 col-start-1 flex gap-x-8">
        <button
          className="cursor-pointer px-5 py-2 lg:px-0"
          onClick={() => setNavbar(true)}
        >
          {svgMenu}
        </button>
        <button
          className="hidden cursor-pointer lg:block"
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
        <span className="bg-bluein hidden rounded border border-blue px-4 py-2 font-franklin text-10 font-bold uppercase text-white lg:block">
          Log in
        </span>
        <span className="lg:hidden">{svgPerson}</span>
      </button>
      <h1 className=" col-span-2 col-start-2 row-start-1 mt-1.5 justify-self-center py-1 font-aguafina text-24 font-normal sm:text-30 lg:row-start-2 lg:text-6xl">
        The Old Cesena Times
      </h1>
      <span className="border-grey-200 col-span-1 col-start-1 hidden border-y bg-white sm:block lg:hidden"></span>
      <p className="border-grey-200 sm col-span-2 col-start-1 border-y bg-gray-100 px-5 py-3 font-franklin text-10 font-bold text-black-100 sm:col-span-2 sm:col-start-2 sm:bg-white sm:text-center lg:col-span-1 lg:col-start-1 lg:self-center lg:border-0 lg:p-0 lg:text-left">
        {getDate()}
      </p>
      <p className="border-grey-200 col-span-2 col-start-3 border-y bg-gray-100 px-5 py-3 text-right font-franklin text-10 font-normal uppercase text-blue sm:col-span-1 sm:col-start-4 sm:bg-white lg:col-span-1 lg:col-start-4 lg:self-center lg:border-0 lg:p-0">
        follow if you like 👍
      </p>
      <nav className="col-span-4 row-start-3">
        <ul className="flex items-stretch justify-center gap-x-6">
          {Object.entries(navbarItems_top).map(([key, value]) => (
            <li className="flex items-center gap-x-2">
              {key}
              {svgArrow}
            </li>
          ))}
          <span className="block w-[1px] bg-black-200"></span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
