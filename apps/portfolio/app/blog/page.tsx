import PageHeader from "../../src/components/PageHeader";
import BlogContents from "../../src/components/contents/blog";
import BlogSvg from "../../src/components/contents/blog/HeaderImage";
import SkipNavigation from "../../src/components/navigations/SkipNavigation";
import { getAllArticles } from "../../src/lib/articles";

import { mc } from "merge-class";

async function Blog() {
  const posts = await getAllArticles();
  return (
    <>
      <SkipNavigation skipTableOfContents={false} />
      <PageHeader
        title="Personal Blog"
        description="Web development thoughts and stories."
        headerImage={<BlogSvg />}
      />
      <div className={mc("scroll-mt-[86px]")} id="main-contents">
        <BlogContents posts={posts} />
      </div>
    </>
  );
}

export default Blog;
