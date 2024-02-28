import { mc } from "merge-class";
import Link from "next/link";

function Error404Contents() {
  return (
    <div
      className={mc("background-grid flex h-full items-center justify-center")}
    >
      <div
        className={mc(
          "content-wrapper text-center text-slate-600",
          "dark:text-slate-400",
        )}
      >
        <h1 className={mc("py-12 text-center")}>
          <div className={mc("mb-3 text-8xl font-extrabold")}>404</div>
          <div className={mc("text-2xl")}> Page Not Found </div>
        </h1>
        <Link
          href="/"
          className={mc(
            "rounded-xl py-2 px-4 text-xl text-accent-600",
            "dark:text-accent-400",
          )}
        >
          back to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error404Contents;
