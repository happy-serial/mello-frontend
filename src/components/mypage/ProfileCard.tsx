import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import Image from "next/image";
import { useState , useEffect } from "react";

export const ProfileCard = () => {
  const [imageURL , setImageURL] = useState<string>("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7chlFoormeaJwlRP9IDIeTFw6ICl-rj3vA&usqp=CAU")

  const editProfileCard = () => {
    console.log("editProfileCard");
  }

  return (
    <div
      style = {{
        width : "300px",
        height : "354px",
        backgroundColor: "#313233",
        marginRight: "40px",
        borderRadius: "20px",
        textAlign:"center",
      }}
    >
      <Image
        alt="profile image"
        src={imageURL}
        width = "80"
        height= "80"
        style = {{
          marginTop: "53px",
          objectFit: "cover",
          borderRadius: "80px",
        }}
      />
      <div
        style={{
          marginTop: "12px",
          color: "#F8F9FE",
          fontSize: "20px",
        }}
      >
        harry bloralson
      </div>
      <div
        style={{
          marginTop: "4px",
          color: "#6E6F73",
          fontSize: "16px",
        }}
      >
        재직중 | 프로덕트 디자이너
      </div>
      <div
        style={{
          marginTop: "12px",
          color: "#6E6F73",
          fontSize: "16px",
        }}
      >
        팔로워
        <span style={{color: "#F8F9FE"}}> 0</span> | 팔로잉<span style={{color: "#F8F9FE"}}> 0</span>
      </div>
      <div
        style={{
          display : "inline-flex",
          width: "200px",
          height: "40px",
          marginTop: "24px",
          color: "#1C1C20",
          fontSize: "18px",
          backgroundColor: "#F7085A",
          borderRadius: "18px",
          justifyContent: "center", 
          alignItems: "center",
        }}
        onClick = {(e)=> {editProfileCard()}}
      >
      <Image
        alt="Sub"
        src="/Image/pencil.svg"
        width = "24"
        height= "24"
        style = {{
          objectFit: "cover",
        }}
      />
        내 프로필 편집
      </div>
    </div>
  );
};
