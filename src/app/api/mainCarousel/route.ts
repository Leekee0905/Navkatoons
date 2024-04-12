"use server";
import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day = params.get("updateDay");
  const service = params.get("service");
  const naver = await apiInstance.get("", {
    params: {
      service: "naver",
      updateDay: day,
      perPage: 15,
    },
  });
  const kakao = await apiInstance.get("", {
    params: {
      service: "kakao",
      updateDay: day,
      perPage: 15,
    },
  });
  let kakaoPage = await apiInstance.get("", {
    params: {
      service: "kakaoPage",
      updateDay: day,
      perPage: 15,
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
