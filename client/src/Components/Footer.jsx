// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
// function Footer() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();

//     return (
//         <>
//             <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
//                 <section className='text-lg text-red'>
//                     Copyright {year} | All rights reserved
//                 </section>
//                 <section className='flex items-center justify-center gap-5 text-2xl text-white'>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsFacebook />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsInstagram />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsLinkedin />
//                     </a>
//                     <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
//                         <BsTwitter />
//                     </a>
//                 </section>
//             </footer>
//         </>
//     );

// }

// export default Footer;

import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
    const curDate = new Date();
    const year = curDate.getFullYear();
    return (
        // <footer className="py-12 md:px-16 px-3 bg-slate-100 dark:bg-gray-900 flex md:flex-row flex-col md:justify-between justify-center items-center gap-4">
        //     <span className="md:text-xl  text-lg font-[600] text-gray-700 dark:text-white">
        //         Copyright {year} | All Right Reserved
        //     </span>
        //     <div className="flex gap-5 items-center">
        //         <a
        //             href="#"
        //             className="md:text-3xl text-xl text-gray-900 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        //         >
        //             <BsFacebook />
        //         </a>
        //         <a
        //             href="#"
        //             className="md:text-3xl text-xl text-gray-900 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        //         >
        //             <BsInstagram />
        //         </a>
        //         <a
        //             href="#"
        //             className="md:text-3xl text-xl text-gray-900 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        //         >
        //             <BsLinkedin />
        //         </a>
        //         <a
        //             href="#"
        //             className="md:text-3xl text-xl text-gray-900 dark:text-slate-50 hover:text-gray-500 dark:hover:text-slate-300"
        //         >
        //             <BsTwitter />
        //         </a>
        //     </div>
        // </footer>

        <footer class="relative bg-red-400 pt-8 pb-6">
            <div class="container mx-auto px-4 text-white">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
                        <h5 class="text-lg mt-0 mb-2 text-gray-800">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div class="mt-6 lg:mb-3 mb-6">
                            <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-twitter text-blue-500 text-lg"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-facebook-square text-blue-600 text-lg"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fa-brands fa-linkedin text-blue-500 text-lg"></i></button>
                            <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fab fa-github text-lg text-black"></i>
                            </button>
                            <button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i class="fa-brands fa-instagram text-lg text-pink-600"></i>
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex  items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        {/* <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-yellow-400" href="">About Us</a> */}
                                        <Link to="/about" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-yellow-400">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-yellow-400" href="">Blog</a>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-yellow-400" href="">Github</a>
                                    </li>

                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 ">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                <ul class="list-unstyled">

                                    <li>
                                        <a class="hover:text-yellow-400 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a class="hover:text-yellow-400 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-yellow-400">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">{year}</span>| All Right Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
