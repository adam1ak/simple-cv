import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiLinux,
  SiSketch,
  SiGithubactions,
  SiRuby,
  SiGnuprivacyguard,
  Si2Fas
} from "react-icons/si";


function Skill({ IconName, Name, ClassName }) {
  return (
    <div className={`
      group
      text-5xl ${ClassName}
      text-fuchsia-700
      w-32 h-32
      xl:w-36 xl:h-36
      flex-shrink-0
      shadow-xl p-6 rounded-lg
      flex flex-col items-center justify-center
      transition ease-in-out delay-75
      hover:shadow-2xl hover:scale-105
      text-center`}>
      <IconName className="text-5xl md:text-6xl lg:text-7xl transition ease-in-out delay-75 group-hover:text-fuchsia-500" />
      <p className="
      mt-1
      text-base
      text-neutral-900 uppercase font-bold">{Name}</p>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      className="
        flex flex-col lg:flex-row lg:justify-around  2xl:items-center
        ">
      <div className="mt-2 lg:mt-0 bio">
        {/* First Bio Section */}
        <div
          className="
            group
            text-content
            mx-8 lg:mx-0
            mb-28 lg:mb-10
            p-6
            lg:max-w-xl
            2xl:max-w-3xl
            rounded-lg shadow-xl
          "
        >
          <h1 className="text-2xl 2xl:text-3xl mb-4 group-hover:text-fuchsia-500 transition ease-in-out delay-75  font-medium text-fuchsia-800">
            Crafting Intuitive Digital Experiences
          </h1>
          <p className="text-base lg:text-lg 2xl:text-xl text-neutral-900">
            I'm Anya Sharma, and I'm a dedicated UI/UX Designer with a genuine
            passion for transforming complex digital challenges into elegant and
            user-friendly solutions. I really enjoy bridging the gap between
            user needs and business goals, leveraging a deep understanding of
            human-centered design principles to create engaging and accessible
            interfaces. I thrive on the iterative process of design, from
            initial research and ideation to meticulous prototyping and testing.
            My goal is always to deliver products that not only look good but
            also genuinely improve people's digital lives.
          </p>
        </div>

        {/* Second Bio Section */}
        <div
          className="
            group
            text-content
            mx-8 lg:mx-0
            mb-28 lg:mb-0 p-6
            lg:max-w-xl
            2xl:max-w-3xl
            rounded-lg shadow-xl
          "
        >
          <h1 className="text-2xl 2xl:text-3xl mb-4 group-hover:text-fuchsia-500 transition ease-in-out delay-75 font-medium text-fuchsia-800">
            My User-Centric Approach to Problem Solving
          </h1>
          <p className="text-base lg:text-lg 2xl:text-xl text-neutral-900">
            What truly drives me is an unwavering commitment to the user. I
            believe that truly great design emerges from empathy, curiosity, and
            a relentless pursuit of understanding who the users are and what
            problems they face. This user-centric philosophy guides my approach
            to every project, ensuring that every design decision I make is
            backed by research and aimed at creating seamless, delightful
            interactions. I'm adept at collaborating with cross-functional
            teams, translating insights into actionable design strategies, and
            championing the user's voice throughout the entire product
            development lifecycle.
          </p>
        </div>
      </div>

      <div className="
            rounded-lg
            toolkit 
            flex flex-col
            self-center lg:self-start lg:mt-8 xl:mt-0 xl:self-center
            w-fit h-fit
            mx-8 lg:mx-0
            shadow-xl p-6">
        <div>
          <h1 className="text-4xl text-neutral-800 font-medium mb-6">My Toolkit</h1>
          <div className="
                  skills-box justify-center grid 
                  grid-rows-4 sm:grid-rows-3 lg:grid-rows-4 xl:grid-rows-3
                  gap-6 md:gap-10 grid-flow-col">
            <Skill IconName={FaReact} Name={"react"} />
            <Skill IconName={SiFigma} Name={"figma"} />
            <Skill IconName={SiGnuprivacyguard} Name={"privacy"} />
            <Skill IconName={SiAdobexd} Name={"adobexd"} />
            <Skill IconName={SiLinux} Name={"linux"} />
            <Skill IconName={SiSketch} Name={"sketch"} />
            <Skill IconName={SiGithubactions} Name={"git"} />
            <Skill IconName={SiRuby} Name={"ruby"} />
            <Skill IconName={Si2Fas} Name={"security"} ClassName={"hidden sm:flex lg:hidden xl:flex "} />
          </div>
        </div>
      </div>


    </section>
  );
}

export default About;