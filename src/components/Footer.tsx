import { memo, useState } from "react";
import { footerItems } from "@/utils/menuItems";
const Footer = memo(() => {
  console.log("render Footer");
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const handleClick = (key: string | null) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <footer className="mx-auto max-w-[1285px] py-6 lg:px-11">
      <section className="px-5 lg:px-0">
        <hr className="mb-[1px] h-0.5 w-full bg-gray-200" />
        <span className="mb-[1px] block h-[1px] w-full bg-gray-200"></span>
        <h1 className=" mt-1.5 py-2.5 font-aguafina text-2xl font-normal">
          The Old Cesena Times
        </h1>
        <div className="lg:mb-4 lg:flex lg:justify-between">
          {Object.entries(footerItems).map(([section, subsection]) => (
            <div key={section}>
              <span className="mb-[1px] block h-[1px] w-full bg-gray-200 lg:hidden"></span>
              <button
                className={`+ block cursor-pointer py-4 font-franklin text-sm font-bold uppercase  
                ${activeKey === section ? "text-gray-300" : "text-gray-600"}`}
                title={section}
                onClick={() => handleClick(section)}
              >
                {section}
              </button>
              <nav
                className={`${
                  activeKey === section ? "flex" : "hidden"
                } flex-wrap gap-x-8 py-1 lg:flex lg:flex-col`}
              >
                {subsection.map((column, index) => (
                  <ul className=" flex-1" key={index}>
                    {column.map((item, index) => (
                      <li className="mb-4 lg:mb-1" key={index}>
                        <a
                          className="font-franklin text-sm font-medium text-gray-600 hover:text-gray-300"
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </section>
      <hr className="mb-[1px] h-[1px] w-full bg-gray-200" />
      <section className="px-5 py-3 lg:px-0">
        <p className="text-xxs mb-6 text-center font-franklin font-normal text-gray-500">
          © 2024 The Old Cesena Times | by MV
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-2.5">
          <p className="text-xxs text-center font-franklin font-normal text-gray-500">
            © 2024 The Old Cesena Times | by MV
          </p>
          {[
            ["MV", "#"],
            ["Work with me", "#"],
            ["Advertise", "#"],
            ["Contact Me", "#"],
            ["Accesibility", "#"],
            ["Privacy Policy", "#"],
            ["start2impact University", "#"],
          ].map((item) => (
            <a
              key={item[0]}
              href={item[1]}
              className="text-xxs cursor-pointer font-franklin font-normal text-gray-600"
            >
              {item[0]}
            </a>
          ))}
        </div>
      </section>
      <hr className="mb-[1px] h-[1px] w-full bg-gray-200" />
      <section className="px-5 py-3 lg:px-0">
        <a
          href="https://developer.nytimes.com/"
          className="text-xxs mb-6 block text-center font-franklin font-normal text-gray-500"
        >
          Data provided by The New York Times
        </a>
        <a href="https://developer.nytimes.com/" title="nyt atribution">
          <img
            src="assets/images/poweredby_nytimes_200a.png"
            width="200"
            alt="nyt-atribution-logo"
            className="mx-auto"
          />
        </a>

        <p className="text-xxs mb-6 py-2 text-center font-franklin font-normal text-gray-500">
          We extend our gratitude to the nyt-api and start2impact University.
          This project is an academic endeavor, designed solely for educational
          purposes within the realm of web development. We appreciate your
          attention.
        </p>
      </section>
    </footer>
  );
});

export default Footer;
