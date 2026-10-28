import React from 'react'

function HeroDoc() {
  return (
<>
  <section className="overflow-hidden bg-[#EAF4FF] text-gray-600 body-font">
    <div className="container mx-auto flex flex-col items-center gap-12 px-5 py-16 md:flex-row lg:gap-20 lg:py-20">

    
      <div className="flex flex-col items-center text-center md:w-3/5 md:items-start md:text-left lg:flex-grow">
        <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          Meet Our Expert <span className="text-blue-600">Medical Professionals</span>
        </h1>
        <p className="mb-8 max-w-xl leading-relaxed">
          Our team of experienced medical professionals is dedicated to providing the highest quality care to our patients.
        </p>

        
        <div className="flex w-full max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              placeholder="Search by name, speciality or department..."
              aria-label="Search by name, speciality or department"
              className="w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            aria-label="Search"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </button>
        </div>

      
        <div className="mt-8 flex w-full max-w-xl flex-wrap items-center justify-center gap-y-5 sm:flex-nowrap md:justify-start">

        
          <div className="flex items-center gap-2 pr-3 lg:gap-3 lg:pr-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 lg:h-11 lg:w-11">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold leading-tight text-gray-900">50+</p>
              <p className="whitespace-nowrap text-xs text-gray-500">Expert Doctors</p>
            </div>
          </div>

          
          <div className="flex items-center gap-2 border-gray-300 px-3 sm:border-l lg:gap-3 lg:px-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 lg:h-11 lg:w-11">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold leading-tight text-gray-900">15+</p>
              <p className="whitespace-nowrap text-xs text-gray-500">Specialities</p>
            </div>
          </div>

          
          <div className="flex items-center gap-2 border-gray-300 pl-3 sm:border-l lg:gap-3 lg:pl-5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 lg:h-11 lg:w-11">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold leading-tight text-gray-900">98%</p>
              <p className="whitespace-nowrap text-xs text-gray-500">Patient Satisfaction</p>
            </div>
          </div>

        </div>
      </div>

   <div className="w-5/6 pb-10 pl-8 pr-8 pt-2 md:w-2/5 lg:max-w-lg">
  <div className="relative">
    
    <div className="absolute -left-6 top-6 h-full w-full rounded-l-[200px] rounded-tr-[60px] bg-blue-100"></div>
  
    <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-200/60"></div>

    <img
      className="relative h-[420px] w-full rounded-br-[160px] rounded-tl-[160px] object-cover object-top shadow-xl md:h-[520px] lg:h-[600px]"
      alt="hero"
      src="/img.jpg"
    />
  </div>
</div>

    </div>
  </section>
</>
  )
}

export default HeroDoc