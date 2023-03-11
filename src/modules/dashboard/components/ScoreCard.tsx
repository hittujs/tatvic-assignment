import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { keywordsCollection } from "../../../lib/controller";
import Card from "./Card";

interface Props {
  startTime: number;
}

const ScoreCard = ({ startTime }: Props) => {
  const [keywords, setKeywords] = useState([]);
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    onSnapshot(keywordsCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      //   @ts-ignore
      setKeywords(data);
    });
  }, []);

  useEffect(() => {
    if (keywords) {
      const data = filterDataByDay(keywords, startTime);
      //   @ts-ignore
      setQueryData(data);
    }
  }, [keywords, startTime]);

  const filterDataByDay = (data: any, time: number) => {
    const dataDays = Object.values(data);
    return dataDays.filter(
      // @ts-ignore
      (record) => record?.time > Date.now() - time
    );
  };

  return <Card scoreData={queryData}/>;
};

export default ScoreCard;
