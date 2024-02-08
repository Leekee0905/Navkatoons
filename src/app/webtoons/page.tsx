"use client";

import WebtoonFilter, { WEEK } from "@/components/WebtoonFilter";
import WeeklyFilterHeader from "./components/WeeklyFilterHeader";

const Page = () => {
  return (
    <div className="total-webtoons">
      <WeeklyFilterHeader />
      <WebtoonFilter />
    </div>
  );
};

export default Page;
