import axios from "axios";

export const apiFetch = (section) => {
  const apiKey: string = String(import.meta.env.VITE_API_KEY);
  const base: string = "https://api.nytimes.com";
  const route: string = `/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
  const url = new URL(route, base);
  return axios.get(url.href).then((res) => res.data);
};
