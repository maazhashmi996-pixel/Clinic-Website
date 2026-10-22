import React from 'react'
import { Link } from 'react-router-dom'

function AboutTreatments() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins] bg-gray-100">
                <div className="container px-5 py-8 w-[90%] mx-auto flex flex-wrap items-center lg:justify-between gap-4">
                    <div className="flex flex-col text-center lg:w-[35%] lg:text-start w-full gap-2">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font text-[14px] mb-1">OUR Treatment</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">Meet Our Dedicated Team</h1>
                        <p className="text-xs text-[gray] tracking-widest font-medium text-[16px] title-font mb-1 lg:w-[95%]">Our Experienced doctors, nurse and support staff work together to provide the best possible care for you and our family.</p>
                        <div className="flex items-center gap-3 flex-col lg:justify-start lg:flex-row">
                            <Link to='/doctors'><button className="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Meet Our Doctors<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg></button></Link>
                        </div>
                    </div>

                    <section className="text-gray-600 body-font w-full lg:w-[60%] font-[poppins]">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">


                                <div className="w-full h-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/doc1.jpg"
                                        alt="Modern Patients Room"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Dr.Ahmad
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full h-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/doc2.jpg"
                                        alt="Advanced Operation Rooms"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Dr.Sara
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full h-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/doc3.jpg"
                                        alt="Diagnostic Laboratories"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Dr. Smith
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full h-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/doc4.jpg"
                                        alt="Comfortable Waiting Area"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Dr.Ayesha
                                        </h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div >
            </section >

        </>
    )
}

export default AboutTreatments
