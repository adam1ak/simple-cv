import React, { useState, useEffect } from "react";
import '../styles/Services.css';


function Service({service}) {
  const imgLink = 'https://raw.githubusercontent.com/adam1ak/simple-cv/refs/heads/main/src/assets/svg/';
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        relative
        flex flex-col
        justify-end
        service
        border-2 border-solid border-[#dae4e9]
        text-black
        mx-8 md:mx-0
        h-[448px]  md:h-[285px] lg:h-[350px]
        lg:max-w-[200px]
        p-2
        ${service.title === "AI" ? 'md:row-span-2 md:h-full lg:h-full md:order-first' : 'md:row-auto'}
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`
          bg-[#29225c]
          absolute inset-0
          origin-top
          transition-transform duration-500 ease-out
          ${isHovered ? 'scale-y-100' : 'scale-y-0'}`}/>
      <img
        src={imgLink + service.svgName.normal + '.svg'}
        alt={`${service.svgName.normal}`}
        className={`
          relative
          transition-transform duration-1000 ease-out
          ${isHovered ? 'translate-x-10' : 'translate-x-0'}
          ${isHovered ? '-translate-y-10' : '-translate-y-0'}
          ${isHovered ? 'scale-150' : 'scale-100'}
          z-10
          self-start
          max-h-20
          max-w-full`}/>
      <p className="text-sm md:text-base text-pink font-bold uppercase z-10">{service.title}</p>
      <p className={`text-sm md:text-base ${isHovered ? 'text-white' : 'text-purple'} font-bold uppercase mt-[-4px] mb-2 z-10`}>{service.subtitle}</p>
      <p className="text-sm text-gray-600 lg:hidden">{service.shortDescription}</p>
    </div>
  )
}

function Services() {
  const [data, setData] = useState(null);
  const jsonLink = "https://raw.githubusercontent.com/adam1ak/simple-cv/refs/heads/main/src/assets/json/ServicesData.json";

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
      id="services"
      className="
        flex flex-col items-center mt-8
        lg:justify-around
        lg:mx-2
        lg:flex-row">
      <h1
        className="
            mb-4
            uppercase font-bold
            text-xl sm:text-2xl md:text-6xl
            text-purple">learn more <br className="hidden md:block"/> about my <span className="text-pink"><br className="hidden md:block"/>services</span></h1>
      <div
        className="
            grid
            gap-8 md:gap-2 lg:gap-1
            md:px-4 lg:px-0 lg:mr-4
            grid-flow-row
            grid-cols-1 md:grid-cols-4
            services-container">
        {
          data && data.length > 0 ? (
            data.map((serviceItem, index) => (
              <Service id={index} service={serviceItem} />
            ))
          ) : (
            <p>Loading data</p>
          )
        }
      </div>
    </section>
  );
}

export default Services;
