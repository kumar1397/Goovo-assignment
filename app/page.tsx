"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const router = useRouter();
  const isVerified = emailVerified && mobileVerified;
  useEffect(() => {
    if (isVerified) {
      router.push("/main");
    }
  }, [isVerified, router]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black font-outfit font-semibold">
      <div className="relative z-10 text-center">
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between w-96 h-16 p-4 bg-white rounded-lg shadow-lg text-black">
            <input
              type="text"
              placeholder="Verify Your E-mail"
              className="w-full pl-10 pr-10 py-2 text-black focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
            />
            <button
              className="bg-green-500 text-white px-4 py-1 rounded-lg"
              onClick={() => setEmailVerified(true)}
            >
              Verify
            </button>
          </div>

          <div className="flex items-center justify-between w-96 h-16 p-4 bg-white rounded-lg shadow-lg text-black">
            <input
              type="text"
              placeholder="Verify Your Mobile"
              className="w-full pl-10 pr-10 py-2  text-black focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
            />
            <button
              className="bg-green-500 text-white px-4 py-1 rounded-lg"
              onClick={() => setMobileVerified(true)}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
