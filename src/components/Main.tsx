import NewsBlock from "@/components/NewsBlock";
import data from "@/metadata.json";

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

interface NewsArticle {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type?: string;
  updated_date?: string;
  created_date?: string;
  published_date?: string;
  material_type_facet?: string;
  kicker?: string;
  des_facet?: string[];
  org_facet?: string[];
  per_facet?: string[];
  geo_facet?: string[];
  multimedia?: Multimedia[];
  short_url?: string;
}

const Main = () => {
  console.log("render Main");
  const newsMap: Array<Array<Array<NewsArticle>>> = [];
  const opinionIndex: number = data.findIndex(
    (item) => item.section === "opinion",
  );
  const opinionatedData = [
    data.slice(0, opinionIndex),
    data.slice(opinionIndex),
  ];
  for (const index in opinionatedData) {
    let blockCount: number = 0;
    let section: string = "";
    let subsection: string = "";
    newsMap.push([]);
    for (const item of opinionatedData[index]) {
      if (
        blockCount === 0 ||
        ((item.section !== section || item.subsection !== subsection) &&
          item.section !== "briefing")
      ) {
        section = item.section;
        subsection = item.subsection;
        newsMap[index].push([]);
        blockCount = 0;
      }

      newsMap[index][newsMap[index].length - 1].push(item);

      blockCount < 4 ? blockCount++ : (blockCount = 0);
    }
  }

  console.log(newsMap);
  return (
    <main className="gap-x-4 px-5 pt-4 lg:flex lg:items-stretch lg:px-32">
      <div className="w-full lg:flex-auto">
        {newsMap[0].map((dataBlock, index) => (
          <NewsBlock
            key={dataBlock[0].uri}
            data={dataBlock}
            index={index}
            side="left"
          />
        ))}
      </div>
      <span className="my-4 hidden flex-[0_0_1px] bg-gray-200 lg:block"></span>
      <div className="w-full lg:flex-[1_1_40%]">
        {newsMap[1].map((dataBlock, index) => (
          <NewsBlock
            key={dataBlock[0].uri}
            data={dataBlock}
            index={index}
            side="right"
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
