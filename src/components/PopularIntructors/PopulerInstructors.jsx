import data from '../../../public/intrsuctor.json'
import SingleInstructors from './singleInstructors';
const PopulerInstructors = () => {
    const popularInstructors = data[0].popularInstructors;
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