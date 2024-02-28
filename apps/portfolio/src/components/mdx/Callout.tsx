import { mc } from "merge-class";
import { ErrorIcon, InfoIcon, NoteIcon, WarningIcon } from "../Icons";

import type { PropsWithChildren, ReactElement } from "react";

interface CalloutProps {
  variant?: "neutral" | "info" | "warning" | "danger";
}

function Callout({
  variant = "neutral",
  children = null,
}: PropsWithChildren<CalloutProps>) {
  let data: {
    title: string;
    icon: ReactElement;
    modifier: string;
  } = {
    title: "Note",
    icon: <NoteIcon />,
    modifier: "",
  };

  switch (variant) {
    case "neutral":
      data = {
        title: "Note",
        icon: <NoteIcon />,
        modifier: "",
      };
      break;
    case "info":
      data = {
        title: "Info",
        icon: <InfoIcon />,
        modifier: "mdx-callout--info",
      };
      break;
    case "warning":
      data = {
        title: "Heads Up",
        icon: <WarningIcon />,
        modifier: "mdx-callout--warning",
      };
      break;
    case "danger":
      data = {
        title: "Important",
        icon: <ErrorIcon />,
        modifier: "mdx-callout--danger",
      };
      break;
    default:
  }

  return (
    <div className={mc("mdx-callout", data.modifier)}>
      <div className={mc("mdx-callout__header")}>
        {data.icon}
        {data.title}
      </div>
      <div className={mc("mdx-callout__content")}>{children}</div>
    </div>
  );
}

export default Callout;
