interface SpacerProps {
  shape: "width" | "height" | "box";
  size: string;
}

export const Spacer = ({ shape, size, ...props }: SpacerProps) => {
  if (shape === "width") {
    return (
      <div
        style={{
          margin: `0 ${size}`,
        }}
      >
        {" "}
      </div>
    );
  } else if (shape === "height") {
    return (
      <div
        style={{
          margin: `${size} 0`,
        }}
      >
        {" "}
      </div>
    );
  } else {
    return (
      <div
        style={{
          margin: `${size}`,
        }}
      >
        {" "}
      </div>
    );
  }
};
