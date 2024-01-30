import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

const ThemeChangeAnimation = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <div
                className={` w-screen h-[100vh] 
     flex justify-center items-center  `}
            >
                {theme != "dark" ? (
                    <BsFillSunFill className="text-5xl" />
                ) : (
                    <BsMoonStarsFill className="text-5xl" />
                )}
            </div>
        </motion.div>
    );
};
export default ThemeChangeAnimation;
