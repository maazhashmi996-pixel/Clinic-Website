import React from 'react'

function DepartmentsHero() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="flex px-10 py-20 bg-blue-100 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h5 class="text-lg font-bold text-indigo-600 mb-2">Our Departments</h5>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Find the right care for your health</h1>
                        <p class="mb-8 leading-relaxed">We offer a wide range of medical specialties and advanced care services to meet your unique health needs.Explore our departments and find the right specialist for you.</p>
                        <div class="flex w-full md:justify-start justify-center items-end">
                            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label for="hero-field" class="leading-7 text-sm text-gray-600"></label>
                                <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" Placeholder="search for a department" />
                            </div>
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <div className="md:w-5/6 flex mt-8 flex-col items-center lg:flex-row lg:items-start ">
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
                            <div className="md:w-5/6 flex mt-8 flex-col items-center lg:flex-row lg:items-start">
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
                            <div className="md:w-5/6 flex mt-8 flex-col items-center lg:flex-row lg:items-start">
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
                    <div className="lg:w-[50%] md:w-1/2 w-full h-[80vh] mr-12 bg-[url('/heroImage.png')] bg-no-repeat bg-cover bg-center rounded-2xl shadow-2xl mt-6 ml-2">
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DepartmentsHero
