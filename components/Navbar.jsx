import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header className="text-[#8f8b8b] body-font font-[poppins] bg-white sticky top-0 z-10">
                <div className="container w-[90%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <i className='fa fa-heartbeat text-[#0000ffbd] mr-2' style={{ fontSize: "30px" }}></i>
                        <h1 className='flex flex-col items-center justify-center text-xl text-[#0000ffbd] font-semibold' >CareWell <span className=" text-blue-700 text-[11px]">Medical Center</span></h1>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium gap-7">
                        <Link to='/' className=" hover:text-[#0000ffbd]">Home</Link>
                        <Link to='/departments' className=" hover:text-[#0000ffbd]">Departments</Link>
                        <Link  to='/Doctor' className=" hover:text-[#0000ffbd]">Doctors</Link>
                        <Link to="/about" className=" hover:text-[#0000ffbd]">About</Link>
                        <Link to='blog' className=" hover:text-[#0000ffbd]">Blog</Link>
                        <Link  to='Contact' className=" hover:text-[#0000ffbd]">Contact</Link>
                    </nav>

                    <button className="inline-flex items-center bg-[#0000ffbd] text-white border-0 py-3 px-7 font-medium focus:outline-none hover:bg-black hover:cursor-pointer transition-all ease-in-out duration-300 rounded-4xl text-base mt-4 md:mt-0">Book Appointment
                    </button>

                </div>
            </header>
        </>
    )
}

export default Navbar