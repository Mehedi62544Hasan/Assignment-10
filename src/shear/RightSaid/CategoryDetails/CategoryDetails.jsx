import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const subject = useLoaderData();
    const { image, title, description, price, time } = subject;

    return (
        <div className=" col-span-2 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={image}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            <span className='text-violet-600'>expensive</span><span className='text-pink-500'> course</span>
                        </p>
                    </div>
                    <div className='relative'>
                    <h5 className="mb-3 text-3xl text-violet-600 font-extrabold leading-none sm:text-4xl">{title}</h5>
                    <ArrowDownTrayIcon className='h-8 absolute top-1 right-0 text-red-600 hover:text-violet-600'></ArrowDownTrayIcon>
                    </div>
                    <p className="mb-5 text-gray-800">{description.slice(0, 200)}</p>
                    <div  className="flex items-center justify-between">
                        <p>$ {price}</p>
                        <p> {time}</p>
                    </div>
                    <div className="flex items-center justify-between">
                            <Link to="/" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Back</span>
                            </Link>

                            <Link to="/success" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Get Access</span>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;