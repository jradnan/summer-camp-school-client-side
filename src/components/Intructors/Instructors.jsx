import { useEffect, useState } from "react";
import AllInstructor from "./AllInstructor";

const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-hq5yhv074-afridimhrj10-gmailcom.vercel.app/instructors')
        .then(res => res.json())
        .then(data =>{
            setAllInstructors(data[0].instructors);
        })
    },[])

    console.log(allInstructors);
    return (
        <div>
           <div className="courses  p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                {
                    allInstructors.map(instructor => <AllInstructor key={instructor.id} instructor={instructor}></AllInstructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;