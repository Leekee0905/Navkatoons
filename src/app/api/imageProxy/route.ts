// app/api/image-proxy/route.ts

import { NextRequest, NextResponse } from "next/server";
import https from "https";
import { Readable } from "stream";
import { IncomingMessage } from "http";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    console.error("Invalid imageUrl parameter"); // 로깅 추가
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
      console.error("Received non-image response:", responseBody); // 로깅 추가
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
    console.error("Image proxy error:", err.message); // 로깅 추가
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
            console.error(`Failed to fetch image: ${proxyRes.statusCode}`); // 로깅 추가
            reject(new Error(`Failed to fetch image: ${proxyRes.statusCode}`));
            return;
          }

          resolve(proxyRes);
        }
      )
      .on("error", (err) => {
        console.error("Error during HTTPS request:", err.message); // 로깅 추가
        reject(err);
      });
  });
}

function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", (err) => {
      console.error("Error converting stream to buffer:", err.message); // 로깅 추가
      reject(err);
    });
  });
}
