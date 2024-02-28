"use client";

import { mc } from "merge-class";
import { ArticleWithSlug } from "../../../lib/articles";
import PostPreview from "./PostPreview";

const PINNED_POST = "tailwindcss-best-practices";

export type BlogContentsProps = {
  posts: ArticleWithSlug[];
};

type TPostPreview = ArticleWithSlug & {
  shares: number;
  views: number;
};

function BlogContents({ posts }: BlogContentsProps) {
  // const { data } = useContentMeta();
  const pinnedPost: Array<TPostPreview> = [];
  const postsPreview: Array<TPostPreview> = [];

  posts.forEach(({ slug, ...rest }) => {
    // const { shares, views } = data[slug]
    //   ? data[slug].meta
    //   : { shares: 0, views: 0 };
    const { shares, views } = { shares: 0, views: 0 };

    const preview: TPostPreview = {
      slug,
      views,
      shares,
      ...rest,
    };

    if (slug === PINNED_POST) {
      pinnedPost.push(preview);
    } else {
      postsPreview.push(preview);
    }
  });

  return (
    <div className={mc("content-wrapper")}>
      <div
        className={mc("flex flex-col gap-8", "md:flex-row md:gap-8 lg:gap-24")}
      >
        <div className={mc("md:w-64")}>{/* TODO: Filter Posts */}</div>
        <div className={mc("flex-1")}>
          {pinnedPost.length
            ? pinnedPost.map((post) => (
                <div
                  className={mc(
                    "mb-8 flex items-start gap-4",
                    "md:mb-12 md:gap-6",
                  )}
                >
                  <div className={mc("flex-1")}>
                    <PostPreview
                      pinned
                      slug={post.slug}
                      category={post.category}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      lang={post.lang}
                      tags={post.tags}
                      views={post.views}
                      shares={post.shares}
                    />
                  </div>
                </div>
              ))
            : null}

          {postsPreview.map(
            ({
              slug,
              category,
              title,
              description,
              date,
              lang,
              tags,
              views,
              shares,
            }) => (
              <div
                key={slug}
                className={mc(
                  "mb-8 flex items-start gap-4",
                  "md:mb-4 md:gap-6",
                )}
              >
                <div
                  className={mc(
                    "border-divider-light mt-14 hidden w-8 -translate-y-1 border-b",
                    "md:mt-16 md:w-20 lg:block",
                    "dark:border-divider-dark",
                  )}
                />
                <div className={mc("flex-1")}>
                  <PostPreview
                    slug={slug}
                    category={category}
                    title={title}
                    description={description}
                    date={date}
                    lang={lang}
                    tags={tags}
                    views={views}
                    shares={shares}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogContents;
