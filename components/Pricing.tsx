"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
export default function TieredPricing() {
  const [pricingOptions, setPricingOptions] = useState([
    { name: "", price: "", deadline: "", slots: "" },
  ]);

  const addMore = () => {
    setPricingOptions([
      ...pricingOptions,
      { name: "", price: "", deadline: "", slots: "" },
    ]);
  };

  return (
    <div className="flex justify-center items-center bg-black text-white font-outfit">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-xl font-semibold mb-4">Tiered Pricing Options</h2>

        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="e.g Early Bird"
                className="w-full px-4 h-16 py-2 bg-[#1e2524] rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Price per Ticket */}
            <div>
              <label className="block text-sm mb-2">Price per Ticket</label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Availability Deadline */}
            <div>
              <label className="block text-sm mb-2">
                Availability Deadline
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
                />
                <Image
                  src="timer.svg"
                  alt="timer"
                  width={20}
                  height={20}
                  className="absolute top-3 right-4 text-gray-400"
                />
              </div>
            </div>

            {/* Slots */}
            <div>
              <label className="block text-sm mb-2">Slots</label>
              <input
                type="text"
                placeholder="Limited slots"
                className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={addMore}
            className="flex  items-center gap-2 px-6 py-2 border border-teal-400 text-white rounded-lg hover:bg-teal-500 hover:text-black transition"
          >
            <FaPlus />
            Add More
          </button>
          <button className="px-8 py-4 bg-black text-white text-xl font-bold rounded-xl shadow-sm shadow-teal-500 ">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
