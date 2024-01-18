



import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";


 const Footer = () => {
  return (
    <footer className="mt-4  bg-slate-950 text-white flex flex-col items-center ">
      <h1 id="contact" className="text-xl sm:text-lg font-bold text-center gradient-text ">
        Connect With Me
      </h1>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <Link
          to={socialLinks.linkedin}
          target="_blank"
          className="px-4 py-2 rounded-l-full rounded-r-full bg-[#0077b5] text-white text-lg flex gap-2 items-center"
        >
          <p className="text-lg font-bold">Linkedin</p>
          <BsLinkedin className="rounded-lg text-3xl" />
        </Link>

        <Link
          to={socialLinks.instagram}
          target="_blank"
          className="px-4 py-2 rounded-l-full rounded-r-full bg-[#e4405f] text-white text-lg flex gap-2 items-center"
        >
          <p className="text-lg font-bold">Instagram</p>
          <BsInstagram className="rounded-lg text-3xl" />
        </Link>
        <Link
          to={socialLinks.github}
          target="_blank"
          className="px-4 py-2 rounded-l-full rounded-r-full bg-[#2b3137] text-white text-lg flex gap-2 items-center"
        >
          <p className="text-lg font-bold">Github</p>
          <BsGithub className="rounded-lg text-3xl" />
        </Link>

        <Link
          to={`mailto:${socialLinks.mail}`}
          target="_blank"
          className="px-4 py-2 rounded-l-full rounded-r-full bg-gradient-to-l from-[#3e65cf] to-[#f67470]   text-white text-lg flex gap-2 items-center"
        >
          <p className="text-lg font-bold">Mail</p>
          <SiGmail className="rounded-lg text-3xl " />
        </Link>
      </div>

      <div className="w-full p-4 text-center">
        © 2023 Copyright:
        <Link className="link-hover font-semibold" to={socialLinks.portfolio}>
          amreshpro
        </Link>
      </div>
    </footer>
  );
};


export default Footer
