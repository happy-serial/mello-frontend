"use client";

import { LoginForm } from "@/components/auth/loginForm";
import { Background } from "@/components/auth/background";

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
        particleCount={2700}
        size={0.07}
        segment={4}
        backgroundColorPreset="preset2"
        animateDirection="twist"
        animateSpeed={0.0007}
      />
      <LoginForm />
    </div>
  );
}
