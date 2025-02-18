"use client"
import { useState } from "react";
import Main from "@/components/Main";
export default function VerificationPage() {
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerified(event.target.value.trim().length > 0);
  };
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      <div className={`absolute inset-0 transition-all duration-300 ${!isVerified ? "backdrop-blur-xl" : ""}`}>
        <Main/>
      </div>
      {/* Verification Section */}
      <div className="relative z-10  p-6 rounded-xl shadow-md w-[400px] flex flex-col gap-4 text-black font-outfit">
        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-[#f1f3f5]">
          <input
            type="text"
            placeholder="Verify Your E-mail"
            onChange={handleInputChange}
            className="w-full outline-none text-black bg-[#f1f3f5]"
          />
          <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
            Verify
          </button>
        </div>
        <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-[#f1f3f5]">
          <input
            type="text"
            placeholder="Verify Your Mobile"
            onChange={handleInputChange}
            className="w-full outline-none text-black"
          />
          <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
