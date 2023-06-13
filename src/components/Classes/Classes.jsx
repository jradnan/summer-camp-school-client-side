import { useEffect } from "react";
import { useState } from "react";
import AllClasses from "./AllClasses";

const Classes = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data[0].classes);
                setIsLoading(false);
                console.log(data[1]);
            })
    }, [])
    return (
        <div>
            {isLoading ? (
                <div className="lg:text-[150px] text-[30px] md:text-[140px] mt-48  flex items-center justify-center">L<span><img src="https://i.ibb.co/B23wWVn/images-removebg-preview.png" alt="" /></span>ading...</div>
            ) : (
                <div className="courses p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                    {courses.map(course => (
                        <AllClasses key={course.id} course={course} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default Classes;