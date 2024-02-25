import { cn } from "@repo/ui/lib/utils";
import SectionTitle from "../../components/sections/SectionTitle";

function PrettyOptimized() {
  return (
    <header className={cn("mb-8", "relative")}>
      <SectionTitle
        title="Comprehensible and Optimized Code."
        caption="Pretty & Optimized"
        description="Writing clean code is a top priority while keeping it as optimized as possible."
      />
    </header>
  );
}

export default PrettyOptimized;
