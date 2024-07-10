"use client";

import WebtoonFilter, {
  WEBTOONS_FILLTER_MENU,
} from "@/components/WebtoonFilter";
import WeeklyFilterHeader, {
  WEEK_FILTER_MENU,
} from "./components/WeeklyFilterHeader";
import { WebtoonsBox, WebtoonsListContainer } from "@/styles/WebtoonsListBox";
import {
  WebtoonCardImg,
  WebtoonCardTextAuthor,
  WebtoonCardTextBox,
  WebtoonCardTextTitle,
} from "@/styles/WebtoonCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { preload } from "react-dom";
import { useRecoilValue } from "recoil";
import {
  selectedAllWebtoonType,
  selectedMenuState,
} from "@/states/SelectedMenu";
import { WebtoonDataType } from "@/components/HomeMainCarousel";
import Pagination from "@/components/Pagination";

export interface PageObjType {
  total: number;
  isLastPage: boolean;
}

const Webtoons = () => {
  const [webtoonData, setWebtoonData] = useState<WebtoonDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageObj, setPageObj] = useState<PageObjType>({
    total: 0,
    isLastPage: false,
  });
  const selectedWeek = useRecoilValue(selectedMenuState);
  const selected = useRecoilValue(selectedAllWebtoonType);

  const filter = Object.keys(WEBTOONS_FILLTER_MENU).find(
    (key) => WEBTOONS_FILLTER_MENU[key] === selected
  );
  const weekFilter = Object.keys(WEEK_FILTER_MENU).find(
    (key) => WEEK_FILTER_MENU[key] === selectedWeek
  );

  const webtoonDataQuery = useQuery({
    queryKey: ["type", filter, selectedWeek, page],
    queryFn: () =>
      axios.get("/api/webtoonList", {
        params: {
          service: filter,
          updateDay: weekFilter,
          page: page + 1,
        },
      }),
    staleTime: Infinity,
  });
  useEffect(() => {
    if (webtoonDataQuery.isSuccess) {
      setWebtoonData(webtoonDataQuery.data.data.response);
      setPageObj({
        total: webtoonDataQuery.data.data.total,
        isLastPage: webtoonDataQuery.data.data.isLastPage,
      });

      webtoonDataQuery.data.data.response.forEach((e: any) =>
        preload(e.thumbnail[0], { as: "image" })
      );
    }
  }, [webtoonDataQuery.isSuccess, webtoonDataQuery.data]);

  return (
    <div className="total-webtoons">
      <WeeklyFilterHeader />
      <WebtoonFilter home={false} />
      <WebtoonsListContainer>
        {webtoonData.map((e, idx) => (
          <WebtoonsBox key={idx}>
            <a href={e.url}>
              <WebtoonCardImg src={e.thumbnail[0]} />
            </a>

            <WebtoonCardTextBox>
              <WebtoonCardTextTitle href={e.url}>
                {e.title}
              </WebtoonCardTextTitle>
              <WebtoonCardTextAuthor>{e.author}</WebtoonCardTextAuthor>
            </WebtoonCardTextBox>
          </WebtoonsBox>
        ))}
      </WebtoonsListContainer>
      <Pagination page={pageObj} setPage={setPage} nowPage={page} />
    </div>
  );
};

export default Webtoons;
