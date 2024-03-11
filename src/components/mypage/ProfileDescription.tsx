import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { useState , useEffect } from "react";
import ContentEditable from "react-contenteditable";

export const ProfileDescription = () => {
  const [editable , setEditable] = useState<boolean>(true)
  const [imageURL , setImageURL] = useState<string>("서범수")
  const [name , setName] = useState<string>("서범수")
  const [about , setAbout]  = useState<string>("뭐라뭐라 아이러브 다현 이더리움은 1억을 갈것이다!")
  const [myEmail , setMyEmail]  = useState<string>("beom710@ethurium.com")

  useEffect(()=>{
    console.log(editable)
  },[editable])

  const GetData = () =>{
    console.log("데이터통신 IMAGE , 이름 , 간략한 자기소개 , URL , 본인이메일 등등 받아오기")
  }

  return (
    <div>
      <div>
        Image
      </div>
      <div>
        <ContentEditable 
          tagName="div"
          html={name}
          disabled={editable}
          onChange={(e)=> {setName(e.target.value);}}
          suppressContentEditableWarning
        />
      </div>
      <div>
      <ContentEditable 
          tagName="div"
          html={about}
          disabled={editable}
          onChange={(e)=> {setAbout(e.target.value);}}
          suppressContentEditableWarning
        />
      </div>
      <div>
      <ContentEditable 
          tagName="div"
          html={myEmail}
          disabled={editable}
          onChange={(e)=> {setAbout(e.target.value);}}
          suppressContentEditableWarning
        />
      </div>
      <div>
        URL
      </div>
      <div>
        쓴게시글수
      </div>
      <div>
        팔로워수 팔로잉수
      </div>
      <button onClick = {()=> setEditable(!editable)}>
        수정버튼
      </button>
    </div>
  );
};
