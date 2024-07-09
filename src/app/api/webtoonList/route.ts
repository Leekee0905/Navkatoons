"use server";
import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day =
    params.get("updateDay") === "all"
      ? null
      : params.get("updateDay")?.toUpperCase();
  const service = params.get("service");
  const page = params.get("page");

  try {
    // 카페 100 네이버 97페이지까지 카웹 77
    const naver = await apiInstance.get("/webtoons", {
      params: {
        provider: "NAVER",
        updateDay: day,
        perPage: 25,
        page: page,
      },
    });
    const kakao = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO",
        updateDay: day,
        perPage: 25,
        page: page,
      },
    });
    const kakaoPage = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO_PAGE",
        updateDay: day,
        perPage: 25,
        page: page,
      },
    });

    switch (service) {
      case "naver": {
        return NextResponse.json({
          response: naver.data.webtoons,
          total: naver.data.total,
          isLastPage: naver.data.isLastPage,
        });
      }
      case "kakao": {
        return NextResponse.json({
          response: kakao.data.webtoons,
          total: kakao.data.total,
          isLastPage: kakao.data.isLastPage,
        });
      }
      case "kakaoPage": {
        return NextResponse.json({
          response: kakaoPage.data.webtoons,
          total: kakaoPage.data.total,
          isLastPage: kakaoPage.data.isLastPage,
        });
      }
      default: {
        return NextResponse.json({
          response: [],
          total: undefined,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ error: "" }, { status: 404 });
  }
};
