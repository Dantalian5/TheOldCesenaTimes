export const fnFilterText = (filter: string, data: string[]) => {
  return data.some((text) => text.toLowerCase().includes(filter.toLowerCase()));
};
