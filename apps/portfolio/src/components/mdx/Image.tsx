/* eslint-disable react/jsx-props-no-spreading */
import NextImage from "next/image";
import { useState } from "react";

import type { ImageProps as NextImageProps } from "next/image";
import { mc } from "merge-class";

export type ImageProps = NextImageProps & {
  immersive?: boolean;
};

export default function Image({
  immersive = true,
  className,
  src,
  ...props
}: ImageProps) {
  const [image, setImage] = useState<string>("");

  return (
    <div className={mc("mdx-image relative")}>
      {immersive && image ? (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={mc(
            "absolute -inset-8 z-[-1] rounded-[20%] bg-[length:180%_180%] bg-center opacity-25 blur-2xl",
            "hidden", // disable immersive on light mode
            "dark:block",
          )}
        />
      ) : null}
      <NextImage
        src={src}
        className={mc(
          "border-divider-light rounded-lg border",
          "dark:border-divider-dark",
          className,
        )}
        {...props}
        onLoadingComplete={(img) => {
          setImage(img.currentSrc);
        }}
      />
    </div>
  );
}
