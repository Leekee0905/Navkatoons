"use server";

import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const day = params.get("updateDay")?.toUpperCase();
  try {
    const naver = await apiInstance.get("/webtoons", {
      params: {
        provider: "NAVER",
        updateDay: day,
        page: 0,
      },
    });
    const kakao = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO",
        updateDay: day,
        page: 0,
      },
    });
    let kakaoPage = await apiInstance.get("/webtoons", {
      params: {
        provider: "KAKAO_PAGE",
        updateDay: day,
        page: 0,
      },
    });

    return NextResponse.json({
      response: [
        ...naver.data.webtoons,
        ...kakao.data.webtoons,
        ...kakaoPage.data.webtoons,
      ],
    });
  } catch (error) {
    return NextResponse.json({ error: "" }, { status: 404 });
  }
};
