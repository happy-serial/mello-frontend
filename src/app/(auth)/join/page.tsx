"use client";

import { JoinFormEmailVerification } from "@/components/auth/joinFormEmailVerification";
import { Background } from "@/components/auth/background";
import { useState } from "react";
import { JoinFormInfoAdd } from "@/components/auth/joinFormInfoAdd";
import { useSpring, useChain, useSpringRef } from "@react-spring/web";

export default function Home() {
  const [emailState, setEmailState] = useState("");
  const [verifiedState, setVerifiedState] = useState(false);

  const closeApi = useSpringRef();
  const close = useSpring({
    ref: closeApi,
    from: { width: "440px", padding: "24px" },
    to: {
      width: !verifiedState ? "440px" : "0px",
      padding: !verifiedState ? "24px" : "0px",
    },
    config: { duration: 250 },
  });

  const openApi = useSpringRef();
  const open = useSpring({
    ref: openApi,
    from: { width: "0px", padding: "0px" },
    to: {
      width: !verifiedState ? "0px" : "440px",
      padding: !verifiedState ? "0px" : "24px",
    },
    config: { duration: 250 },
  });

  useChain([closeApi, openApi], [0, 0.5], 500);

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
      <JoinFormEmailVerification
        emailState={emailState}
        setEmailState={setEmailState}
        setVerifiedState={setVerifiedState}
        width={close.width}
        padding={close.padding}
      />
      <JoinFormInfoAdd
        emailState={emailState}
        width={open.width}
        padding={open.padding}
      />
    </div>
  );
}
