import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSearchItem } from "../hooks/useSearchItem";

const SearchItemContent = () => {
  const { data } = useSearchItem();
  const [content, setContent] = useState([]);

  const extractAPIContents = (data: any) => {
    const { pages } = data?.query;

    return Object.keys(pages).map((id) => pages[id]?.extract);
  };

  useEffect(() => {
    if (data?.query?.pages) {
      const apiData = extractAPIContents(data);
      //   @ts-ignore
      setContent(apiData);
    }
  }, [data]);

  return (
    <div>
      <Typography></Typography>
      {content?.map((data) => (
        <div key={uuidv4()} dangerouslySetInnerHTML={{ __html: data }} />
      ))}
    </div>
  );
};

export default SearchItemContent;
