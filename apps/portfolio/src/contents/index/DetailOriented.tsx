import { mc } from "merge-class";
import SectionTitle from "../../components/sections/SectionTitle";

function DetailOriented() {
  return (
    <header className={mc("mb-8", "relative")}>
      <SectionTitle
        title="Keen Eye for Spotting Small Details."
        caption="Detail Oriented"
        description="Awareness to ease of access, User Interface consistency, and improved User Experience."
      />
    </header>
  );
}

export default DetailOriented;
