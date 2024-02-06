"use client";
import HomeMainCarousel from "@/components/HomeMainCarousel";
import HomeSeconDaryCarousel from "@/components/HomeSecondaryCarousel";
import HomeWebtoonFilter from "@/components/HomeWebtoonFilter";

interface HomeWebtoosType {
  new: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  [key: string]: string;
}
const HomeWebtoons: HomeWebtoosType = {
  new: "신작 웹툰",
  sun: "일요 웹툰",
  mon: "월요 웹툰",
  tue: "화요 웹툰",
  wed: "수요 웹툰",
  thu: "목요 웹툰",
  fri: "금요 웹툰",
  sat: "토요 웹툰",
};
const Home = () => {
  return (
    <div className="home_contents">
      <HomeWebtoonFilter />
      <HomeMainCarousel />
      {Object.keys(HomeWebtoons).map((title: string) => {
        return (
          <HomeSeconDaryCarousel title={HomeWebtoons[title]} class={title} />
        );
      })}
    </div>
  );
};

export default Home;
