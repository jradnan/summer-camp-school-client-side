import { useEffect, useState } from "react";
import AllInstructor from "./AllInstructor";

const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setAllInstructors(data[0].instructors);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className="lg:text-[150px] md:text-[140px] text-[30px] mt-48  flex items-center justify-center">L<span><img src="https://i.ibb.co/B23wWVn/images-removebg-preview.png" alt="" /></span>ading...</div>
            ) : (
                <div className="courses p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                    {allInstructors.map(instructor => (
                        <AllInstructor key={instructor.id} instructor={instructor} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Instructors;