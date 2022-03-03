// Todo: load the cities.json

export interface IUSState {
  // Todo: Implement me
}
export interface IUSCity {
  // Todo: Implement me
}

export const apiSearchCities = async (searchText: string): Promise<IUSState[]> => {
  await new Promise(r => setTimeout(r, 500)); // Artificial network delay
  // Todo: implement me
  searchText;
  throw "Not implemented";
}
