import { atom } from "recoil";

export const WEEK = {
  sun: "일요 웹툰",
  mon: "월요 웹툰",
  tue: "화요 웹툰",
  wed: "수요 웹툰",
  thu: "목요 웹툰",
  fri: "금요 웹툰",
  sat: "토요 웹툰",
};
export const TODAY = Object.values(WEEK)[new Date().getDay()];

export const selectedMenuState = atom({
  key: "selectedMenuState",
  default: "요일전체",
});

export const selectedHomeCarouselType = atom({
  key: "selectedHomeCarouselType",
  default: "전체",
});
