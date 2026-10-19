import React from 'react'

function Departments() {
  return (
    <div>
      <section class="text-gray-600 body-font">
      <div class="flex px-10 py-20  items-center bg-blue-100">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h5 class="text-lg font-bold text-indigo-600 mb-2">Our Departments</h5>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Find the right care for your health</h1>
          <p class="mb-8 leading-relaxed">We offer a wide range of medical specialties and advanced care services to meet your unique health needs.Explore our departments and find the right specialist for you.</p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label for="hero-field" class="leading-7 text-sm text-gray-600"></label>
              <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" Placeholder="search for a department" />
            </div>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
          </div>
        </div>
          <img class="object-cover object-center rounded " alt="hero" src="/doc1.png" width="300" />
      </div>
    </section>
     <section class="text-gray-600 body-font">
      <div class="container  flex px-5 py-15 mb-8 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-lg font-bold text-indigo-600 mb-2  ">Our Departments</h1>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-2xl">Find the right care for your health</h1>
          <p class="mb-8 leading-relaxed  w-[70%] ">We offer a wide range of medical specialties and advanced care services to meet your unique health needs.Explore our departments and find the right specialist for you. we are here to help you.</p>
        </div>
      </div>
      <div class="container px-5  mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img1.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">General Medicine</h2>
              <p class="mt-1">Comprehensive care for adults and families ,from routine check-ups to chronic condition management.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img2.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Cardiology</h2>
              <p class="mt-1">Specialized care for heart and cardiovascular conditions, including diagnosis, treatment, and prevention.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img3.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Neurology</h2>
              <p class="mt-1">Specialized care for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img4.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Pulmonology</h2>
              <p class="mt-1">Specialized care for respiratory conditions, including asthma, COPD, and lung cancer.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img5.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Pediatrics </h2>
              <p class="mt-1">Comprehensive care for infants, children, and adolescents, from routine check-ups to specialized treatments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img6.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Orthopedics</h2>
              <p class="mt-1">Specialized care for musculoskeletal conditions, including bones, joints, muscles, and ligaments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img7.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Dermatology</h2>
              <p class="mt-1">Specialized care for skin conditions, including acne, psoriasis, and skin cancer.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img8.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Gynecology</h2>
              <p class="mt-1">Specialized care for women's reproductive health, including prenatal care, menopause management, and fertility treatments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img9.jpg"/>
            </a>
            <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Urology</h2>
              <p class="mt-1">Comprehensive care for conditions affecting the urinary system and male reproductive organs.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img10.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Gastroenterology</h2>
              <p class="mt-1">Specialized care for conditions affecting the digestive system, including the stomach, intestines, and related organs.</p>
            </div>
          </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img11.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Oncology</h2>
              <p class="mt-1">Specialized care for the diagnosis and treatment of cancer, including chemotherapy, radiation therapy, and surgical interventions.</p>
            </div>
          </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img12.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Endocrinology</h2>
              <p class="mt-1">Specialized care for conditions affecting the endocrine system, including diabetes, thyroid disorders, and hormonal imbalances.</p>
            </div>
          </div>
        </div>
        </div>
    </section>
     <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h5 class="text-lg font-bold text-indigo-600 mb-2">Why Choose Us</h5>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Your Health,Our Priority
                        </h1>
                        <p class="mb-8 text-xl leading-relaxed">we are committed to providing high-quality,patient centered care with a focus on  your well-being and comfort.</p>
                        <ul class="list-disc list-inside mt-1 text-indigo-600 mb-2 pt-0">
                            <li class="mb-2">Experienced Doctors</li>
                            <li class="mb-2">Modern Facilities</li>
                            <li class="mb-2">Personalized Care</li>
                            <li class="mb-2">24/7 Support</li>
                        </ul>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="doctor4.jpg" width="700"/>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Departments
