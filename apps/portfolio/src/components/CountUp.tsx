"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  from: number;
  to: number;
}

function CountUp({ from, to }: CountUpProps) {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(value) {
        if (node) node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef}>{to}</span>;
}

export default CountUp;
