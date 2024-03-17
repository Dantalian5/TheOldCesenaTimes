import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { footerItems } from "@/assets/menuItems";
const Footer = memo(() => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const handleClick = (key: string | null) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <footer className="mx-auto max-w-[1285px] py-6 lg:px-11">
      <section className="px-5 lg:px-0">
        <hr className="mb-[1px] h-0.5 w-full bg-gray-200" />
        <span className="mb-[1px] block h-[1px] w-full bg-gray-200"></span>
        <h3 className=" mt-1.5 py-2.5 font-aguafina text-2xl font-normal lg:text-center">
          The Old Cesena Times
        </h3>
        <div className="lg:mb-4 lg:flex lg:justify-center lg:gap-40">
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
                        {item[0] === "Home Page" ? (
                          <Link to={`/`}>
                            <span className="font-franklin text-sm font-medium text-gray-600 underline-offset-2  hover:underline">
                              {item[0]}
                            </span>
                          </Link>
                        ) : (
                          <Link
                            to={`/section/${item[0]}`}
                            state={{
                              title: item[0],
                              section: item[1],
                            }}
                          >
                            <span className="font-franklin text-sm font-medium text-gray-600 underline-offset-2  hover:underline">
                              {item[0]}
                            </span>
                          </Link>
                        )}
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
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-2.5">
          <p className="mb-2 w-full text-center font-franklin text-xxs font-normal text-gray-500 lg:mb-0 lg:w-auto">
            © 2024 The Old Cesena Times | by MV
          </p>
          {[
            ["MV", "https://marcosvalenzuela.netlify.app"],
            ["Work with me", "https://marcosvalenzuela.netlify.app"],
            ["Contact Me", "https://marcosvalenzuela.netlify.app"],
            ["start2impact University", "https://www.start2impact.it"],
          ].map((item) => (
            <a
              key={item[0]}
              href={item[1]}
              className="cursor-pointer font-franklin text-xxs font-normal text-gray-600"
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
          className="mb-6 block text-center font-franklin text-xxs font-normal text-gray-500"
        >
          Data provided by The New York Times
        </a>
        <a href="https://developer.nytimes.com/" title="nyt atribution">
          <img
            src="assets/images/nytatribution.png"
            width="200"
            alt="nyt-atribution-logo"
            className="mx-auto"
          />
        </a>

        <p className="mb-6 py-2 text-center font-franklin text-xxs font-normal text-gray-500">
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
