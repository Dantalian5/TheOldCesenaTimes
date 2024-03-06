import { TypeArticle } from "@/utils/types";
export const filterFn = (data: TypeArticle[], filter: string) => {
  const newData = data.filter((item) => {
    if (
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.abstract.toLowerCase().includes(filter.toLowerCase()) ||
      item.byline.toLowerCase().includes(filter.toLowerCase())
    ) {
      return item;
    }
  });
  return newData;
};
