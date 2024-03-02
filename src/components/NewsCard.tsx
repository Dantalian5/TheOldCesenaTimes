type cardProps = {
  size: "xlarge" | "large" | "medium" | "small";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  news: any;
};
const NewsCard = ({ size, news }: cardProps) => {
  const { title, abstract, url, kicker, byline } = news;
  let titleClass: string = " ";
  let showAbstract: boolean = true;

  switch (size) {
    case "xlarge":
      titleClass = " text-30 sm:text-18";
      showAbstract = true;
      break;
    case "large":
      titleClass = " text-28 sm:text-18";
      showAbstract = true;
      break;
    case "medium":
      titleClass = " text-18 sm:text-base";
      showAbstract = true;
      break;
    case "small":
      titleClass = " text-18 sm:text-base";
      showAbstract = false;
      break;
  }
  let headerKicker: JSX.Element | null = null;
  switch (kicker) {
    case "News Analysis":
      headerKicker = (
        <p className="mb-1.5 font-franklin text-10 font-semibold uppercase text-black-100">
          Analysis
        </p>
      );
      break;
    case "Guest Essay":
      headerKicker = (
        <p className="mb-1.5 font-baskerville text-10 font-bold uppercase text-gray-300">
          {byline.replace("By", "")}
        </p>
      );
      titleClass = " text-24 sm:text-20 tracking-tighter";
      showAbstract = false;
      break;
  }

  return (
    <div className="">
      {headerKicker !== null && headerKicker}
      <a href={url} className="mb-2 block">
        <h3
          className={`font-baskerville font-bold tracking-tight text-black-100 ${titleClass}`}
        >
          {title}
        </h3>
      </a>
      {showAbstract && (
        <p className="font-pt text-base font-normal text-gray-400">
          {abstract}
        </p>
      )}
    </div>
  );
};

export default NewsCard;
