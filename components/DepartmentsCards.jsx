import React from 'react'

function DepartmentsCards() {
  return (
    <div>
       <section class="text-gray-600 body-font">
      <div class="container  flex px-15 py-15 mb-8 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="text-lg font-bold text-indigo-600 mb-2  ">Our Departments</h1>
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-2xl">Find the right care for your health</h1>
          <p class="mb-8 leading-relaxed  w-[70%] ">We offer a wide range of medical specialties and advanced care services to meet your unique health needs.Explore our departments and find the right specialist for you. we are here to help you.</p>
        </div>
      </div>
      <div class="container px-5  mx-auto">
        <div class="flex flex-wrap -m-4 ">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer ml-22 mr-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img1.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1"></h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">General Medicine</h2>
              <p class="mt-1">Comprehensive care for adults and families ,from routine check-ups to chronic condition management.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer mx-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img2.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Cardiology</h2>
              <p class="mt-1">Specialized care for heart and cardiovascular conditions, including diagnosis, treatment, and prevention.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer m-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img3.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Neurology</h2>
              <p class="mt-1">Specialized care for disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer ml-22  mr-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img4.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Pulmonology</h2>
              <p class="mt-1">Specialized care for respiratory conditions, including asthma, COPD, and lung cancer.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer  mx-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img5.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Pediatrics </h2>
              <p class="mt-1">Comprehensive care for infants, children, and adolescents, from routine check-ups to specialized treatments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer m-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img6.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Orthopedics</h2>
              <p class="mt-1">Specialized care for musculoskeletal conditions, including bones, joints, muscles, and ligaments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer ml-22  mr-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img7.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Dermatology</h2>
              <p class="mt-1">Specialized care for skin conditions, including acne, psoriasis, and skin cancer.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer mx-10 my-5 ">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img8.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Gynecology</h2>
              <p class="mt-1">Specialized care for women's reproductive health, including prenatal care, menopause management, and fertility treatments.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer m-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img9.jpg"/>
            </a>
            <div class="mt-4">
              <h2 class="text-gray-900 title-font text-lg font-medium">Urology</h2>
              <p class="mt-1">Comprehensive care for conditions affecting the urinary system and male reproductive organs.</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer ml-22  mr-10 my-5 ">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img10.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Gastroenterology</h2>
              <p class="mt-1">Specialized care for conditions affecting the digestive system, including the stomach, intestines, and related organs.</p>
            </div>
          </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer  mx-10 my-5">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="/img11.jpg" />
            </a>
            <div class="mt-4">
              {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3> */}
              <h2 class="text-gray-900 title-font text-lg font-medium">Oncology</h2>
              <p class="mt-1">Specialized care for the diagnosis and treatment of cancer, including chemotherapy, radiation therapy, and surgical interventions.</p>
            </div>
          </div>
           <div class="lg:w-1/4 md:w-1/2 p-4 w-full bg-blue-100  rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer m-5">
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
     
    </div>
  )
}
export default DepartmentsCards
