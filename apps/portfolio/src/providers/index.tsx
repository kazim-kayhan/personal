"use client";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import mdxCustomComponents from "../components/mdx/custom-components";
import ColorAccentProvider from "./ColorAccentProvider";
import FocusModeProvider from "./FocusModeProvider";
import FramerMotionProvider from "./FramerMotionProvider";
import GlobalStateProvider from "./GlobalStateProvider";

import type { PropsWithChildren } from "react";

function Provider({ children = null }: PropsWithChildren) {
  return (
    <FramerMotionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <FocusModeProvider>
          <ColorAccentProvider defaultScheme="violet">
            <GlobalStateProvider>
              <MDXProvider components={mdxCustomComponents}>
                {children}
              </MDXProvider>
            </GlobalStateProvider>
          </ColorAccentProvider>
        </FocusModeProvider>
      </ThemeProvider>
    </FramerMotionProvider>
  );
}

export default Provider;
