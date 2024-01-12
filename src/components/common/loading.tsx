import { Colors } from "../../../public/styles/colors/colors";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

interface LoadingProps {
  color: Colors;
  size: number;
  isLoading: boolean;
}

export const Loading = ({ color, size, isLoading, ...props }: LoadingProps) => {
  return (
    <div
      style={{
        backgroundColor: Colors.whiteTransparent,
        width: "100%",
        height: "100%",
        display: isLoading ? "flex" : "none",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ClimbingBoxLoader color={color} size={size} loading={isLoading} />
    </div>
  );
};
