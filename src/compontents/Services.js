import React, { useState, useEffect } from "react";
import '../styles/Services.css';


function Service({service}) {
  return (
    <div
      className="
        flex flex-col
        justify-end
        service
        border-2 border-solid border-[#dae4e9]
        text-black
        w-96
        h-[30rem]
        p-2">
      <img
        src={`../assets/svg/MenuHosting.svg`}
        alt={`${service.svgName.normal}`}/>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  )
}

function Services() {
  const [data, setData] = useState(null);
  const jsonLink = "https://mocki.io/v1/91239c34-68bc-4ce0-9804-6d7ecf1675ad";

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
            <Service service={data[0]} />
          ) : (
            <p>Loading data</p>
          )
        }
      </div>
    </section>
  );
}

export default Services;
