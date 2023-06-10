import data from '../../../public/classes.json';
import SingleClasses from './SingleClasses';
const PopulerClasses = () => {
    const popularClasses = data[0].popularClasses;
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


