"use client";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import ThemeChangeAnimation from "@/pages/ThemeChangeAnimation";
import Link from "next/link";
import NAV_LINKS from "@/constants/NAV_LINKS";
import Sidebar from "@/pages/Sidebar";
import { useThemeContext } from "@/providers/context";
import SearchPopup from "./SearchPopup";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeChangeAnimation, setThemeChangeAnimation] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);

  const themeChangeHandler = () => {
    setThemeChangeAnimation(true);
    setTheme((prev: string) => {
      return prev === "dark" ? "light" : "dark";
    });
  };

  const searchPopupHandler = () => {
    setIsSearchPopupOpen(!isSearchPopupOpen);
    console.log("searcbox fun")
  };

  useEffect(() => {
    setTimeout(() => {
      setThemeChangeAnimation(false);
    }, 1200);
  }, [themeChangeAnimation]);

  if (themeChangeAnimation) {
    return <ThemeChangeAnimation />;
  }

  return (
    <>
    <nav
      className={`mb-16 ${
        theme == "dark" ? "dark-nav" : "light-nav"
      }  flex justify-between  z-50 fixed  `}
    >
      <div className="flex justify-between w-[100vw]  sm:px-2 md:px-4 px-8 py-4">
        <div className="flex gap-4">
          {/* logo */}
          <Link
            href="/"
            className="font-cursive hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-pink-500 text-2xl"
          >
            Moviehub
          </Link>
          {/* dark mode btn */}
          <button
            onClick={themeChangeHandler}
            className={` hidden  text-xl mb-1 sm:flex items-start link-hover hover:rounded-full p-2 

            }`}
          >
            {theme === "dark" ? (
              <BsFillSunFill className="pb-0.5" />
            ) : (
              <BsMoonStarsFill className="pb-0.5" />
            )}
          </button>

          {/* search popup btn  */}
          <button
            onClick={searchPopupHandler}
            className="hidden sm:flex text-2xl mt-1"
          >
            <IoSearchSharp />
          </button>
        </div>
        {/* links */}
        <ul className="flex gap-4 sm:hidden">
          {/* search popup btn  */}
          <button
            onClick={searchPopupHandler}
            className="sm:hidden text-2xl "
          >
            <IoSearchSharp />
          </button>

          {/* dark mode btn */}
          <button
            onClick={themeChangeHandler}
            className={` sm:hidden text-xl mb-1 flex items-start link-hover hover:rounded-full p-2 `}
          >
            {theme === "dark" ? (
              <BsFillSunFill className="pb-0.5" />
            ) : (
              <BsMoonStarsFill className="pb-0.5" />
            )}
          </button>

          {NAV_LINKS?.map((link) => {
            return (
              <li
                key={link.id}
                className="overflow-hidden text-center m-1 w-16 h-6"
              >
                <Link
                  href={link.path}
                  className="font-medium hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-pink-500 "
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* menu button */}
        <button
          className="hidden text-3xl pr-4 sm:flex"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <TfiClose className="text-2xl" />
          ) : (
            <CgMenuRight className="text-3xl" />
          )}
        </button>
      </div>

     
    </nav>


    {isMobileMenuOpen && (
        <motion.div
          initial={{ scale: 0.5, rotate: -40 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="z-50"
        >
          <Sidebar />
        </motion.div>
      )}

      {isSearchPopupOpen && (
        <motion.div
          initial={{ scale: 0.5, rotate: -40 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="z-50 "
        >
          <SearchPopup />
        </motion.div>
      )}


    </>

  );
}
