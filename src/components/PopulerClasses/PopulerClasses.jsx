import { useEffect, useState } from 'react';
import SingleClasses from './SingleClasses';
const PopulerClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-hq5yhv074-afridimhrj10-gmailcom.vercel.app/courses')
        .then(res => res.json())
        .then(data =>{
            setCourses(data[0].popularClasses);
        })
    },[])
    const popularClasses = courses;
    return (
        <div className="my-10">
            <h1 className="text-center text-[30px] md:text-[40px] lg:text-[40px]">Popular Classes</h1>
            <div>
                
                  <SingleClasses classes={popularClasses}></SingleClasses>
                
            </div>
        </div>
    );
};

export default PopulerClasses;


