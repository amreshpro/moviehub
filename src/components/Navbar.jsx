import { Link } from "react-router-dom";
import { LOGO } from "../assets";
import {  BsSearch } from "react-icons/bs";
export default function Navbar() {
    return (
        <nav className="flex items-center gap-2 justify-between  bg-blue-500  text-white ">
            <div className="logo-and-theme  px-2 py-2 gap-2 flex items-center">
                <Link to="/">
                    {" "}
                    <img
                        src={LOGO}
                        alt="logo"
                        className="w-14 h-6 rounded-r-full rounded-l-full "
                    />
                </Link>
                <button>Theme</button>
            </div>

            <button>
                <BsSearch />
            </button>
            <div className="links px-2">
                <Link to="/movie">Movie</Link>
                <Link to="tv">TV Shows</Link>
            </div>
        </nav>
    );
}
