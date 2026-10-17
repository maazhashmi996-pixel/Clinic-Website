import React from 'react'
import { Link } from 'react-router-dom'

function HomeDepartment() {
    return (
        <>
            <section className="text-gray-600  bg-[#ddedff] body-font font-[poppins]">
                <div className="container px-5 py-10 w-[90%] mx-auto">
                    <div className="flex flex-col w-full mb-10">
                        <div>
                            <h2 className="text-xs text-indigo-500 tracking-widest font-semibold title-font mb-2 text-center lg:text-left">Our Departments</h2>
                            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2 text-center lg:text-left">Specialized Care for Every Need</h1>
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font text-center lg:text-left">We offer wide range of medical services to keep you and your family healty</h2>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap gap-3'>

                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 3v5a6 6 0 0 0 12 0V3"></path>
                                        <path d="M4 3h4"></path>
                                        <path d="M16 3h4"></path>
                                        <path d="M12 14v2a4 4 0 0 0 8 0v-1"></path>
                                        <circle cx="20" cy="13" r="2"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">General Medicine</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Comptiy Qaulified Checkups <br className=' hidden lg:block' />and Routine Care.</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            stroke="none"
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
        2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
        C13.09 3.81 14.76 3 16.5 3
        19.58 3 22 5.42 22 8.5
        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                        />
                                        <path
                                            stroke="#fff"
                                            strokeWidth="2"
                                            d="M4.5 12h4l2-5 3 10 2.5-7 1.5 2H20"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">Cardiology</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Advanced heart care for<br className=' hidden lg:block' />healtheir life.</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.6"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 4.5a3.5 3.5 0 0 0-6.7 1.2A3.8 3.8 0 0 0 3.5 12a3.8 3.8 0 0 0 2.2 6.3A3.5 3.5 0 0 0 12 19.5V4.5Z" />
                                        <path d="M12 4.5a3.5 3.5 0 0 1 6.7 1.2 3.8 3.8 0 0 1 1.8 6.3 3.8 3.8 0 0 1-2.2 6.3 3.5 3.5 0 0 1-6.3 1.2V4.5Z" />
                                        <path d="M7.5 6.5a2 2 0 0 0 1.5 3.3" />
                                        <path d="M5.5 13a2.5 2.5 0 0 1 3.5 2.3" />
                                        <path d="M9 10.5a2.5 2.5 0 0 0 3 2.5" />
                                        <path d="M16.5 6.5A2 2 0 0 1 15 9.8" />
                                        <path d="M18.5 13a2.5 2.5 0 0 0-3.5 2.3" />
                                        <path d="M15 10.5a2.5 2.5 0 0 1-3 2.5" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">Neurology</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Expert Treatment for<br className=' hidden lg:block' />Brain and nerve disorder.</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M11 3v7c-1.2-1-2.2-2.5-3-4.5-.4-1-1.5-1.1-2.1-.2C4 8.8 3 12 3 16c0 3 1.7 5 4 5 2.5 0 4-2 4-5V9"
                                            fill="#60A5FA"
                                            stroke="#2563EB"
                                        />
                                        <path
                                            d="M13 3v7c1.2-1 2.2-2.5 3-4.5.4-1 1.5-1.1 2.1-.2C20 8.8 21 12 21 16c0 3-1.7 5-4 5-2.5 0-4-2-4-5V9"
                                            fill="#60A5FA"
                                            stroke="#2563EB"
                                        />
                                        <path d="M12 2v10M12 9l-3 3M12 9l3 3" stroke="#2563EB" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">Pulmonology</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Better Breathing <br className=' hidden lg:block' />Better Living.</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.5"
                                        className="w-10 h-10"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224 32c-17.7 0-32 14.3-32 32v16.5C111.5 94.2 48 165.5 48 251.5V272c0 22.1 17.9 40 40 40h272c22.1 0 40-17.9 40-40v-20.5c0-86-63.5-157.3-144-171V64c0-17.7-14.3-32-32-32zM160 192a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm128 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-96 96h64c0 17.7-14.3 32-32 32s-32-14.3-32-32zM88 352c-13.3 0-24 10.7-24 24v24c0 44.2 35.8 80 80 80h160c44.2 0 80-35.8 80-80v-24c0-13.3-10.7-24-24-24H88z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">Pediatrics</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Gentle Care for <br className=' hidden lg:block' />Your little ones.</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex rounded-lg w-full bg-white p-5 flex-col items-center lg:items-start">
                            <div className="flex flex-col gap-2 items-center lg:items-start mb-3">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.7"
                                        className="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        {/* Upper bone and rounded joint end */}
                                        <path d="M8 2.2c-1.5-.5-3 .6-3 2.1 0 1 .6 1.8 1.5 2.2l.9 2.7c.3.9 1.1 1.5 2.1 1.5h3c1 0 1.8-.6 2.1-1.5l.9-2.7c.9-.4 1.5-1.2 1.5-2.2 0-1.5-1.5-2.6-3-2.1l-2 1-2-1z" />

                                        {/* Joint cartilage */}
                                        <path d="M8 10.7c1.2.6 2.3.8 4 .8s2.8-.2 4-.8" />

                                        {/* Lower bone */}
                                        <path d="M8.5 13c-.8.3-1.3 1-1.3 1.9v2.2c-.9.5-1.4 1.3-1.4 2.3 0 1.5 1.5 2.6 3 2.1l2-1 2 1c1.5.5 3-.6 3-2.1 0-1-.5-1.8-1.4-2.3v-2.2c0-.9-.5-1.6-1.3-1.9" />

                                        {/* Joint separation */}
                                        <path d="M9 12.1h6" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-bold">Orthopedics</h2>
                            </div>

                            <div className="grow flex flex-col items-center lg:items-start">
                                <p className="leading-relaxed text-[12px]">Move Better and <br className=' hidden lg:block' /> Live Strong</p>
                                <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeDepartment
