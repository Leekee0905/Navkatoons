import { selectedMenuState } from "@/states/SelectedMenu";
import {
  WeekWebtoonsFilterContainer,
  WeekWebtoonsFilterMenu,
} from "@/styles/WebtoonsFillter";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface WEEK_FILTER_MENU_TYPE {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
  new: string;
  finished: string;
  [key: string]: string;
}
export const WEEK_FILTER_MENU: WEEK_FILTER_MENU_TYPE = {
  all: "요일전체",
  mon: "월",
  tue: "화",
  wed: "수",
  thu: "목",
  fri: "금",
  sat: "토",
  sun: "일",
  new: "신작",
  finished: "완결",
};

const WeeklyFilterHeader = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(selectedMenuState);

  const handleMenuClick = (day: string) => {
    setActiveMenu(day);
  };

  return (
    <WeekWebtoonsFilterContainer>
      {Object.values(WEEK_FILTER_MENU).map((day) => (
        <WeekWebtoonsFilterMenu
          key={day}
          onClick={() => handleMenuClick(day)}
          className={activeMenu === day ? "active" : ""}
        >
          {day}
        </WeekWebtoonsFilterMenu>
      ))}
    </WeekWebtoonsFilterContainer>
  );
};

export default WeeklyFilterHeader;
