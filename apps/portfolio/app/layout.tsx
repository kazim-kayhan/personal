import "@repo/ui/globals.css";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WithNavigationFooter from "../src/layouts/WithNavigationFooter";
import Provider from "../src/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazim Kayhan",
  description:
    "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased container",
          inter.className,
        )}
      >
        <Provider>
          <WithNavigationFooter>{children}</WithNavigationFooter>
        </Provider>
      </body>
    </html>
  );
}
