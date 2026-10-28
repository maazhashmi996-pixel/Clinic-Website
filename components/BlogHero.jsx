import React from 'react'

function blogHero() {
  return (
    <div>
         <section className="text-gray-600 body-font">
                <div className="flex px-10 py-20  items-center bg-blue-100">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h5 className="text-lg font-bold text-indigo-600 mb-2">Our Blog</h5>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Health Tips and Medical Insights</h1>
                        <p className="mb-8 leading-relaxed">Stay informed with the latest health tips and medical insights from our expertsYour trusted source for health information.Your health is our priority. </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label for="hero-field" className="leading-7 text-sm text-gray-600"></label>
                                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" Placeholder="search articles, topics, or keywords.." />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
                        </div>
                        <ul className=" list-disc list-inside mt-4 text-indigo-600 mb-2 pt-10">
                            <li className="mb-2"> Wellness Tips</li>
                            <li className="mb-2">Disease Prevention</li>
                            <li className="mb-2">Healthy Living</li>
                            <li className="mb-2">Medical Update</li>
                        </ul>
                    </div>
                     <div className="lg:w-[50%] md:w-1/2 w-full h-[80vh] mr-12 bg-[url('/heroImage.png')] bg-no-repeat bg-cover bg-center rounded-2xl shadow-2xl mt-6 ml-2">
                    </div>
                    {/* <img className="object-cover object-center rounded " alt="hero" src="/doc1.png" width="300" /> */}

                </div>
            </section >
    </div>
  )
}

export default blogHero
