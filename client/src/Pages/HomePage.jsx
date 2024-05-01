import React from "react";
import { Link } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout.jsx";
import HomePageImage from "../Assets/Images/homePageMainImage.png";
import ImageSlider from "../Helpers/ImageSlider.jsx";
import logo from "../Assets/Images/logo1.jpeg"
export default function HomePage(){
    return (
        <HomeLayout>
             <img src={logo} alt="" className="logo" />
            <section className="md:py-10 py-7 text-white flex md:flex-row flex-col-reverse items-center justify-center md:gap-10 gap-7 md:px-16 px-6 min-h-[85vh]">
                <div className="md:w-1/2 w-full space-y-7 mb-20">
                    <h1 className="md:text-5xl text-6xl font-semibold text-gray-900">
                        Find out best
                         <span className=" text-purple-600 font-bold font-open-sans">&nbsp;Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        We have a large library of courses taught by highly skilled and
                        qualified faculties at a very affordable cost.
                    </p>

                    <div className="space-x-6 flex">
                        <Link to="/courses">
                            <button className="bg-yellow-500 font-inter font-[400] text-whitepx-5 px-3 md:py-3 py-3 rounded-md  md:text-lg text-base cursor-pointer transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="bg-yellow-500 font-inter font-[400] text-whitepx-5 px-3 md:py-3 py-3 rounded-md  md:text-lg text-base cursor-pointer transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="lg:w-1/2 w-1/7 flex  justify-center mb-12">
                    <ImageSlider/>
                        {/* <img alt="homepage image" src={HomePageImage} /> */}
                </div>
            </section>
        </HomeLayout>
    );
}

