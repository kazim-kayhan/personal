import { glob } from "fast-glob";
import frontMatter from "front-matter";
import fs from "fs";
import path from "path";
import { TPostFrontMatter } from "../types";

const postsDirectory = path.join(process.cwd(), "app/blog");

export const getPostFrontMatter = (slug: string): TPostFrontMatter => {
  // read markdown file as string
  const fullPath = path.join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // use front-matter to parse the post metadata section
  const { attributes } = frontMatter<TPostFrontMatter>(fileContents);

  return attributes;
};

export const getSortedPosts = async () => {
  const slugs = await glob("*/page.mdx", {
    cwd: "./app/blog",
  });

  const allPostsData = slugs.map((slug) => {
    const data = getPostFrontMatter(slug);

    return {
      slug: slug.replaceAll("/page.mdx", ""),
      frontMatter: data,
    };
  });

  // sort posts by date
  return allPostsData.sort(
    ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    },
  );
};
