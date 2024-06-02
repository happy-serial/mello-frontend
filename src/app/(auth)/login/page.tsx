// "use client";

import { LoginForm } from "@/components/auth/loginForm";
// import {Background} from "@/components/auth/background"
import { Colors } from "../../../../public/styles/colors/colors";
import { colorToRgba } from "@react-spring/shared";
import Link from "next/link";


export default function Home() {
  return (
    
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginForm />
    </div>
  );
}
