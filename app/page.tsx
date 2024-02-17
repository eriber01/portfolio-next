'use client'
import { Providers } from "./providers";

import Nav from "./page/Navs/Nav";
import HomePage from "./page/home";
import { Projects } from "./page/Projects";
import { About } from "./page/Abouts";
import { Contact } from "./page/Contact";
import { useEffect, useState } from "react";
import { GetProfile } from "./(dashboard)/dashboard/profile/database/GetProfile";
import { Profile } from "./(dashboard)/dashboard/profile/interface";
import { INITIAL_STATE } from "./(dashboard)/dashboard/profile/page";

export default function Home() {
  const [profile, setProfile] = useState<Profile>(INITIAL_STATE)

  useEffect(() => {
    const getProfile = async () => {
      const getProfile = await GetProfile()
      if (getProfile?.id) {
        setProfile(getProfile)
      }
    }
    getProfile()
  }, [])

  return (
    <main className="scroll-smooth bg-home h-full">
      <Providers>
        <div className="fixed top-0 w-full z-50">
          <Nav profile={profile} />
        </div>
        <HomePage profile={profile} />
        <About profile={profile} />
        <Projects />
        <Contact />
      </Providers>
    </main>
  )
}
