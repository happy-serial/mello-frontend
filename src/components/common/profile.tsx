import styles from "./css/profile.module.css";
import Image from "next/image";
import { nanumSquare } from "../../../public/styles/fonts/fonts";
import { Colors } from "../../../public/styles/colors/colors";

interface ProfileProps {
  size?: "large" | "small" | "header";
  imgUrl?: string;
  username: string;
  onClick?: () => void;
}

export const Profile = ({
  size = "large",
  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7chlFoormeaJwlRP9IDIeTFw6ICl-rj3vA&usqp=CAU",
  username = "unknown",
  ...props
}: ProfileProps) => {
  const sizePixel = size === "large" ? 50 : 40;

  return (
    <div
      className={[styles.profileContainer, styles["profile--" + size]].join(
        " "
      )}
      {...props}
    >
      <Image
        className={[styles.profileImage].join(" ")}
        alt="profile image"
        src={imgUrl}
        width={sizePixel}
        height={sizePixel}
        style={{ objectFit: "cover" }}
      />
      <div
        className={[styles.profileName, nanumSquare.className].join(" ")}
        style={{ color: Colors.black, maxLines: 1 }}
      >
        {username}
      </div>
    </div>
  );
};

/**
 * Ia
 */
