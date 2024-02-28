import { mc } from "merge-class";
import HeaderCta from "../../../contents/index/Header/HeaderCta";
import HeaderImage from "../../../contents/index/Header/HeaderImage";
import HeaderTechStack from "../../../contents/index/Header/HeaderTechStack";
import HeaderTitle from "../../../contents/index/Header/HeaderTitle";

function Header() {
  return (
    <header
      id="page-header"
      className={mc(
        "background-grid background-grid--fade-out pt-36 pb-20",
        "lg:pb-28 lg:pt-52",
      )}
    >
      {/* Meaty part - Meteor effect */}
      <div className={mc("content-wrapper")}>
        <div className={mc("relative")}>
          <div className={mc("relative z-10")}>
            <HeaderTitle />
          </div>
          <div className={mc("mt-6 md:mt-8")}>
            <HeaderCta />
          </div>
          <div className={mc("mt-20 lg:mt-36")}>
            <HeaderTechStack />
          </div>
          <div
            className={mc(
              "pointer-events-none absolute -top-36 right-0 z-0 hidden select-none",
              "lg:block",
            )}
          >
            <HeaderImage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
