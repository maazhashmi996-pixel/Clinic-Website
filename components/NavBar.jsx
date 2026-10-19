import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <nav className=" my-5 flex flex-wrap items-center text-base justify-center">
                    <Link to="/departments" className="mr-5 hover:text-blue-400">Departments</Link>
                    <Link to="/blog" className="mr-5 hover:text-blue-400">Blog</Link>
                </nav>
            </header>

        </div>
    )
}

export default NavBar
