"use client";

import {
  HomeMainSlide,
  HomeMainSlider,
  HomeMainSlideTitleBox,
  HomeMainSlideTitleLink,
} from "@/styles/Carousel";

import { NextArrow, PrevArrow } from "./CarouselArrow";
import { useQuery } from "@tanstack/react-query";
import { WEBTOONS_FILLTER_MENU } from "./WebtoonFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedHomeCarouselType, WEEK } from "@/states/SelectedMenu";
import { preload } from "./ImagePreload";

export interface WebtoonDataType {
  id: string;
  title: string;
  provider: string;
  updateDays: Array<string>;
  url: string;
  thumbnail: Array<string>;
  isEnd: boolean;
  isFree: boolean;
  isUpdated: boolean;
  ageGrade: number;
  freeWaitHour: number;
  author: Array<string>;
  total: string;
  isLastPage: boolean;
}

const todayKey = Object.keys(WEEK)[new Date().getDay()];
const HomeMainCarousel = ({ data }: any) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [carouselData, setCarouselData] = useState<WebtoonDataType[]>([]);
  const selected = useRecoilValue(selectedHomeCarouselType);
  const filter = Object.keys(WEBTOONS_FILLTER_MENU).find(
    (key) => WEBTOONS_FILLTER_MENU[key] === selected
  );
  const carouselDataQuery = useQuery({
    queryKey: ["type", filter],
    queryFn: () =>
      axios.get("/api/mainCarousel", {
        params: {
          service: filter,
          updateDay: todayKey,
        },
      }),
    staleTime: Infinity,
  });
  useEffect(() => {
    if (carouselDataQuery.isSuccess) {
      setCarouselData(carouselDataQuery.data.data.response);
      carouselDataQuery.data.data.response.forEach((e: WebtoonDataType) => {
        preload(e.thumbnail[0]);
      });
    }
  }, [carouselDataQuery.isSuccess, carouselDataQuery.data]);

  return (
    <div className="slider-container">
      <HomeMainSlider {...settings}>
        {carouselData.map((e: any, idx: number) => {
          return (
            <HomeMainSlide key={idx}>
              <a href={e.url}>
                <img
                  alt="MainCarousel"
                  width={"100%"}
                  height={"90%"}
                  style={{ cursor: "pointer", objectFit: "contain" }}
                  src={e.thumbnail[0]}
                  loading="lazy"
                />
              </a>
              <HomeMainSlideTitleBox>
                <HomeMainSlideTitleLink href={e.url}>
                  {e.title}
                </HomeMainSlideTitleLink>
              </HomeMainSlideTitleBox>
            </HomeMainSlide>
          );
        })}
      </HomeMainSlider>
    </div>
  );
};

export default HomeMainCarousel;
