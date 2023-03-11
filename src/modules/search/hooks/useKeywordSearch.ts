import { useQuery } from "react-query";
import { addKeyword } from "../../../lib/controller";

export const useKeywordSearch = ({ query }: { query: string }) => {
  return useQuery(
    ["search-query-result"],
    async () => {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${query}`
      );

      return response.json();
    },
    {
      onSuccess: (data) => {
        const payload = {
          keyword: query,
          numberOfHits: data?.query?.searchinfo?.totalhits,
          time: Date.now(),
        };
        addKeyword(payload);
      },
    }
  );
};
