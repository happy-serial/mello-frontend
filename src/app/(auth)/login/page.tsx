"use client";

import { TextField } from "@/components/common/textField";
import { Colors } from "../../../../public/styles/colors/colors";

export default function Home() {
  return (
    <div>
      <div>로그인 페이지 입니다.</div>
      <TextField
        type="text"
        borderColor={Colors.gray}
        placeholder="Email Address"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <TextField
        type="password"
        borderColor={Colors.gray}
        placeholder="Password"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
