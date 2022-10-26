import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../../Home/Category/Category';

const LeftSaid = () => {
    const subjects = useLoaderData();
     return (
        <div className='bg-white m-10 rounded-3xl'>
            <h1 className='category rounded-t-3xl bg-gray-900 text-white font-bold text-lg py-10'>Subject Name</h1>

            {
                subjects.map(subject => <Category
                    key={subject.id}
                    subject={subject}
                ></Category>)
            }
        </div>
    );
};

export default LeftSaid;