"use client";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className=" flex justify-center items-center bg-black text-white font-outfit gap-4 py-10">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-xl font-semibold mb-4">Point of Contact</h2>

        {/* Organizer Name & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm mb-2">Organiser Name</label>
            <div className="relative w-full bg-[#1e2524] ">
              <input
                type="text"
                placeholder="Mohan Yadav R"
                className="w-full px-4 pr-10 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
              />
              <BsPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Phone Number</label>
            <div className="relative">
              <input
                type="text"
                placeholder="(123) 456 - 7890"
                className="w-full px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
              <FaPhoneAlt className="absolute top-3 right-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Terms and Conditions</label>
          <div className="w-full px-4 py-3 bg-[#1e2524] rounded-lg border border-gray-700 text-gray-400">
            <p className="text-sm opacity-60">E.g</p>
            <ul className="text-xs mt-2 leading-relaxed">
              <li>• Tickets are non-refundable after [specific date].</li>
              <li>• The organizer is not liable for personal belongings.</li>
              <li>• Participants must be 18+ years old.</li>
              <li>• Respect attendees & adhere to event dress codes.</li>
              <li>• Venue has been inspected for fire safety.</li>
              <li>• Permits for large gatherings are secured.</li>
            </ul>
          </div>
        </div>

        {/* Set Event to Private (Toggle Switch) */}
        <div className="flex items-center justify-around mb-6 rounded-lg border h-20 border-gray-700 bg-[#1e2524]">
          <span className="text-sm">Set Event to Private</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-teal-500 after:absolute after:top-1 after:left-1 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-black transition">
            Add Section
          </button>
          <button className="px-6 py-2 bg-[#1e2524] rounded-lg hover:bg-gray-700 transition">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
