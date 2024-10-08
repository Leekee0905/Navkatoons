"use client";
import { WebtoonDataType } from "@/components/HomeMainCarousel";
import { SearchBox } from "@/styles/Search";
import {
  WebtoonCardImg,
  WebtoonCardTextAuthor,
  WebtoonCardTextBox,
  WebtoonCardTextTitle,
} from "@/styles/WebtoonCard";
import { WebtoonsBox, WebtoonsListContainer } from "@/styles/WebtoonsListBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { preload } from "react-dom";
import NoResult from "./components/NoResult";
import Image from "next/image";

const Search = () => {
  const params = useSearchParams().get("key");
  const [searchData, setSearchData] = useState<WebtoonDataType[]>([]);
  const searchDataQuery = useQuery({
    queryKey: [params],
    queryFn: () =>
      axios.get("/api/search", {
        params: {
          key: params,
        },
      }),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (searchDataQuery.isSuccess) {
      setSearchData(searchDataQuery.data.data.response);
      searchDataQuery.data.data.response.forEach((e: any) =>
        preload(e.thumbnail[0], { as: "image" })
      );
    }
  }, [searchDataQuery]);
  return (
    <SearchBox className="search-webtoons">
      {searchData.length === 0 ? (
        <NoResult />
      ) : (
        <>
          <h4 style={{ paddingLeft: "1em" }}>
            "{params}"에 대한 검색 결과입니다.
          </h4>
          <WebtoonsListContainer>
            {searchData.map((e, idx) => (
              <WebtoonsBox key={idx}>
                <a href={e.url}>
                  <Image
                    alt="search-image"
                    src={`/api/imageProxy?imageUrl=${encodeURIComponent(
                      e.thumbnail[0]
                    )}`}
                    width={200}
                    height={200}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      backgroundColor: "#ebebeb",
                      cursor: "pointer",
                      objectFit: "contain",
                    }}
                  />
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
        </>
      )}
    </SearchBox>
  );
};

export default Search;
