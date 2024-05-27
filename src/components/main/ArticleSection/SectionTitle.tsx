import { NewColors } from "../../../../public/styles/colors/colors";
import { pretendard } from "../../../../public/styles/fonts/fonts";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title, ...props }: SectionTitleProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className={pretendard.className}
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: NewColors.titleWhite,
          }}
        >
          {title}
        </div>
      </div>
    </>
  );
}
