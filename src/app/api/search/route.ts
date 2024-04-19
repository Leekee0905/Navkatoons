"use server";

import { NextRequest, NextResponse } from "next/server";
import { apiInstance } from "../apiInstance";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const params = req.nextUrl.searchParams;
  const keyword = params.get("key");
  const searchRes = await apiInstance.get("/search", {
    params: {
      keyword: keyword,
    },
  });

  return NextResponse.json({
    response: searchRes.data.webtoons,
  });
};
