"use client";
import HomeMainCarousel from "@/components/HomeMainCarousel";
import HomeWebtoonFilter from "@/components/HomeWebtoonFilter";

const Home = () => {
  return (
    <div className="home_contents">
      <HomeWebtoonFilter />
      <HomeMainCarousel />
    </div>
  );
};

export default Home;
