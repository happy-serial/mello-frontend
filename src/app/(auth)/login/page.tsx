// "use client";

import { LoginForm } from "@/components/auth/loginForm";


export default function Home() {
  return (
    
    <div
      style={{
        width: "100vw",
        // height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginForm />
    </div>
  );
}
