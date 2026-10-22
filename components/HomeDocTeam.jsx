import React from 'react'
import { Link } from 'react-router-dom'
function HomeDocTeam() {
    return (
        <>
            <div className="container px-5 py-10 w-[90%] mx-auto">
                <div className="flex flex-col w-full lg:flex-row lg:justify-between mb-10">
                    <div>
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font mb-2 text-center lg:text-left">Our Team</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-2 text-center lg:text-left">Meet Our Doctors</h1>
                        <h2 className="text-xs text-indigo-500 tracking-widest font-semibold title-font text-center lg:text-left">Our dedicated team of specialist is here to provide the best <br /> care with composition and expertise </h2>
                    </div>
                    <div className='flex justify-center'>
                        <Link className=" mt-3 text-indigo-500 inline-flex items-center font-semibold">View All Doctors
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <section className="text-gray-600 body-font font-[poppins]">
                    <div className="container py-10 mx-auto">
                        <div className="flex flex-wrap gap-2">
                            <div className="md:w-1/3 lg:w-[19%] shadow-xl">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-top object-cover" src="/doc1.jpg" alt="blog" />
                                    <div className="p-6 flex flex-col items-center">
                                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dr. Ahmad</h1>
                                        <p className="leading-relaxed text-[14px] font-semibold mb-3">General Physician</p>
                                        <p className="leading-relaxed mb-3 font-bold text-[12px]"><i className='fa fa-star text-[#efef00]' style={{ fontSize: "18px" }}></i> 4.8<span className='font-normal'>(120+ Reviews)</span></p>
                                        <p className="leading-relaxed mb-3 font-medium text-[11px]">8+ Years of experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-1/3 lg:w-[19%] shadow-xl">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-top object-cover" src="/doc2.jpg" alt="blog" />
                                    <div className="p-6 flex flex-col items-center">
                                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dr. Sara</h1>
                                        <p className="leading-relaxed text-[14px] font-semibold mb-3">Cardiologist</p>
                                        <p className="leading-relaxed mb-3 font-bold text-[12px]"><i className='fa fa-star text-[#efef00]' style={{ fontSize: "18px" }}></i> 4.7<span className='font-normal'>(90+ Reviews)</span></p>
                                        <p className="leading-relaxed mb-3 font-medium text-[11px]">10+ Years of experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-1/3 lg:w-[19%] shadow-xl">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-top object-cover" src="/doc3.jpg" alt="blog" />
                                    <div className="p-6 flex flex-col items-center">
                                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dr. Smith</h1>
                                        <p className="leading-relaxed text-[14px] font-semibold mb-3">Neurologist</p>
                                        <p className="leading-relaxed mb-3 font-bold text-[12px]"><i className='fa fa-star text-[#efef00]' style={{ fontSize: "18px" }}></i> 4.7<span className='font-normal'>(76+ Reviews)</span></p>
                                        <p className="leading-relaxed mb-3 font-medium text-[11px]">7+ Years of experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-1/3 lg:w-[19%] shadow-xl">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-top object-cover" src="/doc4.jpg" alt="blog" />
                                    <div className="p-6 flex flex-col items-center">
                                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dr. Ayesha</h1>
                                        <p className="leading-relaxed text-[14px] font-semibold mb-3">Pediatrician</p>
                                        <p className="leading-relaxed mb-3 font-bold text-[12px]"><i className='fa fa-star text-[#efef00]' style={{ fontSize: "18px" }}></i> 4.8<span className='font-normal'>(65+ Reviews)</span></p>
                                        <p className="leading-relaxed mb-3 font-medium text-[11px]">6+ Years of experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" md:w-1/3 lg:w-[19%] shadow-xl">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-top object-cover" src="/doc5.jpg" alt="blog" />
                                    <div className="p-6 flex flex-col items-center">
                                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3">Dr. Salman</h1>
                                        <p className="leading-relaxed text-[14px] font-semibold mb-3">Orthopedic Surgeon</p>
                                        <p className="leading-relaxed mb-3 font-bold text-[12px]"><i className='fa fa-star text-[#efef00]' style={{ fontSize: "18px" }}></i> 4.9<span className='font-normal'>(110+ Reviews)</span></p>
                                        <p className="leading-relaxed mb-3 font-medium text-[11px]">9+ Years of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeDocTeam
