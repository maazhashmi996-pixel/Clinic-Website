import React from 'react'

function AboutStory() {
    return (
        <>
            <section className="text-gray-600 body-font font-[poppins]">
                <div className="container mx-auto w-[90%] flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="/storybg.jpg" />
                    </div>
                    <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center gap-4  text-center min-h-full h-auto">
                        <div className='w-full flex flex-col items-center lg:items-start'>
                            <p className='font-bold text-[#0000ffbd] mb-2'>ABOUT US</p>
                            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900 w-full">About <span className='text-[#0000ffbd]'>CareWell Medical Center</span>
                            </h1>
                        </div>
                        <p className="mb-8 leading-relaxed">CareWell Medical Center was founded with a simple belief — everyone deserves access to high-quality, compassionate healthcare. What started as a small clinic has grown into a trusted medical center, serving thousands of patients and families in our community.
                            <br /><br />
                            Our team of experienced doctors, nurses, and healthcare professionals work together to deliver personalized treatment, advanced technology, and comprehensive care under one roof.</p>
                        <div className='flex gap-8'>
                            <div className='flex gap-2 items-center'>
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
                                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                                        <path d="M16 3v4"></path>
                                        <path d="M8 3v4"></path>
                                        <path d="M3 11h18"></path>
                                        <path d="m9 16 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>10+</h2>
                                    <p className='font-normal'>Years of Experience</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
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
                                        <circle cx="12" cy="7" r="4"></circle>
                                        <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>50+</h2>
                                    <p className='font-normal'>Expert Doctors</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
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
                                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>100K+</h2>
                                    <p className='font-normal'>Happy Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutStory
