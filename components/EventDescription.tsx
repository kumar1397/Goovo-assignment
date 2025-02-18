import { FaCalendarAlt } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function EventDescription() {
  return (
    <div className=" bg-black text-white flex justify-center py-10 font-outfit">
      <div className="w-full max-w-3xl px-6">
        {/* Event Description */}
        <div className="mb-6">
          <label className="block text-md mb-2">Event description</label>
          <textarea
            className="w-full h-24 px-4 py-3 rounded-lg border bg-[#1e2524] border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
            placeholder="Enter Event Description"
            rows={3}
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DateInput label="Start Date" />
          <DateInput label="End Date" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm mb-2">Registration Deadline</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
                placeholder="DD/MM/YYYY"
              />
              <FaCalendarAlt className="absolute top-3 right-4 text-gray-400" />
            </div>
          </div>
          <div>
          <label className="block text-sm mb-2">Event Type</label>
            <div className="relative w-full">
              <IoFlashOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Select Category"
                className="w-full pl-10 pr-10 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none placeholder:text-gray-500"
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
            <p className="text-xs text-gray-400 mt-1">
              This is the standard price for your tickets*
            </p>
          </div>
          <InputField label="Total Tickets" placeholder="Enter Tickets" />
        </div>

        {/* Tiered Pricing Checkbox */}
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="tierPricing" className="mr-2" />
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
        className="w-full px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
      />
    </div>
  );
}

// Reusable Date Input Component
function DateInput({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 bg-[#1e2524] rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
          placeholder="Wednesday, 1st January"
        />
        <FaCalendarAlt className="absolute top-3 right-4 text-gray-400" />
      </div>
    </div>
  );
}
