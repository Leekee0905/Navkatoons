import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get("imageUrl");

  if (!imageUrl) {
    return NextResponse.json({ error: "Invalid imageUrl" }, { status: 400 });
  }

  try {
    const imageResponse = await fetch(imageUrl);

    // Content-Type이 이미지인지 확인
    const contentType = imageResponse.headers.get("Content-Type");
    if (!contentType || !contentType.startsWith("image/")) {
      const responseBody = await imageResponse.text();
      return NextResponse.json(
        { error: "The requested resource is not a valid image", responseBody },
        { status: 400 }
      );
    }

    // ReadableStream을 Buffer로 변환
    const buffer = await streamToBuffer(imageResponse.body);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (err: any) {
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
