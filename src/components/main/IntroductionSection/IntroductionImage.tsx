import Image from "next/image";
import styles from "./css/introductionImage.module.css";

interface IntroductionImageProps {}

export const IntroductionImage = ({}: IntroductionImageProps) => {
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
        }}
      >
        <Image
          src={"/Image/flower_1.png"}
          alt={"flower"}
          width={120}
          height={130}
          className={styles.flower_1}
          style={{
            position: "absolute",
            top: "285px",
            left: "500px",
            zIndex: 101,
          }}
        ></Image>
        <Image
          src={"/Image/flower_5.png"}
          alt={"korean tiger"}
          width={60}
          height={120}
          className={styles.flower_3}
          style={{
            position: "absolute",
            top: "320px",
            left: "250px",
            zIndex: 101,
          }}
        ></Image>
        <Image
          src={"/Image/flower_6.png"}
          alt={"korean tiger"}
          width={60}
          height={90}
          className={styles.flower_2}
          style={{
            position: "absolute",
            top: "350px",
            left: "224px",
            zIndex: 101,
          }}
        ></Image>
        <Image
          src={"/Image/flower_7.png"}
          alt={"korean tiger"}
          width={60}
          height={120}
          className={styles.flower}
          style={{
            position: "absolute",
            top: "300px",
            left: "450px",
            zIndex: 101,
          }}
        ></Image>
        <Image
          src={"/Image/tiger.png"}
          alt={"korean tiger"}
          width={660}
          height={440}
          style={{
            position: "absolute",
            top: "110px",
            left: "0px",
            zIndex: 100,
          }}
          priority
        ></Image>
        <Image
          src={"/Image/flower_2.png"}
          alt={"korean tiger"}
          width={60}
          height={60}
          style={{
            position: "absolute",
            top: "368px",
            left: "324px",
            zIndex: 99,
          }}
        ></Image>
        <Image
          src={"/Image/flower_4.png"}
          alt={"korean tiger"}
          width={40}
          height={60}
          style={{
            position: "absolute",
            top: "360px",
            left: "160px",
            zIndex: 98,
          }}
        ></Image>
        <Image
          src={"/Image/flower_8.png"}
          alt={"korean tiger"}
          width={80}
          height={100}
          style={{
            position: "absolute",
            top: "230px",
            left: "550px",
            zIndex: 98,
          }}
        ></Image>
        <Image
          src={"/Image/grass_1.png"}
          alt={"korean tiger"}
          width={300}
          height={200}
          style={{
            position: "absolute",
            top: "250px",
            left: "110px",
            zIndex: 98,
          }}
        ></Image>
        <Image
          src={"/Image/grass_2.png"}
          alt={"korean tiger"}
          width={280}
          height={120}
          style={{
            position: "absolute",
            top: "315px",
            left: "380px",
            zIndex: 98,
          }}
        ></Image>
        <Image
          src={"/Image/grass_3.png"}
          alt={"korean tiger"}
          width={260}
          height={200}
          style={{
            position: "absolute",
            top: "170px",
            left: "390px",
            zIndex: 97,
          }}
        ></Image>
        <Image
          src={"/Image/grass_4.png"}
          alt={"korean tiger"}
          width={200}
          height={110}
          style={{
            position: "absolute",
            top: "346px",
            left: "320px",
            zIndex: 97,
          }}
        ></Image>
        <Image
          src={"/Image/tree_1.png"}
          alt={"korean tiger"}
          width={180}
          height={260}
          style={{
            position: "absolute",
            top: "30px",
            left: "480px",
            zIndex: 96,
          }}
        ></Image>
        <Image
          src={"/Image/tree_2.png"}
          alt={"korean tiger"}
          width={140}
          height={200}
          style={{
            position: "absolute",
            top: "50px",
            left: "470px",
            zIndex: 97,
          }}
        ></Image>
        <Image
          src={"/Image/tree_3.png"}
          alt={"korean tiger"}
          width={450}
          height={500}
          style={{
            position: "absolute",
            top: "-150px",
            left: "10px",
            zIndex: 97,
          }}
        ></Image>
        <Image
          src={"/Image/tree_4.png"}
          alt={"korean tiger"}
          width={124}
          height={240}
          style={{
            position: "absolute",
            top: "60px",
            left: "110px",
            zIndex: 97,
          }}
        ></Image>
        <Image
          src={"/Image/tree_5.png"}
          alt={"korean tiger"}
          width={80}
          height={200}
          style={{
            position: "absolute",
            top: "60px",
            left: "230px",
            zIndex: 1,
          }}
        ></Image>
        <Image
          src={"/Image/tree_6.png"}
          alt={"korean tiger"}
          width={80}
          height={240}
          style={{
            position: "absolute",
            top: "20px",
            left: "420px",
            zIndex: 1,
          }}
        ></Image>
        <Image
          src={"/Image/building_1.png"}
          alt={"korean tiger"}
          width={40}
          height={160}
          style={{
            position: "absolute",
            top: "90px",
            left: "380px",
            zIndex: 1,
          }}
        ></Image>
        <Image
          src={"/Image/building_2.png"}
          alt={"korean tiger"}
          width={100}
          height={200}
          style={{
            position: "absolute",
            top: "90px",
            left: "260px",
            zIndex: 1,
          }}
        ></Image>
        <div className={styles.glowBox} />
      </div>
    </>
  );
};
