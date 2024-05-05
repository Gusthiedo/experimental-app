"use client";
import "./globals.css";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
import SignUpPage from "@/signup/page";
import SignInPage from "@/signin/page";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleAddData = async () => {
    const data = {
      name: "John Snow",
      house: "Stark",
    };

    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      console.log(error);
    } else {
      console.log("Data added successfully");
      router.push("/success");
    }
  };

  return (
    <div className="container">
      <h1 className="headline">Welcome to My App</h1>
      <div className="signup-container">
        <SignUpPage />
      </div>
      <div className="signin-container">
        <SignInPage />
      </div>
    </div>
  );
}
