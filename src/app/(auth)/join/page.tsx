"use client";

import { JoinFormEmailVerification } from "@/components/auth/joinFormEmailVerification";

import { Background } from "@/components/auth/background";
import { useState } from "react";
import { JoinFormInfoAdd } from "@/components/auth/joinFormInfoAdd";
import { easings, useSpring, useChain, useSpringRef } from "@react-spring/web";
import { Colors } from "../../../../public/styles/colors/colors";

export default function Home() {
  const [emailState, setEmailState] = useState("");
  const [verifiedState, setVerifiedState] = useState(false);

  const animationConfig = {
    mass: 2,
    friction: 20,
    tension: 200,
    bounce: 0.5,
  };
  // const animationConfig = {
  //   easing: easings.
  // }
  const closeApi = useSpringRef();
  const close = useSpring({
    ref: closeApi,
    from: { width: "440px", padding: "24px" },
    to: {
      width: !verifiedState ? "440px" : "0px",
      padding: !verifiedState ? "24px" : "0px",
    },
    config: animationConfig,
  });

  const openApi = useSpringRef();
  const open = useSpring({
    ref: openApi,
    from: { width: "0px", padding: "0px", border: "0px" },
    to: {
      width: !verifiedState ? "0px" : "440px",
      padding: !verifiedState ? "0px" : "24px",
      border: !verifiedState ? "0px" : "1px solid rgba(255, 255, 255, 0.18)",
    },
    config: animationConfig,
  });

  useChain([closeApi, openApi], [0, 0.9], 1000);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",z
      }}
    >
      <Background
        purpose="login" 
        backgroundColor="white"
        particleCount={2000} 
        size={0.1} 
        segment={3} 
        lightColor={Colors.white}
        animateDirection="closer" 
        animateSpeed={0.1}
      />
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
        border={open.border}
      />
    </div>
  );
}
