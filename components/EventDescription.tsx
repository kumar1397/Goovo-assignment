
import { IoFlashOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
export default function EventDescription() {
  return (
    <div className=" bg-black text-white flex justify-center py-10 font-outfit">
      <div className="w-full max-w-3xl px-6">
        {/* Event Description */}
        <div className="mb-6">
          <label className="block text-md mb-2">Event description</label>
          <textarea
            className="w-full h-36 px-4 py-3 rounded-lg border bg-[#1e2524] border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
            placeholder="Enter Event Description"
            rows={3}
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">Start Date</label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
                placeholder="Wednesday, 1st January"
              />
              <Image
                src="arrow-up.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="absolute top-5 right-4 text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">End Date</label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
                placeholder="DD/MM/YYYY"
              />
              <Image
                src="arrow-up.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="absolute top-5 right-4 text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm mb-2">Registration Deadline</label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
                placeholder="DD/MM/YYYY"
              />
              <Image
                src="timer.svg"
                alt="timer"
                width={20}
                height={20}
                className="absolute top-5 right-4 text-gray-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Event Type</label>
            <div className="relative w-full">
              <IoFlashOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Select Category"
                className="w-full pl-10 h-16 pr-10 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
              />
              <RiArrowDropDownLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
            </div>
          </div>
        </div>

        {/* Venue & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <InputField label="Enter Venue Name" placeholder="Enter Venue" />
          <InputField label="Enter City" placeholder="e.g Bangalore" />
        </div>

        {/* Price & Total Tickets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <InputField label="Price per Ticket" placeholder="Enter Amount" />
            <p className="text-md text-gray-400 mt-4">
              This is the standard price for your tickets
              <span className="text-red-500">*</span>
            </p>
          </div>
          <InputField label="Total Tickets" placeholder="Enter Tickets" />
        </div>

        {/* Tiered Pricing Checkbox */}
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="tierPricing" className="mr-2 w-5 h-5 bg-[#1e2524]" />
          <label htmlFor="tierPricing" className="text-sm">
            Add Tiered Pricing Options (Optional)
          </label>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-16 px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
      />
    </div>
  );
}
