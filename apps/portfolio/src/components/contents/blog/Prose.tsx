import { mc } from "merge-class";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={mc(className, "prose dark:prose-invert")} {...props} />
  );
}
