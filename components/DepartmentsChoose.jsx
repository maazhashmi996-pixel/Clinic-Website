import React from 'react'

function DepartmentsChoose() {
  return (
    <div>
      <section class="text-gray-600 body-font mx-20">
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

export default DepartmentsChoose
