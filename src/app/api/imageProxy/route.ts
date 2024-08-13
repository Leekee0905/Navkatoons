import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get("imageUrl");

  if (!imageUrl) {
    console.error("Invalid imageUrl parameter"); // 로깅 추가
    return NextResponse.json({ error: "Invalid imageUrl" }, { status: 400 });
  }

  try {
    // 이미지 요청
    const response = await fetch(imageUrl);

    // 응답 상태 확인
    if (!response.ok) {
      return new NextResponse("Failed to fetch image", {
        status: response.status,
      });
    }

    // Content-Type 확인
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.startsWith("image/")) {
      const responseBody = await response.text();
      console.error("Received non-image response:", responseBody); // 로깅 추가
      return NextResponse.json(
        { error: "The requested resource is not a valid image", responseBody },
        { status: 400 }
      );
    }

    // ReadableStream을 Buffer로 변환
    const buffer = await streamToBuffer(response.body);

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

async function streamToBuffer(
  stream: ReadableStream<Uint8Array> | null
): Promise<Buffer> {
  if (!stream) {
    throw new Error("Stream is null");
  }

  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    if (value) {
      chunks.push(value);
    }
  }

  return Buffer.concat(chunks);
}
