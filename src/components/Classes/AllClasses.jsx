
const AllClasses = ({course}) => {
    console.log(course);
    const { title, image, instructor, availableSeats, price } = course;

    return (
        <div>
            <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">{title}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Instructor: {instructor}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Seats: {availableSeats}</p>
                    <button className="bg-[#000] mt-3 text-white rounded-2xl px-2 text-[14px] py-1">Price: {price}</button>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;