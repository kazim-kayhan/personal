"use client"; // Error components must be Client Components

import { mc } from "merge-class";
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
      <div
        className={mc(
          "background-grid flex h-full items-center justify-center",
        )}
      >
        <div
          className={mc(
            "content-wrapper text-center text-slate-600",
            "dark:text-slate-400",
          )}
        >
          <h1 className={mc("py-12 text-center")}>
            <div className={mc("mb-3 text-8xl font-extrabold")}>500</div>
            <div className={mc("text-2xl")}> Server Error </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
