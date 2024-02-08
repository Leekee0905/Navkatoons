"use client";

import WebtoonFilter, { WEEK } from "@/components/WebtoonFilter";
import WeekFilterHeader from "./components/WeekendHeader";

const Page = () => {
  return (
    <div className="total-webtoons">
      <WeekFilterHeader />
      <WebtoonFilter />
    </div>
  );
};

export default Page;
