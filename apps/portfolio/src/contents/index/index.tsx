import { cn } from "@repo/ui/lib/utils";
import { CodeIcon, HeartIcon, SparklesIcon } from "../../components/Icons";

import CleanIntuitive from "./CleanIntuitive";
import DetailOriented from "./DetailOriented";
import FeaturedCard from "./FeaturedCard";
import Header from "./Header";
import PrettyOptimized from "./PrettyOptimized";
import Quote from "./Quote";

function FeaturedCardSection() {
  return (
    <div className={cn("content-wrapper")}>
      <div className={cn("flex flex-col gap-4", "lg:flex-row lg:gap-8")}>
        <FeaturedCard
          icon={
            <div
              className={cn(
                "rounded-full bg-amber-300 p-3.5",
                "dark:bg-amber-900",
              )}
            >
              <SparklesIcon className={cn("h-5 w-5 text-white")} />
            </div>
          }
          title="Clean & Intuitive"
          desc="Keep the UI clean with a modern touch without compromising UX."
        />
        <FeaturedCard
          icon={
            <div
              className={cn(
                "rounded-full bg-pink-300 p-3.5",
                "dark:bg-pink-900",
              )}
            >
              <HeartIcon className={cn("h-5 w-5 text-white")} />
            </div>
          }
          title="Detail Oriented"
          desc="Awareness to ease of access, UI consistency, and improved UX."
        />
        <FeaturedCard
          icon={
            <div
              className={cn("rounded-full bg-sky-300 p-3.5", "dark:bg-sky-900")}
            >
              <CodeIcon className={cn("h-5 w-5 text-white")} />
            </div>
          }
          title="Pretty & Optimized"
          desc="Writing clean code is a top priority while keeping it as optimized as possible."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={cn("content-wrapper")}>
      <div className={cn("flex items-center justify-center py-8")}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={cn("hidden", "lg:-mt-16 lg:mb-24 lg:block")}>
        <FeaturedCardSection />
      </div>
      <div className={cn("-mt-12 mb-12", "md:mt-0 md:mb-24")}>
        <QuoteSection />
      </div>
      <section className={cn("mb-12", "lg:mb-24")}>
        <CleanIntuitive />
      </section>
      <section className={cn("mb-12", "lg:mb-24")}>
        <DetailOriented />
      </section>
      <section className={cn("mb-12", "lg:mb-24")}>
        <PrettyOptimized />
      </section>
    </>
  );
}

export default IndexContents;
