import React from "react";
import profileImage from "../assets/pfpwm.png";
//import '../styles/Home.css';

function Home() {
  return (
    <section id="home"
      className="
          flex flex-col 
          justify-center items-center
          text-stone-950 ">
      <div className="
          flex
          flex-col items-center
          sm:flex-row sm:items-stretch
          sm:gap-12 sm:mx-4
          lg:gap-20 xl:gap-28">
        {/* border-solid border-2 border-sky-500 */}
        <div className="header-content">
          <h1 className="text-3xl sm:text-5xl font-bold">Welcome to My Portfolio!</h1>
          <p className="text-lg sm:text-2xl font-semibold">This is the home page content.</p>
          <div className="text-container hidden sm:block">
            <p className="mt-8 mb-1 text-2xl">I'm UI/UX designer</p>
            <p className="text-base">Crafting intuitive and engaging digital experiences.</p>
          </div>
        </div>

                {/* border-solid border-2 border-red-500 */}
        <div className="
              image-container max-w-sm font-normal 
              my-8 sm:my-0 flex flex-col items-center ">
          <img 
            src={profileImage} 
            alt="my profilePicture" 
            className="
              shadow-xl  rounded-md
              transition duration-150 ease-in-out
              sm:hover:scale-110" />
          <div className="text-container mx-8 block sm:hidden">
            <p className="mt-4 mb-1 text-xl">I'm UI/UX designer</p>
            <p className="text-base">Crafting intuitive and engaging digital experiences.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;