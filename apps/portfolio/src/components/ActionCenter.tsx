import { m } from "framer-motion";
import { useTheme } from "next-themes";

import { DarkIcon, EyeIcon, EyeSlash, LightIcon } from "./Icons";

import useFocusMode from "../hooks/useFocusMode";

import type { PropsWithChildren, ReactElement } from "react";
import { mc } from "merge-class";

const animation = {
  hide: { y: -16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.084,
    },
  },
};

interface ActionCenterButtonProps {
  icon: ReactElement;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

function ActionCenterButton({
  icon,
  title,
  active = false,
  onClick = () => {},
}: PropsWithChildren<ActionCenterButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={mc(
        "relative flex flex-1 flex-col justify-between overflow-hidden rounded-xl p-4 transition-colors",
        "dark:bg-[#1d263a]",
        [active ? ["bg-white", "dark:bg-slate-700"] : "bg-white/50"],
      )}
    >
      <div className={mc("")}>{icon}</div>
      <div
        className={mc("text-left text-[13px] font-medium", "dark:font-normal")}
      >
        {title}
      </div>
    </button>
  );
}

function ActionCenter() {
  const { theme, setTheme } = useTheme();
  const { focusMode, setFocusMode } = useFocusMode();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <m.div
      className={mc("flex flex-col gap-2")}
      initial="hide"
      animate="show"
      transition={{ staggerChildren: 0.06 }}
    >
      <m.div className={mc("px-2 text-xl font-bold")} variants={animation}>
        Action Center
      </m.div>
      <div className={mc("flex flex-1 flex-col gap-8 p-2")}>
        <m.div className={mc("flex h-24 gap-4")} variants={animation}>
          <ActionCenterButton
            active={theme === "dark"}
            title={theme === "dark" ? "Dark Mode: On" : "Dark Mode: Off"}
            onClick={handleThemeChange}
            icon={
              <m.div
                animate={
                  theme === "dark"
                    ? { rotate: [90, 0] }
                    : { rotate: [90.01, 0] }
                }
                transition={{ ease: "easeOut", duration: 0.8 }}
                className={mc("absolute top-4 left-4 h-36 w-36 rounded-full")}
              >
                <m.div
                  animate={
                    theme === "dark"
                      ? { opacity: [0.01, 1], scale: [0.801, 1] }
                      : { opacity: [0, 1], scale: [0.8, 1] }
                  }
                  transition={{ ease: "easeOut", duration: 0.8 }}
                  className={mc("absolute top-0")}
                >
                  {theme === "dark" ? (
                    <DarkIcon className={mc("h-5 w-5")} />
                  ) : (
                    <LightIcon className={mc("h-5 w-5")} />
                  )}
                </m.div>
                <m.div
                  animate={
                    theme === "dark"
                      ? { opacity: [1, 0], scale: [1, 0.801] }
                      : { opacity: [1, 0.01], scale: [1, 0.8] }
                  }
                  transition={{ ease: "easeOut", duration: 0.8 }}
                  className={mc("absolute bottom-0")}
                >
                  {theme === "dark" ? (
                    <LightIcon className={mc("h-5 w-5 -rotate-90")} />
                  ) : (
                    <DarkIcon className={mc("h-5 w-5 -rotate-90")} />
                  )}
                </m.div>
              </m.div>
            }
          />
          <ActionCenterButton
            title={focusMode ? "Focus: On" : "Focus: Off"}
            onClick={() => {
              setFocusMode(!focusMode);
            }}
            active={focusMode}
            icon={
              <>
                <div className={mc("hidden", "fm:block")}>
                  <EyeIcon className={mc("h-5 w-5")} />
                </div>
                <div className={mc("fm:hidden")}>
                  <EyeSlash className={mc("h-5 w-5")} />
                </div>
              </>
            }
          />
        </m.div>
      </div>
    </m.div>
  );
}

export default ActionCenter;
