import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

export const useSearchItem = () => {
  const location = useLocation();
  const searchTitle = decodeURIComponent(location.pathname).split("/")[2];

  return useQuery(["search-query-item"], async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${searchTitle}`
    );

    return response.json();
  });
};
