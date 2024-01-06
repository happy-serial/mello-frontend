
import { Colors } from "../../../public/styles/colors/colors";

interface LineProps {
    color: Colors;
    length: string;
    thickness?: number;
}

export const Line = ({
    color,
    length,
    thickness,
    ...props
}: LineProps) => {
  return (
    <div
      style={{
        width: length,
        borderRadius: "5px",
        borderBottom: `${thickness}px solid ${color}`,
        margin: "10px 0 10px",
      }}
    />
  );
};
