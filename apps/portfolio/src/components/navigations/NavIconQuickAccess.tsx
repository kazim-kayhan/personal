import { QuickAccessIcon } from "../Icons";
import Kbd from "../Kbd";

import useGlobal from "../../hooks/useGlobal";
import { mc } from "merge-class";

function NavIconQuickAccess() {
  const { setQuickAccessOpen } = useGlobal();

  return (
    <button
      type="button"
      className={mc(
        "ml-1 flex h-9 w-9 items-center justify-center gap-2 rounded-xl bg-slate-300/50 text-slate-800",
        "xl:w-auto xl:px-3",
        "hover:bg-slate-300/70 sm:ml-0",
        "dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-700/50",
      )}
      aria-label="Open Quick Access"
      title="Open Quick Access"
      onClick={() => {
        setQuickAccessOpen(true);
      }}
    >
      <QuickAccessIcon className={mc("h-5 w-5")} />
      <div
        className={mc(
          "hidden items-center gap-2 text-xs font-bold",
          "xl:flex",
          "dark:font-normal",
        )}
      >
        Quick Access
        <Kbd>Q</Kbd>
      </div>
    </button>
  );
}

export default NavIconQuickAccess;
