import React from 'react'

function HomeHero() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins]  bg-[#EAF4FF] min-h-screen h-auto marginPadding">
                <div className="container mx-auto w-[90%] flex py-5 px-5 md:flex-row flex-col items-center">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left gap-4 md:mb-0 items-center text-center">
                        <p className='font-medium text-[#0000ffbd]'>Your Health, Our Prority</p>
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 flex flex-col gap-2">Quality Heathcare
                            <span className='text-[#0000ffbd]'>for a Better Tomorrow</span>
                        </h1>
                        <p className="mb-8 leading-relaxed w-[80%]">At Carewell Medical Center, we provide trusted medical care with a team of experinced doctors, modern facilities and a patient-first approach</p>
                        <div className="flex justify-center gap-3">
                            <button className="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Book Appointment <i className='fa fa-calendar'></i></button>
                            <button className="flex gap-2 justify-center items-center font-medium text-[#0000ffbd] bg-transparent border-0 py-3 px-7 focus:outline-none hover:text-black rounded-4xl text-lg hover:cursor-pointer"><i className='fa fa-play'></i> Watch Our Stories</button>
                        </div>
                        <div className='flex'>
                            <div className="md:w-5/6 flex mt-8 ">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <div className="grow pl-2 text-[#0000ffbd]">
                                    <h2 className=" text-[14px] title-font font-semibold mb-2">Expert Doctors</h2>
                                    <p className=" text-[#7e7d7d] leading-relaxed text-[10px]">High Qaualified & Experienced Medical Professionals</p>
                                </div>
                            </div>
                            <div className="md:w-5/6 flex mt-8 ">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 6v6l4 2"></path>
                                    </svg>
                                </div>
                                <div className="grow pl-2 text-[#0000ffbd]">
                                    <h2 className=" text-[14px] title-font font-semibold mb-2">24/7 Support</h2>
                                    <p className=" text-[#7e7d7d] leading-relaxed text-[10px]">We're are here when you need us most</p>
                                </div>
                            </div>
                            <div className="md:w-5/6 flex mt-8 ">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 shrink-0">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path>
                                    </svg>
                                </div>
                                <div className="grow pl-2 text-[#0000ffbd]">
                                    <h2 className=" text-[14px] title-font font-semibold mb-2">Modern Facilities</h2>
                                    <p className=" text-[#7e7d7d] leading-relaxed text-[10px]">Advanced technology for better care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[45%] md:w-1/2 w-full h-[80vh] bg-[url('/heroImage.png')] bg-no-repeat bg-cover bg-center rounded-2xl shadow-2xl mt-6 ml-2">
                    </div>
                </div>

            </section >
        </>
    )
}

export default HomeHero
