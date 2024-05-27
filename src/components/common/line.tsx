import { Colors, NewColors } from "../../../public/styles/colors/colors";

interface LineProps {
  // TODO: direction의?를 지우고 direction을 필수로 만들어주세요.
  direction?: "horizontal" | "vertical";
  color: Colors | NewColors;
  length: string;
  thickness?: number;
}

export const Line = ({
  direction = "horizontal",
  color,
  length,
  thickness,
  ...props
}: LineProps) => {
  const horizontalStyle = {
    width: length,
    height: `${thickness}px`,
    backgroundColor: color,
    margin: "0px 0",
    borderRadius: "5px",
  };

  const verticalStyle = {
    height: length,
    width: `${thickness}px`,
    backgroundColor: color,
    margin: "0 0px",
    borderRadius: "5px",
  };

  return (
    <div style={direction === "horizontal" ? horizontalStyle : verticalStyle} />
  );
};
