import axios from "axios";
const apiKey: string = String(import.meta.env.VITE_API_KEY);
export const apiFetch = (section) => {
  const base: string = "https://api.nytimes.com";
  const route: string = `/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
  const url = new URL(route, base);

  const data = axios.get(url.href).then((res) => res.data);
  return data;
};
export const apiSearch = (
  searchValue: string,
  sortBy: string,
  sectionValue: string,
  docType: string,
) => {
  const base: string = "https://api.nytimes.com";
  const fq: string[] = [];
  sectionValue !== "any" && fq.push(`section_name:("${sectionValue}")`);
  docType !== "any" && fq.push(`document_type:("${docType}")`);

  const encodedFq = fq.length > 0 ? encodeURI(`fq=${fq.join(" AND ")}&`) : "";
  const encodedQ = `q=${searchValue}`;
  const encodedSort = `sort=${sortBy}`;
  const route: string = `/svc/search/v2/articlesearch.json?${encodedFq}${encodedQ}&${encodedSort}&api-key=${apiKey}`;
  const url = new URL(route, base);

  const data = axios.get(url.href).then((res) => res.data);
  return data;
};
