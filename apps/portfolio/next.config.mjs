import rehypePrism from "@mapbox/rehype-prism";
import bundeAnalyzer from "@next/bundle-analyzer";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/work",
      destination: "/work/skills-and-tools",
      permanent: false,
    },
    {
      source: "/docs",
      destination: "/docs/tailwindcss-accent",
      permanent: false,
    },
  ],
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

const withBundleAnalyzer = bundeAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
