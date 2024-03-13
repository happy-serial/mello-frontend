import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import Image from "next/image";
import { useState , useEffect } from "react";
import ContentEditable from "react-contenteditable";
import { getImageURL } from "@/api"
import { useRouter }  from "next/navigation";

export const ProfileDescription = () => {
  const [editable , setEditable] = useState<boolean>(true)
  const [imageURL , setImageURL] = useState<string>("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7chlFoormeaJwlRP9IDIeTFw6ICl-rj3vA&usqp=CAU")
  const [name , setName] = useState<string>("서범수")
  const [about , setAbout]  = useState<string>("뭐라뭐라 아이러브 다현 이더리움은 1억을 갈것이다!")
  const [myEmail , setMyEmail]  = useState<string>("beom710@ethurium.com")
  const [linkURL , setLinkURL] = useState<string>(" ")
  const router = useRouter();

  useEffect(()=>{
    console.log(editable)
  },[editable])

  const GetData = () =>{
    console.log("데이터통신 IMAGE , 이름 , 간략한 자기소개 , URL , 본인이메일 등등 받아오기")
  }

  const linkUrl = () =>{
    router.push(`${linkURL}`)
  }

  const handleFileChange = async (e : ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && (e.target.files.length > 0)){
      try{
        const file = e.target.files[0]
        const imgURL = await getImageURL(file)
        console.log(imgURL)
        if(imgURL !== undefined){
          setImageURL(imgURL)
        }
      } catch (error){
        console.log(error)
      }
    }else{
      console.log("이미지가 없어요")
    }
  }

  return (
    <div>
      <div>
        <Image
          alt="profile image"
          src={imageURL}
          width = "300"
          height= "300"
          style = {{ objectFit: "cover" }}
        />
        {!editable && <input accept = "image/*" type = "file" onChange = {(e) => handleFileChange(e)}/>}
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
          tagName = "div"
          html = {myEmail}
          disabled = {editable}
          onChange = {(e)=> {setMyEmail(e.target.value);}}
          suppressContentEditableWarning
        />
      </div>
      <div>
      <span>link</span>
      <ContentEditable 
          tagName = "div"
          html = {linkURL}
          disabled = {editable}
          onChange = {(e)=> {setLinkURL(e.target.value);}}
          onClick= {()=> {linkUrl()}}
          suppressContentEditableWarning
        />
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
