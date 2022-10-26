import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({ subject }) => {
    return (
        <div>
            <p className=' m-5 p-6 rounded-3xl text-white font-bold text-lg bg-violet-500 hover:bg-violet-400 shadow-lg shadow-gray-500/100'> <Link to={`/${subject.id}`}> {subject.title}</Link></p>
        </div>
    );
};

export default Category;