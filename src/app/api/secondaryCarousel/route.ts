"use server";

import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day = params.get("updateDay");
  const naver = await apiInstance.get("", {
    params: {
      service: "naver",
      updateDay: day,
      page: 0,
    },
  });
  const kakao = await apiInstance.get("", {
    params: {
      service: "kakao",
      updateDay: day,
      page: 0,
    },
  });
  let kakaoPage = await apiInstance.get("", {
    params: {
      service: "kakaoPage",
      updateDay: day,
      page: 0,
    },
  });

  kakaoPage.data.webtoons.forEach((e: any) => {
    e.img = "http:" + e.img;
  });

  return NextResponse.json({
    response: [
      ...naver.data.webtoons,
      ...kakao.data.webtoons,
      ...kakaoPage.data.webtoons,
    ],
  });
};
