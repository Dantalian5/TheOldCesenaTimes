import { svgMenu, svgPerson } from "@/assets/svgImg";
import { getDate } from "@/utils/getDate";

const Header = ({ setNavbar }: { setNavbar: (arg: boolean) => void }) => {
  console.log("render Header");
  return (
    <header className="lg:px-32">
      <section className="flex w-full items-center justify-between px-3 pb-1 pt-2 lg:px-0">
        <button className="cursor-pointer p-2" onClick={() => setNavbar(true)}>
          {svgMenu}
        </button>
        <div>
          <h1 className=" mt-1.5 font-aguafina text-24 font-normal sm:text-28 lg:text-6xl">
            The Old Cesena Times
          </h1>
        </div>
        <button
          className="cursor-pointer p-2"
          onClick={() => {
            console.log("click on sign in");
          }}
        >
          {svgPerson}
        </button>
      </section>
      <section className="border-grey-200 flex w-full items-center justify-between border-y bg-gray-100 px-5 py-3 sm:relative lg:px-0">
        <p className="font-franklin text-10 font-bold text-black-100 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          {getDate()}
        </p>
        <p className="font-franklin text-10 font-normal uppercase text-blue sm:ml-auto">
          follow if you like 👍
        </p>
      </section>
    </header>
  );
};

export default Header;
