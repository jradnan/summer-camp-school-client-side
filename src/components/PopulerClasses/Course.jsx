
const Course = ({ course }) => {
    const { title, image } = course;
    console.log(course);
    return (
        <div>
            <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">{title}</p>
                    <button className="bg-[#000] mt-3 text-white rounded-2xl px-2 text-[14px] py-1">Free Preview & More Infos</button>
                </div>
            </div>
        </div>
    );
};

export default Course;