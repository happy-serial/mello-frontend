import { Content } from "@/components/main/Content";
import { Introduction } from "@/components/main/Introduction";
import { UseLoginStatusStore } from "@/state-manage/store/auth.store";
import { checkLogin } from "@/utils/tokenHandler";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Introduction />
      <Content />
    </>
  );
}
