import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font bg-indigo-500 font-[poppins]">
                <div className="container py-8 mx-auto w-[90%]">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link className="flex title-font font-medium items-center justify-center lg:justify-start text-gray-900 mb-4 md:mb-0">
                                <i className='fa fa-heartbeat text-white mr-2' style={{ fontSize: "30px" }}></i>
                                <h1 className='flex flex-col items-center justify-center text-xl text-white font-semibold' >CareWell <span className=" text-white text-[11px]">Medical Center</span></h1>
                            </Link>
                            <p class="mt-4 text-sm font-medium text-white">Better Care Healthier Lives. We provide trusted Medical services for you and your family.</p>
                            <div className='flex text-white gap-2 mt-4 justify-center lg:justify-start'>

                                <Link className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.8c-.8-.1-1.5-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.6v8z" />
                                    </svg>
                                </Link>
                                <Link className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                </Link>
                                <Link className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4zM3.3 9.5h3.8V21H3.3zM9.2 9.5h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.2z" />
                                    </svg>
                                </Link>
                                <Link className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.5l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20z" />
                                    </svg>
                                </Link>
                                <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-6 lg:mt-0">
                            <h2 class="title-font text-white font-semibold tracking-widest text-md mb-3 lg:ml-16">Quick Links</h2>
                            <nav class="list-none lg:ml-16">
                                <li>
                                    <Link to="/" class="text-white hover:text-gray-800">Home</Link >
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800">Departments</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800">Doctors</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800">About</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800">Blog</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-6 lg:mt-0">
                            <h2 class="title-font font-semibold text-white tracking-widest text-md mb-3">Contact Us</h2>
                            <nav class="list-none flex flex-col gap-4 items-center lg:items-start ">
                                <li>
                                    <Link class="text-white hover:text-gray-800 flex items-center gap-4"><i className='fa fa-map-marker' style={{ fontSize: 25 }}></i>123 Health Lane, Lahore, Punjab, Pakistan</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800 flex items-center gap-4"><i className='fa fa-phone' style={{ fontSize: 25 }}></i>+92 300 0000000</Link>
                                </li>
                                <li>
                                    <Link class="text-white hover:text-gray-800 flex items-center gap-4"><i className='fa fa-envelope' style={{ fontSize: 25 }}></i>123 Health Lane, Lahore, Punjab, Pakistan</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 mt-6 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-md mb-3">Newsletter</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center md:justify-start flex-col">
                                <p for="footer-field" className="leading-7 font-medium text-sm text-white mb-2">Subscibe to get health tips and lastest updates</p>

                                <div className='flex items-center'>
                                    <div className="relative w-80 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                        <input type="text" id="footer-field" name="footer-field" placeholder='Your email address' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                    <button className="lg:mt-2 xl:mt-0 shrink-0 inline-flex text-indigo-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white hover:cursor-pointer rounded">Send</button></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-indigo-500 border-t border-white">
                    <div className="container py-6 mx-auto flex items-center sm:flex-row flex-col w-[90%]">
                        <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">© 2026 Carewell Medical Center. All rights reserved.</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <Link className="text-white text-sm">
                                Privacy Policy
                            </Link>
                            <Link className="ml-3 text-white text-sm">
                                Terms & Condition
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
