import React from 'react'

function Cards() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

          {/* Map side */}
          <div className="lg:w-2/3 md:w-1/2 w-full min-h-[500px] bg-blue-50 rounded-3xl overflow-hidden sm:mr-10 p-6 sm:p-10 flex items-end justify-start relative shadow-md transition-shadow duration-300 hover:shadow-xl">
       <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Lahore&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            <div className="bg-white relative z-10 flex flex-wrap py-6 rounded-2xl shadow-lg w-full transition-all duration-300 hover:shadow-2xl">
              <div className="lg:w-1/2 px-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                    </svg>
                  </span>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                </div>
                <p className="mt-1 text-gray-700">CareWell Medical Center, 123 Health Lane, Lahore, Punjab, Pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-blue-600 leading-relaxed hover:text-blue-800 hover:underline cursor-pointer transition-colors duration-200">info@carewell.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-gray-700">+92-300-1234567</p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">We would love to hear from you. Send us a message and we will reply soon.</p>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded-xl border border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded-xl border border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded-xl border border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>

   <button className="self-start inline-flex items-center justify-center gap-3 text-white bg-blue-600 border-0 py-3.5 px-8 rounded-full text-sm font-semibold shadow-md focus:outline-none transition-colors duration-300 ease-in-out hover:bg-black hover:curser-pointer text-white">
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
    <path d="M22 2L11 13"></path>
    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
  </svg>
  Send Message
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</button>

            <p className="text-xs text-gray-500 mt-3">We usually reply within one working day.</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Cards