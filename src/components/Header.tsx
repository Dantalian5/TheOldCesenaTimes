import { svgMenu, svgPerson, svgSearch } from "@/assets/svgImg";
import { getDate } from "@/utils/getDate";

const Header = ({ setNavbar }: { setNavbar: (arg: boolean) => void }) => {
  console.log("render Header");
  return (
    <header className="mx-auto grid max-w-[1285px] grid-cols-4 py-1 sm:pt-4 lg:px-11">
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
    </header>
    // <header className="mx-auto flex max-w-[1285px] flex-col lg:flex-col lg:px-11">
    //   <section className="flex w-full items-center justify-between px-3 pb-1 pt-2 sm:pt-6 lg:px-0">
    //     <button className="cursor-pointer p-2" onClick={() => setNavbar(true)}>
    //       {svgMenu}
    //     </button>
    //     <div>
    //       <h1 className=" mt-1.5 font-aguafina text-24 font-normal sm:text-28 lg:text-6xl">
    //         The Old Cesena Times
    //       </h1>
    //     </div>
    //     <button
    //       className="cursor-pointer p-2"
    //       onClick={() => {
    //         console.log("click on sign in");
    //       }}
    //     >
    //       {svgPerson}
    //     </button>
    //   </section>
    //   <section className="border-grey-200 flex w-full items-center justify-between border-y bg-gray-100 px-5 py-3 sm:relative sm:bg-white lg:px-0">
    //     <p className="font-franklin text-10 font-bold text-black-100 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
    //       {getDate()}
    //     </p>
    //     <p className="font-franklin text-10 font-normal uppercase text-blue sm:ml-auto">
    //       follow if you like 👍
    //     </p>
    //   </section>
    // </header>
  );
};

export default Header;

{
  /* <header className="mx-auto flex max-w-[1285px] flex-col lg:flex-col lg:px-11">
      <section className="flex w-full items-center justify-between px-3 pb-1 pt-2 sm:pt-6 lg:px-0">
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
      <section className="border-grey-200 flex w-full items-center justify-between border-y bg-gray-100 px-5 py-3 sm:relative sm:bg-white lg:px-0">
        <p className="font-franklin text-10 font-bold text-black-100 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          {getDate()}
        </p>
        <p className="font-franklin text-10 font-normal uppercase text-blue sm:ml-auto">
          follow if you like 👍
        </p>
      </section>
    </header> */
}
