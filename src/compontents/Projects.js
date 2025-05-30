import React, { useEffect, useState } from "react";
//import '../styles/Projects.css';

function Project({ project }) {

const bgColorClasses = [
  "from-indigo-500 to-blue-500",
  "from-fuchsia-500 to-pink-500",
  "from-slate-900 to-slate-700",
  "from-emerald-500 to-emerald-900",
  "from-emerald-400 to-cyan-400",
  "from-pink-600 to-pink-800"
];

  return (
    <div
      id={project.id}
      className={`
        hover:scale-105 hover:shadow-2xl
        project
        shadow-xl rounded-xl
        w-full max-w-80 mx-auto`}>
      <div
        className={`
          bg-gradient-to-r ${bgColorClasses[project.id-1]}
          shadow-lg
          flex items-center justify-center
          h-40
          rounded-t-xl`}>
        <p className="font-bold text-2xl text-white">{project.imageText}</p>
      </div>
      <div
        className="
          info
          px-6
          py-4">
        <h1
          className="
            text-2xl text-stone-900 font-bold">{project.name}</h1>
        <p
          className="
            text-xs mb-2 text-stone-500">Completed: {project.completionYear}</p>
        <p
          className="
            text-sm mb-3 text-gray-800">{project.description}</p>
        <p
          className="
            text-2xl text-stone-900 font-bold mb-2">Technologies: </p>
        <div 
          className="
            technologies
            text-sm text-nowrap text-center
            flex flex-wrap gap-2">
              {
                project.technologies.map((technology, index) => (
                  <p
                    key={index} 
                    className="
                      w-fit
                      py-1 px-3 bg-indigo-100 text-indigo-800 shadow-sm rounded-lg">{technology}</p>
                ))
              }
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [data, setData] = useState(null);
  const jsonLink = "https://raw.githubusercontent.com/adam1ak/simple-cv/refs/heads/main/src/assets/json/ProjectData.json";

  useEffect(() => {
    fetch(jsonLink)
      .then((Response) => {
        if (!Response.ok) {
          throw new Error('Network response was not OK');
        }
        return Response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData)
      })
      .catch((err) => {
        console.log("Fetched errors: ", err)
      })
  }, []);

  return (
    <section
      id="projects"
      className="
        flex flex-col items-center
        mt-8
        container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="
            text-black
            flex flex-col items-center
            mb-12">
        <h1 className="mb-1">My Projects</h1>
        <p className="">A collection of my recent work and personal endeavors.</p>
      </div>
      <div
        className="
            grid 
            gap-12      lg:gap-20      2xl:gap-24
            grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3
            w-ful">
        {
          data && data.length > 0 ? (
            data.map((projectItem) => (
              <Project key={projectItem.id} project={projectItem}/>
            ))
          ) : (
            <p>Loading projects...</p>
          )
        }
      </div>
    </section>
  );
}

export default Projects;
