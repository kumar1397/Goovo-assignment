"use client"
import { useState } from "react";
import { FaPlus, FaClock } from "react-icons/fa";

export default function TieredPricing() {
  const [pricingOptions, setPricingOptions] = useState([
    { name: "", price: "", deadline: "", slots: "" },
  ]);

  const addMore = () => {
    setPricingOptions([...pricingOptions, { name: "", price: "", deadline: "", slots: "" }]);
  };

  return (
    <div className="flex justify-center items-center bg-black text-white font-outfit">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-xl font-semibold mb-4">Tiered Pricing Options</h2>

        {pricingOptions.map((option, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="e.g Early Bird"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Price per Ticket */}
            <div>
              <label className="block text-sm mb-2">Price per Ticket</label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Availability Deadline */}
            <div>
              <label className="block text-sm mb-2">Availability Deadline</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
                />
                <FaClock className="absolute top-3 right-4 text-gray-400" />
              </div>
            </div>

            {/* Slots */}
            <div>
              <label className="block text-sm mb-2">Slots</label>
              <input
                type="text"
                placeholder="Limited slots"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring focus:ring-teal-400 outline-none"
              />
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={addMore}
            className="flex items-center gap-2 px-6 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-500 hover:text-black transition"
          >
            <FaPlus />
            Add More
          </button>
          <button className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
