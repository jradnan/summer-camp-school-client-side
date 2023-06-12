import Instructor from "./Instructor";

const SingleInstructors = ({instructors}) => {
    return (
        <div>
             <div className="courses  p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                {
                    instructors.map(instructor => <Instructor key={instructor.id} instructor={instructor}></Instructor>)
                }
            </div>
        </div>
    );
};

export default SingleInstructors;