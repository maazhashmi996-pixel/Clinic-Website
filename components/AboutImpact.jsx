import React from 'react'
import { Link } from 'react-router-dom'

function AboutImpact() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins]">
                <div className=" px-5 py-10 flex flex-wrap w-[90%] mx-auto items-center justify-center lg:justify-between xl:justify-between">
                    <div className="flex flex-col text-center lg:w-[35%] lg:text-start w-full gap-4">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font text-[14px] mb-1">OUR IMPACT</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Numbers That <br className='hidden xl:block' /> Show Our Commitment</h1>
                        <p className="text-xs text-[gray] tracking-widest font-medium text-[16px] title-font mb-1 ">Our dedication to quality care is reflected in the trust of our patients and the success of our services.</p>
                        <div className="flex items-center gap-3 flex-col lg:justify-start lg:flex-row">
                            <Link to='/departments'>
                                <button className="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">View Our Departments<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg></button></Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between text-center lg:w-[60%]">
                        <div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 shadow-xl py-6 rounded-lg transition-all duration-500 hover:scale-[1.1]">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">100K+</h2>
                                <p className="leading-relaxed text-[12px] font-semibold">Happy Patients</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 sm:w-1/2 w-full ">
                            <div className="border-2 border-gray-200 px-4 py-6 shadow-xl rounded-lg transition-all duration-500 hover:scale-[1.1]">
                                <svg
                                    fill="currentColor"
                                    stroke="none"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 576 512"
                                >
                                    <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404 278.4 448 336 448c61.9 0 112-50.1 112-112v-70.7c-28.3-12.3-48-40.5-48-73.3a80 80 0 1 1 128 63.3V336c0 97.2-78.8 176-176 176-92.9 0-168.9-71.9-175.5-163.1C87.2 334 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">50+</h2>
                                <p className="leading-relaxed text-[12px] font-semibold">Experts</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-1 py-6 shadow-xl rounded-lg transition-all duration-500 hover:scale-[1.1]">
                                <svg
                                    fill="currentColor"
                                    stroke="none"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 640 512"
                                >
                                    <path d="M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">12+</h2>
                                <p className="leading-relaxed text-[12px] font-semibold">Specialized Departments</p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 sm:w-1/2  w-full">
                            <div className="border-2 border-gray-200 shadow-xl px-4 py-6 rounded-lg transition-all duration-500 hover:scale-[1.1]">
                                <svg
                                    fill="currentColor"
                                    stroke="none"
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 576 512"
                                >
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">98%</h2>
                                <p className="leading-relaxed text-[12px] font-semibold">Patients Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AboutImpact
