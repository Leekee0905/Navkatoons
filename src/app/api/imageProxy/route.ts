// app/api/image-proxy/route.ts

import { NextRequest, NextResponse } from "next/server";
import https from "https";
import { IncomingMessage } from "http";
import { Readable } from "stream";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return NextResponse.json({ error: "Invalid imageUrl" }, { status: 400 });
  }

  try {
    const imageResponse = await fetchImage(imageUrl);

    // Content-Type이 이미지인지 확인
    const contentType = imageResponse.headers["content-type"];
    if (!contentType || !contentType.startsWith("image/")) {
      const responseBody = await streamToBuffer(imageResponse).then((buf) =>
        buf.toString()
      );
      console.error("Received non-image response:", responseBody); // 서버 로그에 에러 출력
      return NextResponse.json(
        { error: "The requested resource is not a valid image", responseBody },
        { status: 400 }
      );
    }

    // Readable 스트림을 Buffer로 변환
    const buffer = await streamToBuffer(imageResponse);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (err: any) {
    console.error("Image proxy error:", err.message); // 서버 로그에 에러 출력
    return NextResponse.json(
      { error: "Image proxy failed", details: err.message },
      { status: 500 }
    );
  }
}

async function fetchImage(url: string): Promise<IncomingMessage> {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          },
        },
        (proxyRes) => {
          if (proxyRes.statusCode !== 200) {
            reject(new Error(`Failed to fetch image: ${proxyRes.statusCode}`));
            return;
          }

          resolve(proxyRes);
        }
      )
      .on("error", reject);
  });
}

function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}
