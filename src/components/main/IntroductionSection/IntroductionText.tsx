import { Spacer } from "@/components/common/spacer";
import { Colors } from "../../../../public/styles/colors/colors";
import { nanumSquare } from "../../../../public/styles/fonts/fonts";
import { Button } from "../../common/button";

interface IntroductionTextProps {}

export const IntroductionText = ({}: IntroductionTextProps) => {
  return (
    <>
      <div>
        <div>
          <p
            className={nanumSquare.className}
            style={{ fontSize: "32px", fontWeight: "500" }}
          >
            스몰더는 랄튜브!
            <br />
            호랑이 기웃이 솟아나요~
          </p>
        </div>
        <div>
          <p className={nanumSquare.className}>
            뭐라 적을지 생각이 안나네 멜로 vs 메로나 승자는?
            <br />
            오늘은 2월 16일 나는 오늘도 피그마만 만지다가 퇴근할거 같다.
          </p>
        </div>
        <Spacer shape="height" size={"50px"} />
        <Button
          purpose={"link"}
          label={"미지의 세계로"}
          backgroundColor={Colors.purple}
          size="large"
          href="/"
          color={Colors.white}
        />
        <Spacer shape="height" size={"50px"} />
      </div>
    </>
  );
};
