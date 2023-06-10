import { FaBeer, FaUserCircle } from 'react-icons/fa';

const Instructor = ({ instructor }) => {
    const { image, students, name } = instructor;
    console.log(instructor);
    return (
        <div>
            <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">{name}</p>
                    <div className="info ">
                        <button className=" mt-3 text-[14px] flex items-center  bg-black text-white px-3"> number of students: {students}

                           <div className='ml-3'> 
                           <FaUserCircle></FaUserCircle>
                           </div>

                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;