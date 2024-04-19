"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>알 수 없는 오류가 발생했습니다. 새로고침을 눌러주세요.</h2>
        <button onClick={() => reset()}>새로 고침</button>
      </body>
    </html>
  );
}
