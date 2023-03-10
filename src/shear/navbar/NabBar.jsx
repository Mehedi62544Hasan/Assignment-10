import React, { useContext, useState } from 'react';
import { SparklesIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';



const NabBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire(
          'Good job!',
          'Your Logout Successfull!',
          'success'
        )
      })
      .catch(error => console.error(error))
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="nav-container px-4 py-4 mx-auto text-white bg-gray-900 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className='flex justify-center items-center'>
          <SparklesIcon className="h-10 w-10 " />
          <span className="ml-2 text-3xl font-bold tracking-wide uppercase ">
            learning hero
          </span>
        </div>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              aria-label="Our product"
              title="Courses"
              className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/statistics"
              aria-label="Our product"
              title="FAQ"
              className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              aria-label="Our product"
              title="Blog"
              className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
            >
              Blog
            </Link>
          </li>

          <li onClick={handleToggle} className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600">
            {
              toggle ? 'Dark' : 'Light'
            }
          </li>


          <li>
            {
              user?.uid ?
                <>
                  <Link
                    onClick={handleLogOut}
                    aria-label="About us"
                    title="Log out"
                    className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                  >
                    Log out
                  </Link>
                </>
                : <div className="lg:flex align-center">
                  <>
                    <Link
                      to="/login"
                      aria-label="About us"
                      title="Log in"
                      className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                    >
                      Log in
                    </Link>
                  </>
                  <>
                    <Link
                      to="/register"
                      aria-label="About us"
                      title="sign up"
                      className="font-bold ml-6 tracking-wide transition-colors duration-200 hover:text-red-600"
                    >
                      Sign up
                    </Link>
                  </>
                </div>
            }
          </li>
          <li title={user?.displayName}>
            {
              user?.photoURL ? <img src={user.photoURL} alt="" className="object-cover object-center w-full rounded-full h-9" />
                : <UserCircleIcon className="h-10 w-10 " />
            }

          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 text-black bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className='flex justify-center items-center'>
                      <SparklesIcon className="h-6 w-6 " />
                      <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                        learning hero
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Our product"
                        title="Courses"
                        className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/statistics"
                        aria-label="Our product"
                        title="FAQ"
                        className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Our product"
                        title="Blog"
                        className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                      >
                        Blog
                      </Link>
                    </li>
                    <li onClick={handleToggle} className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600">
                      {
                        toggle ? 'Dark' : 'Light'
                      }
                    </li>
                    <li>
                      <Link
                        to="/login"
                        aria-label="About us"
                        title="Log in"
                        className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                      >
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        aria-label="About us"
                        title="Sign up"
                        className="font-bold tracking-wide transition-colors duration-200 hover:text-red-600"
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default NabBar;