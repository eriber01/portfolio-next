import { Providers } from "./providers";

import Nav from "./page/Navs/Nav";
import HomePage from "./page/home";
import { Projects } from "./page/Projects";
import { About } from "./page/Abouts";
import { Contact } from "./page/Contact";
// import TopNav from "./page/Navs/top";

export default function Home() {
  return (
    <main className="scroll-smooth bg-home h-full">
      <Providers>
        <div className="fixed top-0 w-full z-50">
          <Nav />
        </div>
        {/* <HomePage /> */}
        <About />
        <Projects />
        {/* <Contact /> */}
      </Providers>
    </main>
  )
}
