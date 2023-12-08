import Link from "next/link";

import { Button } from "@nextui-org/react";
import { Providers } from "./providers";

import Nav from "./components/Navs/Nav";
import HomePage from "./components/home";
import { Projects } from "./components/Projects";
import { About } from "./components/Abouts";
// import TopNav from "./components/Navs/top";

export default function Home() {
  return (
    <main className="scroll-smooth bg-home h-full">
      <Providers>
        <div className="fixed top-0 w-full z-50">
          <Nav />
        </div>
        {/* <HomePage /> */}
        <About />
        {/* <Projects /> */}
      </Providers>
    </main>
  )
}
