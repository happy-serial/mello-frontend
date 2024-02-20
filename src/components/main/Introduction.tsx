import { IntroductionImage } from "./IntroductionSection/IntroductionImage";
import { IntroductionText } from "./IntroductionSection/IntroductionText";

interface IntroductionProps {}

export const Introduction = ({}: IntroductionProps) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "12px 0px 12px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            alignItems: "center",
          }}
        >
          <IntroductionText />
					<IntroductionImage />
        </div>
      </div>
    </>
  );
};
