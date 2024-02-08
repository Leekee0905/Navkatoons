import {
  WeekWebtoonsFilterContainer,
  WeekWebtoonsFilterMenu,
} from "@/styles/WebtoonsFillter";
import { useState } from "react";

const WEEK_FILTER_MENU = {
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
  const [activeMenu, setActiveMenu] = useState<string>("요일전체");

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
