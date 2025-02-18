import Navbar from "@/components/Navbar";
import EventDetails from "@/components/EventDetails";
import EventDescription from "@/components/EventDescription";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <EventDetails />
      <EventDescription />
      <Pricing />
      <Contact />
    </>
  );
}
