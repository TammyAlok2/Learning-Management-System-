import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice";

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { isLoggedIn, role, data } = useSelector((state) => state.auth);

    const onLogout = async function () {
        await dispatch(logout());
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] bg-[#ffffffd0] dark:bg-[#6a6c70c5] shadow-custom backdrop-blur-sm flex justify-end items-center gap-4">
            <Link to="/" className="flex  gap-4 items-center">
                <FaHome
                    size={30}
                    className="text-gray-900 hover:text-red "
                />
                
            </Link> 
            {isLoggedIn ? (
                
                    <div className="flex md:flex-row  gap-5 items-center justify-center">
                        <button className="btn-primary px-3.5 py-2.5 font-semibold rounded-md w-full">
                            <Link to="/user/profile">Profile</Link>
                        </button>
                        <button
                            className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full"
                            onClick={onLogout}
                            disabled={isLoading}
                        >
                            <Link>{isLoading ? "Logout..." : "Logout"}</Link>
                        </button>
                    </div>
                
            ) : (
                
                    <div className=" flex gap-5 items-center justify-center">
                        <button className="btn-primary px-3.5 py-2.5 font-semibold rounded-md w-full">
                            <Link to="/login">Login</Link>
                        </button>
                        <button className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full">
                            <Link to="/signup">Signup</Link>
                        </button>
                    </div>
                
            )}
        </nav>
    );
}
