import { Button } from "@nextui-org/react";
import Link from "next/link";
import HomePage from "./components/home";
// import TopNav from "./components/Navs/top";
import Nav from "./components/Navs/Nav";
import { About } from "./components/Abouts";
import { Providers } from "./providers";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="scroll-smooth bg-home">
      <Providers>
        <div className="fixed top-0 w-full z-50">
          <Nav />
        </div>
        <HomePage />
        <About />
        <Projects />
      </Providers>
    </main>
  )
}
