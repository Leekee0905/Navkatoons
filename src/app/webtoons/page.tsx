"use client";

import WebtoonFilter, { WEEK } from "@/components/WebtoonFilter";
import WeeklyFilterHeader from "./components/WeeklyFilterHeader";
import { WebtoonsBox, WebtoonsListContainer } from "@/styles/WebtoonsListBox";
import {
  WebtoonCardImg,
  WebtoonCardTextAuthor,
  WebtoonCardTextBox,
  WebtoonCardTextTitle,
} from "@/styles/WebtoonCard";

const Webtoons = () => {
  const newar = [
    "스포일러 보는",
    "스포일러 보는 드라마 작가 ",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "스포일러 보는 드라마 작가 asdfa ",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "역대급 영지 설계사",
    "스포일러 보는",
    "스포일러 보는 드라마 작가 ",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "샬롯에게는 다섯 명의 제자가 있다",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "스포일러 보는 드라마 작가 asdfa asdfasdf asdf a",
    "스포일러 보는 드라마 작가 이번 스포일러 보는 드라마 작가 이번스포일러 보는 드라마 작가 이번스포일러 보는 드라마 작가 이번",
  ];
  return (
    <div className="total-webtoons">
      <WeeklyFilterHeader />
      <WebtoonFilter home={false} />
      <WebtoonsListContainer>
        {newar.map((e) => (
          <WebtoonsBox key={e}>
            <a href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
              <WebtoonCardImg src="https://kr-a.kakaopagecdn.com/P/C/3093/c1/2x/b973723c-39bb-4d69-b614-1b07ba82e2f6.png" />
            </a>

            <WebtoonCardTextBox>
              <WebtoonCardTextTitle href="https://webtoon.kakao.com/content/스포일러-보는-드라마-작가/3093">
                {e}
              </WebtoonCardTextTitle>
              <WebtoonCardTextAuthor>author</WebtoonCardTextAuthor>
            </WebtoonCardTextBox>
          </WebtoonsBox>
        ))}
      </WebtoonsListContainer>
    </div>
  );
};

export default Webtoons;
