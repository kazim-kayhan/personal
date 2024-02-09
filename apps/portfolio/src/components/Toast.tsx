import { m } from "framer-motion";
import { toast } from "react-hot-toast";

import { InfoIcon, XCircleIcon } from "./Icons";

import type { Toast as TToast } from "react-hot-toast";
import { cn } from "@repo/ui/lib/utils";

interface ToastProps {
  title: string;
  message: string;
  t: TToast;
}

function Toast({ title, message, t }: ToastProps) {
  return (
    <m.div
      animate={{ opacity: [0, 1], x: [16, 0] }}
      transition={{ ease: "easeOut", duration: 0.24 }}
      className={cn(
        "border-divider-light flex w-full gap-2 rounded-xl border bg-white/60 p-4 text-[13px] backdrop-blur",
        "sm:max-w-[400px]",
        "dark:border-divider-dark dark:bg-slate-900/60",
      )}
    >
      <div className={cn("text-accent-600", "dark:text-accent-400")}>
        <InfoIcon className={cn("h-5 w-5")} />
      </div>
      <div className={cn("flex flex-col gap-1")}>
        <div
          className={cn("text-accent-600 font-bold", "dark:text-accent-400")}
        >
          {title}
        </div>
        <div className={cn("text-slate-600", "dark:text-slate-400")}>
          <p>{message}</p>
        </div>
      </div>
      <div className={cn("")}>
        <button
          type="button"
          className={cn("flex items-center justify-center rounded-lg")}
          onClick={() => toast.remove(t.id)}
        >
          <XCircleIcon className={cn("h-5 w-5")} />
        </button>
      </div>
    </m.div>
  );
}

export default Toast;
