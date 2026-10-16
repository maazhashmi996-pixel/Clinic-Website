import React from 'react'

function HomeHero() {
    return (
        <>
            <section class="text-gray-600 body-font font-[poppins] bg-[#EAF4FF] h-[90vh] marginPadding">
                <div class="container mx-auto w-[90%] flex py-4 px-5 md:flex-row flex-col items-center">
                    <div class="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left gap-4 md:mb-0 items-center text-center">
                        <p className='font-medium text-[#0000ffbd]'>Your Health, Our Prority</p>
                        <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 flex flex-col gap-2">Quality Heathcare
                            <span className='text-[#0000ffbd]'>for a Better Tomorrow</span>
                        </h1>
                        <p class="mb-8 leading-relaxed w-[80%]">At Carewell Medical Center, we provide trusted medical care with a team of experinced doctors, modern facilities and a patient-first approach</p>
                        <div class="flex justify-center gap-3">
                            <button class="flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Book Appointment <i className='fa fa-calendar'></i></button>
                            <button class="flex gap-2 justify-center items-center font-medium text-[#0000ffbd] bg-transparent border-0 py-3 px-7 focus:outline-none hover:text-black rounded-4xl text-lg hover:cursor-pointer"><i className='fa fa-play'></i> Watch Our Stories</button>
                        </div>
                        <div>
                            {/* <div>
                                <i className='fa fa-shield'></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-5/6 h-[80vh] bg-[url('/heroImage.png')] bg-no-repeat bg-cover bg-center rounded-2xl shadow-2xl">
                    </div>
                </div>
            </section >
        </>
    )
}

export default HomeHero
