"use client";

import {
  DayOfTheWeek,
  WebtoonFillterMenu,
  WebtoonsFillterContainer,
} from "@/styles/WebtoonsFillter";
import { useState } from "react";

const webtoons_fillter_menu = [
  "전체",
  "네이버",
  "카카오 페이지",
  "카카오 웹툰",
];
const week = ["일요", "월요", "화요", "수요", "목요", "금요", "토요"];

const HomeWebtoonFilter = () => {
  const [activeMenu, setActiveMenu] = useState<string>("전체");
  const today = week[new Date().getDay()];
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };
  return (
    <WebtoonsFillterContainer>
      <DayOfTheWeek>{`${today} 웹툰`}</DayOfTheWeek>
      {webtoons_fillter_menu.map((menus: string) => (
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

export default HomeWebtoonFilter;
