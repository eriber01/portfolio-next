import { Button } from "@nextui-org/react";
import Link from "next/link";
import HomePage from "./components/home";
// import TopNav from "./components/Navs/top";
import Nav from "./components/Navs/Nav";
import { About } from "./components/Abouts";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Nav />
      <HomePage />
      <About />
    </main>
  )
}
