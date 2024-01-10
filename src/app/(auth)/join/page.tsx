"use client";

import { JoinFormEmailVerification } from "@/components/auth/joinFormEmailVerification";
import { Background } from "@/components/auth/background";
import { useState } from "react";
import { JoinFormInfoAdd } from "@/components/auth/joinFormInfoAdd";

export default function Home() {
  const [emailState, setEmailState] = useState("");
  const [verifiedState, setVerifiedState] = useState(false);

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
      <Background />
      {verifiedState ? (
        <JoinFormEmailVerification
          emailState={emailState}
          setEmailState={setEmailState}
          setVerifiedState={setVerifiedState}
        />
      ) : (
        <JoinFormInfoAdd emailState={emailState} />
      )}
    </div>
  );
}
