import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Courses />
    </div>
  )
};