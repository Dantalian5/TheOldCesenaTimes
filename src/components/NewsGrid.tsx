import { memo } from "react";
import { useAppSelector } from "@/redux/hooks";
import NewsBlock from "@/components/NewsBlock";
import { fnFilterText } from "@/utils";
import type { TypeArticle } from "@/types";

type Props = {
  data: TypeArticle[];
};

const NewsGrid = memo(({ data }: Props) => {
  console.log("render NewsGrid");
  const filter = useAppSelector((state) => state.filter.value);
  const newsMap: Array<Array<Array<TypeArticle>>> = [];
  const dataMap = data.filter((item) =>
    fnFilterText(filter, [item.title, item.abstract, item.byline]),
  );
  const opinionIndex: number = dataMap.findIndex(
    (item) => item.section === "opinion",
  );
  const opinionatedData =
    filter !== ""
      ? [dataMap]
      : [dataMap.slice(0, opinionIndex), dataMap.slice(opinionIndex)];
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

  return (
    <main className="mx-auto max-w-[1285px] gap-x-4 px-5 lg:flex lg:items-stretch lg:px-11">
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
      {newsMap.length > 1 && (
        <>
          <span className="my-4 hidden flex-[0_0_1px] bg-gray-200 lg:block"></span>
          <div className="w-full lg:flex-[1_1_40%]">
            {newsMap[1].map((dataBlock) => (
              <NewsBlock key={dataBlock[0].uri} data={dataBlock} side="right" />
            ))}
          </div>
        </>
      )}
    </main>
  );
});

export default NewsGrid;
