import { useState } from 'react';
import SingleInstructors from './singleInstructors';
import { useEffect } from 'react';
const PopulerInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data[0].popularInstructors);
        })
    },[])
    const popularInstructors = instructors;
    return (
        <div className="my-10">
        <h1 className="text-center text-[30px] md:text-[40px] lg:text-[40px]">Popular Instructors</h1>
        <div>
             <SingleInstructors instructors={popularInstructors}></SingleInstructors>
        </div>
    </div>
    );
};

export default PopulerInstructors;