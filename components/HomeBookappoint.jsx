import React from 'react'

function HomeBookappoint() {
    return (
        <>
            <section className="text-gray-600 body-font relative bg-[#ddedff] marginPadding font-[poppins]">
                <div className="container py-10 w-[88%] mx-auto flex justify-between sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 md:w-1/2 rounded-md overflow-hidden flex justify-start relative">

                        <div className=" relative flex flex-col gap-6 py-6 w-screen lg:w-5/6 items-center lg:flex-row lg:items-start ">
                            <div className="bg-[url(/bpImg.jpeg)] bg-cover w-full bg-center w-5/6 rounded-md shadow-md h-100">
                            </div>
                            <div>
                                <div className='w-full'>
                                    <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font mb-4 text-center lg:text-left">Book Appointment</h2>
                                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900  mb-4 text-center lg:text-left">Schedule Your Visit</h1>
                                    <h2 className="text-[14px] text-[gray] tracking-widest font-medium title-font text-center lg:text-left">Fill in the details below and our team will get back to you as soon as possible </h2>
                                </div>
                                <div className='w-full mt-4'>
                                    <div className='flex justify-between px-6 lg:flex-col lg:gap-6 lg:mt-2'>
                                        <div className='flex gap-3'>
                                            <div className="w-12 h-12 rounded-full bg-[#8080805b] flex items-center justify-center">
                                                <i
                                                    className="fa fa-phone text-indigo-500"
                                                    style={{ fontSize: "20px" }}
                                                ></i>
                                            </div>
                                            <div>
                                                <h2 className='font-semibold'>Call Us</h2>
                                                <p className='font-semibold text-indigo-500'>+92 300 0000000</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className="w-12 h-12 rounded-full bg-[#8080805b] flex items-center justify-center">
                                                <i
                                                    className="fa fa-map-marker text-indigo-500"
                                                    style={{ fontSize: "24px" }}
                                                ></i>
                                            </div>
                                            <div>
                                                <h2 className='font-semibold'>Our Location</h2>
                                                <p className='font-semibold text-indigo-500'>Main Branch Lahore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full py-8 px-8 mt-8 md:mt-0 rounded-md shadow-md">
                        <div className="relative mb-4 flex gap-4">
                            <div className='w-1/2'><label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">Full Name</label>
                                <input type="text" id="name" name="name" placeholder='Your name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /></div>
                            <div className='w-1/2'><label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">Phone Number</label>
                                <input type="text" id="name" name="name" placeholder='+92 300 0000000' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /></div>
                        </div>
                        <div className="relative mb-4 flex gap-4">
                            <div className='w-1/2'>
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold">Department Name</label>
                                <input type="email" id="email" name="email" placeholder='Department Name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="Date" className="leading-7 text-sm text-gray-600 font-semibold">Preferred Date</label>
                                <input type="Date" id="Date" name="Date" placeholder='Select Date' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:cursor-pointer" />
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold">Additional Message</label>
                            <textarea id="message" name="message" placeholder='Write your message here....' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg flex gap-2 justify-center items-center"><i className='fa fa-calendar'></i>Book Appointment</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBookappoint
