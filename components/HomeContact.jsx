import React from 'react'

function Homecontact() {
  return (
    <>
     <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col items-center px-5 py-12 sm:py-16 md:flex-row md:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center mb-10 md:mb-0 md:w-1/2 md:items-start md:pr-8 md:text-left lg:flex-grow lg:pr-16 xl:pr-24">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact Us
        <br className="hidden lg:inline-block" />
        <span className="text-blue-600">We're Here to Help</span>
      </h1>
          <p className="mb-8 leading-relaxed">Have a question, need assistance, or want to schedule an appointment? Our team is here to help you. Reach out to us using the information below or fill out the contact form.</p>
          <div className="flex justify-center">
            <button to="/contact" className="inline-flex items-center bg-[#0000ffbd] text-white border-0 py-3 px-7 font-medium focus:outline-none hover:bg-black hover:cursor-pointer transition-all ease-in-out duration-300 rounded-4xl text-base mt-4 md:mt-0">Book Appointment
                    </button>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md md:w-1/2 md:max-w-none lg:w-full lg:max-w-lg">
          <img className="object-cover object-center rounded" alt="hero" src='/heroImage.png' />
        </div>
      </div>
    </section>
    </>
  )
}

export default Homecontact