import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ subject }) => {
    const {image, title, description} = subject;
    return (
       
            <div className="max-w-xs mx-auto my-4 rounded-2xl shadow-md dark:bg-gray-900 shadow-xl shadow-violet-400 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-2xl h-56 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="dark:text-gray-100">{description.slice(0, 100)+'...'}</p>
                    </div>
                    <button>
                    <Link to={`/${subject.id}`} class="relative px-14 py-2 font-medium text-white group">
                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                    <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                    <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                    <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                     <span class="relative">More Details</span>
                    </Link>
                    </button>
                </div>
            </div>
       
    );
};

export default Details;