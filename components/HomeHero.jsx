import React from 'react'

function HomeHero() {
    return (
        <>
            <section class="text-gray-600 body-font font-[poppins]">
                <div class="container mx-auto w-[90%] flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left gap-4 md:mb-0 items-center text-center">
                        <p className='font-medium text-[#0000ffbd]'>Your Health, Our Prority</p>
                        <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 flex flex-col gap-2">Quality Heathcare
                            <span className='text-[#0000ffbd]'>for a Better Tomorrow</span>
                        </h1>
                        <p class="mb-8 leading-relaxed w-[70%]">At Carewell Medical Center, we provide trusted medical care with a team of experinced doctors, modern facilities and a patient-first approach</p>
                        <div class="flex justify-center gap-3">
                            <button class="inline-flex gap-2 justify-center items-center font-medium text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-black rounded-4xl text-lg hover:cursor-pointer">Book Appointment <i className='fa fa-calendar'></i></button>
                            <button class="inline-flex gap-2 justify-center items-center font-medium text-[#0000ffbd] bg-transparent border-0 py-3 px-7 focus:outline-none rounded-4xl text-lg hover:cursor-pointer"> <i className='fa fa-play-circle-o' style={{ fontSize: '25px' }}></i> Watch Our Stories</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHero
