type cardProps = {
  size: "xlarge" | "large" | "medium" | "small";
  setup?: "left" | "right";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  news: any;
};
const NewsCard = ({ size, news, setup = "left" }: cardProps) => {
  const { title, abstract, url, kicker, byline } = news;
  let titleClass: string = " ";
  let showAbstract: boolean = true;
  let showImage: boolean = false;

  switch (size) {
    case "xlarge":
      titleClass = ` text-3xl sm:text-lg ${setup === "right" && "lg:text-base"}`;
      showAbstract = true;
      showImage = setup === "right" && true;
      break;
    case "large":
      titleClass = ` text-xxl sm:text-lg ${setup === "right" && "lg:text-base"}`;
      showAbstract = true;
      showImage = setup === "right" && true;
      break;
    case "medium":
      titleClass = ` text-lg sm:text-base ${setup === "right" && "lg:text-base"}`;
      showAbstract = true;
      break;
    case "small":
      titleClass = ` text-lg sm:text-base ${setup === "right" && "lg:text-base"}`;
      showAbstract = false;
      break;
  }
  let headerKicker: JSX.Element | null = null;
  switch (kicker) {
    case "News Analysis":
      headerKicker = (
        <p className="text-xxs mb-1.5 font-franklin font-semibold uppercase text-black-100">
          Analysis
        </p>
      );
      break;
    case "Guest Essay":
      headerKicker = (
        <p className="text-xxs mb-1.5 font-baskerville font-bold uppercase text-gray-300">
          {byline.replace("By", "")}
        </p>
      );
      titleClass = " text-2xl sm:text-xl tracking-tighter";
      showAbstract = false;
      break;
  }

  return (
    <div>
      {headerKicker !== null && headerKicker}
      <div className="flex gap-x-4">
        <a href={url} className="mb-2 block">
          <h3
            className={`font-baskerville font-bold tracking-tight text-black-100 ${titleClass}`}
          >
            {title}
          </h3>
        </a>
        <img
          className={`hidden h-[90px] w-[90px] ${showImage && "lg:block"}`}
          src={news.multimedia[2].url}
          alt={news.multimedia[2].caption}
        />
      </div>

      {showAbstract && (
        <p
          className={`font-pt text-base font-normal text-gray-400 ${setup === "right" && "lg:hidden"}`}
        >
          {abstract}
        </p>
      )}
    </div>
  );
};

export default NewsCard;
