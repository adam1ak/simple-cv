import React, { useState, useEffect } from "react";
import '../styles/Services.css';


function Service({service}) {
  const imgLink = 'https://raw.githubusercontent.com/adam1ak/simple-cv/refs/heads/main/src/assets/svg/';
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="
        relative
        flex flex-col
        justify-end
        service
        border-2 border-solid border-[#dae4e9]
        text-black
        w-96
        h-[30rem]
        p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`
          bg-overlap
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
          max-w-20`}/>
      <p className="text-pink font-bold uppercase z-10">{service.title}</p>
      <p className={`${isHovered ? 'text-white' : 'text-purple'} font-bold uppercase mt-[-4px] mb-2 z-10`}>{service.subtitle}</p>
      <p className="text-gray-600 text-sm">{service.shortDescription}</p>
    </div>
  )
}

function Services() {
  const [data, setData] = useState(null);
  const jsonLink = "https://mocki.io/v1/ba834221-4f9a-4916-8fdd-b29c6d851cd4";

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
        flex flex-col items-center mt-8">
      <h1
        className="
            uppercase text-2xl font-bold
            text-purple">learn more about my <span className="text-pink">services</span></h1>
      <div
        className="
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
