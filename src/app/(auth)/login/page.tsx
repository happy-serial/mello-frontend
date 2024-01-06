"use client";

import { TextField } from "@/components/common/textField";
import { blackOpsOne } from "../../../../public/styles/fonts/fonts";
import { Colors } from "../../../../public/styles/colors/colors";
import { LoginForm } from "@/components/auth/loginForm";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.black,
      }}
    >
      <LoginForm/>
    </div>
  );
}
