import { useEffect } from "react";
import { useState } from "react";
import AllClasses from "./AllClasses";

const Classes = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-hq5yhv074-afridimhrj10-gmailcom.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data[0].classes);
            })
    }, [])
    return (
        <div>
            <div className="courses  p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                {
                    courses.map(course => <AllClasses course={course} key={course.id}></AllClasses>)
                }
            </div>
        </div>
    );
};

export default Classes;