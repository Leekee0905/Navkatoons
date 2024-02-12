"use client";
import HomeMainCarousel from "@/components/HomeMainCarousel";
import HomeSeconDaryCarousel from "@/components/HomeSecondaryCarousel";
import WebtoonFilter from "@/components/WebtoonFilter";

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
      <WebtoonFilter home={true} />
      <HomeMainCarousel />
      {Object.keys(HomeWebtoons).map((title: string, idx: number) => {
        return (
          <HomeSeconDaryCarousel
            title={HomeWebtoons[title]}
            class={title}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default Home;
