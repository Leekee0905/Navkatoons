"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>알 수 없는 오류가 발생했습니다. 새로고침을 눌러주세요.</h2>
      <button onClick={() => reset()}>새로 고침</button>
    </div>
  );
}
