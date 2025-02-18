"use client";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoFlashOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiImage } from "react-icons/pi";

export default function EventDetails() {
  const [displayFile, setDisplayFile] = useState(false);

  return (
    <div className=" bg-black text-white flex justify-center py-10 font-outfit">
      <div className="w-full max-w-2xl px-6">
        <div className="flex flex-col items-center justify-center min-h-[200px] bg-black text-white">
          <h1 className="text-4xl font-bold">Create an Event</h1>
          <p className="text-lg mt-2">Enter your event details</p>
        </div>
        <h2 className="text-lg font-semibold mb-4">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm">Event Name</label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Mohan Yadav R"
                className="w-full px-4 pr-10 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
              />
              <BsPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">Event Category</label>
            <div className="relative w-full">
              <IoFlashOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Select Category"
                className="w-full pl-10 pr-10 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
              />
              <RiArrowDropDownLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-8 mb-4">Event Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-between h-44 text-gray-400">
            <div className="flex flex-col justify-center items-center space-y-2">
              <PiImage className="text-3xl" /> 
              <span>Click to upload horizontal</span>
            </div>
            <div className="flex flex-row space-x-3 mt-auto">
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">
                PDF
              </div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">DOCX</div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">TXT</div>
              <div className="w-12 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">&lt;2.0MB</div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 flex items-center justify-center h-44">
            <p className="text-yellow-400 font-bold">Mahabalipuram Trek</p>
          </div>
        </div>

        {/* Display File Toggle */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="displayFile"
            className="mr-2"
            onChange={() => setDisplayFile(!displayFile)}
          />
          <label htmlFor="displayFile" className="text-sm">
            Display file on the card
          </label>
        </div>

        {/* Upload Video Section */}
        <div className="border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-between h-44 text-gray-400">
            <div className="flex flex-col justify-center items-center space-y-2">
              <PiImage className="text-3xl" /> 
              <span>Click to upload horizontal</span>
            </div>
            <div className="flex flex-row space-x-3 mt-auto">
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">
                PDF
              </div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">DOCX</div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">TXT</div>
              <div className="w-12 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">&lt;2.0MB</div>
            </div>
          </div>
        <p className="text-xs text-gray-400 mt-2">
          We require event images in both vertical (portrait) and horizontal
          (landscape) formats<span className="text-red-500">*</span>
        </p>

        <div className="border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-between h-44 text-gray-400">
            <div className="flex flex-col justify-center items-center space-y-2">
              <PiImage className="text-3xl" /> 
              <span>Click to upload horizontal</span>
            </div>
            <div className="flex flex-row space-x-3 mt-auto">
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">
                PDF
              </div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">DOCX</div>
              <div className="w-9 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">TXT</div>
              <div className="w-12 h-4 bg-[#343b3a] flex items-center justify-center text-xs rounded">&lt;2.0MB</div>
            </div>
          </div>

        {/* Card Guidelines */}
        <div className="mt-6 flex items-center space-x-2 text-gray-400 cursor-pointer">
          <FaInfoCircle />
          <span>Card Guidelines</span>
        </div>
      </div>
    </div>
  );
}


