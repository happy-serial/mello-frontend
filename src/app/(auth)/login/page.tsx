"use client";

import { LoginForm } from "@/components/auth/loginForm";
import {Background} from "@/components/auth/background"
import { Colors } from "../../../../public/styles/colors/colors";
import { colorToRgba } from "@react-spring/shared";

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
      <Background
        purpose="login" 
        backgroundColor="black"
        particleCount={1000} 
        size={0.1} 
        segment={3} 
        lightColor={Colors.white}
        animateDirection="closer" 
        animateSpeed={0.1}
      />
      <LoginForm />
    </div>
  );
}
