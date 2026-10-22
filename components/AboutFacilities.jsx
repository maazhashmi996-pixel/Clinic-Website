import React from 'react'

function AboutFacilities() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins] bg-[#ddedff]">
                <div className="container px-5 py-8 w-[90%] mx-auto flex flex-wrap items-center lg:justify-between">
                    <div className="flex flex-col text-center lg:w-[35%] lg:text-start w-full gap-2">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font text-[14px] mb-1">OUR FACILITIES</h2>
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">World-Class Facilities</h1>
                        <p className="text-xs text-[gray] tracking-widest font-medium text-[16px] title-font mb-1 lg:w-[95%]">Modern Infracstructure, advanced technology and a comfortable environment for your well-being.</p>
                    </div>

                    <section className="text-gray-600 body-font w-full lg:w-[60%] font-[poppins]">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">


                                <div className="w-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/bed.jpg"
                                        alt="Modern Patients Room"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Modern Patients Room
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/operationroom.jpg"
                                        alt="Advanced Operation Rooms"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Advanced Operation Rooms
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/daignosticlab.jpg"
                                        alt="Diagnostic Laboratories"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Diagnostic Laboratories
                                        </h1>
                                    </div>
                                </div>


                                <div className="w-full sm:w-[45%] xl:w-[22%] shadow-xl rounded-md overflow-hidden flex flex-col">
                                    <img
                                        className="h-40 w-full object-cover object-top"
                                        src="/waitingarea.jpg"
                                        alt="Comfortable Waiting Area"
                                    />
                                    <div className="p-3 flex flex-1 items-center justify-center text-center bg-amber-50">
                                        <h1 className="text-xs font-semibold text-gray-900">
                                            Comfortable Waiting Area
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

export default AboutFacilities
