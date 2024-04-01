import { AttractionsSearchResults } from '~/interfaces/apiresults';
import { AttractionDetails } from '~/interfaces/attractionDetails';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getSearchResults = async (query: string): Promise<AttractionsSearchResults> => {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${API_KEY}&keyword=${query}`
  );

  const data = await response.json();
  return data;
};

export const getAttractionDetails = async (query: string): Promise<AttractionDetails> => {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/attractions/${query}.json?apikey=${API_KEY}`
  );

  const data = await response.json();
  return data;
};
