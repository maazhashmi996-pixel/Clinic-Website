import React from 'react'

function Foot() {
  return (
<>
  <section className="bg-white px-5 py-12 body-font">
    <div className="container mx-auto flex flex-col items-center gap-8 rounded-2xl border border-blue-100 bg-[#F0F7FF] px-6 py-8 lg:flex-row lg:gap-0 lg:px-10">

      
      <div className="w-full text-center lg:w-1/3 lg:pr-8 lg:text-left">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">Why Choose Our Doctors?</h2>
        <p className="text-sm leading-relaxed text-gray-500">
          We are committed to providing the best medical care with a focus on your health and well-being.
        </p>
      </div>

      
      <div className="grid w-full flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-blue-100 lg:border-l lg:border-blue-100">

        
        <div className="flex flex-col items-center px-4 text-center">
          <div className="mb-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-semibold text-gray-900">Verified Credentials</h3>
          <p className="text-xs leading-relaxed text-gray-500">All doctors are licensed and highly qualified.</p>
        </div>

        
        <div className="flex flex-col items-center px-4 text-center">
          <div className="mb-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-semibold text-gray-900">Personalized Care</h3>
          <p className="text-xs leading-relaxed text-gray-500">Treatment plans tailored to your unique needs.</p>
        </div>

  
        <div className="flex flex-col items-center px-4 text-center">
          <div className="mb-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <path d="M9 22v-4h6v4"></path>
              <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"></path>
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-semibold text-gray-900">Modern Facilities</h3>
          <p className="text-xs leading-relaxed text-gray-500">Advanced technology and equipment.</p>
        </div>

        
        <div className="flex flex-col items-center px-4 text-center">
          <div className="mb-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-semibold text-gray-900">Compassionate Support</h3>
          <p className="text-xs leading-relaxed text-gray-500">We're with you at every step of your journey.</p>
        </div>

      </div>
    </div>
  </section>
</>
  )
}

export default Foot
