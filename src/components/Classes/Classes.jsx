import { useEffect } from "react";
import { useState } from "react";

const Classes = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data =>{
            setCourses(data[0].popularClasses);
        })
    },[])
    return (
        <div>
            <h1>gsdcuygadg</h1>
        </div>
    );
};

export default Classes;