"use client";
import {
  TODAY,
  WEEK,
  selectedAllWebtoonType,
  selectedHomeCarouselType,
  selectedMenuState,
} from "@/states/SelectedMenu";
import {
  DayOfTheWeek,
  WebtoonFillterMenu,
  WebtoonsFillterContainer,
} from "@/styles/WebtoonsFillter";
import { useRecoilState, useRecoilValue } from "recoil";

interface NowPage {
  home: boolean;
}

interface WebtoonFillterType {
  naver: string;
  kakao: string;
  kakaoPage: string;
  [key: string]: string;
}

export const WEBTOONS_FILLTER_MENU: WebtoonFillterType = {
  naver: "네이버",
  kakaoPage: "카카오 페이지",
  kakao: "카카오 웹툰",
};

const WebtoonFilter = (props: NowPage) => {
  const [activeMenu, setActiveMenu] = useRecoilState<string>(
    props.home ? selectedHomeCarouselType : selectedAllWebtoonType
  );
  const selected = useRecoilValue(selectedMenuState);

  const selectedMenuNameGenerator = (menu: string) => {
    return selected.length > 1 ? `${menu} 웹툰` : `${menu}요 웹툰`;
  };
  const handleMenuClick = (menuName: string) => {
    setActiveMenu(menuName);
  };
  return (
    <WebtoonsFillterContainer>
      <DayOfTheWeek>
        {props.home ? `${TODAY}` : `${selectedMenuNameGenerator(selected)}`}
      </DayOfTheWeek>
      {Object.values(WEBTOONS_FILLTER_MENU).map((menus: string) => (
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
