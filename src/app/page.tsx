"use client"
import { useState } from "react";

export default function Home() {
  const [cookies, setCookies] = useState<number>(0)
  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-pink-500"><p>coucou</p></div>
      <div className="center flex-1 bg-purple-500"></div>
      <div className="right w-1/4 bg-orange-500"><p>toi</p></div>
    </div>
  );
}
