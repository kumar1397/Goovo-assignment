
import { FaCalendarAlt, FaBolt } from "react-icons/fa";

export default function EventDescription() {
  return (
    <div className=" bg-black text-white flex justify-center py-10 font-outfit">
      <div className="w-full max-w-3xl px-6">
        {/* Event Description */}
        <div className="mb-6">
          <label className="block text-sm mb-2">Event description</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
            placeholder="Enter Event Description"
            rows={3}
          ></textarea>
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DateInput label="Start Date" />
          <DateInput label="End Date" />
        </div>

        {/* Registration Deadline & Event Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm mb-2">Registration Deadline</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
                placeholder="DD/MM/YYYY"
              />
              <FaCalendarAlt className="absolute top-3 right-4 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Event Type</label>
            <div className="relative">
              <select className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none">
                <option>Select Type</option>
              </select>
              <FaBolt className="absolute top-3 right-4 text-gray-400" />
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
            <p className="text-xs text-gray-400 mt-1">This is the standard price for your tickets*</p>
          </div>
          <InputField label="Total Tickets" placeholder="Enter Tickets" />
        </div>

        {/* Tiered Pricing Checkbox */}
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="tierPricing" className="mr-2" />
          <label htmlFor="tierPricing" className="text-sm">Add Tiered Pricing Options (Optional)</label>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
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
          className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring focus:ring-teal-400 outline-none"
          placeholder="Wednesday, 1st January"
        />
        <FaCalendarAlt className="absolute top-3 right-4 text-gray-400" />
      </div>
    </div>
  );
}
