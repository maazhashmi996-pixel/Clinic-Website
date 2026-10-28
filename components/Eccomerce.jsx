import React from 'react'

function Eccomerce() {
  return (
<>
  <div className="bg-[#F0F7FF]">
  <section className="text-gray-600 body-font">
  <div className="container mx-auto px-5 py-14 lg:px-8">

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/youngdoctor.jpg" alt="Dr. Sara Malik" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">General Physician</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Sara Malik</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate general physician dedicated to providing comprehensive care for all patients.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/young-lady.jpg" alt="Dr. John Doe" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Eye Specialist</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr.Rose</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate eye specialist dedicated to providing exceptional care for patients with vision-related conditions.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/ladydoctor.jpg" alt="Dr. John Doe" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Dentist</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. John Doe</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate dentist dedicated to providing exceptional oral care.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/doc.jpg" alt="Dr. Anum" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Orthopedic Surgeon</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Anum</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate orthopedic surgeon dedicated to providing exceptional care for patients with musculoskeletal conditions.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 5 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/docter.jpg" alt="Dr. Jasmin Doe" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Gynecologist</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Jasmin Doe</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate gynecologist dedicated to providing exceptional care for women's health.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 6 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/lady.jpg" alt="Dr. Jane Smith" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Neurologist</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Jane Smith</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate neurologist dedicated to providing exceptional care for patients with neurological conditions.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 7 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/img.jpg" alt="Dr. Ayesha Butt" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Pediatrician</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Ayesha Butt</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate pediatrician dedicated to providing exceptional care for children and families.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Card 8 */}
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img className="h-52 w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0" src="/lady.jpg" alt="Dr. Rimsha Iqbal" />
        <div className="flex flex-1 flex-col p-5">
          <h2 className="title-font mb-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">Dermatologist</h2>
          <h1 className="title-font mb-2 text-base font-medium text-gray-900">Dr. Rimsha Iqbal</h1>
          <p className="mb-4 flex-grow text-sm leading-relaxed">Passionate dermatologist dedicated to providing exceptional care for skin, hair and nail conditions.</p>
          <a href="#" className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            View Profile
            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  </div>
</>

  )
}

export default Eccomerce