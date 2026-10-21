import React from 'react'
import { Link } from 'react-router-dom'

function AboutPurpose() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins] bg-[#ddedff]">
                <div className="container px-5 py-15 w-[90%] mx-auto flex flex-wrap lg:justify-between">
                    <div className="flex flex-col text-center lg:w-[40%] lg:text-start w-full mb-20 gap-4">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font text-[14px] mb-1">OUR PURPOSE</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Misson & Vision</h1>
                        <p className="text-xs text-[gray] tracking-widest font-medium text-[16px] title-font mb-1 lg:w-[95%]">We are driven by a simple mission, to make quality healthcare accessible to everyone, and build a healtier future for generations to come.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 -m-4 lg:w-[60%] xl:flex-nowrap ">

                        <div className="flex rounded-lg  bg-gray-100 xl:w-1/2 p-8 flex-col">
                            <div className="flex flex-col gap-4 mb-4 items-center xl:items-start">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        {/* Target rings */}
                                        <circle cx="10" cy="14" r="9"></circle>
                                        <circle cx="10" cy="14" r="6.5"></circle>
                                        <circle cx="10" cy="14" r="4"></circle>
                                        <circle cx="10" cy="14" r="1.5"></circle>

                                        {/* Arrow shaft */}
                                        <path d="M10 14 20 4"></path>

                                        {/* Arrowhead */}
                                        <path
                                            d="M16.5 3.5 20.5 3.5 20.5 7.5 22.5 5.5 18.5 1.5 16.5 3.5Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-xl title-font font-semibold">Our Mission</h2>
                            </div>
                            <div className="grow text-center xl:text-start">
                                <p className="leading-relaxed text-base text-indigo-500 font-medium">To Provide compassionate, high-quality and affordable healthcare services to our patients an community.</p>

                            </div>
                        </div>

                        <div className="flex rounded-lg  bg-gray-100 xl:w-1/2 p-8 flex-col">
                            <div className="flex flex-col gap-4 mb-4 items-center xl:items-start">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-7 h-7"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-xl title-font font-semibold">Our Vision</h2>
                            </div>
                            <div className="grow text-center xl:text-start">
                                <p className="leading-relaxed text-base text-indigo-500 font-medium">To be a leading healthcare provider, recognized for excellencem innovation and positive impact on lives.</p>

                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPurpose
