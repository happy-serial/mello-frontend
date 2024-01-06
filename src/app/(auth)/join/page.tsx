"use client";

import { JoinFormEmailVerification } from "@/components/auth/joinFormEmailVerification";
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
      <JoinFormEmailVerification/>
    </div>
  );
}
