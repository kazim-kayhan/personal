"use client";

import { m } from "framer-motion";
import Image from "next/image";

import { BackgroundGradient } from "../../../components/background-gradient";
import { LampContainer } from "../../../components/lamp";
import { mc } from "merge-class";

function HeaderImage() {
  return (
    <m.div
      className={mc("mt-20")}
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <BackgroundGradient className="rounded-3xl max-w-sm bg-white dark:bg-zinc-900">
        <LampContainer>
          <Image
            alt="Kazim Kayhan Illustration"
            src="/assets/images/me.png"
            width={400}
            height={533}
            className={mc(
              "hidden max-w-sm",
              "lg:block",
              "dark:brightness-[.82]",
            )}
            quality={100}
            priority
          />
        </LampContainer>
      </BackgroundGradient>
    </m.div>
  );
}

export default HeaderImage;
