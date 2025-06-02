import React, { useState } from "react";
import '../styles/Contact.css';
import '../styles/Styles.css';
import { BsFillSendFill, BsFillTelephoneFill, BsPinMap } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function InputComponent({placeholder, type}){
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const inputClass = inputValue.length > 0 ? "border-b-[#A91079]" : "border-b-zinc-400";

  return (
    <input 
      type={type} 
      placeholder={placeholder}
      className={inputClass} 
      onChange={handleChange} 
      value={inputValue}/>
  )
}

function Contact() {
  return (
    <section id="contact" className="">
      <div
        className="
          mt-24 mb-32 
          mx-6 lg:mx-14 xl:mx-28
          pb-6 
          bg-purple-950 
          flex flex-col 
          md:flex-row md:justify-between
          rounded-xl">
        <div
          className="
              left-content
              flex flex-col
              md:justify-between md:ml-4
              px-6 pt-8 pb-2
              ">
          <h1 className="font-bold mb-4 md:text-3xl">
            Have a project in mind or just want to say hi?<br />
            I'd <span className="text-deep-pink">love</span> to hear from you.
          </h1>
          <div className="contacts md:flex md:flex-col gap-8">
            <div
              className="contact">
              <BsFillSendFill className="text-xl text-deep-pink" />example@mail.com
            </div>
            <div
              className="contact">
              <BsFillTelephoneFill className="text-xl text-deep-pink" />+123 456 789
            </div>
            <div
              className="contact">
              <BsPinMap className="text-xl text-deep-pink" />123 Street 456 House
            </div>
          </div>
          <div
            className="socials flex gap-3 sm:gap-6 md:gap-14 self-center mt-2">
            <FaFacebookF className="social" />
            <FaInstagram className="social" />
            <FaXTwitter className="social" />
          </div>
        </div>
        <div
          className="
            right-content bg-neutral-50 
            mx-4 mt-6 
            py-6 px-6 
            md:max-w-md
            text-black 
            rounded-xl">
          <p className="text-purple-950">I'm intrested in...</p>
          <div className="categories flex flex-wrap gap-2 mt-4 mb-8">
            <div className="category ui-ux grow">
              UI/UX design
            </div>

            <div className="category mobile-app grow">
              Mobile App
            </div>

            <div className="category web-app grow">
              Web App
            </div>

            <div className="category ai grow">
              AI
            </div>

            <div className="category hosting grow">
              Hosting
            </div>

            <div className="category technology sm:grow">
              Technology
            </div>

            <div className="category video sm:grow">
              Video
            </div>
          </div>
          <div className="form">
            <InputComponent placeholder={"Your name"} type={"text"}/>
            <InputComponent placeholder={"Your email"} type={"email"}/>
            <InputComponent placeholder={"Your message"} type={"text"}/>
            <button 
              className="
                bg-[#A91079] 
                text-white font-normal 
                px-12 py-3 
                mt-12 md:mt-48
                rounded-xl
                text-base
                flex items-center gap-4
                ">
              <BsFillSendFill/>Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
