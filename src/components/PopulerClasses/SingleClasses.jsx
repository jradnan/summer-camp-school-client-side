import Course from "./Course";

const SingleClasses = ({ classes }) => {
    return (
        <div>
            <div className="courses  p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                {
                    classes.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default SingleClasses;


