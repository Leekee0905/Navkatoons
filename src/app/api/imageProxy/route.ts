import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get("imageUrl");

  if (!imageUrl) {
    return NextResponse.json({ error: "Invalid imageUrl" }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new NextResponse("Failed to fetch image", {
        status: response.status,
      });
    }

    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.startsWith("image/")) {
      const responseBody = await response.text();
      return NextResponse.json(
        { error: "The requested resource is not a valid image", responseBody },
        { status: 400 }
      );
    }

    const buffer = await streamToBuffer(response.body);

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
