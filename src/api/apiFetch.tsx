import axios from "axios";
const apiKey: string = String(import.meta.env.VITE_API_KEY);
export const apiFetch = (section) => {
  const base: string = "https://api.nytimes.com";
  const route: string = `/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
  const url = new URL(route, base);

  const data = axios.get(url.href).then((res) => res.data);
  return data;
};
export const apiSearch = (searchValue: string) => {
  const base: string = "https://api.nytimes.com";
  const route: string = `/svc/search/v2/articlesearch.json?fq=${searchValue}&q=${searchValue}&sort=relevance&api-key=${apiKey}`;
  const url = new URL(route, base);

  const data = axios.get(url.href).then((res) => res.data);
  return data;
};
