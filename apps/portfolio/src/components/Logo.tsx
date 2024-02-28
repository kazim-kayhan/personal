import { mc } from "merge-class";

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={mc("flex items-center gap-1.5 font-[1000] leading-none")}>
      <div
        className={mc(
          "border-box flex h-8 w-8 items-center justify-center rounded-xl border-2",
          "sm:h-6 sm:w-6 sm:rounded-lg",
          [
            active
              ? "border-accent-600 bg-accent-600 dark:border-accent-500 dark:bg-accent-500"
              : "border-accent-600 dark:border-accent-500",
          ],
        )}
      >
        <div
          className={mc(
            "h-3.5 w-0.5 rotate-12 rounded-full",
            "sm:h-3 sm:w-0.5",
            [active ? "bg-white" : "bg-accent-600 dark:bg-accent-400"],
          )}
        />
      </div>
    </div>
  );
}

export default Logo;
