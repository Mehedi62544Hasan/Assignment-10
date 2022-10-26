import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../../Home/Details/Details';

const RightSaid = () => {
    const subjects = useLoaderData();
    console.log(subjects)
    return (
        <div className='col-span-2 bg-white m-10 rounded-3xl pb-60'>
        <h1 className='category rounded-t-3xl bg-gray-900 text-white font-bold text-lg py-10'>Subject Details</h1>
        <div className='lg:grid grid-cols-2 gap-2'>
        {
            subjects.map(subject => <Details
                key={subject.id}
                subject={subject}
            ></Details>)
        }
        </div>
         
    </div>
    );
};

export default RightSaid;