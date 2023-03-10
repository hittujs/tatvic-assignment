import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSearchItem } from "../hooks/useSearchItem";

const SearchItemContent = () => {
  const { data } = useSearchItem();
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");

  const extractAPIContents = (data: any) => {
    const { pages } = data?.query;

    return Object.keys(pages).map((id) => pages[id]?.extract);
  };

  useEffect(() => {
    const apiData = extractAPIContents(data);
    //   @ts-ignore
    setContent(apiData);
  }, [data]);

  return (
    <div>
      <Typography></Typography>
      {content?.map((data) => (
        <div dangerouslySetInnerHTML={{ __html: data }} />
      ))}
    </div>
  );
};

export default SearchItemContent;
