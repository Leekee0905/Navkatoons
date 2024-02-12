"use client";
import { selectedMenuState } from "@/states/atoms/SelectedMenu";
import {
  DayOfTheWeek,
  WebtoonFillterMenu,
  WebtoonsFillterContainer,
} from "@/styles/WebtoonsFillter";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface NowPage {
  home: boolean;
}

export const WEEBTOONS_FILLTER_MENU = [
  "전체",
  "네이버",
  "카카오 페이지",
  "카카오 웹툰",
];
export const WEEK = {
  sun: "일요 웹툰",
  mon: "월요 웹툰",
  tue: "화요 웹툰",
  wed: "수요 웹툰",
  thu: "목요 웹툰",
  fri: "금요 웹툰",
  sat: "토요 웹툰",
};

const WebtoonFilter = (props: NowPage) => {
  const [activeMenu, setActiveMenu] = useState<string>("전체");
  const selected = useRecoilValue(selectedMenuState);
  const today = Object.values(WEEK)[new Date().getDay()];

  const selectedMenuNameGenerator = (menu: string) => {
    return selected.length > 1 ? `${menu} 웹툰` : `${menu}요 웹툰`;
  };
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };
  return (
    <WebtoonsFillterContainer>
      <DayOfTheWeek>
        {props.home ? `${today}` : `${selectedMenuNameGenerator(selected)}`}
      </DayOfTheWeek>
      {WEEBTOONS_FILLTER_MENU.map((menus: string) => (
        <WebtoonFillterMenu
          key={menus}
          onClick={() => handleMenuClick(menus)}
          className={activeMenu === menus ? "active" : ""}
        >
          {menus}
        </WebtoonFillterMenu>
      ))}
    </WebtoonsFillterContainer>
  );
};

export default WebtoonFilter;
