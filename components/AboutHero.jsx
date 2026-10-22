import React from 'react'

function AboutHero() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins] bg-[#EAF4FF] h-auto marginPadding">
                <div className="container mx-auto w-[90%] flex py-10 px-5 md:flex-row flex-col items-center">
                    <div className="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left gap-4 md:mb-0 items-center text-center">
                        <p className='font-bold text-[#0000ffbd]'>ABOUT US</p>
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 flex flex-col gap-2">Your Health, Our Misson
                            <span className='text-[#0000ffbd]'>A Healtheir Tomorrow</span>
                        </h1>
                        <p className="mb-8 leading-relaxed w-[80%]">At CareWell Medical Center, We are committed to providing exceptional healthcare services with compassion, expertise and a patient-first approach. We believe in better health, happier lives and stronger communities.</p>
                        <div className="flex justify-center gap-3 flex-col lg:flex-row">
                            <button className="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Our Departments<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg></button>
                        </div>
                    </div>
                    <div className="lg:w-[50%] md:w-1/2 w-full h-[65vh] bg-[url('/heroImage.png')] bg-no-repeat bg-cover bg-center rounded-2xl shadow-2xl mt-6 ml-2">
                    </div>
                </div>

            </section >
        </>
    )
}

export default AboutHero
