import { cn } from "@repo/ui/lib/utils";
import SectionTitle from "../../components/sections/SectionTitle";

function DetailOriented() {
  return (
    <header className={cn("mb-8")}>
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Detail Oriented"
        description="Awareness to ease of access, User Interface consistency, and improved User Experience."
      />
    </header>
  );
}

export default DetailOriented;
