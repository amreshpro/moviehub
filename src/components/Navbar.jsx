import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate('/login');
    };

    return (
        <>
            <nav className="flex justify-between px-4 py-4 bg-slate-950 text-white ">
                <h1 className="logo text-[#e50914] text-xl font-bold">
                    Netflix
                </h1>
                <div className="search flex sm:hidden  ">
                    <input
                        type="text"
                        placeholder="Search your movie..."
                        className="focus:outline-none focus:border-none border-none bg-red-50 text-black px-2 py-1 placeholder:text-gray-500"
                    />
                    <button className="bg-[#e50914] text-white px-2 ">
                        <IoSearchOutline />
                    </button>
                </div>
                <div className="nav-container flex gap-4 sm:hidden ">
                    <Link to="movie">Movie</Link>
                    <Link to="/tv">TV/Series</Link>
                    <button onClick={() => logoutHandler()}>
                        <FiLogOut />
                    </button>
                </div>
                {/* mobile menu btn */}
                <button
                    onClick={() => setIsMobileMenu(!isMobileMenu)}
                    className=" hidden sm:flex text-2xl"
                >
                    {!isMobileMenu ? <FiMenu /> : <IoMdClose />}
                </button>
            </nav>

            {/* mobile menu */}
            {isMobileMenu && (
                <div className="mobile-menu-content relative  ease-in  mx-2 p-4 mt-4   w-fit   hidden sm:flex sm:flex-col bg-slate-950 text-white">
                    <button
                        onClick={() => setIsMobileMenu(!isMobileMenu)}
                        className="text-3xl mb-1 absolute  bg-[#e50914] top-0  right-0"
                    >
                        <IoMdClose />
                    </button>

                    <div className="search flex  mt-6 w-[82vw] ">
                        <input
                            type="text"
                            placeholder="Search your movie..."
                            className="w-full focus:outline-none focus:border-none border-none bg-red-50 text-black px-2 py-1 placeholder:text-gray-500 "
                        />
                        <button className="bg-[#e50914] text-white px-2 ">
                            <IoSearchOutline />
                        </button>
                    </div>
                    <div className="nav-container flex flex-col gap-2 mt-2  ">
                        <Link to="movie">Movie</Link>
                        <Link to="/tv">TV/Series</Link>
                        <button onClick={() => logoutHandler()}>
                            <FiLogOut />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
