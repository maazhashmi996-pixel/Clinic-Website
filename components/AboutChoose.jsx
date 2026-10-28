import React from 'react'
import { Link } from 'react-router-dom'

function AboutChoose() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins] bg-gray-100">
                <div className="container w-[90%] px-5 py-10 mx-auto flex flex-wrap justify-between">
                    <div className="flex flex-col text-center lg:w-[35%] lg:text-start w-full gap-4">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font text-[14px] mb-1">WHY CHOOSE US?</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Why CareWell?</h1>
                        <p className="text-xs text-[gray] tracking-widest font-medium text-[16px] title-font mb-1 ">We combine experience, technology and compassion to deliver the best healthcare experience.</p>
                        <div className="flex items-center gap-3 flex-col lg:justify-start lg:flex-row">
                            <Link to='/departments'><button className="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Explore Our Departments<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg></button></Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:w-[65%] justify-center xl:h-28">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-6 py-6 lg:lg:border-l-2 border-gray-200 border-opacity-60 text-center">
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
                                    {/* Doctor team */}
                                    <circle cx="9" cy="7" r="3.5"></circle>
                                    <path d="M2.5 20v-2a6.5 6.5 0 0 1 13 0v2"></path>
                                    <circle cx="17.5" cy="8" r="2.5"></circle>
                                    <path d="M17.5 13a4.5 4.5 0 0 1 4 4.5V20h-3"></path>

                                    {/* Medical cross */}
                                    <path d="M9 11v4"></path>
                                    <path d="M7 13h4"></path>
                                </svg>
                            </div>
                            <h2 className="text-[16px] text-gray-900 font-bold title-font mb-2">Experience Team</h2>
                            <p className="leading-relaxed text-[14px] font-medium text-base mb-4">Skilled and well-known doctors and specialists.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-6 py-6 lg:border-l-2 border-gray-200 border-opacity-60 text-center">
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
                            <h2 className="text-[16px] text-gray-900 font-bold title-font mb-2">Advanced Technology</h2>
                            <p className="leading-relaxed text-[14px] font-medium text-base mb-4">Modern equipment for accurate dignosis and affective treatment.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-6 py-6 lg:border-l-2 border-gray-200 border-opacity-60 text-center">
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
                                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path>
                                </svg>
                            </div>
                            <h2 className="text-[16px] text-gray-900 font-bold title-font mb-2">Personalized Care</h2>
                            <p className="leading-relaxed text-[14px] font-medium text-base mb-4">Treatment plans tailored to your unique needs</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-6 py-6 lg:border-l-2 border-gray-200 border-opacity-60 text-center">
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
                                    {/* Shield */}
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>

                                    {/* Medical cross */}
                                    <path d="M12 7v6"></path>
                                    <path d="M9 10h6"></path>

                                    {/* Caring heart */}
                                    <path d="M12 17s-2.5-1.5-2.5-3.2a1.5 1.5 0 0 1 2.5-1 1.5 1.5 0 0 1 2.5 1C14.5 15.5 12 17 12 17z"></path>
                                </svg>
                            </div>
                            <h2 className="text-[16px] text-gray-900 font-bold title-font mb-2">Compassionate Support</h2>
                            <p className="leading-relaxed text-[14px] font-medium text-base mb-4">We're with you at every step of your journey.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutChoose
