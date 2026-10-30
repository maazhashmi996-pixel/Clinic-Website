import React from 'react'

function Cardinfo() {
  return (
    <>
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Call Us */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-blue-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h2>
              <p className="text-blue-600 text-lg font-semibold mb-3">+92-300-1234567</p>
              <p className="text-gray-500 text-sm leading-relaxed">Our support team is available 24/7 for your assistance.</p>
            </div>

            {/* Visit Us */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-blue-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h2>
              <p className="text-gray-800 text-sm font-medium mb-3">123 Health Lane, Lahore, Punjab, Pakistan</p>
              <p className="text-gray-500 text-sm leading-relaxed">We are located in the heart of the city.</p>
            </div>

            {/* Email Us */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-blue-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h2>
              <p className="text-gray-800 text-sm font-medium mb-3">info@carewell.com</p>
              <p className="text-gray-500 text-sm leading-relaxed">We usually reply within 24 hours.</p>
            </div>

            {/* Working Hours */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-blue-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h2>
              <p className="text-gray-800 text-sm font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-800 text-sm font-medium mt-1 mb-3">Sunday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-500 text-sm leading-relaxed">Emergency services available 24/7.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cardinfo