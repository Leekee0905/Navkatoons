"use server";
import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day = params.get("updateDay")?.toUpperCase();
  const service = params.get("service");
  try {
    const naver = await apiInstance.get("/webtoons", {
      params: {
        provider: "NAVER",
        updateDay: day,
        perPage: 15,
      },
    });
    const kakao = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO",
        updateDay: day,
        perPage: 15,
      },
    });
    const kakaoPage = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO_PAGE",
        updateDay: day,
        perPage: 15,
      },
    });

    switch (service) {
      case "naver": {
        naver.data.webtoons.forEach((e): any => {
          e.thumbnail[0] = `${e.thumbnail[0]}?format=webp`;
        });
        return NextResponse.json({
          response: naver.data.webtoons,
        });
      }
      case "kakao": {
        kakao.data.webtoons.forEach((e): any => {
          e.thumbnail[0] = `${e.thumbnail[0]}?format=webp`;
        });
        return NextResponse.json({
          response: kakao.data.webtoons,
        });
      }
      case "kakaoPage": {
        kakaoPage.data.webtoons.forEach((e): any => {
          e.thumbnail[0] = `${e.thumbnail[0]}?format=webp`;
        });
        return NextResponse.json({
          response: kakaoPage.data.webtoons,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ error: "" }, { status: 404 });
  }
};
