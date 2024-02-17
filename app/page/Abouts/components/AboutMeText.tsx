
const AboutMeText = ({ year }: { year: number }) => {

  return (
    <main className="w-full h-full md:h-4/5 xl:h-4/5">
      {/* Headers */}
      <div className="w-full">
        <p className="header-mobile-font-size md:header-font-size xl:header-font-size mb-7">
          Hi I’m Eriber Tejeda Amparo
        </p>
        <p className="big-font-size w-4/5 md:w-2/4 xl:w-2/4">
          I am a Javascript web developer with {year} years of experience.
        </p>
      </div>
      {/* Descriptions */}
      <div className="mt-[15%] md:mt-[10%] xl:mt-[10%] w-full md:w-4/5 xl:w-4/5">
        <p className="medium-font-size md:big-font-size xl:big-font-size secondary-font-color">
          During this time I have had the opportunity to work
          on both the Backend and the Frontend using technologies
          such as React, Node, Bootstrap, Next, Mongo, Postgresql,
          TypeScript, Tailwind and NextUI, in addition to the
          planning, development and automation of processes.
        </p>
      </div>
    </main>
  )
}

export default AboutMeText