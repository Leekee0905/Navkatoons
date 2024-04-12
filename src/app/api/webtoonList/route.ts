"use server";
import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day =
    params.get("updateDay") === "all" ? null : params.get("updateDay");
  const service = params.get("service");
  const page = params.get("page");

  // 카페 100 네이버 97페이지까지 카웹 77
  const naver = await apiInstance.get("", {
    params: {
      service: "naver",
      updateDay: day,
      perPage: 25,
      page: page,
    },
  });
  const kakao = await apiInstance.get("", {
    params: {
      service: "kakao",
      updateDay: day,
      perPage: 25,
      page: page,
    },
  });
  let kakaoPage = await apiInstance.get("", {
    params: {
      service: "kakaoPage",
      updateDay: day,
      perPage: 25,
      page: page,
    },
  });

  kakaoPage.data.webtoons.forEach((e: any) => {
    e.img = "http:" + e.img;
  });
  switch (service) {
    case "naver": {
      return NextResponse.json({
        response: naver.data.webtoons,
      });
    }
    case "kakao": {
      return NextResponse.json({
        response: kakao.data.webtoons,
      });
    }
    case "kakaoPage": {
      return NextResponse.json({
        response: kakaoPage.data.webtoons,
      });
    }
  }
};
