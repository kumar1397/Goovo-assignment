import Link from "next/link";
export default function Navbar () {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-center font-outfit">
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/reports" className="hover:underline">
            Reports
          </Link>
        </li>
        <li>
          <Link href="/history" className="hover:underline">
            History
          </Link>
        </li>
        <li>
          <Link href="/create-event" className="text-teal-400 font-semibold hover:underline">
            Create Event
          </Link>
        </li>
      </ul>
    </nav>
  );
};


