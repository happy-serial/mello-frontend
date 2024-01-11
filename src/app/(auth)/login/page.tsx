"use client";

import { LoginForm } from "@/components/auth/loginForm";
import {Background} from "@/components/auth/background"

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      <Background/>
      <LoginForm/>
    </div>
  );
}
